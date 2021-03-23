import LessonCard from "components/course/LessonCard";
import Layout from "components/layout/Layout";
import { getCourse } from "pages/api/courses";

const LessonIndex = ({ course }) => {
  const { slug, title, progress, lessons } = course;
  return (
    <Layout>
      <div>
        <div>
          <img src={`/${slug}.svg`} alt="Course logo" />
          <h1>{title}</h1>
        </div>
        <h3>{progress}% Complete</h3>
      </div>
      <hr />
      {lessons.map((lesson) => {
        return <LessonCard lesson={lesson} key={lesson.sequence} />;
      })}
    </Layout>
  );
};

export default LessonIndex;

export async function getServerSideProps(context) {
  const course = await getCourse(context.slug);

  return { props: { course } };
}
