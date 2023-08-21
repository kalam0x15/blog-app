import { useState , useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";




const Articles = () =>{
    
    let id = useParams();
    const [articles, setArticles] = useState([])
    useEffect(()=>{

        axios.get('http://localhost:3001')
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
                                <div className="col-12">
                                    <h3>{item.Title}</h3>
                                    <p>{item.Content}</p>
                                    
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