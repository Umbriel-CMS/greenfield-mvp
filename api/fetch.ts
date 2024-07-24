import { Article, BlockData } from "@app/types";
import axios from "axios";

const loadPages = async (): Promise<any[]> => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_UMBRIEL_API}/listPages`
    );
    return data;
  } catch (err) {
    console.error("Error loading pages:", err);
    return [];
  }
};

const receivePageBlocks = async (pageId: string): Promise<BlockData[]> => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_UMBRIEL_API}/page-blocks/${pageId}`
    );
    return data;
  } catch (err) {
    console.error("Error loading page blocks:", err);
    return [];
  }
};

const receivePageBlocksByEditorialId = async (
  editorialId: string
): Promise<BlockData[]> => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_UMBRIEL_API}/page-blocks/editorial/${editorialId}`
    );

    // Fetch detailed articles data if not included
    const articleIds = data.flatMap(
      (block: BlockData) => block.blocksData.centerMiddle.articles
    );
    // @ts-ignore
    const uniqueArticleIds = [...new Set(articleIds)];

    const articlesData = await Promise.all(
      uniqueArticleIds.map((id) =>
        axios.get<Article>(
          `${process.env.NEXT_PUBLIC_UMBRIEL_API}/articles/${id}`
        )
      )
    );

    const articles = articlesData.map((response) => response.data);

    // Replace article IDs with article data
    const detailedBlocksData = data.map((block: BlockData) => {
      const detailedArticles = block.blocksData.centerMiddle.articles.map(
        // @ts-ignore
        (id) => articles.find((article) => article.id === id)
      );
      return {
        ...block,
        blocksData: {
          ...block.blocksData,
          centerMiddle: {
            ...block.blocksData.centerMiddle,
            articles: detailedArticles,
          },
        },
      };
    });

    return detailedBlocksData;
  } catch (err) {
    console.error("Error loading page blocks:", err);
    return [];
  }
};

export { loadPages, receivePageBlocks, receivePageBlocksByEditorialId };
