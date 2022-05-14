import React from "react";
import { Link } from "react-router-dom";
import logoimg from "./images/logo.png";
import restoggleimg from "./images/navigator.png";
const Header = () => {
  return (
    <>
    <div class="top_header_parent">
      <div class="top_header_responsive_hamburger">
        <figure class="logo"><img src={logoimg} /></figure>
      <a class="hamburger_img"><img src={restoggleimg} /></a></div>
     <section class="top_header">
        <figure class="logo"><img src={logoimg} /></figure>
        <a><i class="far fa-house-flood"></i></a>
        <a><img src="images/navigator.png" /></a>
        <a><i class="far fa-users"></i></a>
        <a><i class="far fa-search"></i></a>
        <a><i class="fal fa-shopping-cart"></i></a>
        <Link to="/login"><i class="fal fa-user-circle"></i></Link>  
        <a class="top_header_setting_btn"><i class="fal fa-cog"></i> Settings</a>    
      </section>
      </div>
      <section class="top_responsive_header">
        <div class="top_responsive_header_main">
        <a><i class="far fa-house-flood"></i></a>
        <a><img src={restoggleimg} /></a>
        <a><i class="far fa-users"></i></a>
        <a><i class="far fa-search"></i></a>
        <a><i class="fal fa-shopping-cart"></i></a>
        <a><i class="fal fa-user-circle"></i></a>  
        <a class="top_header_res_setting_btn"><i class="fal fa-cog"></i> Settings</a>    
        </div>
      </section>

    </>
  );
};

export default Header;
