import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";



const Addblog = () =>{
    const navigate = useNavigate();
    const [title,setTitle] = useState('');
    let [imageUrl,setImageUrl] = useState('');
    const [desciption,setDescription] = useState('');
    const [content,setContent] = useState('');
    



    const onSubmit = (e) =>{
        e.preventDefault()
        if(imageUrl===""){
            imageUrl='https://static.vecteezy.com/system/resources/previews/010/568/319/original/abstract-cyber-city-technology-innovation-concept-design-background-vector.jpg';
        }

             
        if(title.length===0 || desciption.length===0 || content.length===0){
            window.alert('Enter all the fields')
        }else{

            
            let details = {
                Title : title,
                imageUrl : imageUrl,
                Description : desciption,
                Content : content
            }
            
            
            axios.post('http://localhost:3001/data', details)
            .then(res=>{
                console.log(res)
                
            }).catch(err=>{
                console.log(err)
            })
            
            window.alert('Blog Added Successfully')
            navigate('/')
        }

    }


        const getTitle = (e) =>{
            setTitle(e.target.value)

        }
        const getImage =(e)=>{
        setImageUrl(e.target.value)
        }
        const getDescription =(e)=>{
            setDescription(e.target.value)
            }
        const getContent =(e)=>{
            setContent(e.target.value)
            }
        
        
         



    

    

    return(
        <div className="container">
            <form className="row m-5" noValidate>
                <div className="mb-3">
                    <label  className="form-label">Title</label>
                    <input type="email" className="form-control" value={title} placeholder="Title" onChange={getTitle} />        
                </div>
                    <div className="mb-3">
                        <label  className="form-label">Image Url</label>
                        <input type="email" className="form-control" value={imageUrl} placeholder="paste image url" onChange={getImage}/>        
                    </div>

                <div className="mb-3">
                    <label  className="form-label">Description</label>
                    <input type="email" className="form-control"  placeholder="Description" value={desciption} onChange={getDescription}/>        
                </div>
                <div className="mb-3">
                    <label  className="form-label">Content</label>
                    <textarea className="form-control" placeholder="Blog Content" id="exampleFormControlTextarea1" rows="10" value={content} onChange={getContent}/>
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary" type="submit" onClick={onSubmit}>Submit</button>
                </div>
            </form>
           
        </div>
        )

        
}

export default Addblog;