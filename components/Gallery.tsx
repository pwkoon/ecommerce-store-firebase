"use client";

import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
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
  const [isLaptop, setIsLaptop] = useState<boolean>(false);

  const t = useTranslations("Gallery");

  useEffect(() => {
    const handleResize = () => {
      setIsLaptop(window.innerWidth >= 1024 && window.innerWidth < 1440);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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

  return (
    <>
      <div className="bg-lightWhite p-5 text-aboutDark font-bold text-7xl text-center">
        <Link href={"/"}>Guava Farm&apos;s {t("title")}</Link>
      </div>
      <div className="h-100 bg-lightWhite p-5">
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
          <div className="flex-row justify-center p-10">
            {mockdata.images.map((image, index) => (
              <>
                <Image
                  key={index}
                  src={image.url}
                  width={400}
                  height={300}
                  alt={image.title}
                  className="max-h-[300px] object-cover mt-5"
                />
                <div className="w-auto bg-aboutDark text-darkYellow text-center">
                  {image.description}
                </div>
              </>
            ))}
          </div>
        )}
      </div>
      {/* for tablet and mobile */}
    </>
  );
};

export default Gallery;
