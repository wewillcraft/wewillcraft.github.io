---
title: Introduction to IntersectionObserver
date: 2025-04-23
author:
  name: Nap Joseph Calub
  url: https://napjose.ph
excerpt: The IntersectionObserver API lets you trigger code when elements enter or exit the viewport, improving both performance and user experience. In this post, I explain how to use it for adding animations to HTML elements, demonstrating how I implemented it in my Vento template with Tailwind CSS.
tags:
  - JavaScript
  - IntersectionObserver
  - Tailwind CSS
  - Tailwind CSS Animated
  - Vento
---

## Overview

If you've been working with web animations and you’ve come across the term `IntersectionObserver`, you might be wondering what exactly it is and how it can make your animations smoother and more efficient. In this post, I’ll walk you through what `IntersectionObserver` is, how it works, and how I used it to create engaging animations for HTML elements in my Vento template. If you’re new to web development or animations, don’t worry – I’ll explain everything from scratch!

## What is IntersectionObserver?

The `IntersectionObserver` API is a browser feature that allows you to detect when an element enters or leaves the viewport (the visible part of the web page) or another element. This means you can trigger animations or other actions when an element becomes visible to the user (or when it disappears). This is super useful for lazy-loading images, triggering animations, or making sure some elements only appear when they are needed – making your website feel smoother and more dynamic.

Before the `IntersectionObserver`, developers had to use event listeners like scroll or resize to track when elements were in view, which was both slow and inefficient. Now, the `IntersectionObserver` does this job in a much more performant way. It monitors the visibility of elements and fires a callback function when the element meets certain visibility thresholds.

## Why Use IntersectionObserver?

You might be wondering, "Why should I use `IntersectionObserver` for animations?" Well, there are several benefits:

1. **Performance**: It’s more efficient than using scroll event listeners, which can fire continuously as the page is scrolled. `IntersectionObserver` only fires when an element is about to enter or leave the viewport.

2. **Lazy Loading**: It’s great for lazy-loading images or videos when they are about to be seen by the user, saving bandwidth.

3. **Animation Triggers**: You can easily trigger animations only when an element is visible, ensuring that animations are smooth and only occur when they’re needed.

## How Does IntersectionObserver Work?

Let’s start with a basic example to understand how `IntersectionObserver` works before diving into the more advanced use case in your site.

### Basic Example: Watching an Element Enter the Viewport

Imagine you have a simple webpage with a paragraph element. You want to detect when this paragraph becomes visible as the user scrolls down the page. Here’s how you can do that using `IntersectionObserver`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>IntersectionObserver Example</title>
    <style>
      .hidden {
        opacity: 0;
        transition: opacity 1s;
      }
      .visible {
        opacity: 1;
      }
      .container {
        height: 1500px; /* just to make sure we have enough scroll space */
      }
    </style>
  </head>
  <body>
    <div class="container">
      <p id="observeMe" class="hidden">
        Hello, I appear when I enter the viewport!
      </p>
    </div>

    <script>
      // Create a new IntersectionObserver
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            // If the element is in view
            if (entry.isIntersecting) {
              // Add the 'visible' class to the element
              entry.target.classList.add("visible");
              // Stop observing this element once it's in view
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.5, // The element must be 50% visible to trigger the callback
        }
      );

      // Observe the element with the id "observeMe"
      const target = document.getElementById("observeMe");
      observer.observe(target);
    </script>
  </body>
</html>
```

### What’s Happening Here?

1. **Create an IntersectionObserver**: We create an `IntersectionObserver` by passing a callback function and an options object. The callback function gets triggered whenever the element's visibility changes relative to the viewport. In this case, the options specify that we want the callback to trigger when at least 50% of the element (threshold: 0.5) becomes visible.

2. **Callback Function**: The callback function runs whenever the observed element enters or exits the viewport. Inside the callback, we check if the element is visible (entry.isIntersecting). If it is, we add a class (visible) to it, which will change its opacity from 0 to 1, making it fade in.

3. **Stop Observing**: Once the element becomes visible, we stop observing it with observer.unobserve(entry.target). This ensures that the observer doesn’t keep checking for visibility once the animation has already occurred.

4. **Initial Hidden State**: The element starts with the hidden class, making it invisible. Once it enters the viewport, the visible class is added, making it fade in.

This is a very basic use of `IntersectionObserver` to trigger an animation when an element enters the viewport. The `IntersectionObserver` is much more efficient than listening for scroll events because it only triggers when an element’s visibility changes, making it perfect for animations, lazy loading, and more.

## How I Used IntersectionObserver in My Vento Template

Now, let’s look at how I’ve integrated this into my Vento template for a real-world use case:

### The Vento template

```html
<section
  id="specializations"
  class="py-20 bg-gradient-to-b from-stone-950 to-stone-900 text-stone-100"
