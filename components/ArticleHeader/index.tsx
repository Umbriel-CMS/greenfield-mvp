import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex justify-center items-center p-4 h-[42px] border-b border-[#DFDFDF] fixed top-0 left-0 right-0 bg-white z-50">
      <div className="flex justify-between items-center w-full max-w-[1200px]">
        <div className="flex items-center space-x-2 md:space-x-4">
          <button className="text-2xl hover:opacity-60 transition-opacity">
            <Image
              src="/open-menu-icon.svg"
              alt="Greenfield Times"
              width={35}
              height={34}
            />
          </button>
          <button className="text-2xl hover:opacity-60 transition-opacity">
            <Image
              src="/search-mob.svg"
              alt="Greenfield Times"
              width={35}
              height={34}
            />
          </button>
        </div>
        <Link href="/" className="hover:opacity-80">
          <Image
            src="/greenfield.svg"
            alt="Greenfield Times"
            className="h-12 hidden md:block"
            priority={true}
            width={0}
            height={0}
            style={{ width: "100%", height: "auto", maxWidth: "194.37px" }}
          />
        </Link>
        <div className="flex space-x-2 md:space-x-4">
          <button className="bg-[#567b95] border border-black text-white font-semibold px-2 py-1 rounded text-xs md:text-[11px] md:px-4 md:py-2">
            SUBSCRIBE FOR $0.25/WEEK
          </button>
          <button className="bg-[#567b95] border border-black text-white font-semibold px-2 py-1 rounded text-xs md:text-[11px] md:px-4 md:py-2">
            LOG IN
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
