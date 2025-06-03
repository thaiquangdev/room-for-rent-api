import { useEffect, useState } from "react";

export const useScrollSpy = (
  sectionIds: string[],
  offset: number = 100
): string => {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      let currentId = "";
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (window.scrollY >= top - offset) {
            currentId = id;
          }
        }
      });
      setActiveId(currentId);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // chạy lần đầu
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);

  return activeId;
};
