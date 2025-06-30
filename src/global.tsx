import { Head } from "minista"
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import Content from "@/layouts/Content";
import { ReactNode } from "react";
import '@/styles';
import Banner from "@/sections/Banner";

export type Metadata = {
  children?: ReactNode;
  url?: string;
  title?: string;
  isHeaderFixed?: boolean;
}

export default function ({children, title, url, isHeaderFixed}: Metadata) {
  return (
    <>
      <Head htmlAttributes={{lang: 'en'}}>
        <title>Stream Vibe | {title}</title>
        <script
          src='/src/main.ts'
          type='module'
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="manifest"
          href="/site.webmanifest"
        />
      </Head>
      <Header
        url={url}
        isFixed={isHeaderFixed}
      />
      <Content isResetPaddingTop={isHeaderFixed}>
        {children}
        <Banner />
      </Content>
      <Footer />
    </>
  )
}
