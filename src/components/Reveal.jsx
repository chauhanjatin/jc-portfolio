import { useEffect, useRef } from "react";

export default function Reveal({ children, className = "", delay = 0, variant = "rise" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let observer;
    let classObserver;
    let frame;
    let cancelled = false;

    const show = () => {
      if (cancelled || !ref.current) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) {
        ref.current.classList.add("is-in");
        return;
      }
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.disconnect();
          }
        },
        { threshold: 0.16, rootMargin: "0px 0px -40px 0px" }
      );
      observer.observe(ref.current);
    };

    const arm = () => {
      if (cancelled) return;
      if (document.body.classList.contains("overflow-hidden")) {
        classObserver = new MutationObserver(() => {
          if (!document.body.classList.contains("overflow-hidden")) {
            classObserver.disconnect();
            show();
          }
        });
        classObserver.observe(document.body, {
          attributes: true,
          attributeFilter: ["class"],
        });
        return;
      }
      show();
    };

    frame = requestAnimationFrame(() => {
      frame = requestAnimationFrame(arm);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      classObserver?.disconnect();
      observer?.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`section-reveal${variant === "fade" ? " is-fade" : ""} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
