import Featured from "@/components/homepage/featured";
import TopPicks from "@/components/homepage/top-picks";
import ForYou from "@/components/homepage/for-you";

import { ReactElement } from "react";

export default function Homepage(): ReactElement {
  return (
    <>
      <Featured />
      <TopPicks />
      <ForYou />
    </>
  );
}
