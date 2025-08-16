// navigation.js - Common navigation utilities
import { trackNavigationClick } from '../firebase';

// Navigation items configuration
export const navigation = [
  { name: "Home", href: "#home", current: true },
  { name: "About", href: "#about", current: false },
  { name: "Skills", href: "#skills", current: false },
  { name: "Experience", href: "#experience", current: false },
  { name: "Projects", href: "#projects", current: false },
  { name: "Contact", href: "#footer", current: false },
];

// Common navigation click handler with smooth scroll and navbar offset
export const handleNavClick = (href, close = null) => {
  // Track navigation click
  const sectionName = href.startsWith('#') ? href.substring(1) : href;
  trackNavigationClick(sectionName);
  
  // Close mobile menu if provided
  let navbarHeight = -55; // Default offset for navbar

  if (close) {
    close();
    navbarHeight = -350; // Increased offset for mobile menu close
  }
  
  // Handle smooth scroll with offset for navbar
  if (href.startsWith('#')) {
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const elementPosition = targetElement.offsetTop;
      const offsetPosition = elementPosition + navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
};

// Helper function for className concatenation
export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
