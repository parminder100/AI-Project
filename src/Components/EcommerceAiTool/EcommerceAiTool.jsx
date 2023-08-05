import { AIToolsData } from "../AI Tools Data/AIToolsData";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import {useDispatch, useSelector} from "react-redux";
import { useState } from "react";
import { setFavourite } from "../Store/Store";
import "../EcommerceAiTool/EcommerceAiTool.css";
import { useNavigate } from "react-router-dom";

const EcommerceAiTool = () => {
    const dispatch = useDispatch();
    const favouriteTools = useSelector((state)=> state.favorite);
    const navigate = useNavigate();

    const isToolInFavorites = (aiTool) =>{
        return favouriteTools.some((tool)=> tool.id === aiTool.id);
    }

    const [isHeartFilled, setIsHeartFilled] = useState(false);
    const [showAddPopup, setShowAddPopup] = useState(false);
    const [showRemovePopup, setShowRemovePopup] = useState(false);
    // Filter AI tools related to Ecommerce
    const ecommerceAITools = AIToolsData.filter(
        (item) => item.aiType.includes('#e-commerce')
    );
    console.log(ecommerceAITools);

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

    const handleAiTool = (slectedTool) =>{
        navigate(`/ai-tools-information/${slectedTool.id}`);
    }
  return (
    <>
        <Header />
        <section className="ecommerce-aitool">
            <div className="container">
                {showAddPopup && <p className={`popup ${showAddPopup ? "popup-show" : ""}`}>item saved to favourite list</p>}
                {showRemovePopup && <p className={`removedpopup ${showRemovePopup ? "removedpopup-show" : ""}`}>Item removed from the favourite list</p>}
                <div className="row">
                {ecommerceAITools.map((item) => (
                    <div className="col-sm-4">
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
                                <div className="aitools-price-content">
                                    <p className="aitools-price"><i className={item.aiPriceType}></i> {item.aiPrice}</p>
                                </div>
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
                ))}
                </div>
            </div>
        </section>
    </>
  );
};
export default EcommerceAiTool;
