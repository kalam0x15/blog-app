import { useState , useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Hero from "./hero";




const Articles = () =>{
    
    let id = useParams();
    const navigate = useNavigate();
    const [articles, setArticles] = useState([])
    useEffect(()=>{

        axios.get('http://localhost:3001/showdata')
        .then(articles => setArticles(articles.data))
        .catch(err => console.log(err))
        
    },[])

    const deleteItem = (e) =>{
        let data = {Id: id.id}
        axios.post('http://localhost:3001/deletedata',data)
                .then(res=>{
                    console.log(res)
                }).catch(err=>{
                    console.log(err)
                })
                navigate('/')               
            
    }

    const editItem = ()=>{
        navigate('/Editdata/'+id.id);
    }
    
    
    return(
       <div>
        {
            articles.map((item,index)=>{
                if (id.id === item._id){
                    return (
                        <div key={index} className="container mt-5">
                            <div className="d-flex flex-row">
                                <button className="mx-3 item-btn ">
                                    <i className="material-icons btn-edit" onClick={editItem}>edit</i>
                                </button>
                                <button className="item-btn ">
                                    <i className="material-icons btn-delete" onClick={deleteItem}>delete</i>
                                </button>
                            </div>
                            <div className="row">
                                <div  className="col-12">
                                    <Hero text={item.Title} backdrop={item.imageUrl}/>
                                    <p  className="show-cnt" style={{whiteSpace:'pre-wrap'}}>{item.Content.split('**')}</p>
                                    
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