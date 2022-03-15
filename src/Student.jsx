const Student = (props) => {
  return (  
    <div>
      {/* test student comp  */}
      <h2>{props.student.name}</h2>
      <p>{props.student.bio}</p>
    </div>
  );
}
 
export default Student;