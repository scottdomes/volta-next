import Heading from "../components/Heading";
import CourseCard from "../components/course/CourseCard";
import Layout from "../components/layout/Layout";

import { getAllCourses, getMyCourses } from "./api/courses";
import styles from "./styles/courses.module.css";

export default function CourseIndex({ data }) {
  const { allCourses, myCourses } = data;
  return (
    <Layout title="Courses">
      <Heading>My courses</Heading>
      <div className={styles.grid}>
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
      </div>
      <Heading>All courses</Heading>
      <div className={styles.grid}>
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
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const [allCourses, myCourses] = await Promise.all([
    getAllCourses(),
    getMyCourses(),
  ]);

  // Pass data to the page via props
  return { props: { data: { allCourses, myCourses } } };
}
