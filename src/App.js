import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

export default function App() {
  const [position, setPosition] = useState(0);
  const [springs, api] = useSpring(() => ({
    from: { x: 0 }
  }));

  const handleClick = () => {
    const positionNew = position === 0 ? 100 : 0;

    api.start({
      from: {
        x: position
      },
      to: {
        x: positionNew
      }
    });

    setPosition(positionNew);
  };

  return (
    <animated.div
      onClick={handleClick}
      style={{
        width: 80,
        height: 80,
        background: "#ff6d6d",
        borderRadius: 8,
        ...springs
      }}
    />
  );
}
