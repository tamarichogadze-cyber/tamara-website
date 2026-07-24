import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { client } from "@/sanity/lib/client";

type Props = {
  params: Promise<{ slug: string }>;
};

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="mb-5 mt-12 text-3xl font-semibold leading-tight text-[#263c32]">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-4 mt-10 text-2xl font-semibold text-[#355e4c]">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="mb-6 text-lg leading-9 text-[#4b554f]">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-8 rounded-2xl border-l-4 border-[#355e4c] bg-[#f5f3ed] px-6 py-5 text-lg leading-8 text-[#4b554f]">
        {children}
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }) => (
      <ul className="mb-8 ml-6 list-disc space-y-3 text-lg leading-8 text-[#4b554f]">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mb-8 ml-6 list-decimal space-y-3 text-lg leading-8 text-[#4b554f]">
        {children}
      </ol>
    ),
  },

  listItem: {
    bullet: ({ children }) => <li className="pl-2">{children}</li>,
    number: ({ children }) => <li className="pl-2">{children}</li>,
  },

  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-[#263c32]">{children}</strong>
    ),
    em: ({ children }) => <em>{children}</em>,
  },
};

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;

  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
      body,
      mainImage,
      "authorName": author->name
    }`,
    { slug },
    { cache: "no-store" }
  );

  if (!post) {
    return (
      <main className="min-h-screen bg-[#f8f6f0] px-6 py-20">
        <p className="text-center text-lg text-[#4b554f]">
          სტატია ვერ მოიძებნა.
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8f6f0] px-5 py-12 md:px-8 md:py-20">
      <article className="mx-auto max-w-4xl rounded-[32px] border border-[#e5e2da] bg-white px-6 py-10 shadow-sm md:px-14 md:py-16">
        <Link
          href="/#blog"
          className="mb-10 inline-block font-medium text-[#355e4c]"
        >
          ← ბლოგზე დაბრუნება
        </Link>

        <p className="mb-4 text-sm uppercase tracking-[0.22em] text-[#738378]">
          ბლოგი
        </p>

        <h1 className="mb-6 text-4xl font-semibold leading-tight text-[#263c32] md:text-5xl">
          {post.title}
        </h1>
{post.mainImage && (
  <div className="relative mx-auto my-12 h-[520px] max-w-xl overflow-hidden rounded-3xl">
    <Image
      src={urlFor(post.mainImage).width(1400).url()}
      alt={post.title}
      fill
      className="object-contain bg-[#f8f6f0]"
    />
  </div>
)}
        {post.authorName && (
          <p className="mb-12 border-b border-[#e5e2da] pb-8 text-[#738378]">
            ავტორი: {post.authorName}
          </p>
        )}

        <div>
          <PortableText value={post.body} components={components} />
        </div>
      </article>
    </main>
  );
}