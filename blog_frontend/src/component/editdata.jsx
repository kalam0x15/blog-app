import { useState , useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Editdata=()=>{
    const id = useParams();
    const navigate = useNavigate();
    let [imageUrl , setImageUrl] = useState('')
    const [articles, setArticles] = useState([])
    useEffect(()=>{

        axios.get('http://localhost:3001/showdata')
        .then(articles => setArticles(articles.data))
        .catch(err => console.log(err))
        
    },[])



    const onSubmit = (e) =>{
        e.preventDefault();
        const content = document.getElementById('content').value;

        const updateData = {
            Id:id.id,
            imageUrl : imageUrl,
            Content : content
        }

        axios.post('http://localhost:3001/updatedata',updateData)
        .then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
        window.alert('Updated Successfully')
        navigate(`/Article/${id.id}`)



    }
    const getImage= (e) =>{
        setImageUrl(e.target.value)
        
    }
    
    return(
        <div>{
            articles.map(item =>{
                if(item._id === id.id){
                    return(

                        
                    <div className="container" key={item._id}>
                    <div className="row mt-5">
                        <div className="mb-3">
                            <label  className="form-label">Image Url</label>
                            <input type="email" className="form-control" value={imageUrl} placeholder="paste image url" onChange={getImage}/>      
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Content</label>
                            <textarea className="form-control" placeholder="Blog Content" id="content" rows="20" defaultValue={item.Content}></textarea>
                        </div>
                        <div className="mb-3">
                            <button className="btn btn-primary" type="submit" onClick={onSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
                    )
                }else{return null}
                })
        }
        </div>
    )
    
}

export default Editdata;