>
  <div class="max-w-6xl mx-auto px-6 text-center">
    <h3 class="text-3xl md:text-5xl font-extrabold mb-16 tracking-tight">
      {{ specializations.title }}
    </h3>
    <div class="grid gap-5 md:grid-cols-2">
      {{ for index, item of specializations.items }}
      <div
        class="bg-stone-800 rounded p-6 shadow-xl border border-stone-700 transition hover:-translate-y-1 hover:shadow-2xl duration-300 group text-left opacity-0"
        data-animate="animate-fade-up"
        data-animate-duration="500"
        data-animate-delay="{{ index * 200 }}"
      >
        <h4 class="text-2xl font-semibold">{{ item.title }}</h4>
        <p class="italic text-sm text-[#9d77b5] mt-1">{{ item.subtitle }}</p>
        <p class="text-base leading-relaxed text-stone-200 mt-3">
          {{ item.description }}
        </p>
      </div>
      {{ /for }}
    </div>
  </div>
</section>
```

#### What’s Happening Here?

**1. Section with Animations**

In the specializations section, I have a grid of items that each have an initial opacity of 0 (opacity-0), making them invisible when the page loads. This is necessary for animation because we want to animate the elements from an invisible state to a visible one.

**2. Dynamic Data Attributes**

Each item has some data attributes:

- `data-animate="animate-fade-up"`: This specifies the animation to apply.
- `data-animate-duration="500"`: This sets the animation duration to 500ms.
- `data-animate-delay="{{ index * 200 }}"`: This delays each element’s animation based on its index, ensuring that animations happen sequentially instead of all at once.

**3. Using Tailwind CSS and tailwindcss-animated**

I’m using the [tailwindcss-animated](https://www.tailwindcss-animated.com/) package for the animations. It provides various pre-built animation classes (like `animate-fade-up`) that are easily applied with Tailwind CSS, allowing me to quickly create smooth transitions and animations.

### The JavaScript Code

```javascript
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
  },
);

document.querySelectorAll("[data-animate]").forEach((el, _i) => {
  observer.observe(el);
});
```

#### What’s Happening Here?

Let’s break it down step-by-step:

**1. Creating an `IntersectionObserver`**

The `IntersectionObserver` constructor takes two arguments:

- A callback function that will be triggered whenever an element intersects with the viewport.
- An options object that defines the conditions for when the callback should fire (such as visibility threshold).

In the code above, we create an `IntersectionObserver` that watches elements and adds animation to them when they enter the viewport.

**2. Callback Function**

The callback function runs every time the observed element’s intersection with the viewport changes. In this case, for every element in `entries`, if the element is visible (`entry.isIntersecting`), we apply an animation to it.

- `entry.target` refers to the element being observed.
- `el.dataset.animate` looks for a custom attribute `data-animate` in the HTML, which tells us which animation to apply. If this attribute isn’t provided, the default is `"animate-fade-up"`.
- Similarly, `data-animate-delay` and `data-animate-duration` are used to control the delay and duration of the animation.

**3. Apply Animation**

Once the element becomes visible, we add the animation class (`el.classList.add(animation)`) and set its animation delay and duration using inline styles. We also remove the class `opacity-0` (which makes the element invisible) so that the animation can trigger.

**4. Stop Observing**

Once the animation is triggered, we stop observing the element (`observer.unobserve(el)`). This prevents unnecessary checks after the animation has been triggered.

**5. Observing Elements**

We select all elements with the `data-animate` attribute and start observing them. These elements are the ones that will trigger the animation when they enter the viewport.

## Conclusion

The `IntersectionObserver` API is a powerful tool that makes adding animations to elements much more efficient. By observing when elements enter the viewport, we can trigger animations only when necessary, improving the performance and user experience of the site. Whether you're lazy-loading images or adding smooth animations, `IntersectionObserver` is a great tool to have in your web development toolkit!

If you’ve used Tailwind CSS and [tailwindcss-animated](https://github.com/new-data-services/tailwindcss-animated) for your animations, pairing them with `IntersectionObserver` can give your site a dynamic, engaging feel without sacrificing performance. Happy coding!
