import { GetServerSideProps } from "next";
import { PageBlock } from "@umbriel/components";
import { BlockData, SiteProps } from "../types";
import Header from "@app/components/Header";
import Footer from "@app/components/Footer";
import { loadPages, receivePageBlocks } from "@app/api/fetch";
import { ReactElement } from "react";
import dynamic from "next/dynamic";

const SeoProvider = dynamic(() => import("@app/providers/SEO"));

const HomePage = ({
  createSlug,
  siteData,
  editorialProps,
}: SiteProps): ReactElement => {
  if (typeof window !== undefined) {
    console.log("[SiteDataProps]", siteData);
  }

  const sidebarBlocks = siteData.filter(
    (block) => block.blockPosition === "sidebar"
  );

  const pageTitle =
    createSlug[0]?.slug === "umbriel-pageblock"
      ? "The Greenfield Times"
      : "Default Title";

  return (
    <SeoProvider slugData={createSlug} customPageTitle={pageTitle}>
      <div className="container mx-auto px-4">
        {/** @ts-ignore  */}
        <Header editorial={editorialProps} />
        <div className="flex flex-col lg:flex-row mt-4 space-y-4 lg:space-y-0 lg:space-x-6">
          <div className="flex-1 max-w-[1040px] mx-0">
            {siteData.map(
              (block, index) =>
                block.blockPosition !== "sidebar" && (
                  <PageBlock key={index} blocksData={[block]} />
                )
            )}
          </div>
          {sidebarBlocks.length > 0 && (
            <div className="sidebar w-full lg:w-[calc(100%-1040px)] min-w-[240px] pl-6 space-y-6 mx-auto lg:mx-0">
              {sidebarBlocks.map((block, index) => (
                <PageBlock key={index} blocksData={[block]} />
              ))}
            </div>
          )}
        </div>
        <div className="mt-6">
          <div className="twoBorderDivider1"></div>
          <div className="twoBorderDivider2"></div>
        </div>
        <Footer />
      </div>
    </SeoProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slugFromURL = "umbriel-pageblock";

  try {
    const [pagesData, siteData, editorials] = await Promise.all([
      loadPages(),
      receivePageBlocks(slugFromURL),
      fetch(`${process.env.NEXT_PUBLIC_UMBRIEL_API}/editorials`).then((res) =>
        res.json()
      ),
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
        editorialProps: editorials.editorials || [],
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { notFound: true };
  }
};

export default HomePage;
