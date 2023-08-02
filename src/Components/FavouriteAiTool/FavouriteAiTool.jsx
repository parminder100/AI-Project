import { useSelector } from "react-redux";
import "../FavouriteAiTool/FavouriteAiTool.css";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

const FavouriteAiTool = () => {
  const selectedTools = useSelector((state) => state.favorite);
  console.log(selectedTools);
  return (
    <>
        <Header />
        <section className="favoutite-tools">
            <div className="container">
                <div className="row">
                {selectedTools.length === 0 ? (
                    <p className="favourite-message">There are no favorite tools added.</p>
                ) : (
                selectedTools.map((aiTool) => (
                    <div className="col-sm-4">
                        <div className="ai-box-content">
                            <div className="ai-image-content">
                                <img className="w-100 aidaptive-tool-image" src={aiTool.aiImage} alt="aidaptive_tool.jpg" />
                            </div>
                            <div className="aidaptive-tool-content">
                                <p className="ai-tool-name">{aiTool.aiName}</p>
                                <div class="ai-tools-rating">
                                    {
                                        aiTool.aiRating.map((starclass, index)=>(
                                            <i key={index} className={starclass}></i>
                                        ))
                                    }
                                    <p className="rating-number">({aiTool.aiRating.length})</p>
                                </div>
                                <p className="ai-tool-description">{aiTool.aiDescription}</p>
                                <div className="aitools-price-content">
                                    <p className="aitools-price"><i className={aiTool.aiPriceType}></i> {aiTool.aiPrice}</p>
                                </div>
                                <p className="aitools-type">{aiTool.aiType}</p>
                                <div className="aitools-link-btn-content">
                                    <Link to={aiTool.aiUrl} target="_blank"><button className="aitools-link-btn"><i className="fas fa-external-link-alt"></i></button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))
                )}
                </div>
            </div>
        </section>
      {/* {selectedTools.map((aiTool) => (
        <div key={aiTool.id}>
          <h2>{aiTool.aiName}</h2>
        </div>
      ))} */}
    </>
  );
};
export default FavouriteAiTool;
