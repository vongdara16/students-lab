import Score from "./Score";

const Student = (props) => {
  return (  
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">{props.student.name}</h2>
        <p className="card-text">{props.student.bio}</p>
        {props.student.scores.map((score) => 
          <Score key={props.student.name} score={score}/>
        )}
      </div>
    </div>
  );
}
 
export default Student;


// <div class="card" style="width: 18rem;">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="card-link">Card link</a>
//     <a href="#" class="card-link">Another link</a>
//   </div>
// </div>