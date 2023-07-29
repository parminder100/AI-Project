import "../AI Tools/AITools.css";
import {AIToolsData} from "../AI Tools Data/AIToolsData";
import { Link } from "react-router-dom";

const AITools = () =>{
    return(
        <>
            <section className="ai-tools-section">
                <div className="container">
                    <div className="row">
                        {
                            AIToolsData.map((item)=>(
                                <div className="col-sm-4">
                                    <div className="ai-box-content">
                                        <div className="ai-image-content">
                                            <img className="w-100 aidaptive-tool-image" src={item.aiImage} alt="aidaptive_tool.jpg" />
                                            <div className="favourite-ai-tool" >
                                                    <i
                                                        className="fas fa-heart"
                                                    ></i>
                                            </div>
                                        </div>
                                        <div className="aidaptive-tool-content">
                                            <p className="ai-tool-name">{item.aiName}</p>
                                            <div className="ai-tools-rating">
                                                {
                                                    item.aiRating.map((starclass, index)=>(
                                                        <i key={index} className={starclass}></i>
                                                    ))
                                                }
                                                <p className="rating-number">({item.aiRating.length})</p>
                                            </div>
                                            <p className="ai-tool-description">{item.aiDescription}</p>
                                            <div className="aitools-price-content">
                                                <p className="aitools-price"><i className={item.aiPriceType}></i> {item.aiPrice}</p>
                                            </div>
                                            <p className="aitools-type">{item.aiType}</p>
                                            <div className="aitools-link-btn-content">
                                                <Link to={item.aiUrl} target="_blank"><button className="aitools-link-btn"><i className="fas fa-external-link-alt"></i></button></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
export default AITools;