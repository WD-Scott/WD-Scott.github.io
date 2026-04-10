import React from "react";
import "./PublicationCard.scss";

export default function PublicationCard({publication, isDark}) {
  return (
    <div className={`publication-card${isDark ? " dark-mode" : ""}`}>
      <div className="publication-card-body">
        <h5 className="publication-card-title">{publication.title}</h5>
        <p className="publication-card-venue">{publication.subtitle}</p>
      </div>
      <div className="publication-card-links">
        {publication.footerLink.map((link, i) => (
          <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`publication-card-link${isDark ? " dark-mode" : ""}`}
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
}
