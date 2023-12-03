import React, { useState } from 'react';
import Ad from './Ad';

function AdPage() {
  const [showAd, setShowAd] = useState(true);

  const handleToggleClick = () => {
    setShowAd(!showAd);
  };

  return (
    <div>
      <Ad showAd={showAd} />
      
      <button onClick={handleToggleClick}>
        {showAd ? '광고 숨기기' : '광고 보이기'}
      </button>
    </div>
  );
}

export default AdPage;
