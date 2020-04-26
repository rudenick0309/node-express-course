const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const mockUserData = [{ name: "Mark" }, { name: "Jill" }];

app.get("/users", function (req, res) {
  res.json({
    success: true,
    message: "successfully got users. Nice! yeah, this is a my pieces",
    users: mockUserData,
  });
});

app.get("/users/:id", function (req, res) {
  console.log(req.params.id);
  res.json({ success: true, message: "got one user", user: req.params.id });
  // res.json의 매개변수는 무조건 객체가 들어가야 하네, 그냥 문자열 넣으니까 crash 발생.
});

app.post("/login", function (req, res) {
  const username = req.body.username; // req의 요청을 body 메소드로 받아오는 것이라고 보면 되나.
  const password = req.body.password; // 이렇게 작성하기 위해선, 클라이언트 쪽에서 id와 pw를 넘겨줬단 얘기겠지

  const mockUsername = "billyTheKid";
  const mockPassword = "superSecret";

  if (username === mockUsername && password === mockPassword) {
    res.json({
      success: true,
      message: "you passed it",
      token: "encrypted token goes here",
    });
  } else {
    res.json({ success: "adsf", message: "you have to your id and pw" });
  }
});

app.listen(8000, function () {
  console.log("server is running, my version");
});
