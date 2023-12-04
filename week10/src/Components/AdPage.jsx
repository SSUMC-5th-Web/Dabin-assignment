import React, { useState } from 'react';
import Ad from './Ad.jsx';

function AdPage() {
  const [showAd, setShowAd] = useState(true); // 기본적으로 광고 표시

  const toggleAd = () => {
    setShowAd(!showAd); // showAd 상태를 토글(반전)시킴
  };

  return (
    <div>
      <Ad showAd={showAd} />
      <button onClick={toggleAd}>{showAd ? '광고 안 보기' : '광고 보기'}</button>
    </div>
  );
}

export default AdPage;
