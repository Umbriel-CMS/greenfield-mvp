import { GetServerSideProps } from "next";
import { PageBlock } from "@umbriel/components";
import { BlockData, HomePageProps } from "../types";
import Header from "@app/components/Header";
import Footer from "@app/components/Footer";
import { loadPages, receivePageBlocks } from "@app/api/fetch";
import Head from "next/head";

const HomePage = ({ createSlug, siteData }: HomePageProps) => {
  const pageTitle = createSlug.length > 0 ? createSlug[0].title : "Default Title";

  return (
    <>
     <Head>
        <title>{pageTitle}</title>
      </Head>
      <div className="container mx-auto px-4">
        <Header />
        <div className="flex flex-col lg:flex-row mt-4 space-y-4 lg:space-y-0 lg:space-x-6">
          <div className="flex-1 max-w-[1040px]">
            {siteData.map(
              (block, index) =>
                block.blockPosition !== "sidebar" && (
                  <PageBlock key={index} blocksData={[block]} />
                )
            )}
          </div>
          <div className="sidebar w-full lg:w-[calc(100%-1040px)] min-w-[300px] border-l border-gray-400 pl-6 space-y-4">
            {siteData.map(
              (block, index) =>
                block.blockPosition === "sidebar" && (
                  <PageBlock key={index} blocksData={[block]} />
                )
            )}
          </div>
        </div>
        <div className="mt-6">
          <div className="twoBorderDivider1"></div>
          <div className="twoBorderDivider2"></div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slugFromURL = "umbriel-pageblock";

  try {
    const [pagesData, siteData] = await Promise.all([
      loadPages(),
      receivePageBlocks(slugFromURL),
    ]);

    const currentPageData = pagesData.find(
      (page: { slug: string | undefined }) => page.slug === slugFromURL
    );

    if (!currentPageData) {
      return { notFound: true };
    }

    const filteredSiteData = siteData.filter(
      (block: BlockData) => block.pageId === currentPageData.id
    );

    return {
      props: {
        createSlug: currentPageData ? [currentPageData] : [],
        siteData: filteredSiteData ? filteredSiteData : [],
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { notFound: true };
  }
};

export default HomePage;
