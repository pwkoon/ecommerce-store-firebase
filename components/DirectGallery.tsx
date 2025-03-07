"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";

function DirectGallery() {
  const t = useTranslations("DirectGallery");

  return (
    <>
      <div className="bg-lightWhite h-100 grid sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-10 p-10 md:p-44">
        <div className="border border-2 p-2 font-bold text-xl text-center">
          <Link href={"/"}>
            <h1>GUAVA</h1>
            <h1>FARM.</h1>
          </Link>
        </div>
        <div className="h-[300px] overflow-hidden cursor-pointer">
          <Image
            src={"/images/review.avif"}
            width={500}
            height={400}
            alt="farmer pic"
            className="h-[300px] object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
        </div>
        <div className="h-[300px] overflow-hidden cursor-pointer">
          <Image
            src={"/images/review.avif"}
            width={500}
            height={400}
            alt="farmer pic"
            className="h-[300px] object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
        </div>
        <div className="h-[300px] overflow-hidden cursor-pointer">
          <Image
            src={"/images/review.avif"}
            width={500}
            height={400}
            alt="farmer pic"
            className="h-[300px] object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
        </div>
        <div className="h-[300px] overflow-hidden cursor-pointer">
          <Image
            src={"/images/review.avif"}
            width={500}
            height={400}
            alt="farmer pic"
            className="h-[300px] object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
        </div>
        <div className="h-[300px] overflow-hidden cursor-pointer">
          <Image
            src={"/images/review.avif"}
            width={500}
            height={400}
            alt="farmer pic"
            className="h-[300px] object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
        </div>
        <div className="h-[300px] overflow-hidden cursor-pointer">
          <Image
            src={"/images/review.avif"}
            width={500}
            height={400}
            alt="farmer pic"
            className="h-[300px] object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
        </div>
        <div className="relative bg-gallery bg-cover h-[300px] flex items-center justify-center">
          {/* Background Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Content */}
          <Link
            href={"/gallery"}
            className="font-bold font-inria relative z-10 text-xl text-center text-white"
          >
            MORE GALLERY
          </Link>
        </div>
      </div>
    </>
  );
}

export default DirectGallery;
