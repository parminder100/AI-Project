import { AiToolsInformationData } from "../AiToolsInformationData/AiToolsInformationData";
import { useParams } from "react-router-dom";
import "../AiToolsInformation/AiToolsInformation.css";
import Header from "../Header/Header";

const AiToolsInformation = () => {
    const { toolId } = useParams();
    const selectedTool = AiToolsInformationData.find((tool) => tool.id === parseInt(toolId));
    return(
        <>
            <Header />
            <section className="ai-tool-information">
                <div className="container">
                    <div className="row">
                        {selectedTool &&
                            <>
                                <div className="col-sm-12 mb-4">
                                    <h1 className="ai-tool-name">{selectedTool.aiToolName}</h1>
                                    <p className="product-information-heading">{selectedTool.productInformation}</p>
                                </div>
                                <div className="col-sm-6">
                                    <img className="ai-tool-image w-100" src={selectedTool.aiToolImage} alt="aidaptive_tool.jpg"/>
                                </div>
                                <div className="col-sm-6">
                                    <p className="aitool-description">{selectedTool.aiToolDescription}</p>
                                    <div className="ai-tool-bage-content">
                                        <i className={selectedTool.aiToolVerifiedBadge}></i>
                                        <p className="ai-badge-description">{selectedTool.aiToolVerifiedBadgeDescription}</p>
                                    </div>
                                    <div className="ai-tool-add-date">
                                        <i className={selectedTool.aiToolCalenderIcon}></i>
                                        <p className="ai-tool-date">{selectedTool.aiToolAddedDate}</p>
                                    </div>
                                    <div className="aitools-type-content">
                                        <p className="aitools-type-icon"><i className={selectedTool.aiToolTypeIcon}></i> {selectedTool.aiToolType}</p>
                                    </div>
                                    <div className="aitools-api-content">
                                        <p className="aitools-type-icon">{selectedTool.aiToolApi}</p>
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
export default AiToolsInformation;