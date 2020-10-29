import Nav from "./Nav";
import ProfileDescription from "./ProfileDescription";
import Posts from "./Posts";

const Main = () => {
  return (
    <main>
    <Nav/>
    <ProfileDescription/>
    <div className="container">
        <Posts/>
    </div>
    </main>
  );
}

export default Main;