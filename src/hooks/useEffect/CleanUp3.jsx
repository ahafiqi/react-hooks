import React, { useEffect, useState } from "react";

const CleanUpListener = () => {
  const onScroll = () => {
    console.log(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    //ketrigger jika component di hide/ showChild =false
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div>
      <h1>Windows Listener Celanup</h1>
      <h2>Try to scroll</h2>
      <h3>Start</h3>
      <div style={{ height: 300 }}>...</div>
      <div style={{ height: 300 }}>...</div>
      <div style={{ height: 300 }}>...</div>
      <div style={{ height: 300 }}>...</div>
      <div style={{ height: 300 }}>...</div>
    </div>
  );
};

const CleanUp3 = () => {
  const [showChild, setShowChild] = useState(true);
  return (
    <div>
      <h1>How to add clean up function once</h1>
      <button onClick={() => setShowChild(!showChild)}>show/hide</button>
      <div style={{ height: 300 }}>...</div>
      <div style={{ height: 300 }}>...</div>
      <div style={{ height: 300 }}>...</div>
      <div style={{ height: 300 }}>...</div>
      <div style={{ height: 300 }}>...</div>
      {showChild && <CleanUpListener />}
    </div>
  );
};

export default CleanUp3;
