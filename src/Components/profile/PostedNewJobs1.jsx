import React, { useEffect, useState } from "react";
import { MDBValidation, MDBInput, MDBBtn, MDBCheckbox } from "mdb-react-ui-kit";
import axios from "axios";

const PostedNewJobs1 = () => {
  const [employer_token, setToken] = useState("");
  const [data, setData] = useState([]);
  var token = JSON.parse(localStorage.getItem("Name"));

  async function getjob() {
    let item = { employer_token };
    console.warn(item);

    let result = await fetch(
      "https://thecareerads.com/career-ads/api/employerPostedJob",
      {
        method: "POST",
        body: JSON.stringify({ employer_token: token }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    result = await result.json();
    console.warn(result.employerPostedJob);
    setData(result.employerPostedJob);
  }
  useEffect(() => {
    getjob();
  }, []);

  return (
    <>
      {
      data.map((item) => 
      
        <div className="bookmarked  mb-2">
          <div className="container">
            <div className="alerts-inner">
              <div className="row">
                <div className=" col-12">
                  <div className="job-items">
                    <div className="manage-content">
                      <div className="row align-items-center justify-content-center">
                        <div className="form-group"></div>
                        <div className="col-lg-4 col-md-5 col-12">
                          <div className="title-img">
                            <div className="can-img">
                              <img
                                src="../assets/images/client/work1.png"
                                alt="#"
                              />
                            </div>
                            <h3>
                              {item.job_title} <span>Conzio construction</span>
                            </h3>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-12">
                          <p>
                            <span className="time">{item.job_type} </span>
                          </p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-12">
                          <p className="location">
                            <i className="fa fa-map-marker"></i> Delhi,India
                          </p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-12">
                          <p className="location">Experience:0-1(Year)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default PostedNewJobs1;
