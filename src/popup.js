import 'babel-polyfill';
import * as tf from '@tensorflow/tfjs';

const MODEL_PATH = "trained_model/model.json"

async function clickCallback() {
  const tabId = await getTabId();
  endTurnPredictor.getFeatures(tabId);
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
    const startTime = performance.now();
    try {
      this.model =
          await tf.loadGraphModel(MODEL_PATH);
      // Warms up the model by causing intermediate tensor values
      // to be built and pushed to GPU.
      tf.tidy(() => {
        this.model.predict(
          {
            data: [
              "no_card", "no_card", "no_card", "no_card", "no_card",
              "no_card", "no_card", "no_card", "no_card", "no_card",
              "no_card", "no_card", "no_card", "no_card", "no_card"
            ],
            player_rates: [60.0, 60.0]
          }
        );
      });
      const totalTime = Math.floor(performance.now() - startTime);
      console.log(`Model loaded and initialized in ${totalTime} ms...`);
    } catch {
      console.error(
          `Unable to load model from URL: ${MODEL_PATH}`);
    }
  }

  async getFeatures(tabId){
    if (!tabId) {
        console.error('No tab.  No prediction.');
        return;
    }

    let message;
    message = {action: 'GET_SUPPLY_INFO'};
    chrome.tabs.sendMessage(tabId, message, function(response) {
        alert(response);
    });
  }
}

async function getTabId() {
  const tabs = await chrome.tabs.query({active: true, currentWindow: true});
  return (tabs.length > 0) ? tabs[0].id : null;
}

const endTurnPredictor = new EndTurnPredictor();

