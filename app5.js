const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));

app.get("/hello1", (req, res) => {
  const message1 = "Hello world";
  const message2 = "Bon jour";
  res.render('show', { greet1:message1, greet2:message2});
});

app.get("/hello2", (req, res) => {
  res.render('show', { greet1:"Hello world", greet2:"Bon jour"});
});

app.get("/icon", (req, res) => {
  res.render('icon', { filename:"./public/Apple_logo_black.svg", alt:"Apple Logo"});
});

app.get("/luck", (req, res) => {
  const num = Math.floor( Math.random() * 6 + 1 );
  let luck = '';
  if( num==1 ) luck = '大吉';
  else if( num==2 ) luck = '中吉';
  else if( num==3 ) luck = '吉';
  else if( num==4 ) luck = '小吉';
  else if( num==5 ) luck = '末吉';
  else if( num==6 ) luck = '凶';
  console.log( 'あなたの運勢は' + luck + 'です' );
  res.render( 'luck', {number:num, luck:luck} );
});

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

app.get("/　", (req, res) => {
  let ;
  let ;
  const card = Math.floor( Math.random() * 13 + 1 );
  const cpu = Math.floor( Math.random() * 13 + 1 );
  let judgement = '';
  if (card == cpu) {
    judgement = 'low';
  } else if (card >= cpu ) {
    judgement = 'high';
  } else {
    judgement = 'low';
  }

});

const station2 = [
  { id: 1, code: 'JE01', name: '東京', change: '山手線・中央線', distance: '0.0km' },
  { id: 2, code: 'JE02', name: '八丁堀', change: '日比谷線', distance: '1.3km' },
  { id: 3, code: 'JE03', name: '越中島', change: 'なし', distance: '2.0km' },
  { id: 4, code: 'JE04', name: '潮見', change: 'なし', distance: '3.9km' }
];

app.get("/keiyo2", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('keiyo2', {data: station2} );
});
app.get("/keiyo2/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = station2[ number ];
  res.render('keiyo2_detail', {data: detail} );
});

const movies = [
  {
    id: 1,
    title: "ズートピア2",
    genre: "アニメ／冒険",
    duration: "108分",
    rating: "G",
    showInfo: "吹替上映あり",
    price: 1900
  },
  {
    id: 2,
    title: "果てしなきスカーレット",
    genre: "ドラマ／アニメ",
    duration: "111分",
    rating: "PG12",
    showInfo: "通常上映",
    price: 1800
  },
  {
    id: 3,
    title: "劇場版 呪術廻戦「渋谷事変」×「死滅回游」",
    genre: "アクション／アニメ",
    duration: "88分",
    rating: "PG12",
    showInfo: "先行上映",
    price: 2000
  },
  {
    id: 4,
    title: "劇場版『チェンソーマン レゼ篇』",
    genre: "アクション／アニメ",
    duration: "100分",
    rating: "PG12",
    showInfo: "通常上映",
    price: 2000
  },
  {
    id: 5,
    title: "国宝",
    genre: "ドラマ",
    duration: "175分",
    rating: "PG12",
    showInfo: "通常上映",
    price: 1800
  }
];


app.get("/movies", (req, res) => {
  res.render("movie_list", { data: movies });
});


app.get("/movies/:number", (req, res) => {
  const number = req.params.number;
  const detail = movies[number];
  res.render("movie_detail", { data: detail });
});

const menu = [
  { id: 1, floor: "1F", category: "定食", name: "レモンペッパーチキン", price: 350 },
  { id: 2, floor: "1F", category: "定食", name: "チキンカツチーズ焼", price: 350 },
  { id: 3, floor: "1F", category: "グルメ", name: "味噌バターラーメン", price: 400 },
  { id: 4, floor: "2F", category: "丼", name: "ステーキ豚丼", price: 400 },
  { id: 5, floor: "2F", category: "カレー", name: "ミルクビーフカレー", price: 400 },
  { id: 6, floor: "2F", category: "パスタ", name: "温玉ミートソース", price: 350 }
];

const openInfo = {
  "1F": "8:30〜20:00（L.O 19:30）",
  "2F": "10:00〜14:00（土日休業）"
};

app.get("/cafeteria", (req, res) => {
  res.render("menu_list", { data: menu, info: openInfo });
});

app.get("/cafeteria/:number", (req, res) => {
  const number = req.params.number;
  const detail = menu[number];
  res.render("menu_detail", { data: detail, info: openInfo });
});

app.get("/api/cafeteria", (req, res) => res.json(menu));

app.get("/api/cafeteria/:id", (req, res) => {
  const item = menu.find(m => m.id == req.params.id);
  res.json(item);
});

app.post("/api/cafeteria", (req, res) => {
  const newItem = {
    id: menu.length + 1,
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
    location: req.body.location
  };
  menu.push(newItem);
  res.json(newItem);
});

app.put("/api/cafeteria/:id", (req, res) => {
  const item = menu.find(m => m.id == req.params.id);
  Object.assign(item, req.body);
  res.json(item);
});

app.delete("/api/cafeteria/:id", (req, res) => {
  menu = menu.filter(m => m.id != req.params.id);
  res.json({ status: "deleted" });
});

