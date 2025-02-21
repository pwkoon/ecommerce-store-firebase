"use client";

import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";

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

  const t = useTranslations("Gallery");

  const setAsPrimary = (id: number) => {
    setProductIds((prevIds) => {
      const currentProductId = primaryProduct;
      return [...prevIds.filter((x) => x !== id), currentProductId];
    });
    setPrimaryProduct(id);
  };

  return (
    <>
      <div className="bg-lightWhite p-5 text-aboutDark font-bold text-7xl text-center">
        <Link href={"/"}>Guava Farm&apos;s {t("title")}</Link>
      </div>
      <div className="h-100 bg-lightWhite p-5">
        <div className="container">
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
      </div>
    </>
  );
};

export default Gallery;
