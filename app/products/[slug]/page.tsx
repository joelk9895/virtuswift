import fs from "fs/promises";
import path from "path";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Globe, BarChart3, CircleDollarSign } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import MegaMenu from "@/app/components/megamenu";
import Footer from "@/app/components/footer";

// Define TypeScript interfaces
interface Feature {
  icon: keyof typeof icons;
  title: string;
  content: string;
  style?: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface Product {
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  whyChoose: {
    title: string;
    features: Feature[];
  };
  faq: {
    title: string;
    questions: FAQ[];
  };
}

const icons = {
  Rocket,
  Globe,
  BarChart3,
  CircleDollarSign,
};

// Function to get all product slugs
async function getProductSlugs() {
  const productsDir = path.join(process.cwd(), "data/products");
  const filenames = await fs.readdir(productsDir);
  return filenames
    .filter((filename) => filename.endsWith(".json"))
    .map((filename) => filename.replace(".json", ""));
}

// Function to get product data
async function getProduct(slug: string): Promise<Product> {
  const filePath = path.join(process.cwd(), "data/products", `${slug}.json`);
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data) as Product;
}

// Generate static params
export async function generateStaticParams() {
  const slugs = await getProductSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Main page component
export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProduct(params.slug);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <MegaMenu />
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-grid-black" />
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-orange-200/50 to-transparent " />
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-orange-200/50 to-transparent " />

        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-gradient-to-r from-orange-500/10 to-indigo-500/10 rounded-full">
            ✨ Welcome to the future of productivity
          </div>
          <h1 className="text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-indigo-600 leading-tight mb-6">
            {product.hero.title}
          </h1>
          <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            {product.hero.subtitle}
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button className="bg-gradient-to-r from-orange-500 to-indigo-600 hover:from-orange-600 hover:to-indigo-700 text-white px-8 py-6 text-lg rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-orange-500/25">
              {product.hero.ctaPrimary}
            </Button>
            <Button
              variant="outline"
              className="px-8 py-6 text-lg rounded-xl border-2 hover:bg-gray-50 transition-all duration-200 backdrop-blur-sm bg-white/50"
            >
              {product.hero.ctaSecondary}
            </Button>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-white relative">
        <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-indigo-600 font-medium mb-4">
              Why Choose Us
            </div>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-indigo-600">
              {product.whyChoose.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {product.whyChoose.features.map((feature, index) => {
              const IconComponent = icons[feature.icon] || Rocket;
              return (
                <div
                  key={index}
                  className="opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6">
                        <div className="p-3 rounded-2xl bg-orange-50 group-hover:bg-orange-100 transition-colors duration-300">
                          <IconComponent className="w-8 h-8 text-indigo-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-3">
                            {feature.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {feature.content}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-indigo-600 font-medium mb-4">FAQ</div>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-indigo-600">
              {product.faq.title}
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {product.faq.questions.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-orange-200/30"
              >
                <AccordionTrigger className="text-xl font-semibold hover:text-orange-500 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      <Footer />
    </div>
  );
}

// Optional: Add dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProduct(params.slug);

  return {
    title: product.hero.title,
    description: product.hero.subtitle,
  };
}
