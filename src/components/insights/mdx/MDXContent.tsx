import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { Callout } from "./Callout";
import { Figure } from "./Figure";
import { VideoEmbed } from "./VideoEmbed";

const components = {
  Callout,
  Figure,
  VideoEmbed,
};

/**
 * Renders MDX (or plain markdown) for insight bodies. Custom components
 * available to authors: <Callout>, <Figure>, <VideoEmbed>. Plus standard
 * markdown + GitHub-flavored extras (tables, task lists, strikethrough).
 */
export function MDXContent({ source }: { source: string }) {
  return (
    <div className="article-body">
      <MDXRemote
        source={source}
        components={components}
        options={{
          mdxOptions: { remarkPlugins: [remarkGfm] },
          parseFrontmatter: false,
        }}
      />
    </div>
  );
}
