import { useMemo } from "react";
import "./FeatureCards1.css";

const FeatureCards1 = ({
  integrationEcosystem,
  body,
  propAlignSelf,
  propWidth,
  propWidth1,
}) => {
  const featureCardsStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  const integrationEcosystemStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className="feature-cards" style={featureCardsStyle}>
      <div className="icons-wrapper">
        <img className="icons3" alt="" src="/icons-2.svg" />
      </div>
      <div className="integration-ecosystem-parent">
        <b className="integration-ecosystem1" style={integrationEcosystemStyle}>
          {integrationEcosystem}
        </b>
        <div className="body2">{body}</div>
      </div>
    </div>
  );
};

export default FeatureCards1;
