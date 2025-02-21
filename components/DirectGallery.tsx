"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

function DirectGallery() {
  const t = useTranslations("DirectGallery");

  return (
    <>
      <div className="grid grid-cols-2">
        <div className="flex justify-around h-auto items-center">
          <div className="relative h-[500px] w-full bg-gallery bg-center flex items-center justify-center">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Content */}
            <div className="relative z-10 text-center text-introWhite px-6">
              <h1 className="text-5xl font-inria font-bold drop-shadow-lg">
                <Link href={"/gallery"}>{t("Gallery")}</Link>
              </h1>
            </div>
          </div>
        </div>
        <div className="h-[500px] w-full bg-gallery bg-center bg-cover"></div>
      </div>
    </>
  );
}

export default DirectGallery;
