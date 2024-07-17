import "./Result.css"

const Result = ({result}) => {
  console.log(result)
  return (
    <div className="result-card">
      <h1 className="header">{result.percentage}</h1>
      <p className="title">{result.title}</p>
      <p className="description">{result.description}</p>
    </div>
  );
}

export default Result;
