import React, { useState } from "react";
import { Container, Input, Button } from "./Login.style";
import axios from "axios";

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (id === "" || password === "") {
      alert("아이디와 비밀번호를 모두 입력해주세요.");
      return;
    }

    setLoading(true);

    axios
      .post("/user/login", { id, pw: password })
      .then((response) => {
        const data = response.data.result;
        console.log(response.data.message);
        console.log(`userId: ${data.userId}, username: ${data.username}`);
      })
      .catch((error) => {
        // 404 Error : 아이디 에러
        // 400 Error : 비밀번호 에러
        console.log("에러:", error.response.data.message);
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      });
  };

  return (
    <Container>
      <Input type="text" placeholder="아이디" value={id} onChange={(e) => setId(e.target.value)} />
      <Input type="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button onClick={handleLogin} disabled={loading}>
        로그인
      </Button>
      {loading && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ color: "white" }}>Loading...</p>
        </div>
      )}
    </Container>
  );
}

export default Login;
