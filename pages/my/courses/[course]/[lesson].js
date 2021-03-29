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

export default function PostPage({ source, frontMatter, course }) {
  const content = hydrate(source, { components });
  return (
    <LessonLayout title={frontMatter.title}>
      <div className="post-header">
        <h1>{frontMatter.title}</h1>
        {frontMatter.description && (
          <p className="description">{frontMatter.description}</p>
        )}
      </div>
      <main>{content}</main>
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
