/* Telliskivi WLLNSS — prototype interactions.
   Vanilla, no dependencies. Menu, reveal and count-up are the
   Telliskivi M-hoone versions unchanged. */

(function () {
  "use strict";

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* --- open menu --------------------------------------------- */
  var burger = document.querySelector("[data-burger]");
  var nav = document.querySelector("[data-nav]");

  function setNav(open) {
    nav.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
  }

  if (burger && nav) {
    burger.addEventListener("click", function (e) {
      e.stopPropagation();
      setNav(!nav.classList.contains("is-open"));
    });
    document.addEventListener("click", function (e) {
      if (!nav.contains(e.target)) setNav(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setNav(false);
    });
  }

  /* --- sticky bar: light background as soon as the page scrolls - */
  var header = document.querySelector("[data-header]");
  if (header) {
    var onScroll = function () { header.classList.toggle("is-scrolled", window.scrollY > 0); };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* --- count-up on the stat numbers -------------------------- */
  function countUp(el) {
    var target = parseFloat(el.getAttribute("data-count-to"));
    var start = null;
    function step(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / 1100, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    }
    el.textContent = "0";
    requestAnimationFrame(step);
  }

  /* --- scroll reveal ----------------------------------------- */
  var reveals = document.querySelectorAll("[data-reveal]");

  function show(el) {
    el.classList.add("is-visible");
    // A heading bar starts at zero width, 10px off-screen (Figma x -10), so the
    // observer never sees it on screens up to 1440. It wipes in with its heading.
    var prev = el.previousElementSibling;
    if (prev && prev.classList.contains("bar")) prev.classList.add("is-visible");
    if (!reduce) Array.prototype.forEach.call(el.querySelectorAll("[data-count-to]"), countUp);
  }

  if (!("IntersectionObserver" in window) || reduce) {
    Array.prototype.forEach.call(reveals, function (el) { el.classList.add("is-visible"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        setTimeout(function () { show(el); }, parseInt(el.getAttribute("data-reveal-delay") || "0", 10));
        io.unobserve(el);
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.08 });
    Array.prototype.forEach.call(reveals, function (el) {
      if (!el.classList.contains("bar")) io.observe(el);   // bars are shown by show(), above
    });
  }

  /* --- treatment filters (treeningud.html) --------------------
     Only runs when <body data-filters="on">. A card shows when its
     data-cat list contains the chosen filter; "all" shows everything. */
  var grid = document.querySelector("[data-grid]");
  if (grid && document.body.getAttribute("data-filters") === "on") {
    var buttons = document.querySelectorAll("[data-filter]");
    Array.prototype.forEach.call(buttons, function (btn) {
      btn.addEventListener("click", function () {
        var f = btn.getAttribute("data-filter");
        Array.prototype.forEach.call(buttons, function (b) { b.setAttribute("aria-pressed", String(b === btn)); });
        Array.prototype.forEach.call(grid.children, function (card) {
          var cats = (card.getAttribute("data-cat") || "").split(" ");
          card.hidden = f !== "all" && cats.indexOf(f) === -1;
        });
      });
    });
  }

  /* --- card slider -------------------------------------------
     The track is a native horizontal scroller (so trackpad and touch
     swipe just work); the arrows scroll it by one card. Arrows dim at
     either end. */
  var track = document.querySelector("[data-slider-track]");
  var prev = document.querySelector("[data-slider-prev]");
  var next = document.querySelector("[data-slider-next]");

  if (track && prev && next) {
    var stepSize = function () {
      var card = track.firstElementChild;
      return card.getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap || 16);
    };
    // Scroll to an exact card position rather than scrollBy, so it can't
    // fight scroll-snap, and quick double clicks add up instead of colliding.
    var target = null, settle;
    var go = function (dir) {
      var s = stepSize();
      var max = track.scrollWidth - track.clientWidth;
      var base = target !== null ? target : Math.round(track.scrollLeft / s) * s;
      target = Math.max(0, Math.min(base + dir * s, max));
      track.scrollTo({ left: target });
      clearTimeout(settle);
      settle = setTimeout(function () { target = null; }, 800);
    };
    var update = function () {
      prev.disabled = track.scrollLeft < 2;
      next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;
      clearTimeout(settle);
      settle = setTimeout(function () { target = null; }, 200);
    };
    prev.addEventListener("click", function () { go(-1); });
    next.addEventListener("click", function () { go(1); });

    // Drag to scroll with the mouse (touch and trackpads already swipe natively).
    // Snap is switched off while dragging; on release it snaps to the nearest card.
    // A drag of more than 5px doesn't count as a click on the card underneath.
    var drag = null, moved = false;
    track.addEventListener("pointerdown", function (e) {
      if (e.pointerType !== "mouse" || e.button !== 0) return;
      e.preventDefault();   // otherwise the browser starts dragging the card link itself and cancels this
      drag = { x: e.clientX, left: track.scrollLeft };
      moved = false;
    });
    window.addEventListener("pointermove", function (e) {
      if (!drag) return;
      var dx = e.clientX - drag.x;
      if (!moved && Math.abs(dx) < 5) return;
      if (!moved) { moved = true; target = null; track.classList.add("is-dragging"); }
      track.scrollLeft = drag.left - dx;
    });
    var endDrag = function () {
      if (!drag) return;
      drag = null;
      track.classList.remove("is-dragging");
    };
    window.addEventListener("pointerup", endDrag);
    window.addEventListener("pointercancel", endDrag);
    track.addEventListener("click", function (e) {
      if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; }
    }, true);
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
  }

})();
