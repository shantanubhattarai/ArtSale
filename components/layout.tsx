import Footer from "./footer";
import { Inter } from "next/font/google";
import Navbar from "./navbar";
import { ReactElement } from "react";

const inter = Inter({ subsets: ["latin"] });
type LayoutProps = {
  children: ReactElement;
};

export default function Layout({ children }: LayoutProps): ReactElement {
  return (
    <>
      <div className="flex flex-col items-center justify-between h-screen">
        <Navbar />
        <main className={`${inter.className} w-full p-4`}>
          <div className="max-w-[1416px] mx-auto">{children}</div>
        </main>
        <Footer />
      </div>
    </>
  );
}
