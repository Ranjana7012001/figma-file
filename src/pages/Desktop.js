import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import MediumIcon from "../components/MediumIcon";
import EmojiStarShape from "../components/EmojiStarShape";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import FooterS from "../components/FooterS";
import "./Desktop.css";

const Desktop = () => {
  return (
    <div className="desktop">
      <FrameComponent3 />
      <FrameComponent2 />
      <MediumIcon />
      <EmojiStarShape />
      <section className="rectangle-parent">
        <div className="frame-child" />
        <div className="frame-parent">
          <div className="frame-wrapper">
            <div className="h2-parent">
              <h1 className="h2">Intuitive interface</h1>
              <h3 className="body">
                Celebrate the joy of accomplishment with an app designed to
                track your progress, motivate your efforts, and celebrate your
                successes, one task at a time.
              </h3>
            </div>
          </div>
          <div className="wrapper-app-night">
            <img
              className="app-night-icon"
              loading="lazy"
              alt=""
              src="/app-night@2x.png"
            />
          </div>
        </div>
        <FrameComponent1 />
      </section>
      <FrameComponent />
      <FooterS />
    </div>
  );
};

export default Desktop;