const book = [
  { id: 1,  no: 112, title: "明解 線形代数（改訂版）", publisher: "培風館", price: "未定" },
  { id: 2,  no: 243, title: "ビジュアル情報処理", publisher: "画像情報教育振興会", price: "3190円" },
  { id: 3,  no: 244, title: "これならわかる確率・統計セミナー", publisher: "学術図書出版", price: "1600円" },
  { id: 4,  no: 400, title: "u-CAT: eラーニングによる新テスト対応 TOEIC L&R Test", publisher: "朝日出版社", price: "2970円" },
  { id: 5,  no: 401, title: "一歩上を目指す TOEIC L&R TEST Level2", publisher: "朝日出版社", price: "2090円" },
  { id: 6,  no: 402, title: "TOEIC L&R テスト 文法項目別トレーニング", publisher: "松柏社", price: "2090円" },

  { id: 7,  no: 403, title: "English Skill Builder Grammar", publisher: "ECC", price: "1100円" },
  { id: 8,  no: 404, title: "English Skill Builder Reading", publisher: "ECC", price: "2200円" },
  { id: 9,  no: 405, title: "Challenger β1", publisher: "ECC", price: "3960円" },
  { id:10,  no: 406, title: "キクタンTOEIC L&Rテスト SCORE 800", publisher: "アルク", price: "1600円" },
  { id:11,  no: 407, title: "Science Alive「知って得する日常の科学」", publisher: "成美堂", price: "2200円" },
  { id:12,  no: 408, title: "音読で学ぶ基礎英語（サイエンス編）", publisher: "成美堂", price: "2750円" },
  { id:13,  no: 410, title: "Enjoy English with Charlie Brown and Friends", publisher: "南雲堂", price: "2530円" },
  { id:14,  no: 420, title: "English Ace", publisher: "成美堂", price: "2200円" },
  { id:15,  no: 423, title: "Let's Write & Learn English!", publisher: "成美堂", price: "2530円" },
  { id:16,  no: 427, title: "Speaking Steps 英語を話すための3ステップ", publisher: "金星堂", price: "2200円" },
  { id:17,  no: 428, title: "Reflect 3: Reading & Writing", publisher: "National Geographic Learning", price: "3938円" },
  { id:18,  no: 429, title: "SNOOPY'S World of English スヌーピーと覚える日常表現", publisher: "朝日出版社", price: "1870円" },
  { id:19,  no: 433, title: "Key Strategies for Success on the TOEIC L&R Test", publisher: "朝日出版社", price: "2090円" },
  { id:20,  no: 434, title: "VOAで学ぶ最先端技術とPBL基礎演習", publisher: "成美堂", price: "2530円" },
  { id:21,  no: 440, title: "Easy Writing Output", publisher: "金星堂", price: "2090円" },
  { id:22,  no: 442, title: "Stories of the World We Live In", publisher: "金星堂", price: "2640円" },
  { id:23,  no: 443, title: "改訂版 英語で書く力", publisher: "三修社", price: "2640円" },
  { id:24,  no: 445, title: "Global Perspectives Listening & Speaking Book 1", publisher: "成美堂", price: "2750円" },
  { id:25,  no: 502, title: "新版 環境の科学（第3版）", publisher: "三共出版", price: "2200円" },
  { id:26,  no: 503, title: "科学と技術のあゆみ", publisher: "ムイスリ出版", price: "2350円" },
  { id:27,  no: 504, title: "憲法についての素朴な疑問", publisher: "一藝社", price: "2100円" },
  { id:28,  no: 505, title: "教育原理", publisher: "学文社", price: "2100円" },
  { id:29,  no: 506, title: "教育の方法・技術とICT", publisher: "学文社", price: "2100円" }
];


app.get("/book1", (req, res) => {
  res.render("book1", { data: book });
});

app.get("/book1/:number", (req, res) => {
  const number = req.params.number;
  const detail = book[number];
  res.render("book2", { data: detail });
});

app.get("/api/books", (req, res) => {
  res.json(book);
});

app.get("/api/books/:id", (req, res) => {
  const item = book.find(b => b.id == req.params.id);
  if (!item) return res.status(404).json({ error: "Not found" });
  res.json(item);
});

app.post("/api/books", (req, res) => {
  const newBook = {
    id: book.length + 1,
    no: req.body.no,
    title: req.body.title,
    publisher: req.body.publisher,
    price: req.body.price
  };
  book.push(newBook);
  res.json({ status: "added", data: newBook });
});

app.put("/api/books/:id", (req, res) => {
  const item = book.find(b => b.id == req.params.id);
  if (!item) return res.status(404).json({ error: "Not found" });

  item.no = req.body.no;
  item.title = req.body.title;
  item.publisher = req.body.publisher;
  item.price = req.body.price;

  res.json({ status: "updated", data: item });
});

app.delete("/api/books/:id", (req, res) => {
  const index = book.findIndex(b => b.id == req.params.id);
  if (index === -1) return res.status(404).json({ error: "Not found" });

  const removed = book.splice(index, 1);
  res.json({ status: "deleted", data: removed[0] });
});


app.listen(8080, () => console.log("Example app listening on port 8080!"));
