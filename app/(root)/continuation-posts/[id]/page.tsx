import { getPostWithSections } from "@/lib/actions/blog";

interface Props {
  params: { id: string };
}

export default async function PostDetailPage({ params }: Props) {
  const postId = Number(params.id);
  const data = await getPostWithSections(postId);

  if (!data) return <div>Post introuvable.</div>;
  const { post, postSections } = data;

  return (
    <div className="min-h-screen bg-white dark:bg-[#10141a]">
      {/* Image principale en background */}
      <div
        className="w-full h-72 flex items-center justify-center"
        style={{
          backgroundImage: `url(${post.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-5xl font-bold text-white bg-black/50 px-6 py-4 rounded">
          {post.title}
        </h1>
      </div>

      {/* Sections */}
      <div className="max-w-3xl mx-auto mt-10 space-y-10 px-4">
        {postSections.map((section: any) => (
          <section key={section.id}>
            <h2 className="text-2xl font-semibold mb-2 text-[#20406a] dark:text-blue-200">
              {section.subtitle}
            </h2>
            <p className="mb-4 text-gray-800 dark:text-gray-200">{section.content}</p>
            {section.image && (
              <img
                src={section.image}
                alt={section.subtitle}
                className="w-full max-h-80 object-cover rounded"
              />
            )}
          </section>
        ))}
      </div>
    </div>
  );
}