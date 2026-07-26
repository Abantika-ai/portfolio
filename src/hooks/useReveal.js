import { useEffect, useRef } from 'react';

/**
 * Adds the `is-visible` class (see .reveal in index.css) the first
 * time an element scrolls into view. Cheap, dependency-free
 * alternative to an animation library for a one-shot fade/slide-in.
 */
export function useReveal(options) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      node.classList.add('is-visible');
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible');
          observer.unobserve(node);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px', ...options },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return ref;
}
