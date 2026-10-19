import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const [src, setSrc] = useState("/code-studio.html");

  useEffect(() => {
    const apply = () => {
      const hash = window.location.hash;
      setSrc(hash ? `/code-studio.html${hash}` : "/code-studio.html");
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, []);

  return <iframe className="studio-frame" title="Code Studio" src={src} />;
}
