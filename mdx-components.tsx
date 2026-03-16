import type { MDXComponents } from "mdx/types";
import Link from "next/link";

// This file is required by @next/mdx.
// Maps MDX HTML elements to custom React components.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Style links to use Next.js Link for internal hrefs
    a: ({ href, children, ...props }) => {
      if (href?.startsWith("/")) {
        return (
          <Link href={href} {...props}>
            {children}
          </Link>
        );
      }
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
          {children}
        </a>
      );
    },
    ...components,
  };
}
