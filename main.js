const config = {
  type: Phaser.AUTO,
  backgroundColor: "#f5f5f5",

  scale:{
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 800,
    height: 600
  },
  scene: { preload, create }
};

new Phaser.Game(config);

// =====================
// 札1〜40の説明文（ここを書き換える）
// =====================
const cardDescriptions = {
  1: "カルスト台地(秋吉台)\n ---山口県中西部に位置する日本最大規模のカルスト地形。",
  2: "秋芳洞入口\n---温度は四季を通じて17℃と一定で、夏は涼しく冬は温かく快適に観光が可能。",
  3: "山焼き(秋吉台)\n---伸びた雑草を燃やし、草原の維持、森林化防止の為に行われている。",
  4: "百枚皿(秋芳洞)\n---洞内にあり、段丘の中腹から流れ出る水が、波紋の形に固まったもの。",
  5: "黄金柱(秋芳洞)\n---天井から流れ出た地下水に含まれる石灰分が岩肌に沈着し、結晶してできた。",
  6: "養鱒場釣り堀(別府弁天池)\n---別府弁天池のすぐそばにある釣り堀。釣った鱒はお食事処で調理してもらえる。",
  7: "別府弁天池\n---日本名水百選に選ばれた池。エメラルドの宝石のような美しく神秘的な色合いが特徴。",
  8: "サイクリング(秋吉台)\n---秋吉台はサイクリストの聖地。秋吉台の中心を走るカルストロードからの眺めは絶景。",
  9: "ホワイトタイガー（サファリランド）\n---日本で初めてホワイトタイガーを飼育したサファリランド。",
  10: "エサやりバス（サファリランド）\n---バスの中から、ライオンやシマウマなどの動物たちに餌をあげることができる。",
  11: "美祢市ランタンナイトウィーク\n---毎年２月～３月にかけての１週間開催され、出店やスカイランタンなどが行われる。",
  12: "秋芳梨\n---二十世紀梨。甘味と酸味のバランスが良く、みずみずしくシャリッとした食感が楽しめる。",
  13: "みね桜まつり\n---美祢市役所横の厚狭川河川敷には約150本の桜が咲き、開花期間中はライトアップされる。",
  14: "美東ごぼう\n---美東町の赤郷地区でのみ栽培。やわらかく香りや風味が強い。",
  15: "道の駅おふく\n---地酒や限定販売の秋芳の梨カステラなど、お土産のラインナップが美祢一豊富に揃っている。",
  16: "ランタンを通じた交流\n---美祢ランタンナイトフェスティバルは、美祢市と台湾の交流を目的として開催されている。",
  17: "白糸の滝\n---厚東川の上流にあり、水が岩肌を白糸のように流れるところからこの名が付けられた。",
  18: "美祢アクティビティ\n---東南アジアで使用される３輪バイク。カルストロードや別府弁天池へドライブに行ける。",
  19: "秋吉台オートキャンプ場\n---静かで空気のきれいなキャンプ場。満天の星空も見れ、施設内の温泉に入ることもできる。",
  20: "秋芳梨ソフトクリーム\n---カルスト台地の特殊な土壌で育った梨を使ったソフトクリーム。",
  21: "九份\n---映画『悲情城市』の舞台として有名。芋圓や地元グルメを楽しめ、茶屋からの眺めも格別。",
  22: "台北１０１\n---高さ508m、地上101階。展望台やレストラン、ショッピングモールも充実している。",
  23: "夜市\n---食べ物や雑貨の屋台が並び、様々なエンターテイメントが楽しめる場所。\n士林夜市や寧夏夜市が有名。",
  24: "南投県水里郷との交流\n---2011年「友好交流の確認書」を締結した。学生同士の交流や市民団の派遣が行われている。",
  25: "高美湿地\n---台中市の海沿いに広がる湿地帯。「台湾のウユニ塩湖」と呼ばれ、水面が鏡のようになる。",
  26: "宮原眼科\n---日本人が開いた眼科のリノベーションスポット。お土産やアイスクリームを楽しめる。",
  27: "国立故宮博物院\n---世界4大博物館の一つで、中国芸術文化の研究保存の要所。\n「翠玉白菜」,「肉形石」は特に有名。",
  28: "美麗島駅\n---台湾高雄市の地下鉄駅。4500枚のステンドグラスを使用した「光のドーム」が幻想的である。",
  29: "日月潭\n---台湾最大の淡水湖で、湖の形が太陽と月の形に見えることがこの名前の由来である。",
  30: "中正紀念堂\n---蒋介石の功績を称えて建設された。台湾国旗のメインカラーである青と白が使われている。",
  31: "龍山寺\n---1738年に創建されたお寺。ご利益は恋愛、仕事や学業、健康などと多様。\n台湾式おみくじを体験することができる。",
  32: "野柳地質公園\n---新北市にある地質公園で、秋吉台と同様に「ジオパーク」の一つ。\n「クイーンズヘッド」のモニュメントが友好の印として美祢市に寄贈された。",
  33: "台湾かき氷\n---台湾かき氷は、削った氷の上に様々なトッピングをするのが基本スタイル。\nお店によって違ったかき氷を楽しむことができる。",
  34: "タピオカミルクティー\n---もちもちとしたタピオカと、香り豊かなミルクティーの組み合わせが世界中で愛されている。",
  35: "小籠包\n---豚のひき肉を薄い小麦粉の粉で包んでセイロと呼ばれる蒸し器で蒸した料理。\n包まれているスープと具を楽しめる。",
  36: "牛肉麺\n---スパイスで柔らかく煮込んだ牛肉と、もちもちした小麦麺を組み合わせた麺料理。",
  37: "ルーローハン\n---細切りにした豚肉を醤油・砂糖・酒・酢・生姜・八角などを使い煮込んだ料理。\nお店や地域によって味が異なる。",
  38: "豆花（トウファー）\n---豆花は、台湾などで親しまれている、豆乳を使った柔らかい豆腐のようなデザート。\nタピオカなどトッピングが豊富。",
  39: "パイナップルケーキ\n---甘くてしっとりとしたパイナップルの餡を、サクサクとしたバター生地で包んだお菓子。",
  40: "美祢市台北観光・交流事務所\n---事務所を拠点として、台湾のニーズを把握し、美祢市の魅力を発信している。\n台湾から美祢市への観光客拡大を目指している。"
};

