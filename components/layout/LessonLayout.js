import CourseHeader from "components/CourseHeader";
import Head from "next/head";
import Header from "../Header";
import Content from "./Content";

const LessonLayout = ({ children, title, course }) => {
  return (
    <div>
      <Head>
        <title>Volta Academy: {title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CourseHeader course={course} />
      <Content>{children}</Content>
    </div>
  );
};

export default LessonLayout;
