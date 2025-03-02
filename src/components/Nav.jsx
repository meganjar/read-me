import { Link } from "react-router-dom";
import { HomeIcon } from "@heroicons/react/24/solid";
import { HeartIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-screen h-16 bg-black border-t border-gray-800 shadow-lg">
      <ul className="flex flex-row justify-around text-brown items-center h-full">
        <NavItem to="/" icon={<HomeIcon className="h-6 w-6 text-white" />} label="Home" />
        <NavItem to="/search" icon={<MagnifyingGlassIcon className="h-6 w-6 text-white" />} label="Search" />
        <NavItem to="/favorites" icon={<HeartIcon className="h-6 w-6 text-white" />} label="Favorites" />
      </ul>
    </nav>
  );
}

function NavItem({ to, icon, label }) {
  return (
    <li>
      <Link to={to} className="flex flex-col items-center text-white hover:text-gray-400 transition-all">
        {icon}
        <span className="text-xs mt-1">{label}</span>
      </Link>
    </li>
  );
}