function preload() {
  this.load.image("titleBg", "assets/title_bg.png");

  for (let i = 1; i <= 40; i++) {
    this.load.image(`card${i}`, `assets/cards/${i}.png`);
    this.load.audio(`voice${i}`, `assets/sounds/${i}.wav`);
  }

  this.load.audio("wrong.mp3", "assets/wrong.mp3");
  this.load.audio("correct.wav", "assets/correct.wav");
}

function create() {
  showTitle.call(this);
}

// =====================
// タイトル＋難易度選択
// =====================
function showTitle() {
  this.children.removeAll();

  this.add.image(400, 300, "titleBg").setDepth(100);

  this.add.text(400, 150, "美祢×台湾かるたゲーム", {
    fontSize: "36px",
    color: "#ffffff"
  }).setOrigin(0.5).setDepth(101);

  const levels = [
    { text: "かんたん", time: 12000 },
    { text: "ふつう", time: 9000 },
    { text: "むずかしい", time: 7000 },
     { text: "めいじん", time: 6000 }
  ];

  levels.forEach((lvl, i) => {
    const btn = this.add.text(400, 260 + i * 70, lvl.text, {
      fontSize: "22px",
      backgroundColor: "#ffffff",
      color: "#000",
      padding: { x: 20, y: 10 }
    }).setOrigin(0.5).setInteractive().setDepth(101);

    btn.on("pointerdown", () => {
      this.cpuTime = lvl.time;
      this.children.removeAll();
      startGame.call(this);
    });
  });
}

