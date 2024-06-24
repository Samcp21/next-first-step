import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "../active-link/ActiveLink";

const navItems = [
  { text: "About", path: "/about" },
  { text: "Pricing", path: "/pricing" },
  { text: "Contact", path: "/contact" },
];

export const Navbar: React.FC = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded  ">
      {/* Add your navbar content here */}
      <Link href={"/"} className="flex items-center">
        <HomeIcon className="mr-2" />
        <span>Home</span>
      </Link>
      <div className="flex flex-1"></div>
      {navItems.map((navItems) => (
        <ActiveLink key={navItems.path} {...navItems} />
      ))}
    </nav>
  );
};

export default Navbar;
