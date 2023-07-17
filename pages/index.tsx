import Layout from "@/components/layout";
import Homepage from "./homepage";

export default function Home() {
  return (
    <div className="z-10 w-full max-w-[1416px] mx-auto">
      <Layout>
        <Homepage />
      </Layout>
    </div>
  );
}
