import React from "react";
import Link from "next/link";

const IndexPage = () => (
  <div
    title="Home | URL Shortener"
    className="h-screen w-full flex flex-col items-center justify-evenly bg-green-600 text-white"
  >
    <main className="flex flex-col items-center justify-center">
      <h1 className="text-4xl mb-8 text-center">
        A simple URL Shortner ⚡ Easy to use !
      </h1>
      <Link href="/generate">
        <a className="button">Start to Shorten URLs</a>
      </Link>
    </main>
  </div>
);

export default IndexPage;
