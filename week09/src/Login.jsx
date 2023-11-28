import React, { useState, useEffect } from "react";
import { Container, Input, Button, LoadingContainer, HeaderContainer } from "./Login.style";
import axios from "axios";

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

  // 컴포넌트가 마운트 될 때 로컬스토리지를 확인하여 토큰과 username을 상태로 설정
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUsername = localStorage.getItem("username");

    if (storedToken) {
      setToken(storedToken);
    }

    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLogin = () => {
    if (id === "" || password === "") {
      alert("아이디와 비밀번호를 모두 입력해주세요.");
      return;
    }

    setLoading(true);

    axios
      .post("/user/login", { id, pw: password })
      .then((response) => {
        setTimeout(() => {
          const { AccessToken, userId, username } = response.data.result;

          console.log(`Message: ${response.data.message}, userId: ${userId}, username: ${username}`);

          // 로그인 성공 시 토큰과 id, username을 로컬스토리지에 저장
          localStorage.setItem("token", AccessToken);
          localStorage.setItem("id", userId);
          localStorage.setItem("username", username);

          // 토큰과 username을 상태에도 저장
          setToken(AccessToken);
          setUsername(username);

          setLoading(false);
        }, 1500);
      })
      .catch((error) => {
        console.log("에러:", error.response.data.message);
        setLoading(false);
      });
    // .then((response) => {
    //   const { AccessToken, userId, username } = response.data.result;

    //   console.log(`Message: ${response.data.message}, userId: ${userId}, username: ${username}`);

    //   // 로그인 성공 시 토큰과 id, username을 로컬스토리지에 저장
    //   localStorage.setItem("token", AccessToken);
    //   localStorage.setItem("id", userId);
    //   localStorage.setItem("username", username);

    //   // 토큰과 username을 상태에도 저장
    //   setToken(AccessToken);
    //   setUsername(username);
    // })
    // .catch((error) => {
    //   console.log("에러:", error.response.data.message);
    // })
    // .finally(() => {
    //   setTimeout(() => {
    //     setLoading(false);
    //   }, 1500);
    // });
  };

  // 토큰이 있는 경우 로그인 정보를 보여줌, 그렇지 않은 경우 로그인 폼을 보여줌
  return token ? (
    <HeaderContainer>{username}님 안녕하세요</HeaderContainer>
  ) : (
    <Container>
      <Input type="text" placeholder="아이디" value={id} onChange={(e) => setId(e.target.value)} />
      <Input type="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button onClick={handleLogin} disabled={loading}>
        로그인
      </Button>
      {loading && (
        <LoadingContainer>
          <p style={{ color: "white" }}>Loading...</p>
        </LoadingContainer>
      )}
    </Container>
  );
}

export default Login;
