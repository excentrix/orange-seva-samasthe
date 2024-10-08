import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react"; // Make sure to install lucide-react
import { urlFor } from "@/lib/sanity";

const aboutLinks: { title: string; href: string; description: string }[] = [
  {
    title: "Our Mission",
    href: "/about/mission",
    description: "Learn about our goals and what drives us.",
  },
  {
    title: "Our Team",
    href: "/about/team",
    description: "Meet the dedicated individuals behind our organization.",
  },
  {
    title: "Our History",
    href: "/about/history",
    description: "Explore our journey and milestones since inception.",
  },
  {
    title: "Impact",
    href: "/about/impact",
    description: "See the positive changes we've made in the community.",
  },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md z-20 w-full flex items-center justify-center">
      <div className="container mx-1 p-4 flex flex-wrap justify-between items-center w-full">
        <Link
          to="/"
          className="flex items-center gap-x-2 sm:gap-x-4 text-xl sm:text-2xl font-bold text-primary"
        >
          <img
            src={
              urlFor(
                "https://cdn.sanity.io/images/5d677rbl/production/a75708d1beaaac2f2384082d358f440896c3906a-715x710.png"
              )
                .width(320)
                .height(320)
                .format("webp")
                .quality(100)
                .url() || ""
            }
            alt="Orange Seva Samsthe Logo"
            width={32}
            height={32}
            className="w-8 h-8 sm:w-12 sm:h-12"
          />
          <span className="hidden sm:inline">Orange Seva Samsthe</span>
        </Link>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-main"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                {/* <Link to="/"> */}
                <NavigationMenuLink
                  href="/"
                  className={`${navigationMenuTriggerStyle()} font-semibold tracking`}
                >
                  Home
                </NavigationMenuLink>
                {/* </Link> */}
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={`${navigationMenuTriggerStyle()} font-semibold tracking`}
                >
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {aboutLinks.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                {/* <Link to="/projects"> */}
                <NavigationMenuLink
                  href="/projects"
                  className={`${navigationMenuTriggerStyle()} font-semibold tracking`}
                >
                  Projects
                </NavigationMenuLink>
                {/* </Link> */}
              </NavigationMenuItem>
              <NavigationMenuItem>
                {/* <Link to="/gallery"> */}
                <NavigationMenuLink
                  href="/gallery"
                  className={`${navigationMenuTriggerStyle()} font-semibold tracking`}
                >
                  Gallery
                </NavigationMenuLink>
                {/* </Link> */}
              </NavigationMenuItem>
              <NavigationMenuItem>
                {/* <Link to="/testimonials"> */}
                <NavigationMenuLink
                  href="/testimonials"
                  className={`${navigationMenuTriggerStyle()} font-semibold tracking`}
                >
                  Testimonials
                </NavigationMenuLink>
                {/* </Link> */}
              </NavigationMenuItem>
              <NavigationMenuItem>
                {/* <Link to="/contact"> */}
                <NavigationMenuLink
                  href="/contact"
                  className={`${navigationMenuTriggerStyle()} font-semibold tracking`}
                >
                  Contact
                </NavigationMenuLink>
                {/* </Link> */}
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        <Button
          asChild
          variant="default"
          className="hidden lg:flex bg-main font-semibold tracking-widest rounded-full px-10"
        >
          <Link to="/donate">Donate</Link>
        </Button>

        {/* Mobile Navigation */}
        <nav
          className={`lg:hidden w-full ${
            isMenuOpen ? "block" : "hidden"
          } mt-4 space-y-2`}
        >
          <Link
            to="/"
            className="block py-2 px-4 text-main hover:bg-orange-100"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <div className="relative group">
            <button className="w-full text-left py-2 px-4 text-main hover:bg-orange-100 flex justify-between items-center">
              About
              <span className="text-xs">▼</span>
            </button>
            <div className="hidden group-hover:block absolute left-0 mt-2 w-full bg-white shadow-md z-10">
              {aboutLinks.map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  className="block py-2 px-4 text-main hover:bg-orange-100"
                  onClick={toggleMenu}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <Link
            to="/projects"
            className="block py-2 px-4 text-main hover:bg-orange-100"
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <Link
            to="/gallery"
            className="block py-2 px-4 text-main hover:bg-orange-100"
            onClick={toggleMenu}
          >
            Gallery
          </Link>
          <Link
            to="/testimonials"
            className="block py-2 px-4 text-main hover:bg-orange-100"
            onClick={toggleMenu}
          >
            Testimonials
          </Link>
          <Link
            to="/contact"
            className="block py-2 px-4 text-main hover:bg-orange-100"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          <Link
            to="/donate"
            className="block py-2 px-4 bg-main text-white hover:bg-orange-600"
            onClick={toggleMenu}
          >
            Donate
          </Link>
        </nav>
      </div>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Header;
