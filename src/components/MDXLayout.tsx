import Head from "next/head";
import { ReactNode } from "react";
import Header from "./Header";
import "prism-themes/themes/prism-atom-dark.css"; //for rehype-prism
//import "highlight.js/styles/github-dark.css"; //for rehype-highlight

const MDXLayout = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      <Head>
        <title>next-mdx-superset</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header service_title="next-mdx-supset" />
        <div className="p-4 flex justify-center">
          <div className="w-11/12 md:w-7/12 prose prose-table">{children}</div>
        </div>
      </main>
    </>
  );
};

export default MDXLayout;
