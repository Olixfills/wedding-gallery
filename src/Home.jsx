// Import necessary components and styles
import { useState } from "react";
import { Link } from "react-router-dom";
import mainBg from "./assets/mainbg.jpeg";

export default function HomePage() {
  const [, setFile] = useState(null);

  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{
        backgroundImage: `url(${mainBg})`,
        backgroundSize: "cover",
        // height: "100vh",
        // width: "100vw",
      }}
    >
      <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50 text-white text-center">
        <h1
          className="text-5xl lg:text-7xl font-extrabold mb-4 capitalize text-orange-600"
          style={{
            fontFamily: "cursive",
          }}
        >
          TheDeesLoveStory
        </h1>
        <p className="text-md lg:text-xl mb-6 mx-3">
          Welcome to our wedding website! Join us in celebrating our special
          day. yaaaaaay
        </p>
        <div className="flex space-x-4 mt-28">
          {/* Updated Link component */}
          <Link
            to="/gallery"
            className="bg-white text-black px-6 py-3 rounded-md font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
          >
            View Gallery
          </Link>

          {/* Updated Label and Input combination */}
          <div className="bg-white text-black px-6 py-3 rounded-md font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
            <label htmlFor="file-upload" className="cursor-pointer ">
              <span>Share Memory</span>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                className="sr-only"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
