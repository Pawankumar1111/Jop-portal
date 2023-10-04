import { useState ,useEffect} from "react";
import "./navbar.css"

const Navbar=()=>{
    const [navSize, setnavSize] = useState("10rem");
    const [navColor, setnavColor] = useState("transparent");
    const [mobilemenu,setmobilemenu]=useState(false);
    const listenScrollEvent = () => {
        window.scrollY > 10 ? setnavColor("white") : setnavColor("transparent");
        window.scrollY > 10 ? setnavSize("5rem") : setnavSize("8rem");
    };

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);



    const mobile = () => {
        
        setmobilemenu(!mobilemenu);
        alert("Great Shot!");
      }

    return(
    
    <div>
    <header className={mobilemenu?"header-section expand":"header-section"}   style={{ "background-color": "#7a7aad" } }  >

<div className="container">

    <div className="header-wrapper">

        <div className="logo">

            <a href="index.html">

                <img src="https://www.thecareerads.com/assets/images/logo/logo.png" alt="logo" className="img-fluid glass-button"/>

            </a>

        </div>
                <div className={mobilemenu?"m-menu":" m-menu hide"}>
                    <p href="/">Home</p>
                    <p href="/">Articles</p>
                    <p href="/">About</p>
                    <p href="/">Logout</p>
                    </div>

        <ul className="menu ">

            <li>

                <a href="/">Home</a>



            </li>

            <li>

                <a href="/about">About</a>

            </li>

            

            <li>

                <a href="/services">Services</a>

               

            </li>

            

            <li>

                <a href="/contact">contact</a>

            </li>

            <li className="d-sm-none">

                <a href="#download" className="m-0 header-button glass-modal">Download</a>

            </li>

        </ul>

        <div onClick={mobile} className="header-bar d-lg-none mr-4">

            <span></span>

            <span></span>

            <span></span>

        </div>

        <div className="header-right">

            <a href="https://play.google.com/store/apps/details?id=com.aaratechnologies.careerads" target="_blank" className="header-button d-none d-sm-inline-block ">Download </a>

        </div>

    </div>

</div>

</header>

    </div>
    );

};

export default Navbar;