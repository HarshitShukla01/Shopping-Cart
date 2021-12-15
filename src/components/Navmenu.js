import React, { useState, useEffect } from "react";
import { Link,useHistory } from "react-router-dom";
import "../style/Navmenu.css";
import { CalTotalItems } from "./Helper";

const Menus = () => {
  const history = useHistory();
  const [totalItem, setTotalItem] = useState(CalTotalItems());
  const [timechk, setTimechk] = useState(true);
  var t = setInterval(() => {
    setTimechk((prev) => !prev);
  }, 800);

  let chk = JSON.parse(localStorage.getItem("getentry"));
  let z = 0;
  if (chk !== null) {
    z = 1;
  }
  useEffect(() => {
    if (z == 0) setTotalItem(0);
    else setTotalItem(CalTotalItems());
  }, [totalItem, timechk]);
  const clickbutton = () => {
    
    localStorage.removeItem("getentry");
    history.push("/");  
  };
  return (
    <>
      <nav
        className="navbar sticky-top navclass-Navmenu"
        style={{ backgroundColor: "#c5d7aae0" }}
      >
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="linkofHeader-Navmenu" to="/" exact>
              KyunShop
            </Link>
          </div>
          <ul className="nav navbar-right ul-Navmenu">
            <li className="homebuttonlink-Navmenu">
              <Link className="linkoful-Navmenu" to="/" exact>
                <span className="material-icons iconofhome-Navmenu">home</span>
                Home
              </Link>
            </li>
            <li className="liOfShop-Navmenu">
              <Link className="linkoful-Navmenu" to="/shopcart" exact>
                <span class="material-icons iconofshopingcart-Navmenu">
                  shopping_cart
                </span>
                <span class="badge badge-warning" id="lblCartCount">
                  {" "}
                  {totalItem}{" "}
                </span>
              </Link>
            </li>
            {z === 1 ? (
              <li className="homebuttonlink-Navmenu">
              {/* <Link className="linkoful-Navmenu" to="/" exact> */}
                <button id="logoutbutton" onClick={clickbutton}>
                  &#128682;
                </button>
                {/* </Link> */}
              </li>
            ) : (
              <li className="homebuttonlink-Navmenu"></li>
            )}
          </ul>
        </div>
      </nav>
      {/*<Link activeClassName="acive_class" to="/" exact>Home page</Link> 
		  <Link activeClassName="acive_class" to="/shopcart" exact>Shopcart page</Link>  */}
    </>
  );
};

export default Menus;
