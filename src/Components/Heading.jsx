
import { Link } from "react-router-dom"
import "./Nab.css"
import { GiHamburgerMenu } from "react-icons/gi"
import { useState } from "react"


const Heading = () => {
  const[showMediaIcons, setShowMediaIcons] = useState(false);
  return (
//     <div>
//      <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#CD853F"}}>
//   <div className="container-fluid">
//     <span className="navbar-brand $blue-200">Navbar</span>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarNavDropdown">
//       <ul className="navbar-nav">
//         <li className="nav-item">
//           <Link  className="nav-link active" aria-current="page" to="/" style={{color: "white"}}>Home</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/cart" style={{color: "white"}}>Carts</Link>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>
//     </div>
<div>
  <nav className="main-nav">
    <div className="logo">
      <h2>
        <span>N</span>avbar
      </h2>
    </div>
    <div className={showMediaIcons?  "menu-link mobile-menu-link": "menu-link"}>
     <ul>
      <li>
      <Link className="a" to="/">Home</Link>
       </li>
       <li>
       <Link className="a" to="/cart">Carts</Link>
       </li>
     </ul>
    </div>
    <div className="hamburger-menu">
    <Link to="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </Link>
    </div>
  </nav>
 
</div>
  )
}

export default Heading
