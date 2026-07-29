const store = {
  name: "大衆酒場ひので",
  romanized: "Taishu Sakaba Hinode",
  address: "東京都世田谷区太子堂２丁目29-5 平和ビル",
  phone: "03-6450-9394",
  maps: "https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E8%A1%86%E9%85%92%E5%A0%B4%E3%81%B2%E3%81%AE%E3%81%A7%20%E4%B8%89%E8%BB%92%E8%8C%B6%E5%B1%8B",
  reserve: "https://www.hotpepper.jp/strJ003850503/",
  website: "https://taisyuusakabahinode.owst.jp/",
  instagram: "https://www.instagram.com/hinode_sancha/"
};

const hours = [
  ["月・水・木", "17:00〜翌1:00", "料理 24:00／ドリンク 24:30"],
  ["金・土・日・祝日・祝前日", "17:00〜翌5:00", "料理 翌4:00／ドリンク 翌4:30"],
  ["定休日", "火曜日", ""]
];

const menu = [
  ["1時間単品飲み放題", "980円（税込）", "1時間ごとの延長制。料理を1人1品以上注文。ビール類は単品注文、15分前ラストオーダー。"],
  ["壱岐牛ハンバーグ", "", "壱岐牛を100%使用した肉料理。"],
  ["もも", "600円（税込）", "アラカルトの鶏料理。"],
  ["飲み放題付きコース", "5,000円（税込）", "2.5時間飲み放題付き。仕入れにより料理内容が変わります。"]
];

