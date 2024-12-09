import React, { useEffect, useState } from "react";
import I2cLogo from "../resources/images/i2cLogo.svg";
import { headerMenuItems } from "../data/navItems";
import { addClassIf } from "../utils/strings.utils";

const Navbar = () => {
  // ===================
  // = ACTION HANDLERS =
  // ===================

  const toggleMenu = () => {
    const menu = document.querySelector(".nav-items");
    menu?.classList?.toggle("show-menu");
  };

  // ==========
  // = RETURN =
  // ==========

  return (
    <div className="navbar-container">
      <a href="#_">
        <I2cLogo />
      </a>
      <button
        className="menu-toggle"
        aria-label="Toggle menu"
        onClick={toggleMenu}
      >
        ☰
      </button>
      <div className="nav-items">
        {headerMenuItems.map(({ id, label, link, active }) => (
          <a
            className={`nav-item ${addClassIf(active, "active")}`}
            href={link}
            key={id}
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
