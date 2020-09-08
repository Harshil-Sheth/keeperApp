import React from "react";
// import HighlightIcon from "@material-ui/icons/Highlight";
import EventNoteIcon from '@material-ui/icons/EventNote';

function Header() {
  return (
    <div>
    <header>
      <h1>
        <EventNoteIcon /> 
        <span> Notes </span>
      </h1>
      <input className="bg-light-yellow pa2 ba b--gold  br3  grow  fr"  type="search" placeholder="search note" ></input>
    </header></div>
  );
}

export default Header;
