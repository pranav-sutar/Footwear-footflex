import React from 'react'
import { Link } from 'react-router-dom'

export default function Header01() {
	function dispmsg(e){
		e.preventDefault();
		alert("You can never search Here...🤣🤣🤣🤣🤣");
	}
  return (
    
    <>
    <nav className="colorlib-nav" role="navigation" style={{backgroundImage:"linear-gradient(to right, pink , yellow)"}}>
			<div className="top-menu">
				<div className="container">
					<div className="row">
						<div className="col-sm-7 col-md-9">
							<div id="colorlib-logo"><a href="index.html">FootFlex.com</a></div>
						</div>
						<div className="col-sm-5 col-md-3">
			            <form action="#" className="search-wrap">
			               <div className="form-group">
			                  <input type="search" className="form-control search" placeholder="Search" />
			                  <button onClick={(e)=>dispmsg(e)} className="btn btn-primary submit-search text-center" type="submit"><i className="icon-search"></i></button>
			               </div>
			            </form>
			         </div>
		         </div>
					<div className="row">
						<div className="col-sm-12 text-left menu-1">
							<ul>
								<li>
								<Link to={"/"} className="active"><a href="index.html">Home</a></Link></li>
								<Link to={"/allcards"}>
								<li className="has-dropdown">
									<a href='#' >All Products</a>
								</li>
								</Link>
								<li>
								<Link to={"/about"}><a>About</a></Link>
								</li>
								<li>
								<Link to={"/contact"}><a href="contact.html">Contact</a></Link>
								</li>
								{/* <li>
								<Link to={"/admin"}><a href="contact.html">Admin</a></Link>
								</li> */}
								<li>
								<Link to={"/admin"}><a>Admin Login</a></Link>
								</li>
								<li className="cart"><a href="cart.html"><i className="icon-shopping-cart"></i> Cart [0]</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="sale" style={{backgroundImage:"linear-gradient(to right,black, red , black)"}}>
				<div className="container">
					<div className="row">
						<div className="col-sm-8 offset-sm-2 text-center">
							<div className="row">
								<div className="owl-carousel2">
									<div className="item">
										<div className="col">
											<h3><a href="#" style={{fontWeight:"Bolder"}}>25% off (Almost) Everything! Use Code: Summer Sale</a></h3>
										</div>
									</div>
									<div className="item">
										<div className="col">
											<h3><a href="#" style={{fontWeight:"Bolder"}}>Our biggest sale yet 50% off all summer shoes</a></h3>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
    
    
    
    
    
    
    </>
  )
}
