import React, {useContext} from "react";
import "./Footer.scss";
import FadeIn from "../fadeIn/FadeIn";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <FadeIn distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Built by Wyatt Scott
        </p>
      </div>
    </FadeIn>
  );
}
