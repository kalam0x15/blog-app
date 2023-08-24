import React, { useState } from "react";
import axios from 'axios';


const Addblog = () =>{
    const [title,setTitle] = useState('');
    let [imageUrl,setImageUrl] = useState('');
    const [desciption,setDescription] = useState('');
    const [content,setContent] = useState('');



    const onSubmit = (e) =>{
        e.preventDefault()
        if(imageUrl===""){
            imageUrl='https://w0.peakpx.com/wallpaper/433/90/HD-wallpaper-blur-abstract-abstract-amoled-apple-black.jpg';
        }
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
            <form className="row m-5">
                <div className="mb-3">
                    <label  className="form-label">Title</label>
                    <input type="email" className="form-control" value={title} placeholder="Title" onChange={getTitle}/>        
                </div>

                
                    <div className="mb-3 col-lg-5 col-md-5 col-sm-g">
                        <label  className="form-label">Image Url</label>
                        <input type="email" className="form-control" value={imageUrl} placeholder="paste image url" onChange={getImage}/>        
                    </div>

                    
               

                <div className="mb-3">
                    <label  className="form-label">Description</label>
                    <input type="email" className="form-control"  placeholder="Description" value={desciption} onChange={getDescription}/>        
                </div>
                <div className="mb-3">
                    <label  className="form-label">Content</label>
                    <textarea className="form-control" placeholder="Blog Content" id="exampleFormControlTextarea1" rows="3" value={content} onChange={getContent}/>
                </div>

                <div className="mb-3">
                    <button className="btn btn-primary" type="submit" onClick={onSubmit}>Submit</button>
                </div>
                



                
            </form>
            
        </div>



    )
}

export default Addblog;