# next-mdx-superset

How do you manage [MDX](https://mdxjs.com) in your [Next.js](https://nextjs.org) application?

This boilerplate enables you to use two most major MDX libraries for Next.js in a Next.js app. This is also an example to apply [TailwindCSS](https://tailwindcss.com) to both libraries.

## Libraries

### @next/mdx

Vercel's official library [@next/mdx](https://nextjs.org/docs/advanced-features/using-mdx) just renders `.mdx` file based on `next.config.mjs` configuraion.

Rmark and rehype plugins can be used in the `next.config.mjs`

In this boilerplate, `.mdx` files for `@next/mdx` are stored in the `./src/pages/mdxs` directory.

### next-mdx-remote

Hashicorp's library to manage MDX inside `getStaticProps` or `getServerSideProps`.

`.mdx` files are stored in the `./posts` dir.

### Library comparison

`@next/mdx` can render local MDX files only. `next-mdx-remote` can mange MDX strings, local MDX files, remote MDX files and MDX content in API response.

`@next/mdx` can replace markdown element with any React component without remark. `next-mdx-remote` requires remark to do it.

### The other libraries

- [Next.js](https://nextjs.org)
- [TailwindCSS](https://tailwindcss.com)
- [@next/mdx](https://nextjs.org/docs/advanced-features/using-mdx)
- [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote)
- [rehype-highlight](https://github.com/rehypejs/rehype-highlight)
- [@mapbox/rehype-prism](https://github.com/mapbox/rehype-prism)
- [rehype-slug](https://github.com/rehypejs/rehype-slug)
- [rehype-autolink-headings](https://github.com/rehypejs/rehype-autolink-headings)
- [remark-gfm](https://github.com/remarkjs/remark-gfm)
