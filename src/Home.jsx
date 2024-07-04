import { useState } from "react";
import { Link } from "react-router-dom";
import mainBg from "./assets/mainbg.jpeg";

export default function HomePage() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [preview, setPreview] = useState(null);

  const uploadImage = async () => {
    if (!file) return;

    setLoading(true);
    setMessage("");

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch(
        "https://ola-image-server.onrender.com/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        setMessage("Image uploaded successfully!");
        setFile(null);
      } else {
        setMessage("Failed to upload image.");
      }
    } catch (error) {
      setMessage("An error occurred while uploading the image.");
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
    uploadImage();
  };

  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{
        backgroundImage: `url(${mainBg})`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-65 text-white text-center">
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
        <div className="flex flex-col items-center space-y-4 mt-28">
          <div className="flex space-x-4 mt-28">
            <Link
              to="/gallery"
              className="bg-white text-black px-6 py-3 rounded-md font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
            >
              View Gallery
            </Link>

            <div className="bg-white text-black px-6 py-3 rounded-md font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
              <label htmlFor="file-upload" className="cursor-pointer">
                <span>Share Memory</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  onChange={handleFileChange}
                  className="sr-only"
                />
              </label>
            </div>
          </div>

          {preview && (
            <div className="flex flex-col items-center">
              <img
                src={preview}
                alt="Selected"
                className="w-32 h-32 object-cover mt-4"
              />
              {/* <button
                onClick={uploadImage}
                className="bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 hover:bg-indigo-500 mt-4"
              >
                Upload
              </button> */}
            </div>
          )}
        </div>
        {loading && <p className="text-white mt-4">Uploading...</p>}
        {message && <p className="text-white mt-4">{message}</p>}
      </div>
    </div>
  );
}
