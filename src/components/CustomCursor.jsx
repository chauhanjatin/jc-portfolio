import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    if ("ontouchstart" in window) return;

    const ring = document.querySelector(".ms-cursor-ring");
    const dot = document.querySelector(".ms-cursor-dot");

    if (!ring || !dot) return;

    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let ringPos = { x: mouse.x, y: mouse.y };
    let dotPos = { x: mouse.x, y: mouse.y };
    let last = { x: mouse.x, y: mouse.y };

    let visible = false;
    let hidden = false;

    const lerp = (a, b, t) => a + (b - a) * t;

    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      if (!visible) {
        visible = true;
        ring.style.transform = "scale(1)";
        dot.style.transform = "scale(1)";
      }
    };

    window.addEventListener("mousemove", onMouseMove);

    document
      .querySelectorAll("a , button, input, textarea, select, .btn , Link" )
      .forEach((el) => {
        el.addEventListener("mouseenter", () => (hidden = true));
        el.addEventListener("mouseleave", () => (hidden = false));
      });

    function animate() {
      const dx = mouse.x - last.x;
      const dy = mouse.y - last.y;
      const speed = Math.hypot(dx, dy);

      last.x = mouse.x;
      last.y = mouse.y;

      ringPos.x = lerp(ringPos.x, mouse.x, 0.12);
      ringPos.y = lerp(ringPos.y, mouse.y, 0.12);

      dotPos.x = lerp(dotPos.x, mouse.x, 0.25);
      dotPos.y = lerp(dotPos.y, mouse.y, 0.25);

      const scaleX = 1 + speed * 0.02;
      const scaleY = 1 - speed * 0.02;
      const rotate = (Math.atan2(dy, dx) * 180) / Math.PI;
      const vis = hidden ? 0 : 1;

      ring.style.transform = `
      translate(${ringPos.x - 20}px, ${ringPos.y - 20}px)
      rotate(${rotate}deg)
      scale(${scaleX * vis}, ${scaleY * vis})`;

      dot.style.transform = `
       translate(${dotPos.x - 4}px, ${dotPos.y - 4}px)
       scale(${vis})`;
      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <div className="ms-cursor-ring"></div>
      <div className="ms-cursor-dot"></div>
    </>
  );
}
