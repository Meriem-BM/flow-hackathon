"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = ({ title, main }: { title: string; main: boolean }) => {
  const pathname = usePathname();

  return (
    <nav className="w-full mb-20 mt-10">
      <div className="flex justify-between mb-16 pt-3">
        <div>
          <Link href="/">
            <p className="flex-between">
              <h1 className="text-2xl font-bold ml-2">{title}</h1>
            </p>
          </Link>
        </div>
        {main ? (
          <div>
            <Link href="/player/create" className="borderborder border-sky-500">
              <p className="flex-between">Ajouter un joueur</p>
            </Link>
          </div>
        ) : null}
      </div>
      <div className="flex-between w-full">
        <hr className="border-1 border-gray-200" />
      </div>
    </nav>
  );
};

export default Nav;
