//서울의 날씨 정보를 요청했을 때의 예시 응답

const APIResponse = {
  coord: { lon: 126.9778, lat: 37.5683 }, //도시 좌표 정보
  weather: [
    //날씨에 대한 배열
    {
      id: 801,
      main: "Clouds",
      description: "few clouds",
      icon: "02n",
    },
  ],
  base: "stations", //내부 파라미터
  main: {
    //기상 관련 정보
    temp: 289.32,
    feels_like: 288.59,
    temp_min: 288.04,
    temp_max: 290.06,
    pressure: 1015,
    humidity: 64,
  },
  visibility: 10000, //가시성 정보
  wind: { speed: 1.03, deg: 0, gust: 1.34 }, //풍속과 풍향 정보
  clouds: { all: 20 }, //구름의 양에 대한 정보
  dt: 1637792451, //데이터 시간 스탬프
  sys: {
    //국가 코드, 일출/일몰 시간 등의 정보
    type: 1,
    id: 8105,
    country: "KR",
    sunrise: 1637794160,
    sunset: 1637831286,
  },
  timezone: 32400, //요청한 도시의 시간대
  id: 1835848, //도시 ID
  name: "Seoul", //도시 이름
  cod: 200, //HTTP 상태 코드
};
