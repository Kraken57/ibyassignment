import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="flex-1 flex flex-col items-center justify-center text-center p-12 bg-gradient-to-b from-gray-50 to-white">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
        Create Chat Links Instantly for Effortless Communication
      </h1>
      <p className="text-xl text-gray-600 mb-8">
      With ChatApp, generating secure chat links and initiating conversations takes just seconds.
      </p>
      <Link href="/dashboard">
        <Button size="lg" className="animate-pulse ">
          Start Chatting
        </Button>
      </Link>

      <div className="mt-12 w-full max-w-5xl flex justify-center">
        {/* Placeholder for Illustration/Image */}
        <Image
          src="/images/conversation.svg"
          alt="Illustration"
          width={500} // Replace with the appropriate width
          height={500} // Replace with the appropriate height
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}
