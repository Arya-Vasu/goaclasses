import { useEffect, useState } from "react";
import { Banner1 } from "./Banner1";
import { Banner2 } from "./Banner2";
import { Banner3 } from "./Banner3";
import { Banner4 } from "./Banner4";

export function FloatingBanners() {
  const bannerArray = [<Banner1 />, <Banner2 />, <Banner3 />, <Banner4 />];
  const [current, setCurrent] = useState(0);
  const nextBanner = () => {
    setCurrent(current === bannerArray.length - 1 ? 0 : current + 1);
  };
  const previousBanner = () => {
    setCurrent(current === 0 ? bannerArray.length - 1 : current - 1);
  };
  const banner = bannerArray[current];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current === bannerArray.length - 1 ? 0 : current + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="topBanner">
      {banner}
      <br />
      <div></div>
      <button className="backButton" onClick={previousBanner}>
        Prev
      </button>
      <button className="forwardButton" onClick={nextBanner}>
        Next
      </button>
    </div>
  );
}
