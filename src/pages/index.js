import Head from "next/head";
import Homebanner from "@/components/Homebanner";





export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>
      <Homebanner />
    </>
  );
}
