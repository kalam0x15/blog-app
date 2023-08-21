import { useEffect, useState } from "react";
import axios from 'axios';
import cors from 'cors';
import { Link } from 'react-router-dom'


cors();
const Home = () =>{
    const [articles, setArticles] = useState([])
    useEffect(()=>{

        axios.get('http://localhost:3001')
        .then(articles => setArticles(articles.data))
        .catch(err => console.log(err))
        
    },[])
   
    

    return(
        
        <div>
            {articles.map(item => (
                <div key={item._id} className="card" style={{width: "18rem"}}>
                <img src="..." class="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{item.Title}</h5>
                  <p className="card-text">{item.Description}</p>
                  <Link to={`/Articles/${String(item._id)}`} className="btn btn-primary">Read More</Link>
                </div>
              </div>
            ))}
        </div>
        
    )
}

export default Home;