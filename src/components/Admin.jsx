import React, { useEffect } from 'react'
import './AdminStyle.css'
import { Link, useNavigate } from 'react-router-dom';
export default function Admin() {

 const navigate = useNavigate()

  useEffect(()=>{
    const data = localStorage.getItem('user');

    // console.log(data);

    if(data === null) {
      navigate('/loginpage')
      // window.location.href = "/loginpage"
    }else{
      navigate('/admin')
    }
  },[])

  //clear
  function clr(e){
    e.preventDefault();
    localStorage.clear();
    navigate('/loginpage');
    alert("Login Again For Admin Access...");
  }
  //Add product is used to add data in database
  function add(e){
    e.preventDefault();
    navigate('/createapi');
  }

  return (
    <div>
    <div className="main">
      <div className='left'>
    <div className="position-sticky">
      <div className="list-group list-group-flush mx-3 mt-4">
      <Link to={"/responce"}>
        <a
          
          className="list-group-item list-group-item-action py-2 ripple"
          aria-current="true"
        >
          
          <i class="fa-solid fa-pen-to-square me-3"></i><span>Your Response</span>
        </a></Link>
        <Link to={"/product"}>
        <a href="#" className="list-group-item list-group-item-action py-2 ripple">
        <i className="fa-solid fa-wallet me-3"></i><span>Products</span>
        </a></Link>
        <a onClick={(e)=>add(e)} href="#" className="list-group-item list-group-item-action py-2 ripple"
          ><i className="fa-solid fa-plus me-3"></i><span>Add Product</span></a
        >
        <a href="#" className="list-group-item list-group-item-action py-2 ripple"
          ><i className="fa-solid fa-truck-fast me-3"></i><span>Orders</span></a
        >
        <Link to={"/allcards"}>
        <a href="#" className="list-group-item list-group-item-action py-2 ripple">
        <i className="fa-solid fa-wallet me-3"></i><span>All Products</span>
        </a></Link>
        <a className="list-group-item list-group-item-action py-2 ripple" onClick={(e)=>clr(e)}
          ><i  className="fa-solid fa-right-from-bracket me-3"></i><span>LogOut</span></a
        >
        
       
      </div>
      </div>
    </div>
    <div className="right">
    <div className='R1'>
        <div>
        <i className="fa-solid fa-user"></i>
        </div>
        <div>
          <hr />
        <a href="#">User information</a>
        </div>
    </div>
    <div className='R2'>
        <div>
        <i className="fa-solid fa-briefcase"></i>
        </div>
        <div>
        <hr/>
        <Link to={"/Product"}>
        <a >Products</a>
        </Link>
        </div>
    </div>
    <div className='R3'>
        <div>
        <i class="fa-solid fa-gifts"></i>
        </div>
        <div>
        <hr />
        <a href="#">Orders</a>
        </div>
    </div>



    </div>
    </div>

    </div>
  );
}
