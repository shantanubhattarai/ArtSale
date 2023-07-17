import Navbar from "./navbar";
import { Inter } from "next/font/google";
import { ReactElement } from "react";

const inter = Inter({ subsets: ["latin"] });
type LayoutProps = {
  children: ReactElement;
};

export default function Layout({ children }: LayoutProps): ReactElement {
  return (
    <>
      <Navbar />
      <main className={`${inter.className} p-4`}>{children}</main>
    </>
  );
}
