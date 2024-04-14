import FeatureCards from "./FeatureCards";
import FeatureCards1 from "./FeatureCards1";
import "./EmojiStarShape.css";

const EmojiStarShape = () => {
  return (
    <section className="emoji-star-shape">
      <div className="helix-shape">
        <div className="footer-instance">
          <div className="h2-group">
            <h1 className="h21">Everything you need</h1>
            <h3 className="body3">
              Enjoy customizable lists, team work tools, and smart tracking all
              in one place. Set tasks, get reminders, and see your progress
              simply and quickly.
            </h3>
          </div>
        </div>
        <div className="feature-cards-parent">
          <FeatureCards />
          <FeatureCards1
            integrationEcosystem="Goal setting and tracking"
            body="Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight."
            propAlignSelf="unset"
            propWidth="360px"
            propWidth1="210px"
          />
          <FeatureCards1
            integrationEcosystem="Secure data encryption"
            body="With end-to-end encryption, your data is securely stored and protected from unauthorized access."
            propAlignSelf="unset"
            propWidth="360px"
            propWidth1="197px"
          />
        </div>
      </div>
    </section>
  );
};

export default EmojiStarShape;
