import sourcePng from '../assets/results-component.png'
import results from "../data/result"
import Result from "./Result"
import "./Results.css"

const Results = () => {
  return (
    <div>
      <h1>Results</h1>
      <h3>Healthcare provider realities</h3>
    
      <a src={sourcePng} alt="IBM Study">Source: IBM Institute for Business Value study, Better health outcomes with AI-powered virtual assistants</a>
      <div className="results-container">
        {results.map((result)=><Result result={result}/>)}
      </div>
        
    </div>
  );
}

export default Results;
