import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";
import {SiTensorflow} from "react-icons/si";
import {FaPython} from "react-icons/fa";
import {FaRProject} from "react-icons/fa";
import {FaLinux} from "react-icons/fa";
import {SiScikitlearn} from "react-icons/si";
import {SiPandas} from "react-icons/si";
import {SiNumpy} from "react-icons/si";
import {SiPytorch} from "react-icons/si";
import {SiKeras} from "react-icons/si";
import {FaGithub} from "react-icons/fa";
import {FaHtml5} from "react-icons/fa";
import {SiSqlite} from "react-icons/si";
import {BiLogoPostgresql} from "react-icons/bi";
import {GrMysql} from "react-icons/gr";
import {TbBrandSnowflake} from "react-icons/tb";
import {TbBrandDatabricks} from "react-icons/tb";
import {FaAws} from "react-icons/fa";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => (
            <li
              key={i}
              className="software-skill-inline"
              name={skills.skillName}
            >
              {skills.icon}
              <p>{skills.skillName}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
