import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <Image src="/images/404.svg" width={500} height={500} alt="404 error" />
      <Link href="/">
        <Button className="bg-black text-white hover:bg-gray-800 rounded-xl">
          Back to home
        </Button>
      </Link>
    </div>
  );
}
