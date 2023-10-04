
import axios from "axios";
import { useEffect, useState , useCallback} from "react";
import { Link} from "react-router-dom";
import Pagination from "./Pagination";


const Blogpage=()=>{
    const [productDataList,setproductDataList]=useState([]);
    const [productList,setproducList]=useState([]);
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState(null);
    const [category, setCategory] = useState(null);
  

  
   
    const byCategory = (user, category) => {
      if (category) {
        return user.category === category;
      } else return user;
    };
    const bySearch = (user, search) => {
      if (search) {
        return user.post_title.toLowerCase().includes(search.toLowerCase());
      } else return user;
    };
  
    const filteredList = (users, category, search) => {
      return users
        .filter(user => byCategory(user, category))
        .filter(user => bySearch(user, search));
    };
  
    useEffect(() => {
        
     const fetchPosts = async () => {
       //const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
       const res = await axios.get(
         "https://thecareerads.com/career-ads/api/getBlogList"
       );
       const tags="https://thecareerads.com/career-ads/api/getBlogCategory"
       //setPosts(res.data);
      setproductDataList(res.data.getBlogList);
      setproducList(res.data.getBlogList);
       //setLoading(false);
       setCategory(tags.data.getBlogCategory)
       console.log("tag--->",category)
       setUsers(res.data.getBlogList);
     };
   
     fetchPosts();
   }, []);
 

 const onChangePage =(pageOfItems) => {

    setproductDataList(pageOfItems)
   
 };

    
    
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
                    
                   productDataList.map((data)=>   
                                   
                    <div className="post-item">

                       {/*  {console.log('currentdta====>',data)} */}
                        <Link to={"/blog/"+data.post_id}>
                        
                           
                            <div className="post-thumb">
                                <a href="#"><img style={{width:"100%"}} src={data.image_url+data.image}  alt="blog"/></a>

                            </div>
                            <div className="post-content">
                                <h3 className="title">
                                     
         

                                    <a href="blog-detail.html">{data.post_title}</a>
                                   
                                    
                                   
                                    
                                    </h3>
                                <p>{data.short_description}</p>
                                <a href="blog-detail.html" className="read">3 min Read</a>
                            </div>
                           
                            </Link>
                        </div>
                        
                  
                        
                         )}
                      
                       
                    </article>
                    <div className="pagination-wrapper">
                
                      <Pagination
          pageSize={2}
          items={productList}
          onChangePage={onChangePage}
        />
    
      
   
        
        
        
       
       
       
       
                 
                 
                 
                 
                 
                 
                 
                 </div>
                
                </div>
                <div className="col-lg-4 col-md-8 col-sm-10">
                    <aside className="sticky-menu">
                        <div className="widget widget-search">
                            <h5 className="title">search</h5>
                            <form className="search-form">
                                <input type="text" placeholder="Enter your Search Content"  onChange={e => setSearch(e.target.value)}/>
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
export default Blogpage;