"user client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import Image from "next/image";
import { signIn } from "next-auth/react";

// const handleLogin = async () => {
//   signIn("google", {
//     callbackUrl: "/dashboard",
//     redirect: true,
//   });
// };

export default function LoginModal() {
  const handleLogin = async () => {
    signIn("google", {
      callbackUrl: "http://localhost:3000/dashboard",
      redirect: true,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-black text-white hover:bg-gray-800 rounded-t rounded-b">
          Getting start
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white p-6 border border-gray-300 rounded-lg shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl">Welcome to ChatApp</DialogTitle>
          <DialogDescription>
            ChatApp allows you to easily generate secure chat links and initiate
            conversations within moments.
          </DialogDescription>
        </DialogHeader>
        <Button variant="outline" onClick={handleLogin}>
          <Image
            src="/images/google.png"
            className=" mr-4"
            width={25}
            height={25}
            alt="google"
          />
          Continue with Google
        </Button>
      </DialogContent>
    </Dialog>
  );
}
