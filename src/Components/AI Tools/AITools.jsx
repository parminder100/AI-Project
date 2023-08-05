import "../AI Tools/AITools.css";
import {AIToolsData} from "../AI Tools Data/AIToolsData";
import { Link, useNavigate } from "react-router-dom";
import { setFavourite } from "../Store/Store";
import {useDispatch, useSelector} from "react-redux";
import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Header from "../Header/Header";

const AITools = () =>{
    const dispatch = useDispatch();
    const favouriteTools = useSelector((state)=> state.favorite);
    const navigate = useNavigate();

    const isToolInFavorites = (aiTool) =>{
        return favouriteTools.some((tool)=> tool.id === aiTool.id);
    }

    const [isHeartFilled, setIsHeartFilled] = useState(false);
    const [showAddPopup, setShowAddPopup] = useState(false);
    const [showRemovePopup, setShowRemovePopup] = useState(false);
    const [searchAiTool, setSearchAiTool] = useState("");
    const [visibleAiToolsCards, setVisibleAiToolsCards] = useState(10); // Number of aitools cards initially visible

    const togglePopup = (aiTool) =>{
        if(isToolInFavorites(aiTool)){
            setShowAddPopup(false);
            setShowRemovePopup(true);
        }
        else{
            setShowAddPopup(true);
            setShowRemovePopup(false);
        }
    }

    const hidePopupAfterDelay = () =>{
        setTimeout(()=>{
            setShowAddPopup(false);
            setShowRemovePopup(false);
        },3000);
    }

    const handleAiChange = (e) =>{
        setSearchAiTool(e.target.value);
    }

    const filteredAiTool = AIToolsData.filter((item)=> item.aiName.toLowerCase().includes(searchAiTool.toLowerCase()));

    const handleAiTool = (slectedTool) =>{
        navigate(`/ai-tools-information/${slectedTool.id}`);
    }

    const aiToolsCardsPerLoad = 10; // Number of aitools cards to load per scroll

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
        return() =>{
            window.removeEventListener('scroll', handleScroll);
        }
    },[]);

    const handleScroll = () =>{
        if(window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100){
            setVisibleAiToolsCards((prevVisible) => prevVisible + aiToolsCardsPerLoad);
        }
    }
    return(
        <>
            <Header handleAiChange={handleAiChange} searchAiTool={searchAiTool} />
            <Banner />
            <p className="view-categories"><Link to="/ai-tools">View all categories</Link></p>
            <section className="ai-tools-section">
                <div className="container">
                    {showAddPopup && <p className={`popup ${showAddPopup ? "popup-show" : ""}`}>item saved to favourite list</p>}
                    {showRemovePopup && <p className={`removedpopup ${showRemovePopup ? "removedpopup-show" : ""}`}>Item removed from the favourite list</p>}
                    <div className="row ai-card-row">
                        {
                            filteredAiTool.slice(0, visibleAiToolsCards).map((item, id)=>(
                                <div className="col-sm-4 mb-4 ai-card-content" key={item.id}>
                                    <div className="ai-box-content">
                                        <div className="ai-image-content">
                                            <img className="w-100 aidaptive-tool-image" src={item.aiImage} alt="aidaptive_tool.jpg" />
                                            <div className={`favourite-ai-tool ${isToolInFavorites(item) ? "filled" : ""} ${isHeartFilled ? "heart-filled" : ""}`} onClick={()=>{console.log("Clicked AI Tool:", item); dispatch(setFavourite(item)); setIsHeartFilled(!isHeartFilled); hidePopupAfterDelay(); togglePopup(item);}}>
                                                {
                                                    isToolInFavorites(item) ?(
                                                        <i className="fas fa-heart"></i>
                                                    ):
                                                    (
                                                        <i className="far fa-heart"></i>
                                                    )
                                                }
                                            </div>
                                        </div>
                                        <div className="aidaptive-tool-content">
                                            <p className="ai-tool-name" onClick={()=>handleAiTool(item)}>{item.aiName}</p>
                                            <div className="ai-tools-rating" onClick={()=>handleAiTool(item)}>
                                                {
                                                    item.aiRating.map((starclass, index)=>(
                                                        <i key={index} className={starclass}></i>
                                                    ))
                                                }
                                                <p className="rating-number">({item.aiRating.length})</p>
                                            </div>
                                            <p className="ai-tool-description" onClick={()=>handleAiTool(item)}>{item.aiDescription}</p>
                                            {
                                                item.id !== 5 && item.id !== 6 && item.id !== 7 && item.id !== 8 && item.id !== 10 && 
                                                item.id !== 12 && item.id !== 13 && item.id !== 14 && item.id !== 15 && 
                                                item.id !== 16 && item.id !== 17 && item.id !== 19 &&
                                                <div className="aitools-price-content">
                                                    <p className="aitools-price"><i className={item.aiPriceType}></i> {item.aiPrice}</p>
                                                </div>
                                            }
                                            {
                                                item.id === 5 || item.id === 7 || item.id === 8 || item.id === 10 || item.id === 12 || 
                                                item.id === 13 || item.id === 14 || item.id === 15 || item.id === 16 || item.id === 17 ?(
                                                <>
                                                    <div className="teal-resume-builder-ai">
                                                        <div className="aitools-price-content">
                                                            <p className="aitools-price"><i className={item.aiPriceType}></i> {item.aiPrice}</p>
                                                        </div>
                                                        <div className="aitools-price-content">
                                                            <p className="hourly-price">{item.aiHourlyPrice}</p>
                                                        </div>
                                                    </div>
                                                </>
                                            ):("")}
                                            {
                                                item.id === 6 || item.id === 19 ?(
                                                <>
                                                    <div className="teal-resume-builder-ai">
                                                        <div className="aitools-price-content">
                                                            <p className="aitools-price"><i className={item.aiPriceType}></i> {item.aiPrice}</p>
                                                        </div>
                                                        <div className="aitools-price-content">
                                                            <p className="aitools-price"><i className={item.aiPriceTag}></i> {item.aiPriceTagName}</p>
                                                        </div>
                                                        <div className="aitools-price-content">
                                                            <p className="hourly-price">{item.aiHourlyPrice}</p>
                                                        </div>
                                                    </div>
                                                </>
                                            ):("")}
                                            <ul className="aitools-type">
                                                {
                                                    item.aiType.map((type)=>(
                                                        <li>{type}</li>
                                                    ))
                                                }
                                            </ul>
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