const jpKeywords = [
  "大衆酒場ひので","大衆酒場ひので 三軒茶屋","ひので 三軒茶屋","ひので 居酒屋","ひので 太子堂","タイシュウサカバヒノデ","三軒茶屋 居酒屋","三軒茶屋 大衆酒場","三軒茶屋 飲み放題","三軒茶屋 980円 飲み放題","三軒茶屋 単品飲み放題","三軒茶屋 深夜営業","三軒茶屋 朝まで","三軒茶屋 翌朝5時","三軒茶屋 金曜 深夜","三軒茶屋 土曜 深夜","三軒茶屋 日曜 深夜","三軒茶屋 祝日 居酒屋","三軒茶屋 宴会","三軒茶屋 飲み会","三軒茶屋 二次会","三軒茶屋 三次会","三軒茶屋 予約","三軒茶屋 ネット予約","三軒茶屋 当日予約","三軒茶屋 肉料理","三軒茶屋 創作料理","三軒茶屋 鶏料理","三軒茶屋 ハンバーグ","三軒茶屋 壱岐牛","三軒茶屋 サワー","三軒茶屋 ハイボール","三軒茶屋 焼酎","三軒茶屋 日本酒","三軒茶屋 ホッピー","三軒茶屋 カウンター","三軒茶屋 座敷","三軒茶屋 貸切","三軒茶屋 15名 宴会","三軒茶屋 20名 宴会","三軒茶屋 加熱式たばこ","三軒茶屋 喫煙 居酒屋","太子堂 居酒屋","太子堂 大衆酒場","太子堂 飲み放題","太子堂 深夜営業","太子堂 宴会","太子堂 肉料理","太子堂 鶏料理","太子堂 予約","太子堂二丁目 居酒屋","三軒茶屋駅 居酒屋","三軒茶屋駅 飲み放題","三軒茶屋駅 深夜営業","三軒茶屋駅 朝まで","三軒茶屋駅 宴会","三軒茶屋駅 肉料理","三軒茶屋駅 徒歩6分","三軒茶屋駅 北口B 居酒屋","東急田園都市線 居酒屋","東急世田谷線 居酒屋","西太子堂 居酒屋","西太子堂 飲み放題","若林 居酒屋","若林 飲み放題","茶沢通り 居酒屋","世田谷区 居酒屋","世田谷区 大衆酒場","世田谷区 飲み放題","世田谷区 深夜営業","世田谷 居酒屋 宴会","池尻大橋 居酒屋","池尻大橋 飲み放題","下北沢 居酒屋","下北沢 飲み放題","駒沢大学 居酒屋","駒沢大学 飲み放題","渋谷近郊 居酒屋","田園都市線 飲み放題","世田谷線 飲み放題","980円 飲み放題 東京","1時間 飲み放題 三軒茶屋","飲み放題 延長 三軒茶屋","単品飲み放題 980円","深夜 居酒屋 世田谷","朝5時 居酒屋 東京","週末 深夜 居酒屋","金土日 朝まで 居酒屋","火曜定休 居酒屋 三軒茶屋","壱岐牛 ハンバーグ 東京","壱岐牛 居酒屋","肉料理 居酒屋 三軒茶屋","創作料理 居酒屋 三軒茶屋","鶏料理 宴会 三軒茶屋","大衆居酒屋 太子堂","レトロ居酒屋 三軒茶屋","三階建て 居酒屋","一軒家 居酒屋 三軒茶屋","カウンター 居酒屋 太子堂","座敷 宴会 三軒茶屋","フロア貸切 三軒茶屋","15人 貸切 三軒茶屋","20人 宴会 三軒茶屋","団体予約 三軒茶屋","会社宴会 三軒茶屋","歓送迎会 三軒茶屋","誕生日プレート 三軒茶屋","記念日プレート 三軒茶屋","サプライズ 居酒屋 三軒茶屋","飲み放題 コース 三軒茶屋","2.5時間 飲み放題 三軒茶屋","5000円 コース 三軒茶屋","当日 飲み放題 三軒茶屋","一人飲み 三軒茶屋","カウンター 一人飲み 三軒茶屋","仕事帰り 居酒屋 三軒茶屋","二軒目 三軒茶屋","はしご酒 三軒茶屋","遅い時間 居酒屋 三軒茶屋","終電後 居酒屋 三軒茶屋","金曜 朝まで 三軒茶屋","土曜 朝まで 三軒茶屋","日曜 朝まで 三軒茶屋","祝前日 朝まで 三軒茶屋","月曜 居酒屋 三軒茶屋","水曜 居酒屋 三軒茶屋","木曜 居酒屋 三軒茶屋","金曜 居酒屋 三軒茶屋","土曜 居酒屋 三軒茶屋","日曜 居酒屋 三軒茶屋","三軒茶屋 夜ごはん","三軒茶屋 ディナー","太子堂 夜ごはん","太子堂 ディナー","サワー 飲み放題 三軒茶屋","お茶割り 飲み放題 三軒茶屋","ホッピー 飲み放題 三軒茶屋","焼酎 飲み放題 三軒茶屋","角ハイボール 三軒茶屋","コークハイ 三軒茶屋","ジンジャーハイボール 三軒茶屋","メガサイズ ドリンク 三軒茶屋","日本酒 居酒屋 三軒茶屋","ワイン 居酒屋 三軒茶屋","壱岐牛コロッケ 三軒茶屋","ハンバーグ 居酒屋 三軒茶屋","もも焼き 三軒茶屋","大衆メニュー 三軒茶屋","アラカルト 三軒茶屋","料理1品 飲み放題","グラス交換制 飲み放題","飲み放題 ラストオーダー","お通し 居酒屋 三軒茶屋","クレジットカード 居酒屋 三軒茶屋","PayPay 居酒屋 三軒茶屋","電子マネー 居酒屋 三軒茶屋","Suica 居酒屋 三軒茶屋","三軒茶屋駅 北口B","平和ビル 太子堂","太子堂 29-5 居酒屋","大衆酒場ひので 住所","大衆酒場ひので 電話","大衆酒場ひので 営業時間","大衆酒場ひので 定休日","大衆酒場ひので 予約","大衆酒場ひので メニュー","大衆酒場ひので 飲み放題","大衆酒場ひので 980円","大衆酒場ひので 壱岐牛","大衆酒場ひので ハンバーグ","大衆酒場ひので コース","大衆酒場ひので Instagram","大衆酒場ひので 地図","大衆酒場ひので アクセス","大衆酒場ひので 電子タバコ","大衆酒場ひので 貸切","大衆酒場ひので 座敷","大衆酒場ひので カウンター","大衆酒場ひので 深夜","大衆酒場ひので 朝5時","大衆酒場ひので 金土日","大衆酒場ひので 火曜定休","三茶 居酒屋","三茶 飲み放題","三茶 深夜営業","三茶 朝まで 居酒屋","三茶 大衆酒場","三茶 宴会","三茶 肉料理","三茶 予約","三茶 二次会","三茶 一人飲み"
];

