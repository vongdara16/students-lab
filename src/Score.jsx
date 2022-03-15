const Score = (props) => {
  return (  
    <div>
      <h5>Test Date: {props.score.date}</h5>
      <h6>Score: {props.score.score}</h6>
    </div>
  );
}
 
export default Score;