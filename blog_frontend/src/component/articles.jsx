import { useState , useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Hero from "./hero";




const Articles = () =>{
    
    let id = useParams();
    const [articles, setArticles] = useState([])
    useEffect(()=>{

        axios.get('http://localhost:3001/showdata')
        .then(articles => setArticles(articles.data))
        .catch(err => console.log(err))
        
    },[])
    
    
    return(
       <div>
        {
            articles.map((item,index)=>{
                if (id.id === item._id){
                    return (
                        <div key={index} className="container">
                            <div className="row m-5">
                                <div  className="col-12">
                                    <Hero text={item.Title} backdrop={item.imageUrl}/>
                                    <p style={{whiteSpace:'pre-wrap'}}>{item.Content.split('*')}</p>
                                    
                                </div>
                            </div>
                        </div>
                    )
                }else{
                    return null}
            })                
                    
        }
       </div>
    )
    
    


    
  




        

    
    
    
        



}

export default Articles