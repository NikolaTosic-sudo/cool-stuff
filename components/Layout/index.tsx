import Head from "next/head";
import { LayoutWrap } from "./style";
import TopBar from "../TopBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Cool Stuff</title>
        <meta name="description" content="Cool Stuff" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <TopBar />
      <LayoutWrap>{children}</LayoutWrap>
    </>
  );
};

export default Layout;
