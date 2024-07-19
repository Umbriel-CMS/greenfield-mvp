export interface Article {
  id: string
  title: string
  subtitle: string
  author: string | null
  email: string | null
  content: {
    image: {
      desktop_image_path: string
      image_mobile_path: string
    }
  }
  slug: string
  schedulePublication: string | null
  articleBody: string
  status: string
  isAward: boolean
  metadata: any
  pageBgColor: string
  articleLayoutStruct: any
  created_at: string
  updated_at: string
  editorial: {
    id: string
    title: string
    description: string
    slug: string
  }
  links?: Array<{
    title: string
    url: string
  }>
}

export interface Template5050Props {
  descriptions: string[]
  headingsProps?: {
    fontSize: string | number
    fontWeight: string | number
    transform: string
  }
}

export interface BlockConfig {
  layout: string
  columns: number[]
}

export interface BlockData {
  blockType: string;
  blockPosition: string;
  blocksData: {
    centerMiddle: {
      articles: Article[];
    };
    components: any[];
  };
  pageId: string;
  articleId?: string;
  config: {
    layout: string;
    columns: number[];
  };
  template50?: {
    descriptions?: string[];
    headingsProps?: {
      fontSize: string | number;
      fontWeight: string | number;
      transform: string;
    };
  };
  blockTitle?: string;
  template: string;
}
export interface PageBlockProps {
  blocksData: BlockData[]
}


export type PageProps = {
  id: string;
  title: string;
  slug: string;
  page_template: string;
  created_at: string;
  updated_at: string;
};

export type HomePageProps = {
  createSlug: PageProps[];
  siteData: BlockData[];
};
