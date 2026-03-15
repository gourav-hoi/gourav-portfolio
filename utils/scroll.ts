import type Lenis from 'lenis';

let lenisInstance: Lenis | null = null;

type ScrollTarget = string | HTMLElement;
type ScrollOptions = {
  offset?: number;
  immediate?: boolean;
  onComplete?: () => void;
};

export function setLenisInstance(lenis: Lenis | null) {
  lenisInstance = lenis;
}

function getTargetSelector(target: string) {
  return target.startsWith('#') ? target : `#${target}`;
}

function getTargetElement(target: ScrollTarget) {
  if (typeof target !== 'string') {
    return target;
  }

  return document.querySelector<HTMLElement>(getTargetSelector(target));
}

export function scrollToTarget(target: ScrollTarget, options: ScrollOptions = {}) {
  if (typeof window === 'undefined') {
    return;
  }

  const selector = typeof target === 'string' ? getTargetSelector(target) : `#${target.id}`;

  if (lenisInstance) {
    lenisInstance.scrollTo(typeof target === 'string' ? selector : target, {
      offset: options.offset,
      immediate: options.immediate,
      duration: 0.8,
      onComplete: () => {
        if (selector !== '#') {
          window.history.replaceState(null, '', selector);
        }

        options.onComplete?.();
      },
    });

    return;
  }

  const element = getTargetElement(target);

  if (!element) {
    return;
  }

  element.scrollIntoView({
    behavior: options.immediate ? 'auto' : 'smooth',
    block: 'start',
  });

  if (element.id) {
    window.history.replaceState(null, '', `#${element.id}`);
  }

  options.onComplete?.();
}
