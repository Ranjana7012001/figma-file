import "./FrameComponent2.css";

const FrameComponent2 = () => {
  return (
    <section className="hero-wrapper">
      <div className="hero">
        <div className="hero-child" />
        <div className="integration-ecosystem" />
        <div className="hero-content">
          <div className="tag">
            <div className="header-footer">
              <div className="version-20-is">Version 2.0 is here</div>
              <div className="social-media-links">
                <div className="read-more">Read more</div>
                <img className="icons1" alt="" src="/icons-1.svg" />
              </div>
            </div>
          </div>
          <h1 className="h1">
            <p className="one-task">One Task</p>
            <p className="at-a-time">at a Time</p>
          </h1>
          <h3 className="body1">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </h3>
          <div className="buttons1">
            <div className="get-for-free1">Get for free</div>
          </div>
          <div className="wrapper-cursor-1-parent">
            <div className="wrapper-cursor-1">
              <img
                className="cursor-1-icon"
                loading="lazy"
                alt=""
                src="/cursor-1@2x.png"
              />
            </div>
            <img className="cursor-2-icon" alt="" src="/cursor-2@2x.png" />
          </div>
          <div className="icons2">
            <div className="wrapper-message-2">
              <img className="message-2-icon" alt="" src="/message-2@2x.png" />
            </div>
            <img
              className="message-1-icon"
              loading="lazy"
              alt=""
              src="/message-1@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
