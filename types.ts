export interface Article {
  id: string;
  title: string;
  subtitle: string;
  author: string | null;
  email: string | null;
  content: {
    image: {
      desktop_image_path: string;
      image_mobile_path: string;
    };
  };
  slug: string;
  schedulePublication: string | null;
  articleBody: string;
  status: string;
  isAward: boolean;
  metadata: any;
  pageBgColor: string;
  articleLayoutStruct: any;
  created_at: string;
  updated_at: string;
  editorialId: string;
  static_page_id?: string;
  editorialName?: string;
  links?: Array<{
    title: string;
    url: string;
  }>;
  articleEstimatedReadTime?: string;
  isArticleLive?: boolean;
  editorial: {
    id: string;
    title: string;
    description: string;
    slug: string;
  };
}

export interface Template5050Props {
  descriptions: string[];
  headingsProps?: {
    fontSize: string | number;
    fontWeight: string | number;
    transform: string;
  };
}

export interface BlockConfig {
  layout: string;
  columns: number[];
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
  config: BlockConfig;
  template50?: {
    descriptions?: string[];
    headingsProps?: {
      fontSize: string | number;
      fontWeight: string | number;
      transform: string;
    };
  };
  blockTitle?: string;
  template?: string;
  articleId?: string | null;
  id?: string;
  created_at?: string;
  updated_at?: string;
  templateSlot100FeaturedRelatedProps?: {
    blockSubject: string;
    bgColor: string;
    blockSubjectColor: string;
    articleTitleColor: string;
    blockBorderRadius: string;
  };
  editorialObject?: {
    id: string;
    title: string;
    description: string;
    slug: string;
  };
}
export interface EditorialProps {
  editorial: {
    id: string;
    title: string;
    description: string;
    slug: string;
    articles: Article[];
  };
}
export interface PageBlockProps {
  blocksData: BlockData[];
}

export type PageProps = {
  id: string;
  title: string;
  slug: string;
  page_template: string;
  created_at: string;
  updated_at: string;
};

export type SiteProps = {
  createSlug: PageProps[];
  siteData: BlockData[];
  editorialProps?: EditorialProps[];
};
