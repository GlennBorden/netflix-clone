import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
      return () => {
        window.removeEventListener("scroll");
      };
    });
  });

  function ChangePage() {
    document.getElementById("myDropdown").classList.toggle("show");
    // console.log("button is clicked");
  }
  // Close the dropdown if the user clicks outside of it
  // console.log("button is clicked");
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };
  function showSearch() {
    let x = document.getElementById("search");
    if (x.style.display === "none") {
      x.style.display = "inline";
    } else {
      x.style.display = "none";
    }
  }

  return (
    <div
      className={`${
        show && "bg-black"
      } transition-all duration-[0.5s] ease-in flex items-center fixed  top-0 h-[60px] z-10 justify-between w-full p-[20px]`}
    >
      <img
        src="https://rb.gy/ulxxee"
        className="w-[100px] cursor-pointer object-contain"
        alt="netflix-logo"
      />
      <div class="buttons">
        <a
          href="https://www.google.com/aclk?sa=l&ai=DChcSEwjtl77GmJ_8AhWDhMgKHTznCnoYABAAGgJxdQ&sig=AOD64_1yU4Lr-LmZOJ2oowCxAzTkNWjLxg&q&adurl&ved=2ahUKEwjv-q3GmJ_8AhXPnHIEHTK0D-gQ0Qx6BAgKEAE"
          class="button button4"
        >
          Home
        </a>
        <a
          href="https://www.google.com/search?q=tv+shows&rlz=1C1CHBD_en-GBUS1021US1021&oq=tv+shows&aqs=chrome..69i57j0i131i433i512l3j0i131i433l3j0i131i433i512j0i131i433j0i433.1295j0j7&sourceid=chrome&ie=UTF-8"
          class="button button4"
        >
          TV Shows
        </a>
        <a
          href="https://www.google.com/search?q=movies&rlz=1C1CHBD_en-GBUS1021US1021&ei=DrmtY4SMJbCzqtsPsOiHaA&ved=0ahUKEwiEy_znmJ_8AhWwmWoFHTD0AQ0Q4dUDCBA&uact=5&oq=movies&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIKCAAQsQMQgwEQQzINCAAQsQMQgwEQQxCLAzINCAAQsQMQgwEQQxCLAzIECAAQQzIECAAQQzIQCAAQgAQQsQMQgwEQyQMQCjIECAAQQzIECAAQQzIKCAAQsQMQgwEQQzIECAAQQzoNCAAQQxCLAxCoAxCmAzoTCAAQsQMQgwEQQxCLAxCmAxCoAzoHCAAQQxCLAzoRCC4QgAQQsQMQxwEQ0QMQiwM6CAguEIAEEIsDOg4IABCABBCxAxCDARCLAzoHCC4Q1AIQQzoKCC4QsQMQgwEQQzoOCAAQgAQQsQMQgwEQyQNKBAhBGABKBAhGGABQAFioBWCyBmgAcAF4AIAB1QGIAZIFkgEFMS4zLjGYAQCgAQG4AQPAAQE&sclient=gws-wiz-serp"
          class="button button4"
        >
          Movies
        </a>
        <a href="https://www.tiktok.com/tag/trending" class="button button4">
          Trending
        </a>
        <a
          href="https://tubitv.com/category/recently_added"
          class="button button4"
        >
          Recently Added
        </a>
        <a href="https://www.walmart.com/lists" class="button button4">
          My List
        </a>
      </div>
      <div class="searchNote">
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
        {/* <script
          async
          src="https://cse.google.com/cse.js?cx=46018b7e6897f43f7"
        ></script> */}
        {/* <div class="button button4"></div> */}
        <button class="searchButton">
          <i onClick={showSearch} class="material-icons">
            search
          </i>
          <input
            id="search"
            type="text"
            class="button button4"
            autocomplete="off"
            style={{ color: "black" }}
            // onkeyup="myFunction()"
            placeholder="Search for..."
          ></input>
        </button>
        <button class="button button4">
          <a
            class="material-icons"
            href="https://www.youtube.com/watch?v=ytBRZqequ_Q"
          >
            notifications
          </a>
        </button>
      </div>
      <div class="dropdown">
        <div>
          <img
            src="data:image/jpeg;base64,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"
            className="w-[56px] cursor-pointer object-contain"
            style={{ float: "left" }}
            alt="nav-icon"
          />
          <button onClick={ChangePage} class="dropbtn">
            Profile
          </button>
        </div>
        <div id="myDropdown" class="dropdown-content">
          <a href="https://help.netflix.com/en/node/123277">Account</a>
          <a href="https://en.wikipedia.org/wiki/Setting">Settings</a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Logout</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
