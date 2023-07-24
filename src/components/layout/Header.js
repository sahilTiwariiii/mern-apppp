import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useAuth } from '../../context/auth';
import { toast } from 'react-toastify'
import { } from 'react-icons/fa';
import SearchInput from '../Form/SearchInput';
import useCategory from '../../hooks/useCategory';
import { useCart } from '../../context/cart';
import {Badge } from "antd";
const Header = () => {
    const [auth, setAuth] = useAuth()
    const categories = useCategory()
    const [cart]=useCart()
    const handleLogout = () => {
        setAuth({
            ...auth, user: null, token: ""
        })
        localStorage.removeItem('auth')
        toast.success('Logout Successfully')
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <Link className="navbar-brand" to="/">
                        🛒  Ecommerce App</Link>
                    <ul className="navbar-nav  ms-auto mb-2 mb-lg-0"  >
                        <SearchInput />
                        <li className="nav-item ">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item dropdown">
  <Link className="nav-link dropdown-toggle" to={'/categories'} id="navbarDropdown"  data-bs-toggle="dropdown" >
   Categories
  </Link>
  {categories?.map(c =>(

  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
    <li>
    <Link className="dropdown-item" to={'/categories'} >All Categories</Link>
    </li>
    <li>
       
        <Link className="dropdown-item" to={`/category/${c.slug}`}>{c.name}</Link>
        </li>
   
  </ul>  
  ))}
</li>



                        {
                            !auth.user ? (<>
                                <li className="nav-item ">
                                    <Link className="nav-link" to="/register">Register<span className="sr-only"></span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">
                                        Login
                                        <span className="sr-only"></span></Link>
                                </li>
                            </>) : (
                                <>
                                    <li className="nav-item dropdown">
                                        <NavLink className="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {auth?.user?.name}
                                        </NavLink>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <Link to={`/dashboard/${auth?.user?.role === 1 ? 'admin' : 'user'}`} className="dropdown-item">
                                                    Dashboard
                                                </Link>
                                            </li>
                                            <li>
                                                <Link onClick={handleLogout} className="dropdown-item" to="/login">
                                                    Logout
                                                    <span className="sr-only"></span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>


                                </>
                            )}
                        <li className="nav-item">
                            <Badge count={cart?.length} showZero>
                            <Link className="nav-link" to="/cart">Cart<span className="sr-only"></span></Link>
                            </Badge>
                        </li>

                    </ul>

                </div>
            </nav>

        </>

    )
}

export default Header