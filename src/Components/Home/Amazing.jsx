import { Link } from "react-router-dom";

const Amazing = () => {
    return (

        <section className="amazing-feature-section padding-top padding-bottom pos-rel" id="feature">

            <div className="ft-shape">

                <img src="https://www.thecareerads.com/assets/images/feature/globe2.png" alt="feature"/>

            </div>

            <div className="container">

                <div className="row justify-content-center">

                    <div className="col-lg-8 col-xl-7">

                        <div className="section-header mw-100">

                            <h5 className="cate">An Exhaustive list of Amazing Features</h5>

                            <h2 className="title">Our Services</h2>

                            <p>Numerous features make it possible to customize the system

                                in accordance with all your needs.</p>

                        </div>

                    </div>

                    <div className="col-12">

                        <div className="row justify-content-center mb-30-none">

                            <div className="col-sm-6 col-lg-3 aos-init" >

                            <div className="am-item glass-modal">

                                  <Link to="/candidateform"> <div className="am-thumb glass-button">

                                        <img src="https://www.thecareerads.com/assets/images/feature/am-fea1.png" alt="feature"/>

                                    </div>

                                    <div className="am-content">

                                     <p className="title">Candidates Verification</p>

                                    </div></Link>

                                </div>

                            </div>

                            <div className="col-sm-6 col-lg-3 aos-init" >

                                <div className="am-item active glass-modal">

                                <Link to="/employe"> <div className="am-thumb glass-button">

                                        <img src="https://www.thecareerads.com/assets/images/feature/am-fea2.png" alt="feature"/>

                                    </div>

                                    <div className="am-content">

                                        <p className="title">Job Posting</p>

                                    </div></Link> 

                                </div>

                            </div>

                            <div className="col-sm-6 col-lg-3 aos-init" >

                                <div className="am-item glass-modal">

                                  <Link to="/contracttohire">  <div className="am-thumb glass-button">

                                        <img src="https://www.thecareerads.com/assets/images/feature/am-fea3.png" alt="feature"/>

                                    </div>

                                    <div className="am-content">

                                        <p className="title">Contract to Hire</p>

                                    </div></Link> 

                                </div>

                            </div>

                         

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );
};
export default Amazing;