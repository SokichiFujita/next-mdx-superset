import type { NextPage } from "next";
import {
  getAllMetaDataFromNextMdxRemote,
  getAllMetaDataFromNextMdx,
  nextMdxType,
  nextMdxRemoteType,
} from "../libs/markdown";
import Link from "next/link";

const Home: NextPage = ({
  nextMdxRemoteMetadata,
  nextMdxMetadata,
  layout,
}: {
  nextMdxRemoteMetadata?: nextMdxRemoteType[];
  nextMdxMetadata?: nextMdxType[];
  layout: string;
}) => {
  return (
    <div className="flex flex-col justify-start w-11/12 md:w-7/12">
      <h1 className="font-bold text-3xl mb-4">Posts for next-mdx-remote</h1>
      {nextMdxRemoteMetadata?.map((data) => (
        <div key={data.slug}>
          <h2 className="text-2xl mb-4">
            <Link href={`/posts/${data.slug}`}>
              <a>{data.title}</a>
            </Link>
          </h2>
        </div>
      ))}
      <h1 className="font-bold text-3xl mb-4 mt-16">Posts for @next/mdx</h1>
      {nextMdxMetadata?.map((data) => (
        <div key={data.slug}>
          <h2 className="text-2xl mb-4">
            <Link href={`/mdxs/${data.slug}`}>
              <a>{data.title}</a>
            </Link>
          </h2>
        </div>
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const nextMdxRemoteMetadata = getAllMetaDataFromNextMdxRemote();
  const nextMdxMetadata = await getAllMetaDataFromNextMdx();
  return {
    props: {
      nextMdxRemoteMetadata,
      nextMdxMetadata,
      layout: "main",
    },
  };
};

export default Home;
