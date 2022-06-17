import { GetStaticPropsContext } from "next";
import { FunctionComponent } from "react";
import { getMdxContent, getNextMdxRemoteSlugList } from "../../libs/markdown";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";

// * Please chose rehyp-prism-plus or rehype-highlight
/*
 * For rehype-prism-plus
 */
import rehypePrism from "@mapbox/rehype-prism";
import "prism-themes/themes/prism-atom-dark.css";

/*
 * For rehype-highlight
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
 */

interface ProductProps {
  content: MDXRemoteSerializeResult;
}

const product: FunctionComponent<ProductProps> = ({ content }) => {
  return (
    <div className="w-11/12 md:7/12 prose">
      <MDXRemote {...content} />
    </div>
  );
};

export const getStaticPaths = async () => {
  const slugs = getNextMdxRemoteSlugList().map((slug) => {
    return {
      params: {
        slug,
      },
    };
  });
  return {
    paths: slugs,
    fallback: false,
  };
};

export const getStaticProps = async (
  ctx: GetStaticPropsContext<{ slug: string }>
) => {
  const { content } = getMdxContent(`${ctx.params?.slug}.mdx`);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: [
                "anchor no-underline flex items-center before:-translate-x-[8px] before:-ml-[20px] before:bg-no-repeat before:bg-contain before:w-[20px] before:h-[20px] before:content-[''] hover:before:bg-[url('/link.svg')]",
              ],
            },
            behaviour: "wrap",
          },
        ],
        /*
         * Please choose rehypeHighlight or rehypPrism
         * if you choose
         * */
        //rehypeHighlight,
        [rehypePrism, { ignoreMissing: true }],
      ],
      remarkPlugins: [remarkGfm],
    },
  });
  //console.log(content, content2, data2);
  return {
    props: {
      content: mdxSource,
      layout: "next-mdx-remote",
    },
  };
};

export default product;
