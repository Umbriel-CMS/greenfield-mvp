import { type ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import { IHeaderProps } from "./types";

export default function Header({ editorial = [] }: IHeaderProps): ReactElement {
  if (!editorial.length) {
    throw new Error("Cannot find any editorials");
  }

  const today = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = today.toLocaleDateString("en-US", options);

  return (
    <header className="container mx-auto px-4">
      {/* Top Bar */}
      {/* Main Header */}
      <div className="flex justify-between items-center pb-4 pt-1 w-full">
        <nav className="hidden md:flex space-x-6 text-xs md:text-sm justify-between items-center">
          <a href="#" className="hover:underline text-[0.6875rem]">
            U.S.
          </a>
          <a href="#" className="hover:underline text-[0.6875rem]">
            INTERNATIONAL
          </a>
          <a href="#" className="hover:underline text-[0.6875rem]">
            CANADA
          </a>
          <a href="#" className="hover:underline text-[0.6875rem]">
            ESPAÑOL
          </a>
          <a href="#" className="hover:underline text-[0.6875rem]">
            中文
          </a>
        </nav>
        {/* Left Links */}

        {/* Right Links */}
        <div className="hidden md:flex space-x-4 items-center">
          <button className="bg-[#567b95] border border-black text-white font-semibold px-4 py-2 rounded text-xs md:text-[11px]">
            SUBSCRIBE FOR $0.25/WEEK
          </button>
          <button className="bg-[#567b95] border border-black text-white font-semibold px-4 py-2 rounded text-xs md:text-[11px]">
            LOG IN
          </button>
        </div>
      </div>

      {/* Logo */}
      <div className="flex justify-between items-center w-full">
        <div className="hidden md:flex flex-col">
          <span className="text-[13px] leading-[120%]">{formattedDate}</span>
          <span className="text-[13px] leading-[120%] mt-2">Today’s Paper</span>
        </div>
        <Link href="/" className="hover:opacity-80">
          <Image
            src="/greenfield.svg"
            alt="Greenfield Times"
            className="h-12"
            priority={true}
            width={0}
            height={0}
            style={{ width: "100%", height: "auto", maxWidth: "485px" }}
          />
        </Link>
        <span className="hidden md:flex text-[#DFDFDF] text-[11px]">
          S&P 500 +0.55% ↑
        </span>
      </div>

      {/* Sub Menu */}
      <div className="flex justify-center py-4">
        <nav className="flex flex-wrap justify-center space-x-2 md:space-x-4 text-xs md:text-sm">
          {editorial &&
            editorial.map((editorial) => (
              <Link
                href={`/${editorial.slug}`}
                key={editorial.id}
                className="hover:underline px-2 md:px-4"
              >
                {editorial.title}
              </Link>
            ))}
        </nav>
      </div>
      <div className="border-y border-black mb-1"></div>
      <div className="border-y border-black mb-1"></div>
    </header>
  );
}
