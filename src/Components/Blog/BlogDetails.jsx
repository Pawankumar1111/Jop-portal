import { useState } from "react";
import { withRouter } from "react-router-dom";
import Banner from "../Home/Banner";
import axios from "axios";
import { useEffect } from "react";
import ReactHtmlParser from "react-html-parser";
//import express from "express";
//import { response } from 'express';
//const express = require('express');
//const app = express();
//import cors from "cors";
/* const app=express()
app.use(cors()) */

const BlogDetails = (props) => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Msg, setMsg] = useState("");
  const [data, setdata] = useState([]);
  const [comments, setcomments] = useState([]);
  const [replies, setreplies] = useState([]);
  console.log("Props Location----", props);
  const getblogdetails = () => {
    axios
      .get(
        "https://thecareerads.com/career-ads/api/viewBlogPost/" +
          props.match.params.slug
      )
      .then((res) => {
        console.log(res);
        setdata(res.data.viewBlogPost.blogdetail);
        setcomments(res.data.viewBlogPost.comments);
        setreplies(res.data.viewBlogPost.replies);
        console.log(res.data.viewBlogPost.replies);
        console.log("data--->", data);
        console.log(" hello");
      });
  };
  useEffect(() => {
    getblogdetails();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(props.match.params.post_id);
    try {
      let res = await axios.post(
        "https://thecareerads.com/career-ads/api/commentBlogPost/",

        {
          post_id: props.match.params.post_id,
          name: Name,
          email: Email,
          comment: Msg,
        }
      );
      let resJson = await res.json();
      if (res.status === 200) {
        console("User created successfully");
      } else {
        /* setMessage("Some error occured"); */
      }
    } catch (err) {
      console.log(err);
    }
  };

  /*  const onSubmit=()=> {
       console.log("NAME",Name);
       console.log("Email",Email);
       console.log("Msg",Msg);
        //axios.post("/", { Name, Email,Msg});
      };
     */

  return (
    <>
      <Banner />
      <div style={{ marginBottom: "15%" }}></div>

      <section className="blog-single-section padding-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <article>
                {data.map((data) => (
                  <div className="post-details">
                    <div className="post-inner">
                      <div className="post-header">
                        <div className="meta-post">
                          <a href="#0" className="read">
                            Author:-{data.author}
                          </a>
                          <a href="#0" className="read">
                            posted:-{data.created_at.slice(0, 10)}/
                            {data.created_at.slice(11, 16)}
                          </a>
                          <a href="#0" className="read">
                            3 min read
                          </a>
                        </div>

                        <h3 className="title">{data.post_title}</h3>
                      </div>
                      <div className="post-content">
                        <div className="entry-meta">
                          <div className="thumb">
                            <a href="#0">
                              <img
                                src="https://www.thecareerads.com/assets/images/blog/author1.png"
                                alt="blog"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="entry-content">
                          <img src={data.image_url + data.image} alt="blog" />
                          {ReactHtmlParser(data.description)}
                        </div>
                      </div>
                    </div>
                    <div className="tags-area">
                      <div className="tags">
                        <span>Tags :</span>
                        <div className="tags-item">
                          <a href="#0"> {data.tags} </a>
                        </div>
                      </div>
                      <ul className="social-icons">
                        <li>
                          <a href="#0">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#0" className="active">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#0">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#0">
                            <i className="fab fa-pinterest"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#0">
                            <i className="fab fa-google"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}
                <div className="blog-comment">
                  <h5 className="title">comments</h5>
                  {comments.map((data) => (
                    <ul className="comment-area">
                      {console.log(".................", data)}
                      <li>
                        <div className="blog-item">
                          <div className="blog-thumb">
                            <a href="#0">
                              <img
                                src="https://www.thecareerads.com/assets/images/blog/author1.png"
                                alt="blog"
                              />
                            </a>
                          </div>
                          <div className="blog-thumb-info">
                            <span>13 days ago</span>
                            <h6 className="title">
                              <a>{data.name}</a>
                            </h6>
                          </div>
                          <div className="blog-content">
                            <p>{data.comment}</p>
                          </div>
                        </div>
                        <ul>
                          <li>
                            {replies.map((data) => (
                              <div className="blog-item">
                                {data.map((data) => (
                                  <>
                                    <div className="blog-thumb">
                                      {console.log("reply====->", data.reply)}
                                      <a href="#0">
                                        <img
                                          src="https://www.thecareerads.com/assets/images/blog/author1.png"
                                          alt="blog"
                                        />
                                      </a>
                                    </div>
                                    <div className="blog-thumb-info">
                                      <span>13 days ago</span>
                                      <h6 className="title">
                                        <a href="#0">john flores</a>
                                      </h6>
                                    </div>
                                    <div className="blog-content">
                                      <p>{data.reply}</p>
                                    </div>
                                  </>
                                ))}
                              </div>
                            ))}
                          </li>
                        </ul>
                      </li>
                    </ul>
                  ))}
                  <div className="leave-comment">
                    <h5 className="title">leave comment</h5>
                    <form className="blog-form" method="POST">
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Enter Your Full Name"
                          name="name"
                          onChange={(event) => {
                            setName(event.target.value);
                          }}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Enter Your Email Address"
                          name="email"
                          onChange={(event) => {
                            setEmail(event.target.value);
                          }}
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          placeholder="Write A Message"
                          name="message"
                          onChange={(event) => {
                            setMsg(event.target.value);
                          }}
                        />
                        {<p>{Msg}</p>}
                      </div>
                      <div className="form-group">
                        <input type="submit" onClick={onSubmit} />
                      </div>
                    </form>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default withRouter(BlogDetails);
