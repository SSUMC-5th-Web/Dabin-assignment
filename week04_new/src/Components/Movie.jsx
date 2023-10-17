import React from "react";
import { useState } from "react";
import * as A from "./Movie.style"; //별칭을 사용하여 전체 가져오기

function Movie({ poster_path, title, vote_average, overview }) {
  const [showOverview, setShowOverview] = useState(false);

  const handleMouseEnter = () => {
    setShowOverview(true);
  };

  const handleMouseLeave = () => {
    setShowOverview(false);
  };

  // 평상시엔 영화 정보(posterImg, title, vote_Average) 보이게
  // 포스터 img에 마우스를 올리면 영화 상세 설명(title, overviw) 보이게
  return (
    <div>
      <A.movieContainer onMouseEnter={handleMouseEnter}>
        <A.movieImg src={poster_path} alt={title} />

        <A.movieInfo>
          <h4 style={{ margin: "0" }}>{title}</h4>
          <span style={{ marginLeft: "5px" }}>{vote_average}</span>
          {/* JSX에서 스타일 속성을 설정할 때, 스타일 속성 이름은 JavaScript 객체의 속성 이름과 같아야 하며, 
              객체의 키는 camelCase 형식을 사용해야 합니다. 
              따라서 margin-left 스타일 속성을 설정하려면 다음과 같이 camelCase로 변환하여 사용해야 합니다: */}
        </A.movieInfo>

        {showOverview && (
          <A.movieDetail onMouseLeave={handleMouseLeave}>
            <h4>{title}</h4>
            <span>{overview}</span>
          </A.movieDetail>
        )}
      </A.movieContainer>
    </div>
  );
}

export default Movie;
