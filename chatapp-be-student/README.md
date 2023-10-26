
### [ 필요한 개념 ]
- express (라이브러리) : node.js로 server 구축
- mongoose (데이터베이스 라이브러리) : MongoDB 데이터베이스
- cors dotenv http (cors : front back 통신 연결 도와주는 라이브러리 / dotenv : 내가 설치한 환경변수 가져오기 / http : http server - WebSocekt 올릴 예정)
***
1. 백엔드 세팅
   - chatapp-be-student/Models/user,chat.js: 데이터베이스(userInfo, chatMessage) 세팅
   - chatapp-be-student/index(BE),app(FE).js 웹소켓 세팅
   - +.env(환경설정 세팅)
2. 프론트엔드 세팅 : 웹소켓 세팅
   - chatapp-client/src/server.js
   - App.js에 import
3. 백엔드 프론트엔드 연결 테스트
   - chatapp-be-student/utils/io.js
   - index.js와 관련
4. 유저 로그인
5. 메세지 주고받기

