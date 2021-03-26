import "../styles/globals.css";
import { MDXProvider } from "@mdx-js/react";
import LessonLayout from "components/layout/LessonLayout";

function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={{ wrapper: LessonLayout}}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}

export default MyApp;
