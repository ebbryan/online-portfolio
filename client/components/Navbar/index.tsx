"use client";
import { ReactNode, useEffect, useState } from "react";

interface INavbarProps {
  children: ReactNode;
}

const Navbar = (props: INavbarProps) => {
  const menuItems = [
    { id: 1, title: "Home", path: "home" },
    { id: 2, title: "Portfolio", path: "portfolio" },
    { id: 3, title: "About Me", path: "about" },
  ];

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = menuItems.map((item) => item.path);
    const sections = sectionIds.map((id) => document.getElementById(id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        threshold: 0.6, // 60% in view = active
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav className="flex items-center justify-between p-4 mx-10 rounded-xl shadow-lg sticky top-5 z-50 bg-white/20 backdrop-blur-lg border border-white/30">
        <h1 className="text-lg cursor-pointer">
          Earl.<span className="text-sm">Creatives</span>
        </h1>

        <div className="flex items-center gap-6">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.path}`}
              className={`
                transition
                ${
                  activeSection === item.path
                    ? "text-black font-bold underline underline-offset-4"
                    : "text-black font-medium"
                }
              `}
            >
              {item.title}
            </a>
          ))}
        </div>
      </nav>

      {props.children}
    </>
  );
};

export default Navbar;
