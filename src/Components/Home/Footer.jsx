import { Link } from "react-router-dom";

const Footer=()=>{
    return(
        <div>
              <footer className="footer-section bg_img" id="footer" >

<div className="container">

    <div className="footer-top padding-top padding-bottom">

       

        <ul className="social-icons">

            <li>

                <a href="https://www.facebook.com/TheCareerAds" target="_blank"><i className="fab fa-facebook-f"></i></a>

            </li>

            <li>

                <a href="https://twitter.com/AdsCareer" target="_blank"  className="active"><i className="fab fa-twitter"></i></a>

            </li>

            <li>

                <a href="https://www.linkedin.com/company/the-career-ads" target="_blank"><i className="fab fa-linkedin"></i></a>

            </li>

            <li>

                <a href="https://www.instagram.com/thecareerads/" target="_blank"><i className="fab fa-instagram"></i></a>

            </li>

        </ul>

    </div>

    <div className="footer-bottom">

        <ul className="footer-link">

            <li>

                <a href="about">About</a>

            </li>

            <li>

                <Link to="/blog"><a href="/blog">Blog</a></Link>

            </li>

            <li>

                <a href="/faqs">FAQs</a>

            </li>

            <li>

                <a href="/contact">Contact</a>

            </li>

            <li>

                <a href="/term">Terms & Conditions</a>

            </li>

            <li>

                <a href="/privacy">Privacy Policy</a>

            </li>

        </ul>

    </div>

    <div className="copyright">

        <p>

            Copyright © 2021.All Rights Reserved By <a href="https://aaratechnologies.com/" target="_blank">Aara Technologies pvt. ltd.</a>

        </p>

    </div>

</div>

</footer>
        </div>
    );
};
export default Footer;