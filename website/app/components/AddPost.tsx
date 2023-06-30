'use client'
import { useState, useRef } from "react"
import { Button } from "@mui/material"

import PollIcon from '@mui/icons-material/Poll';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ImagePickerWithIcon from "./AddPostIconsFunctions/ImagePicker";
import GifPickerWithIcon from "./AddPostIconsFunctions/GifPickerWithIcon";


const AddPost = () => {
  const [input, setInput] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedGif, setSelectedGif] = useState(null);


  const handleImageSelect = (file: any) => {

    setSelectedImage(file);
  };
  const handleGifSelect = (e: any) => {
    setSelectedGif(e)
  }


  const handleInputChange = (e: any) => {
    setInput(e.target.value)
  }
  const handleTweet = () => {
    /* Add logic that will handle sending a tweet to database and display.  */
    setInput('')
    setSelectedGif(null);
    setSelectedImage(null);
  }

  return (
    <div className="border-y-[0.5px] w-full flex items-center space-x-2 border-gray-600 py-6">
      <div className="w-10 h-10 bg-slate-400 rounded-full mx-4 flex-none mb-10"></div>
      <div className="flex flex-col w-full h-full">
        <textarea 
        placeholder="What is happening?!" 
        value={input} 
        onChange={handleInputChange} 
        className="placeholder:text-gray-500 placeholder:text-xl w-full h-full bg-transparent outline-none border-none mt-4"
        maxLength={280}
        />
        {selectedImage && (
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Selected Image"
            className=" my-2 mr-3"
          />
        )}
        {selectedGif && (
          <img
            src={selectedGif}
            alt="Selected GIF"
            className="my-2 mr-3 flex justify-center items-center"
          />
        )}
        <div className="w-full flex justify-between ">
          <div className="flex flex-row items-center justify-around ">
            <ImagePickerWithIcon onImageSelect={handleImageSelect} />
            <GifPickerWithIcon onGifSelect={handleGifSelect} />
            <PollIcon className="" />
            <EmojiEmotionsIcon className="" />
            <PendingActionsIcon className="" />
            <LocationOnIcon className="" />
          </div>
    
            <Button onClick={handleTweet} className="w-16 h-9 bg-blue-500 rounded-3xl text-white font-bold hover:bg-blue-600 capitalize mt-6 mr-4">Tweet
            </Button>
    
        </div>
      </div>

    </div>
  )
}

export default AddPost