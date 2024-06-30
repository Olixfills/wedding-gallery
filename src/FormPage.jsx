// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { PhotoIcon } from "@heroicons/react/16/solid";
// import { storage, db } from "./firebase";
// import { ref, uploadBytes } from "firebase/storage";
// import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const FormPage = () => {
  const [name, setName] = useState("");
  const [comments, setComments] = useState("");
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (file) {
    //   const fileRef = ref(storage, `uploads/${file.name}`);
    //   await uploadBytes(fileRef, file);
    // }
    // await addDoc(collection(db, "wishes"), { name, comments });
    navigate("/success");
  };
  console.log("====================================");
  console.log(file);
  console.log("====================================");

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <form
        className="flex flex-col items-center p-6 w-screen bg-white mx-10 rounded-3xl"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold mb-28 text-slate-700">
          Send Your Wishes
        </h1>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-4 p-2 border rounded w-full max-w-md "
          required
        />
        <textarea
          placeholder="Your Comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          className="mb-4 p-2 border rounded w-full max-w-md"
          required
        ></textarea>

        <div className="col-span-full">
          <label
            htmlFor="cover-photo"
            className="block text-sm font-medium leading-6 text-gray-900"
          ></label>
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div className="text-center">
              <PhotoIcon
                className="mx-auto h-12 w-12 text-gray-300"
                aria-hidden="true"
              />
              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="sr-only"
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs leading-5 text-gray-600">
                {file?.name || "PNG, JPG, GIF"}
              </p>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded mt-32"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormPage;
