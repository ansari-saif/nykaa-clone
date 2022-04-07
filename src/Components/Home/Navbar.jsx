import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './home.css'

// import { NykaFashion } from './navbarComp/NykaFashion'
import { NykaNetwork } from './navbarComp/NykaNetwork'

export const Navbar = () => {

    // const[display, setDisplay] = useState({
    //     id: "",
    //     status: false,
    //     title:""
    // })
    const [navdata, setNavdata] = useState([])

    const handleToggle = (id) => {
        const updatedData = navdata.map((item) =>
            (item.id === id ? { ...item, status: !item.status } : item))
        setNavdata(updatedData)
    }

    useEffect(() => {
        getNavbar()
    }, [])

    const getNavbar = () => {
        fetch("http://localhost:3002/navbar2")
            .then((res) => (res = res.json()))
            .then((res) => setNavdata(res))
            .then((res) => console.log(navdata))

    }

    return (
        <div >
            <div style={{display: "flex", width: "95%", margin: "auto", position: "fixed", marginTop: "-50px", background: "white"}}>

            <ul>
                <li>
                    <img src="https://cdn.freelogovectors.net/wp-content/uploads/2021/01/nykaa-logo-freelogovectors.net_.png" alt="" />
                </li>
            </ul>
                <ul>
                    <li>
                    <Link to={"./"} style = {{textDecoration: "none", color: "black"}}>
                        <h4>Categories</h4>
                 </Link>
                    </li>
                </ul>

            <ul>
                <li style={{position: "relative", marginTop: "20px"}}>
                <Link to={"./brands"} style = {{textDecoration: "none", color: "black"}}>
                <h4>Brands</h4>
                 </Link>

                {/* <NykaNetwork {...navdata[0]} handleToggle={handleToggle} /> */}
                </li>
            </ul>
            <ul >
                <li>
                <Link to={"./appliances"} style = {{textDecoration: "none", color: "black"}}>
                <h4>Nykaa Fashion</h4>
                 </Link>

                {/* <NykaFashion {...navdata[1]} handleToggle={handleToggle} /> */}
                </li>
            </ul>

            <ul>
                <li>
                <Link to={"./appliances"} style = {{textDecoration: "none", color: "black"}}>
                <h4>Beauty Advice</h4>
                 </Link>

                </li>
            </ul>

            <ul>
                <li>

                <Link to={"./appliances"} style = {{textDecoration: "none", color: "black"}}>
                    <h4>Nyka Network</h4>
                </Link>
                </li>
            </ul>

            <ul>
                <li>
                    <div style={{marginTop: "20px"}}>
                        <img src="" alt="image" />
                    <input type="text" placeholder='Search On Nykaa' />
                    </div>
                </li>
            </ul>

            <ul>
                    <li>
                    <Link to={"./account"} style = {{textDecoration:"none", color:'black'}}>
                        <h4>Account</h4>
                        
                    </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                    <Link to={"./cart"} style = {{textDecoration:"none", color:'black'}}>
                        <h4>Cart</h4>
                    </Link>

                    </li>
                </ul>
        </div>


        
        <div className='nav2' style={{position: "relative", marginTop: "50px"}}>
            <div style={{display: "flex"}}>
                <ul>
                    <li>
                    <Link to={"./appliances"} style = {{textDecoration:"none", color:'black'}}>Makeup</Link>

                       
                    </li>
                </ul>

                <ul>
                    <li>
                    <Link to={"./appliances"} style = {{textDecoration:"none", color:'black'}}>Skin</Link>

                        
                    </li>
                </ul>


                <ul>
                    <li>
                    <Link to={"./appliances"} style = {{textDecoration:"none", color:'black'}}>Hair</Link>

                    </li>
                </ul>

                <ul>
                    <li>
                        <Link to={"./appliances"} style = {{textDecoration:"none", color:'black'}}>Appliances</Link>
                    </li>
                </ul>

                <ul>
                    <li>
                    <Link to={"./appliances"} style = {{textDecoration:"none", color:'black'}}>Personal Care</Link>
                       
                    </li>
                </ul>

                <ul>
                    <li>
                    <Link to={"./appliances"} style = {{textDecoration:"none", color:'black'}}>Natural</Link>
                    </li>
                </ul>

                <ul>
                    <li>
                    <Link to={"./appliances"} style = {{textDecoration:"none", color:'black'}}>Mom & Baby</Link>

                        
                    </li>
                </ul>
                
            </div>

        </div>
        </div>

    )
}
