import { io, Socket } from "socket.io-client";
import Env from "./env";

// to create only one instance of socket
let socket: Socket;
export const getSocket = (): Socket => {
  if (!socket) {
    socket = io(Env.BACKEND_URL, {
      autoConnect: false,
    });
  }
  return socket;
};
