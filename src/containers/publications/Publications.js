import React, {useContext} from "react";
import "./Publications.scss";
import PublicationCard from "../../components/publicationCard/PublicationCard";
import {publicationsSection} from "../../portfolio";
import FadeIn from "../../components/fadeIn/FadeIn";
import StyleContext from "../../contexts/StyleContext";

export default function Publications() {
  const {isDark} = useContext(StyleContext);
  if (!publicationsSection.display) {
    return null;
  }
  return (
    <FadeIn>
      <div className="main" id="publications">
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading achievement-heading"
                  : "heading achievement-heading"
              }
            >
              {publicationsSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle achievement-subtitle"
                  : "subTitle achievement-subtitle"
              }
            >
              {publicationsSection.subtitle}
            </p>
          </div>
          <div className="publications-list">
            {publicationsSection.publications.map((card, i) => {
              return (
                <PublicationCard
                  key={i}
                  isDark={isDark}
                  publication={card}
                />
              );
            })}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
