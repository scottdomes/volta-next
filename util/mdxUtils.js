import fs from "fs";
import path from "path";

// POSTS_PATH is useful when you want to get the path to a specific file
export const CONTENT_PATH = path.join(process.cwd(), "content");
export const COURSE_PATHS = ["thinking-in-code"];
// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
const getLessonPaths = () => {
  const paths = COURSE_PATHS.map((course) => {
    return (
      fs
        .readdirSync(path.join(CONTENT_PATH, course))
        // Only include md(x) files
        .filter((path) => /\.mdx?$/.test(path))
        .map((path) => {
          return {
            lesson: path,
            course,
          };
        })
    );
  });
  console.log('paths:', paths.flat())
  return paths.flat();
};

export const lessonPaths = getLessonPaths();
