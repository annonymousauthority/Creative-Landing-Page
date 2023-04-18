import { links } from "@/data/navBarLinks";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavbarLinks() {
  const [renderViews, setRenderViews] = useState([]);
  const navLinks = links;
  useEffect(() => {
    const renderLinks = navLinks.map((link, index) => {
      return (
        <Link
          key={link.id}
          className={
            link.active
              ? `font-bold text-yellow-500 underline underline-offset-4`
              : `font-bold text-gray-200 hover:underline hover:underline-offset-4 hover:text-yellow-400`
          }
          href={link.url}
        >
          {link.text}
        </Link>
      );
    });
    setRenderViews(renderLinks);
  }, []);

  return (
    <div className="flex w-full justify-between items-center">
      {renderViews}
    </div>
  );
}
