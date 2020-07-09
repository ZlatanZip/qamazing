import React from "react";
import Logo from "../Logo/components/Logo";

const Toolbar = (props) => (
  <header>
    <nav>
      <div></div>
      <div>
        <a href="/">
          <Logo />
        </a>
        <div>
          <ul>
            <li>
              <a href="/">My Profile</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

export default Toolbar;
