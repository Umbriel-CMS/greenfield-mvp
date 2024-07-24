import { receivePageBlocksByEditorialId } from "@app/api/fetch";
import { BlockData, PageProps } from "@app/types";
import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";

const SeoProvider = dynamic(() => import("@app/providers/SEO"));
const EditorialProvider = dynamic(() => import("@app/components/Editorials"));

interface IAppSlugProps {
  pages: PageProps;
  data: BlockData[];
}

const AppSlug = ({ pages, data }: IAppSlugProps) => {
  if (typeof window !== undefined) {
    console.log("[AppSlugProps]", data, pages);
  }

  return (
    <SeoProvider slugData={pages}>
      <EditorialProvider data={data} pageProps={pages} />
    </SeoProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = Array.isArray(context.params?.slug)
    ? context.params.slug[0]
    : context.params?.slug;

  try {
    const editorialsResponse = await fetch(
      `${process.env.NEXT_PUBLIC_UMBRIEL_API}/editorials`
    );
    const editorialsData = await editorialsResponse.json();

    const getCurrentPage = editorialsData.editorials.find(
      (page: any) => page.slug === slug
    );

    if (!getCurrentPage) {
      return { notFound: true };
    }

    const pageBlocksData = await receivePageBlocksByEditorialId(
      getCurrentPage.id
    );

    const enhancedPageBlocksData = pageBlocksData.map((block: BlockData) => {
      block.blocksData.centerMiddle.articles =
        block.blocksData.centerMiddle.articles.map((article: any) => {
          return {
            ...article,
            editorial: block.editorialObject || null,
          };
        });
      return block;
    });

    return {
      props: {
        pages: getCurrentPage || null,
        data: enhancedPageBlocksData || [],
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { notFound: true };
  }
};

export default AppSlug;
