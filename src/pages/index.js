import Head from "next/head";
import Homebanner from "@/components/Homebanner";
import IntroSection from "@/components/IntroSection";
import CaseStudieSection from "@/components/CaseStudiesection";





export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>
      <Homebanner />
      <IntroSection />
      <CaseStudieSection />
    </>
  );
}
