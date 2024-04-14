import "./FrameComponent.css";

const FrameComponent = () => {
  return (
    <section className="desktop-inner">
      <div className="frame-div">
        <div className="frame-wrapper1">
          <div className="h2-container">
            <h1 className="h23">Get instant access</h1>
            <div className="body4">
              Celebrate the joy of accomplishment with an app designed to track
              your progress and motivate your efforts.
            </div>
          </div>
        </div>
        <div className="form">

        <div className="form1">
             
        <div className="nameemailcom">name@email.com</div> 

          </div>
          <div className="buttons2">
            <div className="get-for-free2">Get access</div>
          </div>
        </div>
        <img
          className="emojistar-1-icon"
          loading="lazy"
          alt=""
          src="/emojistar-1@2x.png"
        />
        <img
          className="helix2-1-icon"
          loading="lazy"
          alt=""
          src="/helix2-1@2x.png"
        />
      </div>
    </section>
  );
};

export default FrameComponent;
