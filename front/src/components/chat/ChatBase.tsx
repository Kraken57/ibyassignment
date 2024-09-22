"use client";
import { getSocket } from "@/lib/socket.config";
import React, { useEffect, useRef } from "react";
import { v4 as uuidV4 } from "uuid";
import { Button } from "../ui/button";
import { Socket } from "socket.io-client"; // Import the Socket type

export default function ChatBase({ groupId }: { groupId: string }) {
  const socketRef = useRef<Socket | null>(null); // Specify Socket type or null

  useEffect(() => {
    // Initialize socket connection with auth before connecting
    const socket = getSocket(); // Get the socket instance
    socket.auth = {
      room: groupId, // Set auth here
    };
    socketRef.current = socket.connect(); // Connect after setting auth

    // // Initialize socket connection
    // socketRef.current = getSocket().connect();

    socketRef.current.on("connect", () => {
      // console.log("Connected to server");
    });

    socketRef.current.on("message", (data) => {
      console.log("Client side message ", data);
    });

    return () => {
      socketRef.current?.disconnect(); // Clean up the socket connection
    };
  }, [groupId]);

  const handleClick = () => {
    // console.log("Hey i am clicking ..." + uuidV4());

    socketRef.current?.emit("message", { name: "Ahmad", id: uuidV4() });
  };

  return (
    <div>
      <Button
        onClick={handleClick}
        className="bg-black text-white hover:bg-gray-800 rounded-t rounded-b"
      >
        Send Message
      </Button>
    </div>
  );
}
