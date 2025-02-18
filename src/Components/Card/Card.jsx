import { useEffect, useRef } from "react";

export default function Card({ id, isMoved, handleClick, isCooldown }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (isMoved && audioRef.current) {
      audioRef.current.play();
    } else if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [isMoved]);

  const getTranslation = () => {
    if (isMoved && id !== 1) {
      if (id === 8) return "-translate-x-[400px]";
      if (id === 2) return "translate-x-[400px]";
      if (id === 3) return "translate-y-[400px]";
      if (id === 4) return "-translate-y-[400px]";
      if (id === 5) return "translate-y-[400px] translate-x-[400px]";
      if (id === 6) return "-translate-y-[400px] translate-x-[400px]";
      if (id === 7) return "translate-y-[400px] -translate-x-[400px]";
    }
    return "translate-x-0 translate-y-0";
  };

  const getCaption = () => {
    const captions = {
      7: "生日快乐",
      6: "Feliĉan Naskiĝtagon",
      5: "¡Feliz Cumpleaños!",
      4: "Joyeux Anniversaire!",
      3: "Joyeux Anniversaire!",
      2: "Joyeux Anniversaire!",
      8: "Hello World!",
      1: "Hello!",
    };
    return captions[id] || "";
  };

  return (
    <div
      className={`absolute w-64 h-72 bg-white rounded-xl shadow-2xl overflow-hidden ${id===2 ? "transform rotate-6" : ""} ${id===4 ? "transform rotate-8" : ""} ${id===7 ? "transform rotate-2" : ""}
      transition-transform duration-500 ${getTranslation()} 
      ${isCooldown ? "cursor-not-allowed" : "cursor-pointer"}`}
      onClick={() => !isCooldown && handleClick(id)}
    >
      {id!==1 && (<img src={`${id}.jpg`} alt="Photo" className="w-full h-56 object-cover " />)}
     {id === 1 &&  (<video src="1.mp4"autoPlay loop muted className="w-full h-56 object-cover"/>)}
      <div className="p-4 bg-[#ffffff18] backdrop-blur-md flex items-center justify-center">
        <p className="playwrite-cu-caption text-center text-gray-800 text-lg font-semibold">
          {getCaption()}
        </p>         
      </div>

      <audio ref={audioRef} src={`1.mp3`} />
    </div>
  );
}
