"use client";

import { useEffect, useRef, useState } from "react";

type NavLink = { id: string; label: string };

const NAV_ID = "portfolio-section-nav";

/**
 * Sticky in-page navigation for the portfolio. Sits directly under the
 * site navbar and highlights the section currently in view.
 */
export default function SectionNav({ links }: { links: NavLink[] }) {
  const [active, setActive] = useState<string>("");
  const [top, setTop] = useState(0);
  const [stuck, setStuck] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  // Stick below the site's own sticky navbar, whatever its height.
  useEffect(() => {
    const measure = () => {
      const siteNav = Array.from(document.querySelectorAll("nav")).find(
        (n) =>
          n.id !== NAV_ID &&
          ["sticky", "fixed"].includes(getComputedStyle(n).position),
      );
      const siteNavHeight = siteNav?.getBoundingClientRect().height ?? 0;
      const ownHeight = navRef.current?.getBoundingClientRect().height ?? 0;
      setTop(siteNavHeight);
      // Used by sections as scroll-margin so anchors land below both bars.
      document.documentElement.style.setProperty(
        "--portfolio-offset",
        `${Math.round(siteNavHeight + ownHeight + 12)}px`,
      );
    };
    measure();
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("resize", measure);
      document.documentElement.style.removeProperty("--portfolio-offset");
    };
  }, []);

  // Scroll-spy: the active section is the last one whose top has passed the bars.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const navBottom = navRef.current?.getBoundingClientRect().bottom ?? 0;
      setStuck((navRef.current?.getBoundingClientRect().top ?? 1) <= top + 0.5);

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;
      if (atBottom) {
        setActive(links[links.length - 1].id);
        return;
      }

      let current = "";
      for (const { id } of links) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= navBottom + 80) {
          current = id;
        }
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [links, top]);

  // On small screens, keep the active pill visible in the scrollable row.
  useEffect(() => {
    if (!active || !listRef.current) return;
    const link = listRef.current.querySelector<HTMLElement>(
      `a[href="#${active}"]`,
    );
    link?.scrollIntoView({ block: "nearest", inline: "nearest" });
  }, [active]);

  return (
    <nav
      id={NAV_ID}
      ref={navRef}
      aria-label="Portfolio sections"
      style={{ top }}
      className={`sticky z-40 border-y border-slate-200 bg-white/90 backdrop-blur-md transition-shadow dark:border-slate-800 dark:bg-slate-950/90 ${
        stuck ? "shadow-md shadow-slate-900/5" : ""
      }`}
    >
      <ul
        ref={listRef}
        className="mx-auto flex max-w-6xl gap-1.5 overflow-x-auto px-5 py-2.5 md:justify-center md:px-8 [scrollbar-width:none]"
      >
        {links.map((l) => {
          const isActive = active === l.id;
          return (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={isActive ? "location" : undefined}
                className={`block whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-teal-700 text-white shadow-sm dark:bg-teal-500 dark:text-slate-950"
                    : "text-slate-600 hover:bg-teal-50 hover:text-teal-800 dark:text-slate-400 dark:hover:bg-teal-950 dark:hover:text-teal-300"
                }`}
              >
                {l.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
