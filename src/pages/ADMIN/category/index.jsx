import { Link } from "react-router-dom";
import Logo from "../../../assets/png/logo.png";
import './index.scss'
import {test} from '../../../config/config.json'
import axios from 'axios'
import { useEffect, useState } from "react";
import PlusCircle from "../../../assets/svg/PlusCircle";

export default function EditCat(){
    const url=test;
    const [cats,setCats]=useState([])    
    const token=localStorage.getItem('inchToken')
    const [cat,setCat]=useState({name:''})
   



    const createCategory=async(params)=>{
        try {
           const { status, data } = await axios({
                 method: 'post',
                  url: `${url}products/category`,
                  headers: {
                    "content-type": "application/json",
                    "Authorization": `Bearer ${token}`
      },
      data:params

  })
  
  console.log(status, data,params);
 }
     catch (error) {
         console.log(error.response)
 
  
}  
  }
    const catList=()=>axios.get(`${url}products/categories`,{headers:headers}).then(response=>{
        // console.log(response.data.categories)
        
        setCats(response.data.categories)})

        useEffect(()=>catList(),[url])
        const deleteCategory=(params)=>axios.delete(`${url}products/category?id=${params}`,{headers:headers}).then(catList())
        const headers= {
                           "content-type": "application/json",
                           "Authorization": `Bearer ${token}`
             }

             const [view,setView]=useState(false)




    return(
        <div class="dashBoard">
        <Link to="/admin/dashboard" class="head">
          <img src={Logo} alt="logo" />
        </Link>
        <div class='edit_cat'>
           <div className="head">
               <span>Categories</span>
               <span onClick={()=>setView(true)}>Add Categories</span>
           </div>
           <div className="category_list">
           {cats.map(category=>(
                    <div class='cat_item'><span>{category.category}</span><span onClick={()=>{    
                        deleteCategory(category.id);
                    }} style={{color:'red'}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18" stroke="url(#paint0_linear_1243_2952)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6 6L18 18" stroke="url(#paint1_linear_1243_2952)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <defs>
                    <linearGradient id="paint0_linear_1243_2952" x1="-0.214285" y1="-7.1583" x2="25.1864" y2="29.914" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#EB5757"/>
                    <stop offset="1" stop-color="#A4FFFA"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_1243_2952" x1="-0.214285" y1="-7.1583" x2="25.1864" y2="29.914" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#EB5757"/>
                    <stop offset="1" stop-color="#A4FFFA"/>
                    </linearGradient>
                    </defs>
                    </svg></span></div>))}
            </div>
            {     
             view && <div className="add_cont" onClick={()=>setView(false)}>              
                  <div onClick={(e)=>e.stopPropagation()} class='add_container'>
                                    <input type='text'placeholder='Enter New Category' onChange={(e)=>setCat({name:e.target.value})} /> <span onClick={()=>cat?createCategory(cat):''}><PlusCircle /></span>
                              </div>
                              </div>

                 }
        </div>
       
      </div>
  
    )
}