import Head from "next/head";
import Header from "../Header";
import Content from "./Content";

const LessonLayout = ({ children, title }) => {
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

export default LessonLayout;

export const getServerSideProps = async (context) => {
  const course = await getCourse(context.slug);
  console.log(course);
  return { props: { course } };
};
