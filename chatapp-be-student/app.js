// 1. FrontEnd Setting: WebSocket Setting

// express로 서버 생성
const express = require("express");

// 데이터베이스 연결
const mongoose = require("mongoose");

// env 가져오기
require("dotenv").config();

// 프론트엔드의 접근 허가를 위함
const cors = require("cors");

// express로 앱 생성
const app = express();
app.use(cors());

console.log(process.env.DB);
// mongoose.connect("데이터베이스 주소", {기타 등등 옵션})
// '주소'같은건 중요한 변수! 환경에 따라 변하기도 하니까.
// 따로 저장하자! -> .env에 저장!!
mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connetced to database"));

module.exports = app;
