import Featured from "@/components/homepage/featured";
import ForYou from "@/components/homepage/for-you";
import { ReactElement } from "react";

export default function Homepage(): ReactElement {
  return (
    <>
      <Featured />
      <ForYou />
    </>
  );
}