// =====================
// ゲーム開始
// =====================
function startGame() {
  this.usedCount = 0;
  this.playerScore = 0;
  this.cpuScore = 0;
  this.isWaiting = false;

  this.wrongSound = this.sound.add("wrong.mp3");
  this.correctSound = this.sound.add("correct.wav");

  this.scoreText = this.add.text(20, 20,
    "あなた: 0　CPU: 0",
    { fontSize: "20px", color: "#000" }
  );

  this.cards = [];
  const cols = 8;
  const rows = 5;
  const w = 80;
  const h = 100;
  const startX = (800 - cols * w) / 2 + w / 2;
  const startY = 80;

  let id = 1;
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const card = this.add.image(
        startX + x * w,
        startY + y * h,
        `card${id}`
      ).setDisplaySize(w - 6, h - 6).setInteractive();

      card.cardId = id;
      card.isTaken = false;

      card.on("pointerdown", () => {
        if (this.isWaiting || card.isTaken) return;
        if (card !== this.correctCard) {
          this.wrongSound.play();
          return;
        }
        handleCorrect.call(this, card, "player");
      });

      this.cards.push(card);
      id++;
    }
  }

  // 説明文エリア
  this.descArea = this.add.rectangle(400, 465, 700, 140, 0xffffff)
    .setDepth(1000).setVisible(false);

  this.descText = this.add.text(400, 455, "", {
    fontSize: "16px",
    color: "#000",
    wordWrap: { width: 660 },
    align: "left",
    lineSpacing: 6
  })
  .setOrigin(0.5, 0).setDepth(1001).setVisible(false).setInteractive(new Phaser.Geom.Rectangle(-330, 0, 660, 300), Phaser.Geom.Rectangle.Contains);

  //マスクを作る（説明エリア内だけ見えるようにする）
    const maskShape = this.make.graphics();
    maskShape.fillRect(50, 410, 700,120);
    const mask = maskShape.createGeometryMask();
    this.descText.setMask(mask);
    

  //スクロール用変数
  this.descMinY = 455;
  this.descMaxY = 455;
  this.isDraggingText = false;
  this.startDragY = 0;

  //ホイール（PC）
  this.input.on("wheel", (pointer, gameObjects, dx, dy) => {
    if(!this.descArea.visible) return;

    this.descText.y -= dy*0.5;

    if(this.descText.y < this.descMaxY) this.descText.y = this.descMaxY
    if(this.descText.y > this.descMinY) this.descText.y = this.descMinY
  });

  //指スクロール（スマホ）
  this.input.on("pointerdown", (pointer) => {
    if(!this.descArea.visible) return;
    this.isDraggingText = true;
    this.statDragY = pointer.y;
  });

  this.input.on("pointerup",() =>{
    this.isDraggingText = false;
  });

  this.input.on("pointermove", (pointer) =>{
    if(!this.isDraggingText || !this.descArea.visible) return;

    const delta = pointer.y - this.startDragY;
    this.descText.y += delta;
    this.startDragY = pointer.y;

    if(this.descText.y < this.descMinY) this.descText.y = this.descMinY;
    if(this.descText.y > this.descMaxY) this.descText.y = this.descMaxY;
  });


  this.nextBtn = this.add.text(400, 540, "次へ", {
    fontSize: "22px",
    backgroundColor: "#ffffff",
    color: "#000",
    padding: { x: 20, y: 10 }
  }).setOrigin(0.5).setDepth(1001).setInteractive().setVisible(false);

  this.nextBtn.on("pointerdown", () => nextRound.call(this));

  nextRound.call(this);
}

// =====================
// 次の札
// =====================
function nextRound() {

  if(!this.descArea) return;

  if (this.usedCount >= 40) {
    showResult.call(this);
    return;
  }

  this.isWaiting = false;
  this.descArea.setVisible(false);
  this.descText.setVisible(false);
  this.nextBtn.setVisible(false);

  const remaining = this.cards.filter(c => !c.isTaken);
  this.correctCard = Phaser.Utils.Array.GetRandom(remaining);

  this.sound.play(`voice${this.correctCard.cardId}`);

  this.cpuTimer = this.time.delayedCall(this.cpuTime, () => {
    if (!this.isWaiting) {
      handleCorrect.call(this, this.correctCard, "cpu");
    }
  });
}

// =====================
// 正解処理（★ここ修正）
// =====================
function handleCorrect(card, who) {
  this.isWaiting = true;
  if (this.cpuTimer) this.cpuTimer.remove();

  card.isTaken = true;
  card.setAlpha(0.3);
  this.usedCount++;

  // ★プレイヤーのみピンポン
  if (who === "player") {
    this.correctSound.play();
  }

  if (who === "player") this.playerScore++;
  else this.cpuScore++;

  this.scoreText.setText(
    `あなた: ${this.playerScore}　CPU: ${this.cpuScore}`
  );

  const bigCard = this.add.image(400, 260, `card${card.cardId}`)
    .setDisplaySize(220, 280)
    .setDepth(1000);

  this.descArea.setVisible(true);
  this.descText.setText(cardDescriptions[card.cardId]);
  this.descText.y = 448;

  //テキストの高さからスクロール範囲を計算
  const overflow = Math.max(0, this.descText.height - 140);
  this.descMinY = 448 - overflow;
  this.descMaxY = 448;
  this.descText.setVisible(true);
  this.nextBtn.setVisible(true);

  this.nextBtn.once("pointerdown", () => {
    bigCard.destroy();
  });
}

// =====================
// 結果画面
// =====================
function showResult() {
  this.children.removeAll();

  let result = "引き分け！";
  if (this.playerScore > this.cpuScore) result = "あなたの勝ち！";
  if (this.playerScore < this.cpuScore) result = "CPUの勝ち・・・";

  this.add.rectangle(400, 300, 800, 600, 0x000000).setAlpha(0.6);

  this.add.text(400, 220,
    `結果\nあなた: ${this.playerScore}\nCPU: ${this.cpuScore}\n${result}`,
    { fontSize: "28px", color: "#ffffff", align: "center" }
  ).setOrigin(0.5);

  const retry = this.add.text(400, 380, "タイトルに戻る", {
    fontSize: "22px",
    backgroundColor: "#ffffff",
    color: "#000",
    padding: { x: 20, y: 10 }
  }).setOrigin(0.5).setInteractive();

  retry.on("pointerdown", () => showTitle.call(this));
}
