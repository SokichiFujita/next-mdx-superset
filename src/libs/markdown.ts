import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
export const NEXT_MDX_REMOTE_PATH = join(process.cwd(), "posts");
export const NEXT_MDX_PATH = join(process.cwd(), "src", "pages", "mdxs");

const getMdxFileList = (path: string): string[] =>
  fs.readdirSync(path).filter((path) => /\.mdx?$/.test(path));

const stripFileExt = (path: string) => path.replace(".mdx", "");

const getMdxSlugList = (path: string): string[] => {
  return getMdxFileList(path).map((x) => {
    return x.replace(".mdx", "");
  });
};

export const getNextMdxRemoteSlugList = () =>
  getMdxSlugList(NEXT_MDX_REMOTE_PATH);

export const getNextMdxSlugList = () => getMdxSlugList(NEXT_MDX_PATH);

export const getMdxContent = (slug: string) => {
  const mdxpath = join(NEXT_MDX_REMOTE_PATH, slug);
  const contents = fs.readFileSync(mdxpath, "utf-8");
  const { data, content } = matter(contents);
  return { data, content };
};

export interface nextMdxRemoteType {
  title: string;
  slug: string;
}

export const getAllMetaDataFromNextMdxRemote = () => {
  const files = getMdxFileList(NEXT_MDX_REMOTE_PATH);
  const metadata = files.map((file) => {
    const path = join(NEXT_MDX_REMOTE_PATH, file);
    const contents = fs.readFileSync(path, "utf-8");
    const { data } = matter(contents);
    data.slug = stripFileExt(file);
    return data;
  });
  return metadata;
};

export interface nextMdxType {
  title: string;
  slug: string;
}

export const getAllMetaDataFromNextMdx = async () => {
  const files = getMdxFileList(NEXT_MDX_PATH);
  let metadata = [];
  for (let file of files) {
    const { meta } = await import(`../pages/mdxs/${file}`);
    const slug = stripFileExt(file);
    metadata.push({
      title: meta.title,
      slug: slug,
    });
  }
  return metadata;
};
