import React,{useState} from 'react'
import Logo from '../../../assets/png/logo.png'
import PlusCircle from '../../../assets/svg/PlusCircle'
import ViewEye from '../../../assets/svg/ViewEye'
import './index.scss'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {test} from '../../../config/config.json'


export default function DashBoard() {
    
  
   
    
       
   
         
    return (
        <div class='dashBoard'>
           <div class='head'><img src={Logo} alt='logo'/></div>
           <div class='body'>
               <Link to='/edit_category' > <div class='div'> <div class='white-div'><PlusCircle /><span onClick={()=>{
                 
                   
               
               }}>Edit Category</span></div> </div></Link>
               <Link to='/admin/see-order'> <div class='div'> <div class='white-div'><ViewEye /><span>View Order</span></div> </div></Link>

         
               <Link to='/admin/products'> <div class='div'> <div class='white-div'><ViewEye /><span>View product</span></div> </div></Link>
               <Link to='/admin/addproduct'> <div class='div'> <div class='white-div'><PlusCircle /><span>Add product</span></div> </div></Link>
                

          
           </div>
            
        </div>
    )
}
