import Score from "./Score";

const Student = (props) => {
  return (  
    <div>
      {/* test student comp  */}
      <h2>{props.student.name}</h2>
      <p>{props.student.bio}</p>
      {props.student.scores.map((score, idx) => 
        <Score key={props.student.name} score={score}/>
      )}
    </div>
  );
}
 
export default Student;