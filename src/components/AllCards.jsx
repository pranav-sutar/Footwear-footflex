import React, { useEffect, useState } from "react";
import '../components/Cards.css'
import axios from "axios";
export default function AllCards() {

    const [data, setData]=useState([]);
    function temp(){
    axios.get("https://659244febb129707198f9b65.mockapi.io/React/crud")
    .then((res)=>{
        console.log(res.data);
        setData(res.data)
    })
    
    }   
    
    useEffect(()=>{
        temp();
    },[]);
  return (
    <>
    
    <div className="cards-container">
        <div className="row">



        {
            data.map((eachItem)=>{
                return(
                    
                    <div className="col-lg-4">
                        
            <div className="card">
                <h3 className="ttl">{`${eachItem.title}`}</h3>
                <span className="img-container"><img src={eachItem.image} alt="image" /></span>
                <span className="cat">Catagory: <b style={{fontWeight:"bold"}}>{`${eachItem.catagory}`}</b></span>
                <span className="pr">Price:  <b style={{fontWeight:"bold"}}>{`₹ ${eachItem.price}  -/Only`} </b></span>
                <span className="rat">Rating:<b style={{fontWeight:"bold"}}> {`${eachItem.rating}`}</b> <i style={{color:"gray"}} class="fa-solid fa-star"></i> </span>
                <span className="btn-container">
                    <button className="btn01"><i class="fa-solid fa-cart-plus"></i> | Add to Cart</button>
                    <button className="btn02"><i class="fa-solid fa-cart-shopping"></i> | Buy</button>
                </span>
            </div>
            </div>
        
                )
            })
        }

</div>


    </div>
    
    
    
    
    
    </>
  );
}
