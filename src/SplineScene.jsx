import { useEffect, useRef } from "react";
import { Application } from "@splinetool/runtime";

export default function SplineScene() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const app = new Application(canvasRef.current);
    app.load("https://prod.spline.design/XMt1HdaunKvI3PtR/scene.splinecode");
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
}