const enKeywords = [
  "Taishu Sakaba Hinode","TaishuIzakaya Hinode","Hinode Sangenjaya","Hinode izakaya","Hinode Tokyo","Hinode Taishido","Sangenjaya izakaya","Sangenjaya Japanese pub","Sangenjaya restaurant","Sangenjaya nightlife","Sangenjaya late night dining","Sangenjaya late night izakaya","Sangenjaya open until 5am","Sangenjaya weekend dining","Sangenjaya Friday night","Sangenjaya Saturday night","Sangenjaya Sunday night","Sangenjaya holiday dining","Sangenjaya all you can drink","Sangenjaya nomihodai","980 yen all you can drink","Tokyo 980 yen nomihodai","one hour all you can drink","Sangenjaya drink plan","Sangenjaya dinner","Sangenjaya meat dishes","Sangenjaya creative cuisine","Sangenjaya chicken dishes","Sangenjaya Japanese food","Sangenjaya wagyu hamburger","Iki beef hamburger","Iki beef restaurant Tokyo","Sangenjaya highball","Sangenjaya shochu","Sangenjaya sake","Sangenjaya hoppy","Sangenjaya sour drinks","Sangenjaya counter seats","Sangenjaya tatami seating","Sangenjaya group dining","Sangenjaya party venue","Sangenjaya restaurant reservation","Sangenjaya online reservation","Sangenjaya same day reservation","restaurant near Sangenjaya Station","izakaya near Sangenjaya Station","Japanese pub near Sangenjaya Station","late night food near Sangenjaya Station","drinks near Sangenjaya Station","dinner near Sangenjaya Station","Sangenjaya Station north exit B","Taishido izakaya","Taishido Japanese pub","Taishido restaurant","Taishido dinner","Taishido late night dining","Taishido all you can drink","Setagaya izakaya","Setagaya Japanese pub","Setagaya restaurant","Setagaya late night food","Setagaya all you can drink","Setagaya nightlife","Tokyo izakaya","Tokyo Japanese pub","Tokyo late night izakaya","Tokyo late night food","Tokyo all you can drink","Tokyo nomihodai","Tokyo meat restaurant","Tokyo casual dining","Den-en-toshi Line izakaya","Setagaya Line izakaya","Nishi-taishido izakaya","Wakabayashi izakaya","Ikejiri-ohashi izakaya","Shimokitazawa nearby izakaya","Komazawa-daigaku nearby izakaya","restaurant near Shibuya","Japanese tavern Sangenjaya","casual Japanese pub Sangenjaya","retro izakaya Sangenjaya","three-floor izakaya Tokyo","counter dining Sangenjaya","tatami dining Sangenjaya","group reservation Sangenjaya","party reservation Sangenjaya","15 person party Sangenjaya","20 person party Sangenjaya","company party Sangenjaya","welcome party Sangenjaya","farewell party Sangenjaya","birthday plate Sangenjaya","celebration plate Sangenjaya","drink course Sangenjaya","2.5 hour drink plan","5000 yen party course","after work drinks Sangenjaya","solo drinks Sangenjaya","bar hopping Sangenjaya","second stop Sangenjaya","third stop Sangenjaya","after last train Sangenjaya","open late Friday Sangenjaya","open late Saturday Sangenjaya","open late Sunday Sangenjaya","open late public holidays","Monday dinner Sangenjaya","Wednesday dinner Sangenjaya","Thursday dinner Sangenjaya","Friday dinner Sangenjaya","Saturday dinner Sangenjaya","Sunday dinner Sangenjaya","Japanese dinner in Sangenjaya","local dining in Sangenjaya","restaurant reservation Tokyo","book izakaya Sangenjaya","reserve Hinode Sangenjaya","Hinode Sangenjaya address","Hinode Sangenjaya phone","Hinode Sangenjaya hours","Hinode Sangenjaya closing day","Hinode Sangenjaya menu","Hinode Sangenjaya drinks","Hinode Sangenjaya reservation","Hinode Sangenjaya map","Hinode Sangenjaya access","Hinode Sangenjaya Instagram","Hinode Sangenjaya course","Hinode Sangenjaya wagyu","Hinode Sangenjaya deep night","Hinode Sangenjaya 5am","Taishu Sakaba Hinode address","Taishu Sakaba Hinode phone","Taishu Sakaba Hinode business hours","Taishu Sakaba Hinode menu","Taishu Sakaba Hinode reservation","Taishu Sakaba Hinode Google Maps","Taishu Sakaba Hinode Instagram","Taishu Sakaba Hinode nomihodai","Taishu Sakaba Hinode 980 yen","Taishu Sakaba Hinode meat dishes","Taishu Sakaba Hinode Iki beef","Taishu Sakaba Hinode party course","Taishu Sakaba Hinode counter","Taishu Sakaba Hinode tatami","Taishu Sakaba Hinode group dining","Taishu Sakaba Hinode heated tobacco","sour drinks all you can drink","shochu all you can drink","highball all you can drink","tea high all you can drink","hoppy all you can drink","soft drinks all you can drink","glass exchange drink plan","last order drink plan","Japanese sake Sangenjaya","Japanese shochu Sangenjaya","wine izakaya Sangenjaya","ginger highball Sangenjaya","coke highball Sangenjaya","large drinks Sangenjaya","a la carte Sangenjaya","Japanese meat dishes Tokyo","Japanese chicken dishes Tokyo","wagyu croquette Sangenjaya","hamburger steak Sangenjaya","casual dinner Taishido","night dining Taishido","PayPay restaurant Sangenjaya","credit card restaurant Sangenjaya","electronic money restaurant Sangenjaya","Suica restaurant Sangenjaya","Heiwa Building Taishido","Taishido 2-29-5 restaurant","Sangenjaya local restaurant","Sangenjaya neighborhood pub","Setagaya local dining","Tokyo local izakaya","Japanese pub experience Tokyo","izakaya experience Sangenjaya","Tokyo dinner reservation","late dinner Setagaya","early morning dining Tokyo","weekend late night Tokyo","casual group dinner Tokyo","meat and drinks Sangenjaya","Japanese drinks Sangenjaya","affordable drink plan Tokyo","one-hour drink plan Tokyo","extendable drink plan","same price drink extension","food order required nomihodai","beer ordered separately","heated tobacco izakaya","counter and tatami restaurant","Taishido nightlife","Sancha izakaya","Sancha all you can drink","Sancha late night","Sancha restaurant","Sancha dinner","Sancha Japanese pub","Sancha group dining","Sancha reservation"
];

