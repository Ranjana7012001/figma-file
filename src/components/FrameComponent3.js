import "./FrameComponent3.css";

const FrameComponent3 = () => {
  return (
    <section className="bar-parent">
      <div className="bar">
        <div className="this-page-is-included-in-a-fre-parent">
          <div className="this-page-is">
            This page is included in a free SaaS Website Kit.
          </div>
          <div className="call-to-action">
            <div className="view-the-complete">View the complete Kit</div>
            <img className="icons" alt="" src="/icons.svg" />
          </div>
        </div>
      </div>
      <header className="nav-bar-desktop">
        <div className="logo">
          <div className="logodefault">
            <div className="pulse-shape" />
            <img
              className="logosaas-icon"
              loading="lazy"
              alt=""
              src="/logosaas@2x.png"
            />
          </div>
          <div className="made-by">made by</div>
          <img
            className="black-horizontal-1-icon"
            loading="lazy"
            alt=""
            src="/blackhorizontal-1.svg"
          />
        </div>
        <div className="stack">
          <div className="about">About</div>
          <div className="features">Features</div>
          <div className="customers">Customers</div>
          <div className="updates">Updates</div>
          <div className="help">Help</div>
          <div className="buttons">
            <div className="get-for-free">Get for free</div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default FrameComponent3;
