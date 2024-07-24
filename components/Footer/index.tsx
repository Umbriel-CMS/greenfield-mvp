/* eslint-disable react/no-unescaped-entities */
import { type ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer(): ReactElement {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <div className="col-span-1 lg:col-span-6 flex justify-center lg:justify-start">
            <Image
              src="/greenfield.svg"
              alt="Greenfield Times"
              className="mb-1"
              priority={true}
              width={0}
              height={0}
              style={{ width: "100%", height: "auto", maxWidth: 185 }}
            />
          </div>
          <div>
            <h3 className="text-[#333] text-[13px] font-bold leading-[15px]">
              News
            </h3>
            <ul className="mt-4 space-y-2">
              {[...Array(6)].map((_, index) => (
                <li
                  key={index}
                  className="text-black text-[14px] font-inter font-medium leading-[16px] hover:underline transition-all cursor-pointer"
                >
                  Home Page
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[#333] text-[13px] font-bold leading-[15px]">
              Arts
            </h3>
            <ul className="mt-4 space-y-2">
              {[...Array(6)].map((_, index) => (
                <li
                  key={index}
                  className="text-black text-[14px] font-inter font-medium leading-[16px] hover:underline transition-all cursor-pointer"
                >
                  Best Sellers Book List
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[#333] text-[13px] font-bold leading-[15px]">
              Lifestyle
            </h3>
            <ul className="mt-4 space-y-2">
              {[...Array(6)].map((_, index) => (
                <li
                  key={index}
                  className="text-black text-[14px] font-inter font-medium leading-[16px] hover:underline transition-all cursor-pointer"
                >
                  Restaurant Reviews
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[#333] text-[13px] font-bold leading-[15px]">
              Opinion
            </h3>
            <ul className="mt-4 space-y-2">
              {[...Array(6)].map((_, index) => (
                <li
                  key={index}
                  className="text-black text-[14px] font-medium leading-[16px] hover:underline transition-all cursor-pointer"
                >
                  Today's Opinion
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[#333] text-[13px] font-bold leading-[15px]">
              More
            </h3>
            <ul className="mt-4 space-y-2">
              {[...Array(6)].map((_, index) => (
                <li
                  key={index}
                  className="text-black text-[14px] font-medium leading-[16px] hover:underline transition-all cursor-pointer"
                >
                  The Learning Network
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex flex-col items-center text-center text-gray-400 text-sm">
            <div className="flex flex-wrap justify-center space-x-2 lg:space-x-4">
              {[
                "© 2024 The GreenField Company",
                "NyTCo",
                "Contact Us",
                "Accessibility",
                "Work with us",
                "Advertise",
                "T Brand Studio",
                "Your Ad Choices",
                "Privacy Policy",
                "Terms of Service",
                "Terms of Sale",
                "Site Map",
                "Help",
                "Subscriptions",
              ].map((text, index) => (
                <p
                  key={index}
                  className="text-[10px] text-[#666] hover:underline transition-all cursor-pointer"
                >
                  {text}
                </p>
              ))}
            </div>
            <Link
              href="mailto:umbrielcms@gmail.com
"
              className="mt-4 text-[10px] text-[#666] hover:underline transition-all cursor-pointer"
            >
              Made by Umbriel Engeenering
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
