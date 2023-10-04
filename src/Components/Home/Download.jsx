const Download=()=>{
    return(
        <section className="download-section padding-top padding-bottom" id="download">

        <div className="container">

            <div className="section-header">

                <h2 className="title">Ready to get started?</h2>

            </div>

            <div className="download-area">

                <div className="download-item active">

                    <a href="#0" className="thumb"><i className="fab fa-windows"></i></a>

                    <div className="content">

                        <h6 className="title">Windows</h6>

                    </div>

                </div>

                <div className="download-item">

                    <a href="#0" className="thumb"><i className="fab fa-apple"></i></a>

                    <div className="content">

                        <h6 className="title">Mac</h6>

                    </div>

                </div>

                <div className="download-item">

                    <a href="https://play.google.com/store/apps/details?id=com.aaratechnologies.careerads" className="thumb"><i className="fab fa-android"></i></a>

                    <div className="content">

                        <h6 className="title">Android</h6>

                    </div>

                </div>

                <div className="download-item">

                    <a href="#0" className="thumb"><i className="fab fa-apple"></i></a>

                    <div className="content">

                        <h6 className="title">IOS</h6>

                    </div>

                </div>

            </div>

            <div className="text-center">

                <a href="https://play.google.com/store/apps/details?id=com.aaratechnologies.careerads" className="button-3 active large-button">Download app</a>

            </div>

        </div>

    </section>

    )
};
export default Download;