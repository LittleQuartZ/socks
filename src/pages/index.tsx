import { type NextPage } from "next";
import Head from "next/head";

import { Inter } from "next/font/google";
import { ModeToggle } from "@/components/mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, MessageSquare } from "lucide-react";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Socks</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${inter.variable} min-h-screen`}>
        <header className="sticky top-0 z-10 flex items-center border-b px-8 py-4">
          <h1 className="text-xl font-bold">Socks</h1>
          <ModeToggle className="ml-auto" />
        </header>
        <main className="flex flex-col p-4">
          <div className="rounded border p-4">
            <div className="flex items-center gap-2 border-b border-muted/50 pb-2">
              <Avatar>
                <AvatarFallback>SH</AvatarFallback>
              </Avatar>
              <div className="pb-1">
                <h1 className="font-medium">adan</h1>
                <h2 className="text-sm text-foreground/50">@cupumabadan</h2>
              </div>
            </div>
            <p className="rounded bg-muted/50 px-4 py-3 text-base">
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
              sint cillum sint consectetur cupidatat.
            </p>
            <div className="mt-2 flex gap-2">
              <Button variant="ghost" size="icon">
                <Heart />
              </Button>
              <Button variant="ghost" size="icon">
                <MessageSquare />
              </Button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
