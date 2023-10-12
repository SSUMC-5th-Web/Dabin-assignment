import React from "react";
import { useState } from "react";

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
      <div className="movie-container" onMouseEnter={handleMouseEnter}>
        <img src={poster_path} alt="영화포스터" />
        <div className="movie-info">
          <h4>{title}</h4>
          <span>{vote_average}</span>
        </div>

        {showOverview && (
          <div className="movie-detail" onMouseLeave={handleMouseLeave}>
            <h4>{title}</h4>
            <span>{overview}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Movie;
