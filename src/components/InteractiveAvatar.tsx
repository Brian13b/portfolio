import { useEffect, useRef, useState } from "react";
import avatarImage from "@/assets/developer-avatar.png";

export const InteractiveAvatar = () => {
  const avatarRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!avatarRef.current) return;

      const rect = avatarRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate rotation based on mouse position
      const deltaX = (e.clientX - centerX) / window.innerWidth;
      const deltaY = (e.clientY - centerY) / window.innerHeight;

      setRotation({
        x: deltaY * 10, // Tilt up/down
        y: deltaX * 10, // Tilt left/right
      });

      // Slight position movement
      setPosition({
        x: deltaX * 20,
        y: deltaY * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
      <div
        ref={avatarRef}
        className="relative transition-transform duration-200 ease-out"
        style={{
          transform: `
            translateX(${position.x}px) 
            translateY(${position.y}px) 
            rotateY(${rotation.y}deg) 
            rotateX(${rotation.x}deg)
          `,
          transformStyle: "preserve-3d",
        }}
      >
        <img
          src={avatarImage}
          alt="Brian Battauz Avatar"
          className="w-80 h-auto drop-shadow-2xl"
        />
      </div>
    </div>
  );
};
