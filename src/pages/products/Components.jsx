import React, {Fragment,useEffect,useState,useContext} from 'react'
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
// import Cart from '../cart/index.jsx';
import { useSelector } from 'react-redux';
import {addToCart, removeFromCart } from "../../appStore/cart/index.actions"
import Add from '../../assets/svg/add.jsx';
import {PrefferedCurrency} from '../../hooks/userContext'


export default function Components({data ,page}) {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart);
    const [showAdd,setShowAdd]=useState(true)
    

    useEffect(()=>cart.map(item=>{
        console.log(item.id==data.id,data,item);

        if(item.id===data.id){
            setShowAdd(false)
        }
        else setShowAdd(true)
    }),[cart])
    // 
    console.log(cart);
    
   const image=JSON.parse(data.product_image)
   
    data.unit=1;
    data.totalPrice=data.unit*data.price_usd
    data.selected=true
    const imageLink=image[0]
     const [productLink,setLink]=useState('')
    console.log(imageLink);
    useEffect(()=>{
        if(page)setLink('/product')
        else setLink('/admin/product')
    },[page])
    const linkRef =React.useRef(null)
    const {userCurrency,setUserCurrency}=useContext(PrefferedCurrency)
    return (
        <Fragment>
                       <Link style={{display:'none'}} ref={linkRef} to={productLink}></Link>
                       <div className="product">
                                <img  onClick={()=>{
                           localStorage.setItem('itemId',data.id)
                           linkRef.current.click()
                           }} src={imageLink} alt="" />
                                <div className="productDetails">
                                    <div className="productDescription">
                                        {data.product_detail}
                                    </div>
                                    <div className="priceAndAdd" onClick={e=>e.stopPropagation()}>
                                        <span>
                                            {userCurrency==='USD'?`$${data.price_usd}`:`N${data.price_ngn}`}
                                        </span>
                                        {
                                            showAdd && <div onClick={()=>{
                                                dispatch(addToCart(data))
                                                
                                            }} className="addProduct">
                                              {page &&  <Add />}
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                    
        </Fragment>
    )
}
