import React from "react";
import { footerLinks } from "../data/navItems";
import { addClassIf } from "../utils/strings.utils";

const Footer = () => {
  // ==========
  // = RETURN =
  // ==========

  return (
    <div className="page-footer">
      <div className="nav-items">
        <div className="flex-1" />
        {footerLinks.map(({ id, label, link, active }) => (
          <a
            className={`nav-item ${addClassIf(active, "active")}`}
            href={link}
            key={id}
          >
            {label}
          </a>
        ))}
      </div>
      <div className="copyright-text">
        Copyright © 2024 i2c inc. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
