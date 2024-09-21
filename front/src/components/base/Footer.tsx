import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="p-6 bg-gray-900 text-white">
      <div className="flex justify-between">
        <div>
          <div>© 2024 ChatApp. All rights reserved.</div>
          <div className="space-x-4 mt-4">
            <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:underline">Terms of Service</Link>
          </div>
        </div>
        <div className="space-y-4">
          <Input
            placeholder="Subscribe to our newsletter"
            className="bg-gray-800 border-none"
          />
          <Button>Join Newsletter</Button>
        </div>
      </div>
    </footer>
  );
}