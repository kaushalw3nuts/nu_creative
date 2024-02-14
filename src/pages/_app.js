import "@/styles/fonts.css";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";

export default function App({ Component, pageProps }) {
  return (
    <>
      <main className="main_wrap">
        <Header />
        <Component {...pageProps} />
      </main>
    </>
  )
}
