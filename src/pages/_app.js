import "@/styles/fonts.css";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import Header from "@/components/layout/Header";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider enableSystem={true} attribute="class" >
        <main className="main_wrap">
          <Header />
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  )
}
