const Score = (props) => {
  return (  
    <div>
      {/* test score comp */}
      <h4>Test Date: {props.score.date}</h4>
      <h5>Score: {props.score.score}</h5>
    </div>
  );
}
 
export default Score;