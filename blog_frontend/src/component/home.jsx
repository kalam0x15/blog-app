import { useEffect, useState } from "react";
import axios from 'axios';
import cors from 'cors';
import { Link } from 'react-router-dom'


cors();
const Home = () =>{
    const [articles, setArticles] = useState([])
    useEffect(()=>{

        axios.get('http://localhost:3001/showdata')
        .then(articles => setArticles(articles.data))
        .catch(err => console.log(err))
        
    },[])
   
    

    return(
        
        
        <>
        <div className="container d-flex flex-row">
        <div className="row">
            {articles.map(item => (          
            
                <div key={item._id} className="col-lg-3 col-md-6 col-sm-6 col-xs-6 m-5">
                <div className="card" style={{width: "18em"}}>
                <img src={item.imageUrl} className="card-img-top" alt="..." style={{width:'auto',height:'200px'}}/>
                <div className="card-body">
                  <h5 className="card-title">{item.Title}</h5>
                  <p className="card-text">{item.Description}</p>
                  <Link to={`/Article/${String(item._id)}`} className="btn btn-primary">Read More</Link>
                </div>
                </div>
                </div>
            ))}
            </div>
            </div>
        </>
        
    )
}

export default Home;