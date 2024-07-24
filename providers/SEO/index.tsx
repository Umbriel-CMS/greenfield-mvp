import Head from "next/head";
import { ReactNode } from "react";

interface Props {
  slugData?: any;
  children?: ReactNode;
  customPageTitle?: string;
}

const Seo = ({ children, slugData, customPageTitle }: Props) => {
  console.log(slugData);

  const page = slugData?.[0];

  const canonicalUrlArticles =
    typeof window !== "undefined"
      ? `${window.location.origin}/${slugData.editorial?.slug}/${slugData.slug}`
      : "";

  const canonicalUrlPageData =
    typeof window !== "undefined"
      ? `${window.location.origin}/${page?.slug}/${page?.slug}`
      : "";

  return (
    <>
      <Head>
        <title>{customPageTitle || page?.title || slugData.title}</title>
        <meta name="next-head-count" content="4" />
        <meta
          name="description"
          content={page?.meta_description || slugData.subtitle}
        />
        <meta name="title" content={slugData.title || ""} />
        {slugData.content && (
          <meta
            itemProp="image"
            content={slugData.content.image.desktop_image_path || ""}
          />
        )}
        <link
          rel="canonical"
          href={canonicalUrlPageData || canonicalUrlArticles}
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg"
          color="#5bbad5"
        ></link>
        <meta name="keywords" content={page?.meta_keywords || ""} />
      </Head>
      {children}
    </>
  );
};

export default Seo;
