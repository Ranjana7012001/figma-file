import "./MediumIcon.css";

const MediumIcon = () => {
  return (
    <section className="medium-icon">
      <div className="large-icon">
        <div className="icon-with-label">
          <div className="trusted-by-the">
            Trusted by the world’s most innovative teams
          </div>
        </div>
        <div className="image-with-overlay">
          <img
            className="acme-1-icon"
            loading="lazy"
            alt=""
            src="/acme-1@2x.png"
          />
          <img
            className="quantum-1-icon"
            loading="lazy"
            alt=""
            src="/quantum-1@2x.png"
          />
          <div className="title-with-subtitle">
            <img
              className="echo-1-icon"
              loading="lazy"
              alt=""
              src="/echo-1@2x.png"
            />
          </div>
          <div className="title-with-subtitle1">
            <img
              className="celestia-1-icon"
              loading="lazy"
              alt=""
              src="/celestia-1@2x.png"
            />
          </div>
          <div className="pulse-1-wrapper">
            <img
              className="pulse-1-icon"
              loading="lazy"
              alt=""
              src="/pulse-1@2x.png"
            />
          </div>
          <div className="apex-1-wrapper">
            <img
              className="apex-1-icon"
              loading="lazy"
              alt=""
              src="/apex-1@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediumIcon;
