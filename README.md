# DominionEndTurnPredictorExtension
[Dominion Online](https://dominion.games/)にて、サプライの情報、ユーザのレートの情報から、ゲームがどのくらいのターン数&条件(属州枯れ or 3山切れ)で終了するかを予測してくれるChrome拡張です。

## 導入方法
1. [リリースページ](https://github.com/KazukiYoshii/DominionEndTurnPredictorExtension/releases)から、最新のコードのzipをダウンロードする。
2. 1.でダウンロードしたzipファイルを解凍する。
3. Chromeを開きURLに「chrome://extensions」と入力する。
4. ページ右上にある「デベロッパーモード」のトグルをONにする。
5. ページ左上にある「パッケージ化されていない拡張機能を読み込む」ボタンを選択し、2.で解凍したファイル内の「dist」ファイルを指定する。
6. インストールされた拡張機能をタスクバーにピン留めする。[参考ページ](https://miyalog.org/lifehuck/chrome-add/)

## 使い方
※2人戦限定です。
※本機能は日本語設定したサイトでのみ動作確認をしています。その他の言語の動作は保証できません。

1. ドミニオンのゲーム画面右上の「王国一覧」を選択する。
2. ピン留めされた拡張アイコンをクリックし、表示された「predict」ボタンをクリックする。
  - 「wait model」の表示がされたら、数秒待ってから再度ボタンをクリックしてください。
  - レート戦の場合はお互いのレートを、練習戦の場合はお互いのプレイヤーのレートを60.0と仮定して予測します。
3. 予測結果が表示されます。
  - 初めに終了条件が表示されます。以下のいずれかです。
    - Provinces: 属州, もしくは植民地が枯れてゲーム終了と予測しています。
    - 3-piles: ３山切れでゲーム終了と予測しています。
  - 次に予測終了ターンが表示されます。以下のいずれかです。
    - short game (~12T): 12ターン以内に終了すると予測しています。
    - middle game (13T~16T): 13ターンから16ターンの間に終了すると予測しています。
    - long game (17T~): 17ターン以上かかって終了すると予測しています。
  - 予測結果は上位3位まで表示されます。
    - 予測結果の下にある数字は、その通りにゲームが終了する予測確率を表しています。例えば、0.55と表示されていれば、55%でその通りゲームが終了すると予測したことを表します。

## 免責事項
本拡張は個人作成された非公式のものです。  
本拡張を利用して被った不利益は一切保証できません。  
自己責任での利用をお願いいたします。