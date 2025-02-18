import { useState, useEffect } from "react";
import { LineWave } from "react-loader-spinner";
import Card from "../Card/Card";
import Particle from "../Particles/Particles";

// Main Component
export default function Main() {
  const [isLoading, setIsLoading] = useState(true);
  const [movedCards, setMovedCards] = useState([]); // Track moved cards
  const [isCooldown, setIsCooldown] = useState(false); // Track cooldown

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 0); // Simulate loading delay

    return () => clearTimeout(timer);
  }, []);

  const handleClick = (id) => {
    if (isCooldown) return; // Prevent click during cooldown

    if (!movedCards.includes(id)) {
      setMovedCards((prev) => [...prev, id]);
      setIsCooldown(true); // Start cooldown

      // Reset cooldown after 20 seconds
      setTimeout(() => {
        setIsCooldown(false);
      }, 0); // 20,000 ms = 20 seconds
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-black">
        <LineWave
          visible={true}
          height="100"
          width="100"
          color="#4fa94d"
          ariaLabel="line-wave-loading"
        />
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen p-10 flex justify-center items-center">
      <Particle/>
      <div className="relative w-[300px] "> {/* Adjusted for 7 cards */}
        {[1, 2, 3, 4, 5, 6, 7,8].map((id) => (
          <Card
            key={id}
            id={id}
            isMoved={movedCards.includes(id)}
            handleClick={handleClick}
            isCooldown={isCooldown} // Pass cooldown state to Card
          />
        ))}
      </div>
    </div>
  );
}
