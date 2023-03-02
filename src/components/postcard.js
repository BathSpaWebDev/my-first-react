import PersonBio from "./personBio";

function Postcard({name, jobTitle, text}) {
  return (

    <div className="card">
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar"  />
        <div className="container">
          <h4><b>{name}</b></h4> 
          <p>{jobTitle}</p> 
        </div>

        <PersonBio text={text} />
    </div>

  );
}

export default Postcard;