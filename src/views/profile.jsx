import Details from "../components/details";
import Gallery from "../components/gallery";
import Posts from "../components/posts";
import Todo from "../components/todo";
import Chats from "../components/chat";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
const Profile = () => {
  const links = [
    { name: "Profile", link: "/profile/details" },
    { name: "Posts", link: "/profile/posts" },
    { name: "Gallery", link: "/profile/gallery" },
    { name: "ToDo", link: "/profile/todo" },
  ];

  return (
    <main className="flex p-10 text-xl">
      <section className="Navbar w-3/12 bg-gradient-to-t from-purple-600 to-blue-600 rounded-2xl">
        <ul className="flex flex-col" style={{ padding: "16rem 3rem" }}>
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                to={link.link}
                className="text-gray-400 pb-5 pt-5 border-bt-li active:text-gray-100 focus:text-gray-100"
              >
                {link.name}
              </Link>
            );
          })}
        </ul>
      </section>

      <section className="grow box-border">
        <Routes>
          <Route path="details" element={<Details />} />
          <Route path="posts" element={<Posts />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="todo" element={<Todo />} />
        </Routes>
      </section>
      <Chats />
    </main>
  );
};

export default Profile;
