import React from "react";

const Header = () => {
  return (
    <header>
      <div className="info-container">
        <div className="user-info-container">
          <h1>username</h1>
          <p>
            handle <span className="threads-info">threads.net</span>
          </p>
        </div>
        <div className="image-container">
          <img src="" alt="profile avataar" />
        </div>
      </div>
      <p>bio</p>
      <div className="sub-info-container">
        <p className="sub-text">X followers</p>
      </div>
    </header>
  );
};

export default Header;
