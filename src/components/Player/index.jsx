import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Player = ({ onPlay }) => {
  const [showIcon, setShowIcon] = useState(false);

  return (
    <div className="w-full">
      <div className="aspect-video">
        <div className="text-2xl mb-4 text-cyan-950">{onPlay.title}</div>

        <iframe
          key={onPlay.id}
          className="w-full h-full rounded"
          src={onPlay.video_url}
          title={onPlay.title}
          allowFullScreen
        ></iframe>
      </div>
      <div className="mt-4">
        <div
          className="flex justify-between bg-gray-700 items-center px-3 py-2 text-white cursor-pointer"
          onClick={() => {
            setShowIcon(!showIcon);
          }}
        >
          <div className="">Discription</div>
          {showIcon ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>

        {showIcon && (
          <div className="py-2 px-3 border-1 border-gray-300">
            {onPlay.description}
          </div>
        )}
      </div>
    </div>
  );
};

export default Player;
