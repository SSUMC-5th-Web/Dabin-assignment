import React from 'react';

function Ad({ showAd }) {
  if (!showAd) {
    return null; // 광고를 표시하지 않음
  }

  return (
    <div>
      <img
        src="/img/ad-banner.svg" // 이미지 파일 경로
        alt="광고 배너"
        style={{ width: '100%' }}
      />
    </div>
  );
}

export default Ad;
