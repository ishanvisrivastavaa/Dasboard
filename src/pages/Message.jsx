import React, { useState } from "react";
import { TiAttachment } from "react-icons/ti";

const Message = () => {
  const [comment, setComment] = useState("");

  const handlePost = () => {
    if (comment.trim()) {
      setComment("");
    }
  };

  const handleClose = () => {
    setComment("");
  };

  return (
    <div className="flex mt-10 rounded-xl p-28 justify-center items-center">
      <div className="relative w-[32rem]">
        <textarea
          className="w-full h-36 p-2 border border-gray-300 rounded-md resize-none"
          placeholder="Your Comment"
          rows={8}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <div className="flex w-full justify-between py-1.5">
          <button
            className="flex items-center justify-center text-gray-500 hover:text-gray-500"
            aria-label="Attach"
          >
            <TiAttachment className="h-6 w-6" />
          </button>
          <div className="flex gap-2">
            <button
              onClick={handleClose}
              className="px-3 py-2 text-sm font-semibold text-gray-700 rounded-md hover:bg-gray-200"
            >
              Close
            </button>
            <button
              onClick={handlePost}
              className="px-4 py-2 text-sm font-semibold bg-gray-800 text-white rounded-md hover:shadow-xl"
            >
              Post Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
