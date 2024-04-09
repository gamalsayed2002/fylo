import { useEffect, useRef } from "react";
import img from "../images/logo.svg";
export default function Header() {
  let headerRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        headerRef.current.style.background = "#000";
        headerRef.current.style.padding = "20px 0";
      } else {
        headerRef.current.style.background = "transparent";
        headerRef.current.style.padding = "60px 0";
      }
    });
  }, []);
  return (
    <header
      ref={headerRef}
      className="pt-[60px] fixed top-0 left-0 w-full z-50 transition-all duration-[.5s] "
    >
      <div className="container px-[40px] flex justify-between items-center gap-[30px]  sm:gap-0 flex-col sm:flex-row">
        <a href="/">
          <img src={img} alt="LOGO" />
        </a>
        <nav>
          <ul className="flex items-center gap-[50px]">
            <li className="text-white opacity-[0.9] hover:opacity-[1] hover:underline transition-all duration-200">
              <a href="/features">Features</a>
            </li>
            <li className="text-white opacity-[0.9] hover:opacity-[1] hover:underline transition-all duration-200">
              <a href="/team">Team</a>
            </li>
            <li className="text-white opacity-[0.9] hover:opacity-[1] hover:underline transition-all duration-200">
              <a href="/signin">Sign in</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
