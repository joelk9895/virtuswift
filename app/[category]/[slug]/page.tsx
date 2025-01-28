import { notFound } from "next/navigation";
import { glob } from "glob";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Footer from "@/app/components/footer";
import Megamenu from "@/app/components/megamenu";

type Props = {
  params: {
    category: string;
    slug: string;
  };
};

// Helper function to get MDX content
async function getMdxContent(category: string, slug: string) {
  const filePath = path.join(process.cwd(), "content", category, `${slug}.mdx`);

  try {
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);
    return {
      metadata: data,
      content: content,
    };
  } catch (error) {
    return null;
  }
}

// Generate static paths by scanning the content directory
export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), "content");
  const categories = fs
    .readdirSync(contentDir)
    .filter((file) => fs.statSync(path.join(contentDir, file)).isDirectory());

  const paths: { category: string; slug: string }[] = [];

  for (const category of categories) {
    const files = await glob("*.mdx", { cwd: path.join(contentDir, category) });

    files.forEach((file) => {
      paths.push({
        category,
        slug: file.replace(".mdx", ""),
      });
    });
  }

  return paths;
}

export default async function Page({ params }: Props) {
  const { category, slug } = params;
  const content = await getMdxContent(category, slug);

  if (!content) {
    notFound();
  }

  return (
    <main className="bg-[#F9FAFB]">
      <Megamenu />
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-300 rounded-full blur-[120px] opacity-20"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-400 rounded-full blur-[120px] opacity-20"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <header className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-900 to-purple-600 bg-clip-text text-transparent">
              {content.metadata.title}
            </h1>
            {content.metadata.description && (
              <p className="text-xl text-gray-600 leading-relaxed">
                {content.metadata.description}
              </p>
            )}
          </header>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className=" w-full px-4">
          <div className="w-full flex justify-center">
            <article className="prose prose-lg prose-purple min-w-full flex flex-col items-center">
              <div className="p-10 min-w-[70%] max-w-[70%] ">
                <MDXRemote source={content.content} />
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Related Content Section (if exists) */}
      {content.metadata.related && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-900 to-purple-600 bg-clip-text text-transparent">
              Related Content
            </h2>
            {/* Add related content cards here */}
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
