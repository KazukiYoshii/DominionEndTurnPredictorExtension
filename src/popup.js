import 'babel-polyfill';
import * as tf from '@tensorflow/tfjs';

const MODEL_PATH = "https://raw.githubusercontent.com/KazukiYoshii/DominionEndTurnPredictorExtension/master/trained_model/model.json"
const CLASS_LABEL = {
  0: "Provinces, short game (~12T)",
  1: "Provinces, middle game (13T~16T)",
  2: "Provinces, long game (17T~)",
  3: "3-pile, short game (~12T)",
  4: "3-pile, middle game (13T~16T)",
  5: "3-pile, long game (17T~)"
}

async function clickCallback() {
  const tabId = await getTabId();
  endTurnPredictor.predict(tabId);
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('predictButton').addEventListener("click", clickCallback);
});

class EndTurnPredictor {
  constructor() {
    this.loadModel();
  }

  async loadModel() {
    console.log('Loading model...');
    try {
      this.model =
          await tf.loadGraphModel(MODEL_PATH);
      tf.tidy(() => {
        this.model.predict(
          {
            supply: tf.tensor([[
              0, 2, 38, 94, 166,
              224, 200, 231, 270, 334,
              361, 385, 422, 468, 472]], [1, 15], 'int32'),
            player_rates: tf.tensor([[60.0, 60.0]], [1, 2], 'float32')
          }
        );
      });
    } catch {
      console.error(
          `Unable to load model from URL: ${MODEL_PATH}`);
    }
  }

  async predict(tabId){
    if (!tabId) {
        console.error('No tab.  No prediction.');
        return;
    }
    if (this.model == undefined) {
      console.log('Waiting for model to load...');
      alert("wait model")
      setTimeout(() => {this.predict(tabId)}, 5000);
      return;
    }

    let predictBind = function(response) {
      if(chrome.runtime.lastError) {
        setTimeout(predictBind, 1000);
      } else {
        let predictions = this.model.predict(
          {
            supply: tf.tensor(response.supply, [1, 15], 'int32'),
            player_rates: tf.tensor(response.player_rates, [1, 2], 'float32')
          }
        ).array().then((predictions) => {
          this.showResult(predictions)
        })
      }
    }

    let message;
    message = {action: 'GET_SUPPLY_INFO'};
    chrome.tabs.sendMessage(tabId, message, predictBind.bind(this));
  }

  async getTopKClasses(logits, topK) {
    const {values, indices} = tf.topk(logits, topK, true);
    const valuesArr = await values.data();
    const indicesArr = await indices.data();
    console.log(`indicesArr ${indicesArr}`);
    const topClassesAndProbs = [];
    for (let i = 0; i < topK; i++) {
      topClassesAndProbs.push({
        className: CLASS_LABEL[indicesArr[i]],
        probability: valuesArr[i]
      })
    }
    return topClassesAndProbs;
  }

  async showResult(predictions){
    let predictionIndices = await this.getTopKClasses(predictions, 3)
    let resultString = "";
    for (let i = 0; i < predictionIndices.length; i++) {
      resultString = resultString + predictionIndices[i].className + ": " + predictionIndices[i].probability + "\n"
    }
    alert(resultString)
  }
}

async function getTabId() {
  const tabs = await chrome.tabs.query({active: true, currentWindow: true});
  return (tabs.length > 0) ? tabs[0].id : null;
}

const endTurnPredictor = new EndTurnPredictor();