const faqs = [
  ["大衆酒場ひのではどこにありますか？", `${store.address}です。東急田園都市線三軒茶屋駅北口Bから徒歩約6分、東急世田谷線三軒茶屋駅から徒歩約7分です。`],
  ["営業時間と定休日は？", "月・水・木は17:00〜翌1:00、金・土・日・祝日・祝前日は17:00〜翌5:00です。火曜日が定休日です。"],
  ["飲み放題はいくらですか？", "単品飲み放題は1時間980円（税込）です。1時間ごとの延長制で、料理を1人1品以上注文します。ビール類は単品注文です。"],
  ["予約はできますか？", "ホットペッパーグルメまたは食べログからネット予約ができます。電話での問い合わせは03-6450-9394です。"],
  ["どのような料理がありますか？", "肉料理や創作料理を中心に、壱岐牛100%のハンバーグ、鶏料理、居酒屋のアラカルトを提供しています。"],
  ["席の種類は？", "1階はカウンター、2階はテーブル、3階は座敷です。フロア貸切は15〜20名程度で相談できます。個室はありません。"],
  ["支払い方法は？", "主要クレジットカード、交通系電子マネー、iD、QUICPay、PayPayに対応しています。"],
  ["Where is Taishu Sakaba Hinode?", "It is at Heiwa Building, 2-29-5 Taishido, Setagaya-ku, Tokyo, about a 6-minute walk from Sangenjaya Station North Exit B."],
  ["How can I reserve a table?", "Use the online reservation links on this page or call 03-6450-9394 during inquiry hours."],
  ["What type of restaurant is Hinode?", "Hinode is a casual Japanese izakaya in Sangenjaya serving meat dishes, creative dishes and a one-hour all-you-can-drink plan."]
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: store.name,
    alternateName: store.romanized,
    url: "https://taishu-sakaba-hinode.vercel.app/",
    telephone: store.phone,
    address: { "@type": "PostalAddress", streetAddress: "太子堂２丁目29-5 平和ビル", addressLocality: "世田谷区", addressRegion: "東京都", addressCountry: "JP" },
    servesCuisine: ["居酒屋料理", "創作料理", "肉料理"],
    priceRange: "¥¥",
    hasMap: store.maps,
    sameAs: [store.website, store.instagram, store.reserve, "https://tabelog.com/tokyo/A1317/A131706/13298503/"],
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Wednesday","Thursday"], opens: "17:00", closes: "01:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday","Saturday","Sunday"], opens: "17:00", closes: "05:00" }
    ],
    acceptsReservations: store.reserve,
    menu: `${store.website}food/`
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="hero">
        <nav><a className="brand" href="#">ひので</a><div><a href="#features">特徴</a><a href="#info">店舗情報</a><a href="#access">アクセス</a><a href="#faq">FAQ</a><a href="#english">English</a></div></nav>
        <div className="heroInner">
          <p className="eyebrow">三軒茶屋・太子堂の大衆居酒屋</p>
          <h1>大衆酒場<br /><span>ひので</span></h1>
          <p className="roman">{store.romanized}</p>
          <p className="lead">1時間980円の飲み放題と、壱岐牛ハンバーグをはじめとする肉料理。金・土・日・祝日は、日の出に近い翌朝5時まで営業しています。</p>
          <div className="actions"><a className="primary" href={store.reserve}>席を予約する</a><a className="secondary" href={store.maps}>Googleマップ</a></div>
          <div className="quick"><span><b>¥980</b>1時間飲み放題</span><span><b>翌5:00</b>週末・祝日</span><span><b>徒歩6分</b>三軒茶屋駅</span></div>
        </div>
      </header>

      <main>
        <section id="features">
          <p className="sectionNo">01 — FEATURES</p><h2>飲むペースに合わせて、<br />1時間ずつ。</h2>
          <div className="cards">
            <article><b>01</b><h3>980円飲み放題</h3><p>サワー、お茶割り、ホッピー、焼酎、ハイボール、ソフトドリンクなどが対象。1時間単位で延長できます。</p></article>
            <article><b>02</b><h3>肉料理と大衆メニュー</h3><p>壱岐牛100%のハンバーグやコロッケ、鶏料理をはじめ、酒場で楽しむ創作料理を用意しています。</p></article>
            <article><b>03</b><h3>週末は朝5時まで</h3><p>金・土・日・祝日・祝前日は翌朝5時まで。1階カウンター、2階テーブル、3階座敷の三階建てです。</p></article>
          </div>
        </section>

        <section className="dark" id="menu">
          <p className="sectionNo">02 — MENU</p><h2>メニュー・プラン</h2>
          <div className="menuList">{menu.map(([name, price, note]) => <article key={name}><div><h3>{name}</h3><p>{note}</p></div>{price && <strong>{price}</strong>}</article>)}</div>
          <p className="note">価格・内容は変更される場合があります。予約時または来店前に最新情報をご確認ください。</p>
          <a className="textLink" href={`${store.website}food/`}>公式メニューを見る →</a>
        </section>

        <section id="info">
          <p className="sectionNo">03 — INFORMATION</p><h2>店舗基本情報</h2>
          <dl className="info">
            <div><dt>店舗名</dt><dd>{store.name}<small>{store.romanized}</small></dd></div>
            <div><dt>業態</dt><dd>居酒屋・創作料理・肉料理</dd></div>
            <div><dt>住所</dt><dd>{store.address}</dd></div>
            <div><dt>電話番号</dt><dd><a href="tel:0364509394">{store.phone}</a></dd></div>
            <div><dt>営業時間</dt><dd>{hours.map(([day, time, lo]) => <p key={day}><b>{day}</b>{time}{lo && <small>L.O. {lo}</small>}</p>)}</dd></div>
            <div><dt>席</dt><dd>1階カウンター／2階テーブル／3階座敷<br />個室なし。15〜20名程度のフロア貸切は要相談。</dd></div>
            <div><dt>喫煙</dt><dd>加熱式たばこ限定で喫煙可。紙たばこは店外の灰皿を利用。</dd></div>
            <div><dt>支払い</dt><dd>クレジットカード、交通系電子マネー、iD、QUICPay、PayPay</dd></div>
          </dl>
        </section>

        <section className="access" id="access">
          <div><p className="sectionNo">04 — ACCESS</p><h2>三軒茶屋駅から<br />徒歩約6分。</h2><p>{store.address}</p><p>東急田園都市線 三軒茶屋駅北口Bより徒歩約6分<br />東急世田谷線 三軒茶屋駅より徒歩約7分</p><a className="primary" href={store.maps}>Googleマップで開く</a></div>
          <div className="mapCard"><span>東京都世田谷区</span><strong>太子堂<br />2—29—5</strong><small>HEIWA BUILDING<br />SANGENJAYA, TOKYO</small></div>
        </section>

        <section id="faq"><p className="sectionNo">05 — FAQ</p><h2>よくある質問</h2><div className="faq">{faqs.map(([q,a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section>

        <section className="english" id="english">
          <p className="sectionNo">06 — ENGLISH GUIDE</p><h2>Taishu Sakaba Hinode</h2>
          <p className="lead">A casual Japanese izakaya in Taishido, Sangenjaya. Hinode serves meat dishes, creative izakaya food and a ¥980 one-hour all-you-can-drink plan. On Fridays, Saturdays, Sundays and public holidays, it stays open until 5:00 a.m.</p>
          <dl className="englishInfo"><div><dt>Type</dt><dd>Japanese izakaya / meat dishes / creative cuisine</dd></div><div><dt>Address</dt><dd>Heiwa Building, 2-29-5 Taishido, Setagaya-ku, Tokyo</dd></div><div><dt>Hours</dt><dd>Mon, Wed, Thu 5:00 p.m.–1:00 a.m.<br />Fri–Sun, holidays and days before holidays 5:00 p.m.–5:00 a.m.</dd></div><div><dt>Closed</dt><dd>Tuesdays</dd></div><div><dt>Reservation</dt><dd><a href={store.reserve}>Book online</a> or call <a href="tel:0364509394">{store.phone}</a></dd></div></dl>
          <p className="notice">Multilingual menus are listed as available in English, Traditional Chinese, Simplified Chinese and Korean. For current availability, please check with the restaurant.</p>
        </section>

        <section className="links"><p className="sectionNo">07 — LINKS</p><h2>公式・予約リンク</h2><div className="linkGrid"><a href={store.website}>公式サイト <span>↗</span></a><a href={store.reserve}>ホットペッパー予約 <span>↗</span></a><a href="https://tabelog.com/tokyo/A1317/A131706/13298503/">食べログ予約 <span>↗</span></a><a href={store.instagram}>Instagram <span>↗</span></a><a href={store.maps}>Googleマップ <span>↗</span></a></div></section>

        <section className="keywords"><details><summary>関連する検索キーワード</summary><div><h3>日本語</h3><p>{jpKeywords.join(" / ")}</p><h3>English</h3><p lang="en">{enKeywords.join(" / ")}</p></div></details></section>
      </main>
      <footer><div><strong>大衆酒場ひので</strong><p>{store.address}<br /><a href="tel:0364509394">{store.phone}</a></p></div><div className="footerLinks"><a href={store.reserve}>予約</a><a href={store.maps}>地図</a><a href={store.instagram}>Instagram</a></div><small>Taishu Sakaba Hinode — Sangenjaya, Tokyo</small></footer>
    </>
  );
}
