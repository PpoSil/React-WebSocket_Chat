// 1. BackEnd Setting: WebSocket Setting

// http를 통한 서버 생성
const { createServer } = require("http");

// app 들고오기
const app = require("./app");

// WebSocket 들고 올 서버 생성
const { Server } = require("socket.io");

// process.env 사용하니 dotenv를 불러와줘야 함
require("dotenv").config();

// httpServer 만들 것임 -> 데이터베이스 연결 부분을 올릴 것
const httpServer = createServer(app);

// WebSocket(통신을 위함)에 httpServer 올릴 것
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000", // fe주소
  },
});

// io를 알고 있는 index.js에서 io.js에 io를 보내기 위해 utils/io 불러오기
// function에 io를 return
require("./utils/io")(io);
// server 켜놔야 함
httpServer.listen(process.env.PORT, () => {
  console.log("server listening on port", process.env.PORT);
});
