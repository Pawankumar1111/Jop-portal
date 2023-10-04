import Footer from "../Home/Footer";

const Contact=()=>{
    return(
    <div>
          <section class="page-header single-header bg_img oh" data-background="assets/images/banner/banner-bg-7.jpg">

                <div class="bottom-shape d-none d-md-block">

                <img src="https://thecareerads.com/assets/images/banner/banner-bg-7.jpg" alt="css"/>

                </div>

            </section>






            <section class="contact-section padding-top padding-bottom">

<div class="container">

    <div class="section-header mw-100 ">

        <h2 class="title">Contact Carrers Ads</h2>

        <p>Whether you're looking for a demo, have a support question or a commercial query get in touch.</p>

    </div>

    <div class="row justify-content-center justify-content-lg-between">

        <div class="col-lg-7">

            <div class="contact-wrapper glass-modal">

                <h4 class="title text-center mb-30">Get in Touch</h4>

                <form class="contact-form" id="contact_form_submit">

                   

                    <div class="form-group">

                        <label for="name">Your Full Name</label>

                        <input type="text" placeholder="Enter Your Full Name" id="name" required/>

                    </div>

                    <div class="form-group">

                        <label for="phone">Phone Number</label>

                        <input type="text" placeholder="Enter Your Phone Number " id="phone" required/>

                    </div>

                    <div class="form-group">

                        <label for="email">Your Email </label>

                        <input type="text" placeholder="Enter Your Email " id="email" required/>

                    </div>

                    <div class="form-group">

                        <label for="subject">Your Subject</label>

                        <input type="text" placeholder="Enter Your Subject " id="subject" required/>

                    </div>

                    <div class="form-group mb-0">

                        <label for="message">Your Message </label>

                        <textarea id="message" placeholder="Enter Your Message" required></textarea>

                        <div class="form-check">

                            <input type="checkbox" id="check" checked/><label for="check">I agree to receive emails, newsletters and promotional messages</label>

                        </div>

                    </div>

                    <div class="form-group mb-5">

                        <input type="submit" value="Send Message"/>

                    </div>

                </form>

            </div>

        </div>

        <div class="col-lg-4">

            <div class="contact-content">

                <div class="man d-lg-block d-none">

                    <img src="https://thecareerads.com/assets/images/contact/man.png" alt="bg"/>

                </div>

                <div class="section-header left-style">

                    <h3 class="title">Have questions?</h3>

                    <p>Have questions about payments or price 

                        plans? We have answers!</p>

                    <a href="#0">Read F.A.Q <i class="fas fa-angle-right"></i></a>

                </div>

                <div class="contact-area">

                    <div class="contact-item">

                        <div class="contact-thumb">

                            <img src="https://thecareerads.com/assets/images/contact/contact1.png" alt="contact"/>

                        </div>

                        <div class="contact-contact">

                            <h5 class="subtitle">Email Us</h5>

                            <a href="Mailto:info@mosto.com">info@thecareerads.com</a>

                        </div>

                    </div>

                    <div class="contact-item">

                        <div class="contact-thumb">

                            <img src="https://thecareerads.com/assets/images/contact/contact2.png" alt="contact"/>

                        </div>

                        <div class="contact-contact">

                            <h5 class="subtitle">Call Us</h5>

                            <a href="Tel:565656855">+1 (987) 664-32-11</a>

                            <a href="Tel:565656855">+1 (987) 664-32-11</a>

                        </div>

                    </div>

                    <div class="contact-item">

                        <div class="contact-thumb">

                            <img src="https://thecareerads.com/assets/images/contact/contact3.png" alt="contact"/>

                        </div>

                        <div class="contact-contact">

                            <h5 class="subtitle">Visit Us</h5>

                            <p>4293 Euclid Avenue, Los Angeles,CA 90012</p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>

</div>

<div class="map-section padding-bottom-2">

<div class="container">

    <div class="section-header">

        <div class="thumb">

            <img src="https://thecareerads.com/assets/images/contact/earth.png" alt="contact"/>

        </div>

        <h3 class="title">We Are Easy To Find</h3>

    </div>

    <div class="row justify-content-center">

        <div class="col-md-10">

            <div class="maps-wrapper">

                <div class="maps"></div>

            </div>

        </div>

    </div>

</div>

</div>


</section>
<Footer/>
    </div>
    );
}
export default Contact;