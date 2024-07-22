import { Article as ArticleProps } from "@app/types";
import Image from "next/image";

export default function Article(props: ArticleProps) {
  if (!props) {
    throw new Error('No article data has been found')
  }
  return (
    <>
     <div className="max-w-full w-[600px] text-center md:text-left mt-[3rem] pt-[42px] sm:px-4 px-4 mx-auto">
       <div className="items-center justify-center flex flex-col w-[600px]">
       <h1 className="
          text-[1.9375rem]
          text-[#121212]
          font-lora
          leading-[2.25rem]
          italic
          font-bold
          mb-[0.85rem]
        ">
          {props.title}
        </h1>
        <p className="
          text-[1.25rem]
          text-[#363636]
          font-lora
          leading-[1.875rem]
          font-[300px]
          mb-[1.25rem]
        ">
          {props.subtitle}
        </p>
       </div>
        <div className="border-b border-[#DFDFDF] w-[600px]"/>
        <div className="flex flex-row items-start justify-start md:justify-start mt-8 sm:mt-4">
          <Image 
            src='https://static01.nyt.com/images/2018/06/13/multimedia/peter-baker/peter-baker-thumbLarge-v3.png'
            alt="Greenfield Times" 
            width={50}
            height={50}
            className="rounded-[50%] sm:w-10 sm:h-10"
          />
          <div className="flex flex-col items-start ml-2 sm:ml-2">
            <p className="
              text-[0.875rem]
              text-[#363636]
              font-colunistHeading
              leading-[1.125rem]
              font-[700px]
              mb-[1.25rem]
              justify-center
              sm:mb-[0.5rem]
            ">
              <b>By</b>: {props.author}
            </p>
            <p className="tracking-[0.01em] font-colunistHeading text-[0.875rem] mt-[-1rem] text-[#363636] sm:mt-0">
              {props.email}
            </p>
          </div>
        </div>
      </div>
      <div className="
        mt-[2.75rem]
        max-w-[1200px] 
        w-[600px]
        [&>p]:w-[560px]
        [&>p>p]:py-2
        mx-auto px-2
        [&>p]:font-bodySecondary 
        [&>p]:font-[500] 
        xl:[&>p]:text-[1.25rem] 
        xl:[&>p]:leading-[1.8625rem]
        [&>p]:text-[#363636] 
        [&>p]:mb-[0.78125rem] 
        [&>p]:break-words
        [&>p>a]:text-[#326891]
        [&>p>a:hover]:opacity-60
        [&>img]:w-full
        [&>img]:h-auto
        xs2:[&>p]:text-[1.65rem] 
        xs2:[&>p]:leading-[2.54rem]
        xs:[&>p]:text-[1.45rem] 
        xs:[&>p]:leading-[2rem]
        xs:pl-[2rem]
        xs:pr-[0px]
        xs2:pl-[2rem]
        xs2:pr-[0px]
        xs3:[&>p]:text-[1.75rem] 
        xs3:[&>p]:leading-[2.85rem]
        xs3:pl-[2rem]
        xs3:pr-[0px]
      " 
      dangerouslySetInnerHTML={{ __html: props.articleBody }}
      />
    </>
  )
}