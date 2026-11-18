export function withThemeTransition(update: () => void) {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const doc = document as Document & {
    startViewTransition?: (cb: () => void) => { ready: Promise<void> };
  };

  // No support, or the visitor prefers less motion: switch instantly
  if (!doc.startViewTransition || reduce) {
    update();
    return;
  }

  const transition = doc.startViewTransition(update);

  transition.ready.then(() => {
    // The new theme is revealed from the bottom edge upwards
    document.documentElement.animate(
      { clipPath: ["inset(100% 0 0 0)", "inset(0 0 0 0)"] },
      {
        duration: 900,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        pseudoElement: "::view-transition-new(root)",
      },
    );
  });
}