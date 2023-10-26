const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "User must type name"],
    unique: true,
  },
  token: {
    type: String,
  },
  // user가 online인지 offline인지 상태 확인
  online: {
    type: Boolean,
    default: false,
  },
});
module.exports = mongoose.model("User", userSchema);

// Schema: like 데이터 설계도 ( 내가 받을 데이터가 이렇게 생겼다!! )
