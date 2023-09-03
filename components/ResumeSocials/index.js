import React from "react";
import Button from "../Button";

import yourData from "../../data/portfolio.json";

const ResumeSocials = ({ className }) => {
  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
      {yourData.resumesocials.map((social, index) => (
        <Button key={index} onClick={() => window.open(social.link)}>
          {social.title}
        </Button>
      ))}
    </div>
  );
};

export default ResumeSocials;
