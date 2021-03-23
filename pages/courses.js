import Head from "next/head";
import Header from "../components/Header";
import Heading from "../components/Heading";
import CourseCard from "../components/course/CourseCard";
import Content from "../components/layout/Content";
import { getAllCourses, getMyCourses } from "./api/courses";
import { useState } from "react";

export default function CourseIndex({ data }) {
  const { allCourses, myCourses } = data;
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

export async function getServerSideProps() {
  // Fetch data from external API
  const [allCourses, myCourses] = await Promise.all([
    getAllCourses(),
    getMyCourses(),
  ]);

  // Pass data to the page via props
  return { props: { data: { allCourses, myCourses } } };
}
