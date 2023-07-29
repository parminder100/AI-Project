import logo from "../assets/img/logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "../Header/Header.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import bannerVideo from "../assets/video/bannerVideo.mp4";

const Header = () =>{
    return(
        <>
            <header>
                <div className="container">
                    <div className="row align-items-center header-row">
                        <div className="col-sm-6 left-col">
                            <img src={logo} alt="logo.png" />
                        </div>
                        <div className="col-sm-6 right-col">
                        <Navbar expand="lg">
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
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
            <section>
                <div className="container">
                    <h1 className="banner-heading">Whatever You want to ask- DEX.AI has the <span className="typewriter"></span></h1>
                    <p className="banner-text">
                        Artificial intelligence makes it fast easy to create content for your blog, 
                        social media, website, and more! Rated 5/5 stars in 3,000+ reviews.
                    </p>
                    <div className="btn-content">
                        <button className="free-trial-btn">start a free trial</button>
                        <button className="how-dex-work ai-btn text-white">how dex.ai work</button>
                    </div>
                    <div>
                        <video className="banner-video" muted autoPlay loop>
                            <source src={bannerVideo} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Header;