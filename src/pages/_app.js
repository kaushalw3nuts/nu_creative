import "@/styles/fonts.css";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import Header from "@/components/layout/Header";
import Cursour from "@/components/layout/Cursour";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



export default function App({ Component, pageProps }) {

  useEffect( () => {
    gsap.set(".fadeInUp", {
      y: "30%", 
      opacity: 0,
    });

    ScrollTrigger.batch(".fadeInUp", {
      onEnter: batch => gsap.to(batch, { 
        opacity: 1, 
        duration: 1.8, 
        delay: 0.8, 
        stagger: 0.2, 
        y: 0,
      }),
    });

    gsap.set(".fadeInUpHead", {
      y: "30%", 
      opacity: 0,
    });

    ScrollTrigger.batch(".fadeInUpHead", {
      onEnter: batch => gsap.to(batch, { 
        opacity: 1, 
        duration: 1.5, 
        delay: 2, 
        stagger: 0.2, 
        y: 0,
      }),
    });
  }, [])

  return (
    <>
      <ThemeProvider enableSystem={true} attribute="class" >
        <main className="main_wrap">
          <Header />
          <Cursour />
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  )
}
