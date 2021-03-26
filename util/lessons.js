import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

export function getLessonBySlug(courseSlug, lessonSlug) {
  // const realSlug = slug.replace(/\.mdx$/, "");
  const docsDirectory = join(process.cwd(), `content/${courseSlug}`);
  const fullPath = join(docsDirectory, `${lessonSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { slug: realSlug, meta: data, content };
}
