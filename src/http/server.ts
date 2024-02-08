import fastify from "fastify";
import cookie from '@fastify/cookie';
import websocket from "@fastify/websocket";

import { CreatePoll } from "./routes/create-polls";
import { GetPoll } from "./routes/get-poll";
import { VoteOnPoll } from "./routes/vote-on-poll";

const app = fastify();

app.register(cookie, {
  secret: "polls-app-nlw",
  hook: "onRequest",  
})

app.register(websocket)

app.register(CreatePoll)
app.register(GetPoll)
app.register(VoteOnPoll)


app.listen({ port: 3333 }).then(() => {
  console.log("HTTP server running!")
})