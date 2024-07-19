/* eslint-disable react/no-unescaped-entities */
import { type ReactElement } from 'react';
import Image from 'next/image';

export default function Header(): ReactElement {
  return (
    <header>
      {/* Top Bar */}
      <div className="flex justify-between items-center py-2 px-4 bg-gray-100 text-xs md:text-sm">
        <div className="flex items-center space-x-2">
          <span>Friday, July 12, 2024</span>
          <span>|</span>
          <span>Today's Paper</span>
        </div>
        <div>
          <span>S&P 500 +0.55%</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="flex flex-col md:flex-row justify-between items-center py-4 px-4">
        {/* Left Links */}
        <nav className="flex space-x-4 text-xs md:text-sm">
          <a href="#" className="hover:underline">U.S.</a>
          <a href="#" className="hover:underline">INTERNATIONAL</a>
          <a href="#" className="hover:underline">CANADA</a>
          <a href="#" className="hover:underline">ESPAÑOL</a>
          <a href="#" className="hover:underline">中文</a>
        </nav>

        {/* Logo */}
        <div className="flex-grow flex justify-center py-4 md:py-0">
          <Image
            src="/greenfield.svg"
            alt="Greenfield Times"
            className="h-10"
            priority={true}
            width={0}
            height={0}
            style={{ width: 'auto', height: 'auto' }}
          />
        </div>

        {/* Right Links */}
        <div className="flex space-x-4 items-center py-2 md:py-0">
          <button className="bg-blue-500 text-white px-4 py-2 rounded text-xs md:text-sm">SUBSCRIBE FOR $0.25/WEEK</button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded text-xs md:text-sm">LOG IN</button>
        </div>
      </div>

      {/* Sub Menu */}
      <div className="flex justify-center py-2 px-4">
        <nav className="flex flex-wrap justify-center space-x-2 md:space-x-4 text-xs md:text-sm">
          <a href="#" className="hover:underline">U.S.</a>
          <a href="#" className="hover:underline">World</a>
          <a href="#" className="hover:underline">Business</a>
          <a href="#" className="hover:underline">Arts</a>
          <a href="#" className="hover:underline">Lifestyle</a>
          <a href="#" className="hover:underline">Opinion</a>
          <a href="#" className="hover:underline">Audio</a>
          <a href="#" className="hover:underline">Games</a>
          <a href="#" className="hover:underline">Cooking</a>
          <a href="#" className="hover:underline">Wirecutter</a>
          <a href="#" className="hover:underline">The Athletic</a>
        </nav>
      </div>
      <div className='border-y border-black mb-1'></div>
      <div className='border-y border-black mb-1'></div>
    </header>
  );
}
