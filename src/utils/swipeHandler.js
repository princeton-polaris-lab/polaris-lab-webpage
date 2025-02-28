import { useState, useEffect } from 'react';

/**
 * Custom hook to handle swipe gestures
 * @param {Function} onSwipeLeft - Callback for left swipe
 * @param {Function} onSwipeRight - Callback for right swipe
 * @param {number} threshold - Minimum distance required for swipe detection (px)
 * @returns {Object} - Handlers to attach to the element
 */
export const useSwipe = (onSwipeLeft, onSwipeRight, threshold = 50) => {
  // For touch events
  const [touchStartX, setTouchStartX] = useState(null);
  
  // For mouse events
  const [mouseStartX, setMouseStartX] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  
  // Touch event handlers
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };
  
  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) >= threshold) {
      if (diff > 0 && onSwipeLeft) {
        onSwipeLeft();
      } else if (diff < 0 && onSwipeRight) {
        onSwipeRight();
      }
    }
    
    setTouchStartX(null);
  };
  
  // Mouse event handlers
  const handleMouseDown = (e) => {
    // Only handle left mouse button
    if (e.button !== 0) return;
    
    setMouseStartX(e.clientX);
    setIsDragging(false);
    
    // Add global event listeners for mouse move and up
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };
  
  const handleMouseMove = (e) => {
    if (mouseStartX === null) return;
    
    const diff = mouseStartX - e.clientX;
    
    // Set dragging state if moved more than a small threshold
    if (Math.abs(diff) > 5) {
      setIsDragging(true);
    }
  };
  
  const handleMouseUp = (e) => {
    if (mouseStartX === null) return;
    
    if (isDragging) {
      const diff = mouseStartX - e.clientX;
      
      if (Math.abs(diff) >= threshold) {
        if (diff > 0 && onSwipeLeft) {
          onSwipeLeft();
        } else if (diff < 0 && onSwipeRight) {
          onSwipeRight();
        }
      }
    }
    
    // Clean up
    setMouseStartX(null);
    setIsDragging(false);
    
    // Remove global event listeners
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };
  
  // Clean up event listeners on unmount
  useEffect(() => {
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);
  
  return {
    onTouchStart: handleTouchStart,
    onTouchEnd: handleTouchEnd,
    onMouseDown: handleMouseDown,
  };
}; 