import Details from "../components/details";
import Gallery from "../components/gallery";
import Posts from "../components/posts";
import Todo from "../components/todo";
const Profile = () => {
  return (
    <main className="container">
      <section className="Navbar "></section>
      <section>
        <Details />
        <Posts />
        <Gallery />
        <Todo />
      </section>
    </main>
  );
};

export default Profile;
