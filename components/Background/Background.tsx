import Image from "next/image";

interface BackgroundProps {
  src: string; // The image source
  alt?: string; // Optional alt text
  className?: string; // Optional Tailwind or CSS class
}

export default function Background({
  src,
  alt = "Background",
}: BackgroundProps) {
  return (
    <Image
      alt={alt}
      src={src}
      quality={100}
      fill
      style={{ objectFit: "cover" }}
    />
  );
}
