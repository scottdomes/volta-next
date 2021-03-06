import fs from "fs";
import matter from "gray-matter";
import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
import dynamic from "next/dynamic";
import Link from "next/link";
import path from "path";
import LessonLayout from "components/layout/LessonLayout";
import { lessonPaths, CONTENT_PATH } from "util/mdxUtils";
import { getCourse } from "pages/api/courses";
import Heading from "components/Heading";
import styles from "./styles/Lesson.module.css";

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  a: Link,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  Quizlet: dynamic(() => import("components/Quizlet")),
};

const getNextLesson = (course, lessonSlug) => {
  const currentLesson = course.lessons.find(
    (lesson) => lesson.slug === lessonSlug
  );
  const nextSequence = currentLesson.sequence + 1;
  const nextLesson = course.lessons.find(
    (lesson) => lesson.sequence === nextSequence
  );
  return nextLesson;
};

export default function PostPage({ source, frontMatter, course, lessonSlug }) {
  const content = hydrate(source, { components });
  const nextLesson = getNextLesson(course, lessonSlug);

  return (
    <LessonLayout
      title={frontMatter.title}
      course={course}
      nextLesson={nextLesson}
    >
      <div className="post-header">
        <Heading className={styles.lessonHeading}>{frontMatter.title}</Heading>
        {frontMatter.description && (
          <p className="description">{frontMatter.description}</p>
        )}
      </div>
      <main className={styles.content}>{content}</main>
    </LessonLayout>
  );
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(
    CONTENT_PATH,
    `${params.course}/${params.lesson}.mdx`
  );
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await renderToString(content, {
    components,
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  const course = await getCourse(params.course);

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      course,
      lessonSlug: params.lesson,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = lessonPaths
    // Remove file extensions for page paths
    .map((path) => {
      return { ...path, lesson: path.lesson.replace(/\.mdx?$/, "") };
    })
    // Map the path into the static paths object required by Next.js
    .map((path) => ({ params: { ...path } }));

  return {
    paths,
    fallback: false,
  };
};
