import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>COPYRIGHT ⓒ {year} HARSHIL SHETH<br/>
       All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
