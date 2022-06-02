import React, { useEffect, useRef, useState } from 'react'
import { AddListingContainer } from '../Styles/Admin.styled'
import FileBase64 from 'react-file-base64'
import axios from 'axios'

function AddListing() {

    
    const [categories, setCat ] = useState([])
    const [sub,setSub] = useState([])

    const getCategories = async ()=>{
        await axios.get("https://kde-api.herokuapp.com/category/")
        .then(resp => setCat(resp.data))
        .catch(err => console.log(err))
    }
    
    const getSubCategory = async ()=>{
        await axios.get("https://kde-api.herokuapp.com/sub-category")
        .then(resp => setSub(resp.data))
        .catch(err => console.log(err))
    }

    const titleRef = useRef()
    const descRef = useRef()
    const [displayImage, setDisplay] = useState()
    const [images, setImages] = useState()
    const categoryRef = useRef()
    const subRef = useRef()
    const priceRef = useRef()

    
    const postListing = async ()=>{
        const post = {
            title: titleRef.current.value,
            desc: descRef.current.value,
            displayImage,
            images,
            category: categoryRef.current.value,
            subCategory: subRef.current.value,
            price: priceRef.current.value,
        }
        
        await axios.post("http://localhost:5555/listing/", post)
        .then((resp)=> console.log(resp))
        .catch(err => console.log(err))
    }
    
    useEffect(()=>{
        getCategories()
        getSubCategory()
    }, [])

    
  return (
    <AddListingContainer>
        <form action="">
            <input type="text" ref={titleRef} placeholder='title' />
            <textarea name="" placeholder='description'ref={descRef}/>
            <input type="text" placeholder='price' ref={priceRef}/>
            <select name="" id="" placeholder='Category' ref={categoryRef}>
                {categories?.map((cat, i)=>{
                    return(
                        <option key={i} ref={categoryRef} value={cat._id}>
                            {cat.title}
                        </option>
                    )
                })}
            </select>

            <select name="" id=""ref={subRef}>
                {
                    sub?.map((cat, i)=>{
                        return(
                            <option key={i} value={cat._id} ref={subRef}>
                                {cat.title}
                            </option>
                        )
                    })
                }
            </select>
            <FileBase64
                multiple={false}
                type='image'
                onDone={(image)=> setDisplay(image.base64)}
            />
            { displayImage && <img src={displayImage} alt="" className='preview'/> }
            <FileBase64
                multiple={true}
                type='image'
                onDone={(image)=> setImages(image)}
            />
            <button onClick={postListing}>Add</button>
        </form>
        
    </AddListingContainer>
  )
}

export default AddListing