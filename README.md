# webpro_06

## このプログラムについて

## ファイル一覧
ファイル名 | 説明
-|-
app5.js | プログラム本体
public/janken.html | じゃんけんの開始画面
views/janken.ejs | じゃんけんのテンプレートファイル
public/uranai.html | 占いの開始画面
views/uranai.ejs | 占いのテンプレートファイル
public/gacha.html | ガチャの開始画面
views/gacha.ejs | ガチャのテンプレートファイル

## じゃんけんプログラム

```javascript
app.get("/janken", (req, res) => {
  let hand = req.query.hand;
  let win = Number( req.query.win ) || 0;//Numberのおかげ
  let total = Number( req.query.total ) || 0;
  console.log( {hand, win, total});
  const num = Math.floor( Math.random() * 3 + 1 );
  let cpu = '';
  if( num==1 ) cpu = 'グー';
  else if( num==2 ) cpu = 'チョキ';
  else cpu = 'パー';
  
  let judgement = '';
  if (hand == cpu) {
    judgement = '引き分け';
  } else if (
    (hand == 'グー' && cpu == 'チョキ') ||
    (hand == 'チョキ' && cpu == 'パー') ||
    (hand == 'パー' && cpu == 'グー')
  ) {
    judgement = '勝ち';
    win += 1;  
  } else {
    judgement = '負け';
  }
  total += 1;

  const display = { //表示する変数
    your: hand,
    cpu: cpu,
    judgement: judgement,
    win: win,
    total: total
  }
  res.render( 'janken', display );
});
```
## 使用方法
1. ```node app5.js```でプログラムを起動する
1. Webブラウザでlocalhost:8080/public/janken.htmlにアクセスする
1. 自分の手を入力する

```mermaid
flowchart TD;
start["開始"];
end["終了"]
1["コンピュータの手の決定"]
2{"じゃんけんの判定"}
3["結果を表示"]
win["勝ち：点数を追加"]
lose["負け：そのまま"]
draw["引き分け：そのまま"]

start --> 1
1 --> 2
2 -->|勝ち| win
win --> 3
2 -->|負け| lose
lose --> 3
2 -->|引き分け| draw
draw --> 3
3 --> end
```
## 占いプログラム

```javascript
app.get("/uranai", (req, res) => {
  const num = Math.floor( Math.random() * 12 + 1 );
  let uranai = '';
  if( num==1 ) uranai = 'おひつじ',item='ハンカチ';
  else if( num==2 ) uranai = 'おうし',item='トートバッグ';
  else if( num==3 ) uranai = 'ふたご',item='キーホルダー';
  else if( num==4 ) uranai = 'かに',item='ハサミ';
  else if( num==5 ) uranai = 'しし',item='スカーフ';
  else if( num==6 ) uranai = 'おとめ',item='リップクリーム';
  else if( num==7 ) uranai = '天秤',item='リュックサック';
  else if( num==8 ) uranai = 'さそり',item='鉛筆';
  else if( num==9 ) uranai = 'いて',item='ティッシュ';
  else if( num==10 ) uranai = 'やぎ',item='鈴';
  else if( num==11 ) uranai = 'みずがめ',item='水筒';
  else if( num==12 ) uranai = 'うお',item='折り畳み傘';

  res.render( 'uranai', {number:num, uranai:uranai,item:item} );
});
```

## 使用方法
1. ```node app5.js```でプログラムを起動する
1. Webブラウザでlocalhost:8080/public/uranai.htmlにアクセスする

## ガチャプログラム

