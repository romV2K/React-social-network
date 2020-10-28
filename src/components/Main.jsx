import Nav from "./Nav";
import ProfileDescription from "./ProfileDescription";

const Main = () => {
  return (
    <main>
    <div className="img-div">
      <img src="https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/2/india-colors-abstract-wide-sunset-2-stefano-senise.jpg"></img>
    </div>
    <Nav/>
    <ProfileDescription/>
    </main>
  );
}

export default Main;