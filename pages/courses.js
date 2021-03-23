import Head from "next/head";
import { useEffect } from "react";
import Header from "../components/Header";
import Heading from "../components/Heading";
import CourseCard from "../components/course/CourseCard";
import Content from "../components/layout/Content";

export default function CourseIndex() {
  const [myCourses, setMyCourses] = useState([]);
  const [allCourses, setAllCourses] = useState([]);

  useEffect(() => {});
  return (
    <div>
      <Head>
        <title>Volta Academy: Course List</title>
        <Header />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Content>
        <Heading>My courses</Heading>
        {myCourses.map((course) => {
          return (
            <CourseCard
              key={course.slug}
              slug={course.slug}
              price={course.price}
              title={course.title}
              description={course.description}
              isOwned
              progress={course.progress}
            />
          );
        })}
        <Heading>All courses</Heading>
        {allCourses.map((course) => {
          return (
            <CourseCard
              key={course.slug}
              slug={course.slug}
              price={course.price}
              title={course.title}
              description={course.description}
            />
          );
        })}
      </Content>
    </div>
  );
}
