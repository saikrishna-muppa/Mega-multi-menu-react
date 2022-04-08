import { useState } from "react";
import MobileMenu from "./components/MobileMenu";
import BootstrapMenu from "./components/BootstrapMenu";

export default function App() {
  const [enableMobileMenu, setEnableMenu] = useState(false);

  return (
    <div className="App">
      <div className="main-menu">
        <div className="main-menu-desktop-mode">
          {" "}
          <MobileMenu />
        </div>
        <div className="main-menu-mobile-mode">
          <div className="text-right">
            <i
              className="fas fa-bars menu-bar-icon"
              onClick={() => setEnableMenu(!enableMobileMenu)}
            ></i>
            <div className="mobile-menu-area">
              {enableMobileMenu && <MobileMenu />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
