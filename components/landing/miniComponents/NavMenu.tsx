"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../ui/navigation-menu";
import Link from "next/link";

const navMenuItems = [
  { title: "Tech Stack", href: "#techs" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];
export default function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-3">
        {navMenuItems.map((item) => (
          <NavigationMenuItem className="nav-divider" key={item.title}>
            <Link
              href={item.href}
              className="hover:underline hover:text-indigo-400 transition-all duration-300 ease-in-out"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById(item.href.slice(1))
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {item.title}
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
