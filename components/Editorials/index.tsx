import { BlockData, PageProps } from "@app/types";
import Header from "@app/components/ArticleHeader";
import { PageBlock } from "@umbriel/components";
import Footer from "../Footer";

interface IEditorialDataProps {
  data: BlockData[];
  pageProps: PageProps;
}

const Editorials = ({ data, pageProps }: IEditorialDataProps) => {
  console.log("editorials data props", { data });

  const isValidBlock = (block: BlockData) =>
    block.blockPosition !== "sidebar" &&
    block.blocksData.centerMiddle.articles.length > 0;

  const sidebarBlocks = data.filter(
    (block) => block.blockPosition === "sidebar"
  );

  return (
    <>
      <Header />
      <div className="min-h-[81px]"></div>
      <div className="container mx-auto px-4">
        <h1 className="font-lora text-[#121212] text-[44px] font-[400px]">
          {pageProps.title}
        </h1>
        <div className="border-b border-[#DFDFDF] w-full" />
        <div className="flex flex-col lg:flex-row mt-4 space-y-4 lg:space-y-0 lg:space-x-6">
          <div className="flex-1 max-w-[1040px] mx-auto">
            {data.filter(isValidBlock).map((block, index) => (
              <PageBlock key={index} blocksData={[block]} />
            ))}
          </div>
          {sidebarBlocks.length > 0 && (
            <div className="sidebar-wrapper flex flex-col">
              <div className="sidebar w-full lg:w-[400px] min-w-[240px] pl-6 space-y-6 border-l border-[#DFDFDF]">
                {sidebarBlocks.map((block, index) => (
                  <PageBlock key={index} blocksData={[block]} />
                ))}
              </div>
            </div>
          )}
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

export default Editorials;
