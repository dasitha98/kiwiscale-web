"use client";

import { useEffect, useState, useCallback, useRef } from "react";

const sections = [
  { id: "hero", label: "Hero" },
  { id: "partners", label: "Partners" },
  { id: "offer", label: "What We Offer" },
  { id: "problems", label: "Problems" },
  { id: "pitfalls", label: "Pitfalls" },
  { id: "solution", label: "Solution" },
  { id: "different", label: "Why Different" },
  { id: "overview", label: "Overview" },
  { id: "before-after", label: "Before & After" },
  { id: "work", label: "Work" },
  { id: "launch-plan", label: "Launch Plan" },
  { id: "faq", label: "FAQ" },
  { id: "final-cta", label: "Final CTA" },
  { id: "contact", label: "Contact" },
];

const ScrollDotsNav = () => {
  const [activeId, setActiveId] = useState(sections[0].id);
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    const onScroll = () => {
      setVisible(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setVisible(false), 1000);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const ratios = new Map<string, number>();

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          ratios.set(id, entry.intersectionRatio);
          let maxRatio = 0;
          let maxId = sections[0].id;
          ratios.forEach((r, sId) => {
            if (r > maxRatio) { maxRatio = r; maxId = sId; }
          });
          setActiveId(maxId);
        },
        { threshold: [0, 0.1, 0.2, 0.3, 0.5, 0.7, 1] }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleClick = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="fixed left-6 top-1/2 z-50 hidden -translate-y-1/2 md:flex flex-col items-center gap-[10px] transition-opacity duration-500"
      style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? "auto" : "none" }}
    >
      {sections.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => handleClick(id)}
          aria-label={`Scroll to ${label}`}
          title={label}
          className="group relative flex items-center justify-center p-0.5"
        >
          <span
            className="block rounded-full transition-all duration-300"
            style={{
              width: activeId === id ? 8 : 6,
              height: activeId === id ? 8 : 6,
              backgroundColor: activeId === id ? "#FEC115" : "#6b728080",
              transform: activeId === id ? "scale(1.2)" : "scale(1)",
            }}
          />
        </button>
      ))}
    </nav>
  );
};

export default ScrollDotsNav;
