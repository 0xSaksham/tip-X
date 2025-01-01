"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gray-100 dark:bg-black">
      {/* Support button on far left */}
      <div className="absolute top-4 left-4">
        <Button className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white">
          <a
            href="https://ko-fi.com/0xsaksham"
            target="_blank"
            rel="noopener noreferrer"
          >
            Support me on Ko-fi
          </a>
        </Button>
      </div>

      {/* Theme toggle on far right */}
      <div className="absolute top-4 right-4">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5 text-yellow-500" />
          ) : (
            <Moon className="h-5 w-5 text-gray-700" />
          )}
        </button>
      </div>

      <main className="flex flex-col gap-8 row-start-2 items-center">
        <div className="flex gap-4 items-center flex-col sm:flex-row text-gray-900 dark:text-white">
          Welcome to Tip X
        </div>
        <Button className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white">
          <a href="/claim">Claim your tips here!</a>
        </Button>
      </main>

      <footer className="row-start-3 flex gap-1 flex-wrap items-center justify-center text-gray-900 dark:text-white">
        TipX is a hobby project of
        <a
          href="https://github.com/0xSaksham"
          className="font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 transition-colors duration-200 underline-offset-2 hover:underline"
        >
          @0xSaksham
        </a>
        <a
          href="https://x.com/0xSaksham"
          className="ml-2 hover:opacity-80 transition-opacity"
        >
          <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-900 p-1.5 flex items-center justify-center">
            <Image
              src="/twitterx.svg"
              alt="Twitter"
              width={32}
              height={32}
              className="dark:invert"
            />
          </div>
        </a>
      </footer>
    </div>
  );
}
