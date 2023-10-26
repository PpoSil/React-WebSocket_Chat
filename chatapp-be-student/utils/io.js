// 통신과 관련

// const { Socket } = require("socket.io");

// io를 매개변수로 받아오기
module.exports = function (io) {
  // io와 관련된 모든 일들  // emit(): 말하기 // on(): 듣기

  // 누가 나랑 연결해줄 사람 없어~? 하면서 듣기(on())
  io.on("connection", async (socket) => {
    console.log("client is connected", socket.id);

    socket.on("disconnect", () => {
      console.log("user is disconnected");
    });
  }); // socket: 연결된 사람
};
