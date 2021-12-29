import Head from "next/head";
import Name from "../components/Name";
import Counter from "../components/Counter";
import Comment from "../components/Comment";
import CommentList from "../components/CommentList";

export default function Home() {
  return (
    <div>
      <Head>
        <title>For Zustand Practice</title>
        <meta name="description" content="learning zustand" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Name></Name>
      <Counter></Counter>
      <Comment></Comment>
      <CommentList></CommentList>
    </div>
  );
}
