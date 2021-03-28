import fs from "fs";
import path from "path";

export const CONTENT_PATH = path.join(process.cwd(), "content");
export const COURSE_PATHS = ["thinking-in-code"];

const getLessonPaths = () => {
  const pathsByCourse = COURSE_PATHS.map((course) => {
    return (
      fs
        .readdirSync(path.join(CONTENT_PATH, course))
        .filter((path) => /\.mdx?$/.test(path))
        .map((path) => {
          return {
            lesson: path,
            course,
          };
        })
    );
  }).flat();

  return pathsByCourse;
};

export const lessonPaths = getLessonPaths();
