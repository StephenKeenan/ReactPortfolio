import {Link} from "react-router-dom";

function Header() {
return (
    //<!--Navbar-->
    <div className="header">
        <h1>Stephen Keenan</h1>
        <div class="header-right">
            <Link to="/">About</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact</Link>
        </div>
    </div>
    )
};

export default Header;