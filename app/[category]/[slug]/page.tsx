import { notFound } from 'next/navigation';
import { glob } from 'glob';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Footer from '@/app/components/footer';
import Megamenu from '@/app/components/megamenu';

type Props = {
  params: {
    category: string;
    slug: string;
  };
};

// Helper function to get MDX content
async function getMdxContent(category: string, slug: string) {
  const filePath = path.join(process.cwd(), 'content', category, `${slug}.mdx`);
  
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    return {
      metadata: data,
      content: content
    };
  } catch (error) {
    return null;
  }
}

// Generate static paths by scanning the content directory
export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), 'content');
  const categories = fs.readdirSync(contentDir).filter(
    file => fs.statSync(path.join(contentDir, file)).isDirectory()
  );

  const paths: { category: string; slug: string }[] = [];

  for (const category of categories) {
    const files = await glob('*.mdx', { cwd: path.join(contentDir, category) });
    
    files.forEach(file => {
      paths.push({
        category,
        slug: file.replace('.mdx', '')
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
    <main>
        <Megamenu />
      {/* Hero Section with Background Decoration */}
      <section className="relative py-36 bg-indigo-50 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500 rounded-full blur-[100px] opacity-20"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full blur-[100px] opacity-20"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <header className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-black to-black/50 bg-clip-text text-transparent">
              {content.metadata.title}
            </h1>
            {content.metadata.description && (
              <p className="text-xl text-gray-600">
                {content.metadata.description}
              </p>
            )}
          </header>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="backdrop-blur-xl bg-white/10 p-8 rounded-2xl border border-gray-100 shadow-xl">
                <MDXRemote source={content.content} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Content Section (optional) */}
      {content.metadata.related && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
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