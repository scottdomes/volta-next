import Head from "next/head";
import Header from "../Header";
import Content from "./Content";

const Layout = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>Volta Academy: {title}</title>
        <Header />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Content>{children}</Content>
    </div>
  );
};

export default Layout;
