import "../../styles/globals.css";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import MDXLayout from "../components/MDXLayout";
import { MDXProvider } from "@mdx-js/react";

const headingWithLink =
  "anchor no-underline flex items-center before:-translate-x-[8px] before:-ml-[20px] before:bg-no-repeat before:bg-contain before:w-[20px] before:h-[20px] before:content-[''] hover:before:bg-[url('/link.svg')]";

const MDXComponents = {
  h1: (props) => <h1 className={headingWithLink} {...props} />,
  h2: (props) => <h2 className={headingWithLink} {...props} />,
  h3: (props) => <h3 className={headingWithLink} {...props} />,
  h4: (props) => <h4 className={headingWithLink} {...props} />,
  h5: (props) => <h5 className={headingWithLink} {...props} />,
  h6: (props) => <h6 className={headingWithLink} {...props} />,
};

function MyApp({ Component, pageProps }: AppProps) {
  switch (pageProps.layout) {
    case "main": {
      return (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      );
    }
    case "next-mdx-remote": {
      return (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      );
    }
    // for @next/mdx
    default: {
      return (
        <MDXLayout>
          <MDXProvider components={{}}>
            <Component {...pageProps} />
          </MDXProvider>
        </MDXLayout>
      );
    }
  }
}

export default MyApp;
