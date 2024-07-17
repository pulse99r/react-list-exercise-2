
const Result = ({result}) => {
  console.log(result)
  return (
    <div>
      <h1>{result.percentage}</h1>
      <p>{result.title}</p>
      <p>{result.description}</p>
    </div>
  );
}

export default Result;
