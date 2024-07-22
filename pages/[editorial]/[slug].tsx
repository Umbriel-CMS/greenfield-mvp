import { useRouter } from "next/router";
import { Article } from "@app/types";
import ArticleHeader from "@app/components/ArticleHeader";
import dynamic from "next/dynamic";

const ArticleComponent = dynamic(() => import('@app/components/Article'), { ssr: true })
const SeoProvider = dynamic(() => import('@app/providers/SEO'))

interface ArticlePageProps {
  article: Article;
}

const ArticlePage = ({ article }: ArticlePageProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full">
     <SeoProvider slugData={article}>
      <ArticleHeader />
      <ArticleComponent {...article}/>
     </SeoProvider>
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_UMBRIEL_API}/list-articles`);
  const data = await res.json();
  const articles = data.articles;

  const paths = articles.map((article: Article) => ({
    params: { editorial: article.editorial?.slug, slug: article.slug },
  }));

  return { paths, fallback: true };
}
interface Params {
  params: {
    editorial: string;
    slug: string;
  };
}

interface StaticPropsResult {
  props: {
    article: Article;
  };
  revalidate: number;
  notFound?: boolean;
}

export async function getStaticProps({ params }: Params): Promise<StaticPropsResult> {
  const { editorial, slug } = params;

  console.log('Fetching article:', editorial, slug); 

  const res = await fetch(`${process.env.NEXT_PUBLIC_UMBRIEL_API}/articles/${editorial}/${slug}`);
  const article: Article = await res.json();


  if (!article) {
    //@ts-ignore
    return {
      notFound: true,
    };
  }

  return {
    props: {
      article,
    },
    revalidate: 10,
  };
}

export default ArticlePage;
