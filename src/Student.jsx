import Score from "./Score";

const Student = (props) => {
  return (  
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">{props.student.name}</h2>
        <p className="card-text">{props.student.bio}</p>
        {props.student.scores.map((score, idx) => 
          <Score key={idx} score={score}/>
        )}
      </div>
    </div>
  );
}
 
export default Student;
