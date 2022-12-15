import React, { useRef, useEffect, useState } from "react";
import Layout from "components/Layout";

import LinkedinIcon from "assets/imgs/linkedin.png";
import TwitterIcon from "assets/imgs/twitter.png";
import YoutubeIcon from "assets/imgs/youtube.png";
import MediumIcon from "assets/imgs/medium.png";

const contentStyle = {
  maxWidth: "1360px",
  backgroundImage: `url(${require("assets/imgs/bg.png")}`,
  margin: "100px auto 150px",
  padding: "30px"
};

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const layoutView = useRef(null);
  const [scrollH, setScrollH] = useState(-1);

  useEffect(() => {
    setScrollH(0);
    const onScroll = () => setScrollH(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Layout ref={layoutView} scroll={scrollH}>
      <div className="px-5">
        <div
          style={contentStyle}
          className="text-center rounded-[50px] bg-100 w-full shadow-[0px_0px_30px_rgba(255,255,255,0.2)]"
        >
          <div className="text-24 md:text-38 tracking-standard md:tracking-wider uppercase font-medium break-all">
            <span className="text-32 md:text-51 font-bold">B</span>eautifull{" "}
            <span className="text-32 md:text-51 font-bold">M</span>
            inds <br />
            <span className="font-bold">u</span>nder{" "}
            <span className="font-bold">m</span>aintenance
          </div>
          <video
            className="m-auto mt-[75px] mb-[180px] rounded-[20px]"
            loop
            autoPlay
            muted
          >
            <source src={require("assets/imgs/video.mp4")} type="video/mp4" />
          </video>
          <div
            className="absolute bottom-[20px] w-full"
            style={{ left: "50%", translate: "-50% 0" }}
          >
            <a href="/">
              <img
                src={LinkedinIcon}
                alt="linkedinicon"
                className="inline mx-2 w-[45px]"
              />
            </a>
            <a href="/">
              <img
                src={TwitterIcon}
                alt="twittericon"
                className="inline mx-2 w-[45px]"
              />
            </a>
            <a href="/">
              <img
                src={YoutubeIcon}
                alt="youtubeicon"
                className="inline mx-2 w-[45px]"
              />
            </a>
            <a href="/">
              <img
                src={MediumIcon}
                alt="mediumicon"
                className="inline mx-2 w-[45px] p-1"
              />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
