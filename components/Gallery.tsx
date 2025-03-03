"use client";

import React from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { useEffect, useState } from "react";
import mockdata from "../data.json";
import Image from "next/image";

interface ProductImageProps {
  id: number;
  onExpand: (id: number) => void;
}

const ProductImage: React.FC<ProductImageProps> = ({ id, onExpand }) => {
  return (
    <motion.img
      src={`/images/guava-${id}.jpg`}
      alt="Product"
      onClick={() => onExpand(id)}
      className="related-product-image"
      layoutId={`product-${id}`}
    />
  );
};

const Gallery: React.FC = () => {
  const [productIds, setProductIds] = useState<number[]>([1, 2, 3, 5, 6]);
  const [primaryProduct, setPrimaryProduct] = useState<number>(4);
  const [isLaptop, setIsLaptop] = useState<boolean | null>(null);

  const t = useTranslations("Gallery");

  useEffect(() => {
    const detectScreenSize = () => {
      setIsLaptop(window.innerWidth >= 1440 && window.innerWidth < 2650);
    };
    detectScreenSize();
    window.addEventListener("resize", detectScreenSize);
    return () => window.removeEventListener("resize", detectScreenSize);
  }, []);

  const setAsPrimary = (id: number) => {
    setProductIds((prevIds) => {
      const currentProductId = primaryProduct;
      return [...prevIds.filter((x) => x !== id), currentProductId];
    });
    setPrimaryProduct(id);
  };

  const primaryDescription = mockdata.gallery.find((item) =>
    Object.keys(item).includes(`description-${primaryProduct}`)
  );

  const descriptionText = primaryDescription
    ? primaryDescription[
        `description-${primaryProduct}` as keyof typeof primaryDescription
      ]
    : "No description available";

  if (isLaptop === null) {
    return null; // Prevent initial incorrect rendering
  }

  return (
    <>
      <div className="bg-lightWhite p-5 text-aboutDark font-bold text-4xl md:text-7xl text-center">
        <Link href={"/"}>Guava Farm&apos;s {t("title")}</Link>
      </div>
      <div className="h-auto 2xl:h-screen bg-lightWhite p-5 flex justify-center">
        {isLaptop ? (
          <div className="container p-20">
            <LayoutGroup>
              <main className="primary-container">
                <AnimatePresence>
                  <motion.img
                    key={primaryProduct}
                    className="primary-product-image"
                    src={`/images/guava-${primaryProduct}.jpg`}
                    alt="Primary Product"
                    layoutId={`product-${primaryProduct}`}
                  />
                  {primaryDescription && (
                    <p className="absolute text-darkYellow bg-opacity-75 bg-aboutDark w-full p-5 flex justify-center bottom-0">
                      {descriptionText}
                    </p>
                  )}
                </AnimatePresence>
              </main>
              <aside className="product-gallery">
                <AnimatePresence>
                  {productIds.map((id) => (
                    <ProductImage id={id} key={id} onExpand={setAsPrimary} />
                  ))}
                </AnimatePresence>
              </aside>
            </LayoutGroup>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-20">
            {mockdata.images.map((image, index) => (
              <div
                key={index}
                className="max-w-[400px] h-[350px] flex flex-col shadow-lg border"
              >
                <div className="flex-shrink-0 h-[250px] overflow-hidden">
                  <Image
                    src={image.url}
                    width={400}
                    height={200}
                    alt={image.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="bg-aboutDark text-darkYellow text-center flex-grow flex items-center justify-center p-2">
                  <p className="overflow-auto">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* for tablet and mobile */}
    </>
  );
};

export default Gallery;
