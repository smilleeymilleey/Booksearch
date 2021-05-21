import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        React Reading List
      </a>
     
     <a href="/search"> <button> Search Page</button> </a>
    </nav>
  );
}

export default Nav;
