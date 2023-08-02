import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "../AiToolsCategories/AiToolsCategories.css";

const AiToolsCategories = () =>{
    return(
        <>
            <Header />
            <section className="aitool-categories">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="categories-content">
                                <h1 className="all-categories">All Categories</h1>
                                <p className="browse-categories">Browse all categories at one glance.</p>
                            </div>
                            <div>
                                <p className="business-ai-tools">business</p>
                                <h1 className="ecommerce-ai-tools"><Link to="/ai-tools/ecommerce">E-COMMERCE <span>53 tools</span></Link></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default AiToolsCategories;