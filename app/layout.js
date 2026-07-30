import "./globals.css";

const siteUrl = "https://taishu-sakaba-hinode.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "大衆酒場ひので｜980円飲み放題・深夜営業｜三軒茶屋の居酒屋",
  description:
    "三軒茶屋・太子堂の居酒屋「大衆酒場ひので」。1時間980円の飲み放題、壱岐牛ハンバーグなどの肉料理、金〜日・祝日は翌朝5時まで営業。住所・営業時間・予約・アクセスをご案内します。",
  alternates: { canonical: "/" },
  openGraph: {
    title: "大衆酒場ひので｜三軒茶屋の居酒屋",
    description: "1時間980円の飲み放題と肉料理。三軒茶屋駅から徒歩約6〜7分、週末は翌朝5時まで営業。",
    url: siteUrl,
    siteName: "大衆酒場ひので",
    locale: "ja_JP",
    type: "website"
  },
  twitter: { card: "summary", title: "大衆酒場ひので｜三軒茶屋", description: "980円飲み放題×深夜営業の大衆居酒屋" }
  ,
  verification: {
    google: "ayHXvvh7MAYyEd0yabm5xYrI98qeN_1bfcLkvUPkbrM"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
