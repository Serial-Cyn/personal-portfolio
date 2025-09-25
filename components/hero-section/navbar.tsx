"use client";

import StaggeredMenu from "../StaggeredMenu";

function Navbar() {
  const menuItems = [
    { label: "Home", ariaLabel: "Country Road, Take Me Home!", link: "#home" },
    { label: "About", ariaLabel: "Wanna know my mission?", link: "#about" },
    { label: "Skills", ariaLabel: "Take a look at what I can do!", link: "#expertise" },
    { label: "Work", ariaLabel: "See my latest works", link: "#projects" },
    { label: "Reach", ariaLabel: "Give me a call!", link: "#contact" },
  ];

  const socialItems = [
    { label: "Twitter", link: "https://twitter.com" },
    { label: "GitHub", link: "https://github.com/Serial-Cyn" },
    { label: "LinkedIn", link: "https://linkedin.com" },
  ];

  return (
    // <div
    //   id="navbar"
    //   className="sticky top-0 px-6 py-4 w-full flex items-center justify-between z-50"
    // >
    //   <div>
    //     <h1 className="text-base">CHRISTIAN</h1>
    //     <h1 className="pl-4 text-base">MAMPLATA</h1>
    //   </div>
      
    // </div>

    <div className="fixed inset-0 w-screen h-screen z-40">
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor="#000"
          openMenuButtonColor="#000"
          changeMenuColorOnOpen={true}
          colors={["#B19EEF", "#5227FF"]}
          logoUrl="/path-to-your-logo.svg"
          accentColor="#ff6b6b"
          onMenuOpen={() => console.log("Menu opened")}
          onMenuClose={() => console.log("Menu closed")}
        />
      </div>
  );
}

export default Navbar;
