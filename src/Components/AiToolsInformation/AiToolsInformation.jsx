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
                                <div className="col-sm-6 ecommerce-aitool-left-col">
                                    <img className="ai-tool-image w-100" src={selectedTool.aiToolImage} alt="aidaptive_tool.jpg"/>
                                </div>
                                <div className="col-sm-6 ecommerce-aitool-right-col">
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
                                    <div>
                                        <button className="aitools-visit-website-btn"><a href={selectedTool.aiToolWebsiteUrl} target="_blank" rel="noopener noreferrer">Visit Website</a></button>
                                    </div>
                                </div>
                                <div>
                                    <h1 className="ecommerce-ai-tool-aboutus-heading">{selectedTool.aiToolAboutUsHeading}</h1>
                                    <p className="ai-tool-aboutus-description">{selectedTool.aiToolAboutUsDescription}</p>
                                    <h3 className="ecommerce-ai-tool-aboutus-heading">{selectedTool.aiToolFeaturesHeading}</h3>
                                    <ul className="ecommerce-ai-tool-features">
                                        {
                                            selectedTool.aiToolFeaturesDescription.map((item,index)=>(
                                                <li key={index}>{item}</li>
                                            ))
                                        }
                                    </ul>
                                    {
                                        toolId === "1" &&
                                        <>
                                            <h3 className="ecommerce-ai-tool-aboutus-heading">{selectedTool.aiToolTechnicalDetailsHeading}</h3>
                                            <ul className="ecommerce-ai-tool-features">
                                                {
                                                    selectedTool.aiToolTechnicalDetaisDescription.map((item, index)=>(
                                                        <li key={index}>{item}</li>
                                                    ))
                                                }
                                            </ul>
                                            <h3 className="ecommerce-ai-tool-aboutus-heading">{selectedTool.aiToolCostAndAvailabilityHeading}</h3>
                                            <ul className="ecommerce-ai-tool-features">
                                                {
                                                    selectedTool.aiToolCostAndAvailabilityDescription.map((item,index)=>(
                                                        <li key={index}>{item}</li>
                                                    ))
                                                }
                                            </ul>
                                        </>
                                    }
                                    <h3 className="ecommerce-ai-tool-aboutus-heading">{selectedTool.aiToolStepsToUseHeading}</h3>
                                    <div>
                                        {
                                            selectedTool.aiToolStepsHeading.map((step,index)=>(
                                                <>
                                                { 
                                                    toolId === "1" && 
                                                    <div key={index}>
                                                        <h1 className="ecommerce-tool-steps-heading">{step}</h1>
                                                            <p className="ecommerce-tool-steps-description">{selectedTool.aiToolStepsDescription[index]}</p>
                                                    </div>
                                                }
                                                {
                                                    toolId === "2" &&
                                                    <div key={index}>
                                                        <ul className="stockimg-steps">
                                                            <li>{step}</li>
                                                            {
                                                                selectedTool.aiToolStepsDescription[index] &&(
                                                                    <img className="w-100" src={selectedTool.aiToolStepsDescription[index]} alt={`Step ${index + 1}`} />
                                                                )
                                                            }
                                                        </ul>
                                                    </div>
                                                }
                                                </>
                                            ))
                                        }
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