/**
 * Utility functions for smooth scrolling to sections
 */

/**
 * Smoothly scroll to a section by ID
 * @param {string} sectionId - The ID of the section to scroll to
 * @param {number} offset - Optional offset from the top (default: 80 for header height)
 */
export const scrollToSection = (sectionId, offset = 80) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

/**
 * Extract section ID from a link (e.g., "/#expertise" -> "expertise")
 * @param {string} link - The link string
 * @returns {string} The section ID
 */
export const extractSectionId = (link) => {
  if (link && link.includes('#')) {
    return link.split('#')[1];
  }
  return null;
};

/**
 * Handle navigation to sections or routes
 * @param {string} link - The link to navigate to
 * @param {function} navigate - React Router navigate function
 * @param {number} offset - Optional offset for scrolling
 */
export const handleNavigation = (link, navigate, offset = 80) => {
  if (link && link.includes('#')) {
    // It's a section link, scroll to it
    const sectionId = extractSectionId(link);
    if (sectionId) {
      scrollToSection(sectionId, offset);
    }
  } else if (link) {
    // It's a route link, navigate to it
    navigate(link);
  }
};

/**
 * Check if an element is in viewport
 * @param {HTMLElement} element - The element to check
 * @returns {boolean} True if element is in viewport
 */
export const isInViewport = (element) => {
  if (!element) return false;
  
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

/**
 * Add smooth scrolling behavior to the document
 */
export const enableSmoothScrolling = () => {
  document.documentElement.style.scrollBehavior = 'smooth';
};

/**
 * Remove smooth scrolling behavior from the document
 */
export const disableSmoothScrolling = () => {
  document.documentElement.style.scrollBehavior = 'auto';
};