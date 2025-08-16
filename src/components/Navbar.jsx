import React,{ Fragment, useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { navigation, handleNavClick, classNames } from "../utils/navigation";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
      
      // Don't update active section while actively navigating
      if (isNavigating) return;
      
      // Update active section based on scroll position
      const sections = navigation.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100; // Add offset for navbar
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        
        if (element && element.offsetTop <= scrollPosition) {
          // Map 'footer' section to 'contact' for active highlighting
          const activeSection = section === 'footer' ? 'contact' : section;
          setActiveSection(activeSection);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isNavigating]);

  return (
    <Disclosure
      as="nav"
      className={classNames(
        "sticky top-0 z-50 transition-colors duration-300 shadow-md",
        isSticky ? "bg-cyan-800 text-white" : "bg-white text-gray-800"
      )}
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div
                className={classNames(
                  "text-xl font-bold",
                  isSticky ? "text-white" : "text-cyan-800"
                )}
              >
                Saikumar Pendyala
              </div>

              {/* Mobile menu button */}
              <div className="flex md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className={classNames("block h-6 w-6", isSticky ? "text-white" : "text-cyan-800")} aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Desktop menu */}
              <div className="hidden md:flex space-x-6">
                {navigation.map((item) => {
                  const isActive = (item.name === 'Contact' && activeSection === 'contact') || 
                                 (item.name !== 'Contact' && activeSection === item.href.substring(1));
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        // Set navigation state to prevent scroll interference
                        setIsNavigating(true);
                        // Map contact to footer for active section highlighting
                        const targetSection = item.href === '#footer' ? 'contact' : item.href.substring(1);
                        setActiveSection(targetSection);
                        handleNavClick(item.href);
                        // Allow scroll detection after navigation completes
                        setTimeout(() => setIsNavigating(false), 1000);
                      }}
                      className={classNames(
                        "font-bold transition-colors cursor-pointer",
                        isSticky
                          ? isActive
                            ? "text-cyan-300 border-b-2 border-cyan-300"
                            : "text-white hover:underline hover:drop-shadow-md"
                          : isActive
                            ? "text-cyan-600 border-b-2 border-cyan-600"
                            : "text-cyan-800 hover:text-cyan-600"
                      )}
                    >
                      {item.name}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile panel */}
          <Disclosure.Panel className="md:hidden bg-white shadow-md">
            {({ close }) => (
              <div className="px-4 pt-2 pb-4 space-y-1">
                {navigation.map((item) => {
                  const isActive = (item.name === 'Contact' && activeSection === 'contact') || 
                                 (item.name !== 'Contact' && activeSection === item.href.substring(1));
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        // Set navigation state to prevent scroll interference
                        setIsNavigating(true);
                        // Map contact to footer for active section highlighting
                        const targetSection = item.href === '#footer' ? 'contact' : item.href.substring(1);
                        setActiveSection(targetSection);
                        handleNavClick(item.href, close);
                        // Allow scroll detection after navigation completes
                        setTimeout(() => setIsNavigating(false), 1000);
                      }}
                      className={classNames(
                        "block px-3 py-2 rounded-md text-base font-medium cursor-pointer",
                        isActive
                          ? "bg-cyan-100 text-cyan-900 border-l-4 border-cyan-600"
                          : "text-cyan-800 hover:bg-cyan-100 hover:text-cyan-900"
                      )}
                    >
                      {item.name}
                    </a>
                  );
                })}
              </div>
            )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
