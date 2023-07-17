import Featured from "@/components/homepage/featured";
import Toppicks from "@/components/homepage/toppicks";

import { ReactElement } from "react";

export default function Homepage(): ReactElement {
  return (
    <>
      <Featured />
      <Toppicks />
    </>
  );
}
