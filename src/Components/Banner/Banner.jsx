import "../Banner/Banner.css";
import bannerVideo from "../assets/video/bannerVideo.mp4";

const Banner = () =>{
    return(
        <>
            <section className="banner-section">
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
export default Banner;