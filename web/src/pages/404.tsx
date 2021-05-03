import React from "react";
import Link from "next/link";

const Custom404 = () => (
  <div className="h-screen w-full flex-col flex justify-center items-center bg-green-600 text-white">
    <h1 className="text-5xl font-bold mb-12">
      Sorry that page doesn&apos;t exist !
    </h1>
    <Link href="/">
      <a className="button">Return Home</a>
    </Link>
  </div>
);

export default Custom404;
