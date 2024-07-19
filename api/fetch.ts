import { BlockData } from "@app/types";
import axios from "axios";

const loadPages = async (): Promise<any[]> => {
  try {
    const { data } = await axios.get("http://localhost:3001/listPages");
    return data;
  } catch (err) {
    console.error("Error loading pages:", err);
    return [];
  }
};

const receivePageBlocks = async (pageId: string): Promise<BlockData[]> => {
  try {
    const { data } = await axios.get(`http://localhost:3001/page-blocks/${pageId}`);
    return data;
  } catch (err) {
    console.error("Error loading page blocks:", err);
    return [];
  }
};

export { loadPages, receivePageBlocks }

