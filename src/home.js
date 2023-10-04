import axios from "axios";
import { useEffect, useState } from "react";
import { Link, NavLink ,Router} from "react-router-dom";


const Home=()=>{

    
    
        
    
    
        const [blogdata,setblogdata]=useState([]);
        const getddata=()=>{
        axios
        .get("https://thecareerads.com/career-ads/api/getBlogList")
        .then(res => {
          console.log(res.data.getBlogList.post_title);
          setblogdata(res.data.getBlogList);
        })
    }
    useEffect(() => {
        getddata();
        console.log("blogdata",blogdata);
      });
    
    
    
        
        
        
        return(
    
    
    
    
    
    
    
            <>
            
            <section className="blog-section padding-top padding-bottom">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="section-header mw-100">
    
                        <h5 className="cate">An Exhaustive list of Amazing Blogs</h5>
    
                        <h2 className="title">Our Blogs</h2>
             
                        
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex.</p>
    
                    </div>
                    <div className="col-lg-8">
                    
                        <article className="mb-40-none">
                        {
                        
                        blogdata.map((data)=>   
                                       
                        <div className="post-item">
                               
                                <div className="post-thumb">
                                    <a href="#"><img src={data.image_url+data.image} alt="blog"/></a>
                                    
                                </div>
                                <div className="post-content">
                                    <h3 className="title">
                                         
             
    
                                        <a href="blog-detail.html">{data.post_title}</a>
                                       
                                        
                                       
                                        
                                        </h3>
                                   <Link to="/tahzeeb"><p>{data.short_description}</p></Link> 
                                    <a href="blog-detail.html" className="read">3 min Read</a>
                                </div>
                               
                            
                            </div>
                            
                      
                            
                             )}
                          
                           
                        </article>
                        <div className="pagination-area text-center pt-50 pb-50 pb-lg-none">
                            <a href="#0"><i className="fas fa-angle-double-left"></i><span>Prev</span></a>
                            <a href="#0">1</a>
                            <a href="#0">2</a>
                            <a href="#0" className="active">3</a>
                            <a href="#0">4</a>
                            <a href="#0">5</a>
                            <a href="#0"><span>Next</span><i className="fas fa-angle-double-right"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-8 col-sm-10">
                        <aside className="sticky-menu">
                            <div className="widget widget-search">
                                <h5 className="title">search</h5>
                                <form className="search-form">
                                    <input type="text" placeholder="Enter your Search Content" required=""/>
                                    <button type="submit"><i className="flaticon-loupe"></i>Search</button>
                                </form>
                            </div>
                           
                            <div className="widget widget-follow">
                                <h5 className="title">Follow Us</h5>
                                <ul className="social-icons">
                                    <li>
                                        <a href="#0" className="">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#0" className="active">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#0" className="">
                                            <i className="fab fa-pinterest-p"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#0">
                                            <i className="fab fa-google"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#0">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget widget-categories">
                                <h5 className="title">categories</h5>
                                <ul>
                                    <li>
                                        <a href="#0">
                                            <span>Apps Feature</span><span>50</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#0">
                                            <span>Technology</span><span>43</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#0">
                                            <span>Marketing </span><span>34</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#0">
                                            <span>Inspiration</span><span>63</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#0">
                                            <span>Apple Store  </span><span>11</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#0">
                                            <span>Branding</span><span>30</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#0">
                                            <span>Lifestyle </span><span>55</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget widget-tags">
                                <h5 className="title">featured tags</h5>
                                <ul>
                                    <li>
                                        <a href="#0">IOS APPS</a>
                                    </li>
                                    <li>
                                        <a href="#0">SOFTWARE</a>
                                    </li>
                                    <li>
                                        <a href="#0">APPS
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#0">ANDROID</a>
                                    </li>
                                    <li>
                                        <a href="#0" className="active">UX DESIGN</a>
                                    </li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </section>
            </>
        )
    }
    
export default Home;