```javascript
app.get("/gacha", (req, res) => {
  const num = Math.floor( Math.random() * 100 + 1 );
  let gacha = '';
  if( num==1 ) gacha = ' シークレット',star='★★★★★';
  else if( num==2 ) gacha = 'SSR',star='★★★★';
  else if( num==3 ) gacha = 'SSR',star='★★★★';
  else if( num==4 ) gacha = 'SSR',star='★★★★';
  else if( num==5 ) gacha = 'SSR',star='★★★★';
  else if( num==6 ) gacha = 'SR',star='★★★';
  else if( num==7 ) gacha = 'SR',star='★★★';
  else if( num==8 ) gacha = 'SR',star='★★★';
  else if( num==9 ) gacha = 'SR',star='★★★';
  else if( num==10 ) gacha = 'SR',star='★★★';
  else if( num==11 ) gacha = 'SR',star='★★★';
  else if( num==12 ) gacha = 'SR',star='★★★';
  else if( num==13 ) gacha = 'SR',star='★★★';
  else if( num==14 ) gacha = 'SR',star='★★★';
  else if( num==15 ) gacha = 'SR',star='★★★';
  else if( num==16 ) gacha = 'R',star='★★';
  else if( num==17 ) gacha = 'R',star='★★';
  else if( num==18 ) gacha = 'R',star='★★';
  else if( num==19 ) gacha = 'R',star='★★';
  else if( num==20 ) gacha = 'R',star='★★';
  else if( num==21 ) gacha = 'R',star='★★';
  else if( num==22 ) gacha = 'R',star='★★';
  else if( num==23 ) gacha = 'R',star='★★';
  else if( num==24 ) gacha = 'R',star='★★';
  else if( num==25 ) gacha = 'R',star='★★';
  else if( num==26 ) gacha = 'R',star='★★';
  else if( num==27 ) gacha = 'R',star='★★';
  else if( num==28 ) gacha = 'R',star='★★';
  else if( num==29 ) gacha = 'R',star='★★';
  else if( num==30 ) gacha = 'R',star='★★';
  else if( num==31 ) gacha = 'R',star='★★';
  else if( num==32 ) gacha = 'R',star='★★';
  else if( num==33 ) gacha = 'R',star='★★';
  else if( num==34 ) gacha = 'R',star='★★';
  else if( num==35 ) gacha = 'R',star='★★';
  else if( num==36 ) gacha = 'N',star='★';
  else if( num==37 ) gacha = 'N',star='★';
  else if( num==38 ) gacha = 'N',star='★';
  else if( num==39 ) gacha = 'N',star='★';
  else if( num==40 ) gacha = 'N',star='★';
  else if( num==41 ) gacha = 'N',star='★';
  else if( num==42 ) gacha = 'N',star='★';
  else if( num==43 ) gacha = 'N',star='★';
  else if( num==44 ) gacha = 'N',star='★';
  else if( num==45 ) gacha = 'N',star='★';
  else if( num==46 ) gacha = 'N',star='★';
  else if( num==47 ) gacha = 'N',star='★';
  else if( num==48 ) gacha = 'N',star='★';
  else if( num==49 ) gacha = 'N',star='★';
  else if( num==50 ) gacha = 'N',star='★';
  else if( num==51 ) gacha = 'N',star='★';
  else if( num==52 ) gacha = 'N',star='★';
  else if( num==53 ) gacha = 'N',star='★';
  else if( num==54 ) gacha = 'N',star='★';
  else if( num==55 ) gacha = 'N',star='★';
  else if( num==56 ) gacha = 'N',star='★';
  else if( num==57 ) gacha = 'N',star='★';
  else if( num==58 ) gacha = 'N',star='★';
  else if( num==59 ) gacha = 'N',star='★';
  else if( num==60 ) gacha = 'N',star='★';
  else if( num==61 ) gacha = 'N',star='★';
  else if( num==62 ) gacha = 'N',star='★';
  else if( num==63 ) gacha = 'N',star='★';
  else if( num==64 ) gacha = 'N',star='★';
  else if( num==65 ) gacha = 'N',star='★';
  else if( num==66 ) gacha = 'N',star='★';
  else if( num==67 ) gacha = 'N',star='★';
  else if( num==68 ) gacha = 'N',star='★';
  else if( num==69 ) gacha = 'N',star='★';
  else if( num==70 ) gacha = 'N',star='★';
  else if( num==71 ) gacha = 'N',star='★';
  else if( num==72 ) gacha = 'N',star='★';
  else if( num==73 ) gacha = 'N',star='★';
  else if( num==74 ) gacha = 'N',star='★';
  else if( num==75 ) gacha = 'N',star='★';
  else if( num==76 ) gacha = 'N',star='★';
  else if( num==77 ) gacha = 'N',star='★';
  else if( num==78 ) gacha = 'N',star='★';
  else if( num==79 ) gacha = 'N',star='★';
  else if( num==80 ) gacha = 'N',star='★';
  else if( num==81 ) gacha = 'N',star='★';
  else if( num==82 ) gacha = 'N',star='★';
  else if( num==83 ) gacha = 'N',star='★';
  else if( num==84 ) gacha = 'N',star='★';
  else if( num==85 ) gacha = 'N',star='★';
  else if( num==86 ) gacha = 'N',star='★';
  else if( num==87 ) gacha = 'N',star='★';
  else if( num==88 ) gacha = 'N',star='★';
  else if( num==89 ) gacha = 'N',star='★';
  else if( num==90 ) gacha = 'N',star='★';
  else if( num==91 ) gacha = 'N',star='★';
  else if( num==92 ) gacha = 'N',star='★';
  else if( num==93 ) gacha = 'N',star='★';
  else if( num==94 ) gacha = 'N',star='★';
  else if( num==95 ) gacha = 'N',star='★';
  else if( num==96 ) gacha = 'N',star='★';
  else if( num==97 ) gacha = 'N',star='★';
  else if( num==98 ) gacha = 'N',star='★';
  else if( num==99 ) gacha = 'N',star='★';
  else if( num==100 ) gacha = 'N',star='★';

  res.render( 'gacha', {number:num, gacha:gacha,star:star} );
});
```

## 使用方法
1. ```node app5.js```でプログラムを起動する
1. Webブラウザでlocalhost:8080/public/gacha.htmlにアクセスする
