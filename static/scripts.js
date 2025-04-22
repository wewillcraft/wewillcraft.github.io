const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry, _i) => {
      if (!entry.isIntersecting) return;

      const el = entry.target;
      const animation = el.dataset.animate || "animate-fade-up";
      const delay = el.dataset.animateDelay || "0";
      const duration = el.dataset.animateDuration || "0";

      el.style.animationDelay = delay + "ms";
      el.style.animationDuration = duration + "ms";
      el.classList.remove("opacity-0");
      el.classList.add(animation);

      observer.unobserve(el);
    });
  },
  {
    threshold: 0.5,
  }
);

document.querySelectorAll("[data-animate]").forEach((el, _i) => {
  observer.observe(el);
});
