import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { postsQuery } from "@/sanity/lib/queries";

type Post = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
};

export default async function Blog() {
  const posts = await client.fetch<Post[]>(
    postsQuery,
    {},
    { cache: "no-store" }
  );

  return (
    <section id="blog" className="bg-white px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="mb-3 text-sm text-[#738378]">ბლოგი</p>
            <h2 className="text-4xl font-semibold text-[#263c32]">
              მშობლებისთვის
            </h2>
          </div>
        </div>

        {posts.length === 0 ? (
          <p className="text-gray-500">ჯერ არცერთი სტატია არ არის გამოქვეყნებული.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post._id}
                className="rounded-3xl border border-[#e5e2da] bg-[#f8f6f0] p-8"
              >
                <p className="mb-5 text-sm text-[#738378]">ბლოგი</p>

                <h3 className="mb-4 text-2xl font-semibold text-[#263c32]">
                  {post.title}
                </h3>

                <p className="mb-7 leading-7 text-gray-600">
                  {post.excerpt || "სტატიის ტექსტი მალე დაემატება."}
                </p>

<Link
  href={`/blog/${post.slug}`}
  className="font-medium text-[#355e4c]"
>
  სრულად წაიკითხე →
</Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}