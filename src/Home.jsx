import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
export default function HomePage() {
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{
        backgroundImage:
          "url('https://www.essence.com/wp-content/uploads/2023/06/fav-141-scaled.jpg')",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50 text-white text-center">
        <h1
          className="text-7xl font-bold mb-4 capitalize text-orange-600"
          style={{ fontFamily: "cursive" }}
        >
          TheDeesLoveStory
        </h1>
        <p className="text-xl mb-6">
          Welcome to our wedding website! Join us in celebrating our special
          day. yaaaaaay
        </p>
        <div className="flex space-x-4 mt-28">
          <Link
            to="/gallery"
            className="bg-white text-black px-6 py-3 rounded-md"
          >
            View Gallery
          </Link>
          <Link to="/form" className="bg-white text-black px-6 py-3 rounded-md">
            Send Wishes
          </Link>
        </div>
      </div>
    </div>
  );
}
