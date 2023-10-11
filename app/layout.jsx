import AppBar from "@/components/AppBar";
import "../styles/globals.css";
import Head from "next/head";

export const metadata = {
  title: "Carpathians Travel",
  description:
    "Unforgettable trips to the most beautiful parts of the Carpathians. Enjoy stunning views, exciting expeditions, and the best service!",
  keywords:
    "Carpathians, travel, trips, stunning views, expeditions, best service",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="@/public/favicon.ico" />
      </Head>
      <body className="body">
        <header className="absolute left-1/2 -translate-x-1/2 top-0 w-full z-50">
          <AppBar />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
