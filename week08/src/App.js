import React, { useState } from "react";
import axios from "axios";
import { Container, Input, ResultContainer, Text } from "./App.style";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const searchWeather = async (event) => {
    if (event.key === "Enter") {
      const API_KEY = "0c4704a6e054225d7619a06b4996ecab";
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

      try {
        const response = await axios.get(url);
        setWeather(response.data);
      } catch (error) {
        console.error("Error: ", error);
      }
    }
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <Container>
      <Input type="text" onChange={handleChange} onKeyDown={searchWeather} placeholder="도시를 입력하세요" />
      {weather && (
        <ResultContainer>
          <Text>{weather.name}</Text>
          <Text fontSize="40px">{Math.round(weather.main.temp - 273.15)}°C</Text>
          <Text style={{ textAlign: "right" }}>{weather.weather[0].main}</Text>
        </ResultContainer>
      )}
    </Container>
  );
}

export default App;
