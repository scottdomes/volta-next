import Head from "next/head";
import Header from "../components/Header";
import Heading from "../components/Heading";
import Content from "../components/layout/Content";

export default function CourseIndex() {
  return (
    <div>
      <Head>
        <title>Volta Academy: Course List</title>
        <Header />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Content>
        <Heading>My courses</Heading>
        <Heading>All courses</Heading>
      </Content>
    </div>
  );
}
