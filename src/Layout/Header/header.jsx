import  "./header.css";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from "react-router-dom";

const Header= () => {
    return(
        <>
        <nav className="Header">

            <div className="HeaderTop">
                <div className="HeaderLeftNav">
                    <MenuIcon />
                </div>
                <Link to="/">
                    <img className="Logo" 
                    src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png" alt="" />
                </Link>

                <div className="HeaderSearch">
                    <input type="Search" 
                    className="HeaderSearchbox" />
                    <SearchIcon className="SearchIcon"/>
                </div>

                {/* header nav */}
                <div className="HeaderNavbar">
                    {/* signin */}
                    <Link to="/" className="HeaderLink">
                        <div className="HeaderOptions">
                            <span className="HeaderOptionOne">Hello</span>
                            <span className="HeaderOptionTwo">User</span>
                        </div>
                    </Link>
                    {/* order */}
                    <Link to="/order" className="HeaderLink">
                        <div className="HeaderOptions">
                            <span className="HeaderOptionOne">Return</span>
                            <span className="HeaderOptionTwo">Order</span>
                        </div>
                    </Link>
                    {/* prime */}
                    <Link to="/" className="HeaderLink">
                        <div className="HeaderOptions">
                            
                            <span className="HeaderOptionOne">Try</span>
                            <span className="HeaderOptionTwo">Prime</span>
                        </div>
                    </Link>
                    {/* profil */}
                    <Link to="/profill" className="HeaderLink">
                        <div className="HeaderOptions">
                           
                            <span className="HeaderOptionOne">Your</span>
                            <span className="HeaderOptionTwo">Profil</span>
                        </div>
                    </Link>
                    {/* basket */}
                    <Link to="/cart" className="HeaderLink">
                        <div className="HeaderOptionsBasket">
                            <ShoppingBasketIcon />
                            <span className="HeaderOptionTwo BasketCount">7</span>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="HeaderBottom">
                <div className="HeaderAddres">
                    <div className="HeaderAddresIcon">
                        <LocationOnIcon/>
                    </div>
                    <div className="HeaderOptions">
                            <span className="HeaderOptionOne">Deliver To</span>
                            <span className="HeaderOptionTwo">Address</span>
                    </div>
                </div>

                 {/* Header Bottom Navbar */}
                 <div className="HeaderBottomNavbar">
                        <span>
                            <Link to="/" className="HeaderLink">
                                All Products
                            </Link>
                        </span>
                        <span>
                            <Link to="/" className="HeaderLink">
                                Books
                            </Link>
                        </span>
                         <span>
                            <Link to="/" className="HeaderLink">
                                Mobiles
                            </Link>
                        </span>
                        <span>
                            <Link to="/" className="HeaderLink">
                                Fashion
                            </Link>
                        </span>
                        <span>
                            <Link to="/" className="HeaderLink">
                                Toys
                            </Link>
                        </span>
                    </div>

            </div>
        </nav>
        
        </>
    )
}
export default Header