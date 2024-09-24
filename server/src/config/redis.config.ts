import { Redis } from "ioredis";

const redis = new Redis({
  host: "localhost54.226.154.238",
  port: 6379,
});

export default redis;
