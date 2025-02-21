import type { Metadata } from "next";
import Footer from "@/components/Footer";
import "./globals.css";
// import { NextIntlClientProvider } from "next-intl";
// import { getMessages } from "next-intl/server";
// import { headers } from "next/headers";

export const metadata: Metadata = {
  title:
    "Guava Farm: Fresh Guavas Direct from the Farm | Organic & Naturally Grown",
  description:
    "Experience the freshness of farm-grown guavas! 🍈 Our Guava farm produces high-quality, organic guavas using sustainable farming practices. Buy fresh guavas directly from us and enjoy their natural sweetness. Order now for farm-to-table goodness!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const headersList = await headers();
  // const locale = headersList.get("x-next-intl-locale") || "en";

  // const messages = await getMessages();
  return (
    <html lang="en">
      <body>
        {/* <NextIntlClientProvider messages={messages}> */}
        {children}
        <Footer />
        {/* </NextIntlClientProvider> */}
      </body>
    </html>
  );
}
