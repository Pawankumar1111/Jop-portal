
import axios from "axios";
import { useEffect, useState , useCallback} from "react";
import { Link} from "react-router-dom";
import Pagination from "./Pagination";
import Footer from "../Home/Footer";

const Blogpage=()=>{
    const [productDataList,setproductDataList]=useState([]);
    const [productList,setproducList]=useState([]);
  const [blog,setblog]=useState([]);
  const [search,setSearch]=useState('');
  const [category, setCategory] = useState([]);
  const [tag,settag]=useState("-----hi");
  const [state, setState] = useState({
    username: "",
  
  });

  const handleInputChange = event => {
   
   
    setState({ ...state, username: event.target.value  });

  };

  //const [count,setcount]=useState(0)
   
 
    useEffect(() => {
        
     const fetchPosts = async () => {
       //const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
       const res = await axios.get(
         "https://thecareerads.com/career-ads/api/getBlogList"
       );
       const tags=await axios.get(
        "https://thecareerads.com/career-ads/api/getBlogCategory"
      );
      setproductDataList(res.data.getBlogList);
      setproducList(res.data.getBlogList);
      setCategory(tags.data.getBlogCategory)
       console.log("tags-------->",category);
       setblog(res.data.getBlogList);
      
     };
   
     fetchPosts();
   }, []);
 

 const onChangePage =(pageOfItems) => {

    setproductDataList(pageOfItems)
   
 };

 const SearchHandler=(e)=>{
     const searchdata=e.target.value? e.target.value  :"";
     const cetegoryId = e.target.id ? e.target.id  :"";
    
    console.log("e.target.id----",e.target.id);
    const searchfilter=blog.filter(data=>{
        if (searchdata && data.post_title.toLowerCase().includes(searchdata.toLowerCase())){
           return data;
         }
         else if(cetegoryId && data.category_id == cetegoryId){
             return data
         }
       })
       setSearch(searchfilter)
 }

 const categoryHandler=(e)=>{
     
 }
    
    
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
                    {search?<>{
                    search.map((data)=> 
                    
                                   
                    <div className="post-item">

                       {/*  {console.log('currentdta====>',data)} */}
                        <Link key={data.post_title}
                        //</div>to={"/blog/"+data.post_id}
                        to={{
                            pathname:"/blog/"+data.slug,
                            
                          }}
                        >
                        
                           
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
                        
                  
                        
                         )
                        
                        
                        }</>:<>
  
                      {  productDataList.map((data)=> 
                    
                             
                    <div className="post-item">
                        
                     
                        <Link key={data.post_id}
                        to={{
                            pathname:"/blog/"+data.slug,
                            
                          }}
                         >
                        
                           
                            <div  className="post-thumb">
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
                        
                  
                        
                         ) }

                         

<Pagination
          pageSize={2}
          items={productList}
          onChangePage={onChangePage}
        />
    
                         </>                      
}
                    </article>
                    <div className="pagination-wrapper">
                
        
      
   
        
        
        
       
       
       
       
                 
                 
                 
                 
                 
                 
                 
                 </div>
               
                </div>
                <div className="col-lg-4 col-md-8 col-sm-10">
                    <aside className="sticky-menu">
                        <div className="widget widget-search">
                            <h5 className="title">search</h5>
                            <form className="search-form">
                                <input type="text" placeholder="Enter your Search Content"  onChange={(e) =>SearchHandler(e)}/>
                                <button type="submit"><i className="flaticon-loupe"></i>Search</button>
                            </form>
                        </div>
                       
                        <div className="widget widget-follow">
                            <h5 className="title">Follow Us</h5>
                            <ul className="social-icons">
                                <li>
                                    <a href="https://www.facebook.com/TheCareerAds/" className="">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/AdsCareer" className="active">
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
                                    <a href="https://www.instagram.com/invites/contact/?i=8nijffvk995h&utm_content=kdj8ptr">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="widget widget-categories">
                            <h5 className="title">categories</h5>
                            <ul>
                            {category.map(data => (
                                <>
                                <h1>{data.post_title}</h1>
                                
                                
                                <li>

                                    <a href="#0">
                                        <span id={data.category_id} onClick={(e)=>SearchHandler(e)}>{data.category_name}</span><span></span>
                                    </a>
                                </li>
                               
                           
                            </>
                             ))}
                              </ul>
                        </div>
                       {/*  <div className="widget widget-tags">
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
                        </div> */}
                    </aside>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
        </>
    )
}
export default Blogpage;