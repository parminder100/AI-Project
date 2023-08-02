import logo from "../assets/img/logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "../Header/Header.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from "react";

const Header = ({handleAiChange, searchAiTool}) =>{
    const [showInputField, setShowInputField] = useState(false);
    const [showHeaderBackground, setShowHeaderBackground] = useState(false);
    const handleShowInputField = () =>{
        setShowInputField(!showInputField);
    }
    useEffect(()=>{
        const handleHeaderBackground = () =>{
            if(window.scrollY >= 50){
                setShowHeaderBackground(true);
            }
            else{
                setShowHeaderBackground(false);
            }
        }

        window.addEventListener("scroll",handleHeaderBackground);

        return () =>{
            window.removeEventListener("scroll", handleHeaderBackground);
        }
    },[]);

    return(
        <>
            <header className={`${showHeaderBackground ? "header-bg-color" : ""}`}>
                <div className="container">
                    <div className="row align-items-center header-row">
                        <div className="col-sm-3 left-col">
                            <img src={logo} alt="logo.png" />
                        </div>
                        <div className="col-sm-9 right-col">
                        <Navbar expand="lg">
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link>
                                        <input className={`aitool-input ${showInputField ? "visible-input" : ""}`} style={{width: showInputField ? "200px" : ""}} type="text" value={searchAiTool} onChange={handleAiChange} />
                                        <i className="fa fa-search" onClick={handleShowInputField} style={{color: showInputField ? "#000" : ""}}></i>
                                    </Nav.Link>
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="#link">About Us</Nav.Link>
                                    <Nav.Link href="#link">Blog</Nav.Link>
                                    <Nav.Link href="/favourites">Favourites</Nav.Link>
                                    <Nav.Link href="#link">Contact Us</Nav.Link>
                                </Nav>
                                </Navbar.Collapse>
                        </Navbar>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;