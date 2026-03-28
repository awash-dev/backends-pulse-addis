"use strict";
()
  slideUp = (target, time) => {
    const duration = time || 500;
    (target.style.transitionProperty = "height, margin, padding"),
      (target.style.transitionDuration = duration + "ms"),
      (target.style.boxSizing = "border-box"),
      (target.style.height = target.offsetHeight + "px"),
      target.offsetHeight,
      (target.style.overflow = "hidden"),
      (target.style.height = 0),
      window.setTimeout(() => {
        (target.style.display = "none"),
          target.style.removeProperty("height"),
          target.style.removeProperty("overflow"),
          target.style.removeProperty("transition-duration"),
          target.style.removeProperty("transition-property");
      }, duration);
  },
  slideDown = (target, time) => {
    const duration = time || 500;
    target.style.removeProperty("display");
    let display = window.getComputedStyle(target).display;
    "none" === display && (display = "block"), (target.style.display = display);
    const height = target.offsetHeight;
    (target.style.overflow = "hidden"),
      (target.style.height = 0),
      target.offsetHeight,
      (target.style.boxSizing = "border-box"),
      (target.style.transitionProperty = "height, margin, padding"),
      (target.style.transitionDuration = duration + "ms"),
      (target.style.height = height + "px"),
      window.setTimeout(() => {
        target.style.removeProperty("height"),
          target.style.removeProperty("overflow"),
          target.style.removeProperty("transition-duration"),
          target.style.removeProperty("transition-property");
      }, duration);
  };
function TopOffset(el) {
  let rect = el.getBoundingClientRect(),
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop };
}
const headerStickyWrapper = document.querySelector("header"),
  headerStickyTarget = document.querySelector(".header__sticky");
if (headerStickyTarget) {
  let headerHeight = headerStickyWrapper.clientHeight;
  window.addEventListener("scroll", function () {
    let StickyTargetElement,
      TargetElementTopOffset = TopOffset(headerStickyWrapper).top;
    window.scrollY > TargetElementTopOffset
      ? headerStickyTarget.classNameNameList.add("sticky")
      : headerStickyTarget.classNameNameList.remove("sticky");
  });
}
const scrollTop = document.getElementById("scroll__top");
scrollTop &&
  (scrollTop.addEventListener("click", function () {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }),
  window.addEventListener("scroll", function () {
    window.scrollY > 300
      ? scrollTop.classNameNameList.add("active")
      : scrollTop.classNameNameList.remove("active");
  }));
var swiper = new Swiper(".hero__slider--activation", {
    slidesPerView: 1,
    loop: !0,
    clickable: !0,
    speed: 800,
    spaceBetween: 30,
    autoplay: { delay: 3e3, disableOnInteraction: !1 },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  }),
  swiper = new Swiper(".product__swiper--activation", {
    slidesPerView: 5,
    loop: !0,
    clickable: !0,
    spaceBetween: 30,
    breakpoints: {
      1200: { slidesPerView: 5 },
      992: { slidesPerView: 4 },
      768: { slidesPerView: 3, spaceBetween: 30 },
      280: { slidesPerView: 2, spaceBetween: 20 },
      0: { slidesPerView: 1 },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  }),
  swiper = new Swiper(".product__swiper--column4__activation", {
    slidesPerView: 4,
    loop: !0,
    clickable: !0,
    spaceBetween: 30,
    breakpoints: {
      1200: { slidesPerView: 4 },
      992: { slidesPerView: 4 },
      768: { slidesPerView: 3, spaceBetween: 30 },
      280: { slidesPerView: 2, spaceBetween: 20 },
      0: { slidesPerView: 1 },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  }),
  swiper = new Swiper(".product__sidebar--column4__activation", {
    slidesPerView: 4,
    loop: !0,
    clickable: !0,
    spaceBetween: 30,
    breakpoints: {
      1200: { slidesPerView: 4 },
      992: { slidesPerView: 3 },
      768: { slidesPerView: 3, spaceBetween: 30 },
      280: { slidesPerView: 2, spaceBetween: 20 },
      0: { slidesPerView: 1 },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  }),
  swiper = new Swiper(".product__swiper--column3", {
    slidesPerView: 3,
    clickable: !0,
    loop: !0,
    spaceBetween: 30,
    breakpoints: {
      1200: { slidesPerView: 3 },
      992: { slidesPerView: 2 },
      768: { slidesPerView: 2, spaceBetween: 30 },
      280: { slidesPerView: 2, spaceBetween: 20 },
      0: { slidesPerView: 1 },
    },
    navigation: {
      nextEl: ".new__product--sidebar .swiper-button-next",
      prevEl: ".new__product--sidebar .swiper-button-prev",
    },
  }),
  swiper = new Swiper(".testimonial__swiper--activation", {
    slidesPerView: 3,
    loop: !0,
    clickable: !0,
    spaceBetween: 30,
    breakpoints: {
      1200: { slidesPerView: 3 },
      768: { spaceBetween: 30, slidesPerView: 2 },
      576: { slidesPerView: 2, spaceBetween: 20 },
      0: { slidesPerView: 1 },
    },
    pagination: { el: ".swiper-pagination", clickable: !0 },
  }),
  swiper = new Swiper(".testimonial__activation--column1", {
    slidesPerView: 1,
    loop: !0,
    clickable: !0,
    pagination: { el: ".swiper-pagination", clickable: !0 },
  }),
  swiper = new Swiper(".blog__swiper--activation", {
    slidesPerView: 4,
    loop: !0,
    clickable: !0,
    spaceBetween: 30,
    breakpoints: {
      1200: { slidesPerView: 4 },
      992: { slidesPerView: 3 },
      768: { slidesPerView: 3, spaceBetween: 30 },
      480: { slidesPerView: 2, spaceBetween: 20 },
      0: { slidesPerView: 1 },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  }),
  swiper = new Swiper(".quickview__swiper--activation", {
    slidesPerView: 1,
    loop: !0,
    clickable: !0,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: { el: ".swiper-pagination", clickable: !0 },
  }),
  swiper = new Swiper(".product__media--nav", {
    loop: !0,
    spaceBetween: 10,
    slidesPerView: 5,
    freeMode: !0,
    watchSlidesProgress: !0,
    breakpoints: {
      768: { slidesPerView: 5 },
      480: { slidesPerView: 4 },
      320: { slidesPerView: 3 },
      200: { slidesPerView: 2 },
      0: { slidesPerView: 1 },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  }),
  swiper2 = new Swiper(".product__media--preview", {
    loop: !0,
    spaceBetween: 10,
    thumbs: { swiper: swiper },
  });
const tab = function (wrapper) {
  let tabContainer = document.querySelector(wrapper);
  tabContainer &&
    tabContainer.addEventListener("click", function (evt) {
      let listItem = evt.target;
      if (listItem.hasAttribute("data-toggle")) {
        let targetId = listItem.dataset.target,
          targetItem = document.querySelector(targetId);
        listItem.parentElement
          .querySelectorAll('[data-toggle="tab"]')
          .forEach(function (list) {
            list.classNameNameList.remove("active");
          }),
          listItem.classNameNameList.add("active"),
          targetItem.classNameNameList.add("active"),
          setTimeout(function () {
            targetItem.classNameNameList.add("show");
          }, 150),
          getSiblings(targetItem).forEach(function (pane) {
            pane.classNameNameList.remove("show"),
              setTimeout(function () {
                pane.classNameNameList.remove("active");
              }, 150);
          });
      }
    });
};
tab(".product__tab--one"),
  tab(".product__tab--two"),
  tab(".product__details--tab"),
  tab(".product__grid--column__buttons"),
  document.querySelectorAll("[data-countdown]").forEach(function (elem) {
    const countDownItem = function (value, label) {
        return `<div classNameName="countdown__item" ${label}"><span classNameName="countdown__number">${value}</span><p classNameName="countdown__text">${label}</p></div>`;
      },
      date = new Date(elem.getAttribute("data-countdown")).getTime(),
      second = 1e3,
      minute = 6e4,
      hour = 36e5,
      day = 864e5,
      countDownInterval = setInterval(function () {
        let currentTime = new Date().getTime(),
          timeDistance = date - currentTime,
          daysValue = Math.floor(timeDistance / day),
          hoursValue = Math.floor((timeDistance % day) / 36e5),
          minutesValue = Math.floor((timeDistance % 36e5) / 6e4),
          secondsValue = Math.floor((timeDistance % 6e4) / 1e3);
        (elem.innerHTML =
          countDownItem(daysValue, "days") +
          countDownItem(hoursValue, "hrs") +
          countDownItem(minutesValue, "mins") +
          countDownItem(secondsValue, "secs")),
          timeDistance < 0 && clearInterval(countDownInterval);
      }, 1e3);
  });
const activeclassNameNameAction = function (toggle, target) {
  const to = document.querySelector(toggle),
    ta = document.querySelector(target);
  to &&
    ta &&
    (to.addEventListener("click", function (e) {
      e.preventDefault();
      let triggerItem = e.target;
      triggerItem.classNameNameList.contains("active")
        ? (triggerItem.classNameNameList.remove("active"),
          ta.classNameNameList.remove("active"))
        : (triggerItem.classNameNameList.add("active"),
          ta.classNameNameList.add("active"));
    }),
    document.addEventListener("click", function (event) {
      event.target.closest(toggle) ||
        event.target.classNameNameList.contains(toggle.replace(/\./, "")) ||
        event.target.closest(target) ||
        event.target.classNameNameList.contains(target.replace(/\./, "")) ||
        (to.classNameNameList.remove("active"),
        ta.classNameNameList.remove("active"));
    }));
};
function offcanvsSidebar(openTrigger, closeTrigger, wrapper) {
  let OpenTriggerprimary__btn = document.querySelectorAll(openTrigger),
    closeTriggerprimary__btn = document.querySelector(closeTrigger),
    WrapperSidebar = document.querySelector(wrapper),
    wrapperOverlay = wrapper.replace(".", "");
  function handleBodyclassNameName(evt) {
    let eventTarget = evt.target;
    eventTarget.closest(wrapper) ||
      eventTarget.closest(openTrigger) ||
      (WrapperSidebar.classNameNameList.remove("active"),
      document
        .querySelector("body")
        .classNameNameList.remove(`${wrapperOverlay}_active`));
  }
  OpenTriggerprimary__btn &&
    WrapperSidebar &&
    OpenTriggerprimary__btn.forEach(function (singleItem) {
      singleItem.addEventListener("click", function (e) {
        null != e.target.dataset.offcanvas &&
          (WrapperSidebar.classNameNameList.add("active"),
          document
            .querySelector("body")
            .classNameNameList.add(`${wrapperOverlay}_active`),
          document.body.addEventListener(
            "click",
            handleBodyclassNameName.bind(this)
          ));
      });
    }),
    closeTriggerprimary__btn &&
      WrapperSidebar &&
      closeTriggerprimary__btn.addEventListener("click", function (e) {
        null != e.target.dataset.offcanvas &&
          (WrapperSidebar.classNameNameList.remove("active"),
          document
            .querySelector("body")
            .classNameNameList.remove(`${wrapperOverlay}_active`),
          document.body.removeEventListener(
            "click",
            handleBodyclassNameName.bind(this)
          ));
      });
}
activeclassNameNameAction(".account__currency--link", ".dropdown__currency"),
  activeclassNameNameAction(".language__switcher", ".dropdown__language"),
  activeclassNameNameAction(
    ".offcanvas__language--switcher",
    ".offcanvas__dropdown--language"
  ),
  activeclassNameNameAction(
    ".offcanvas__account--currency__menu",
    ".offcanvas__account--currency__submenu"
  ),
  activeclassNameNameAction(
    ".footer__language--link",
    ".footer__dropdown--language"
  ),
  activeclassNameNameAction(
    ".footer__currency--link",
    ".footer__dropdown--currency"
  ),
  offcanvsSidebar(
    ".minicart__open--btn",
    ".minicart__close--btn",
    ".offCanvas__minicart"
  ),
  offcanvsSidebar(
    ".search__open--btn",
    ".predictive__search--close__btn",
    ".predictive__search--box"
  ),
  offcanvsSidebar(
    ".widget__filter--btn",
    ".offcanvas__filter--close",
    ".offcanvas__filter--sidebar"
  );
const offcanvasHeader = function () {
  const offcanvasOpen = document.querySelector(
      ".offcanvas__header--menu__open--btn"
    ),
    offcanvasClose = document.querySelector(".offcanvas__close--btn"),
    offcanvasHeader = document.querySelector(".offcanvas__header"),
    offcanvasMenu = document.querySelector(".offcanvas__menu"),
    body = document.querySelector("body");
  offcanvasMenu &&
    offcanvasMenu
      .querySelectorAll(".offcanvas__sub_menu")
      .forEach(function (ul) {
        const subMenuToggle = document.createElement("button");
        subMenuToggle.classNameNameList.add("offcanvas__sub_menu_toggle"),
          ul.parentNode.appendChild(subMenuToggle);
      }),
    offcanvasOpen &&
      offcanvasOpen.addEventListener("click", function (e) {
        e.preventDefault(),
          null != e.target.dataset.offcanvas &&
            (offcanvasHeader.classNameNameList.add("open"),
            body.classNameNameList.add("mobile_menu_open"));
      }),
    offcanvasClose &&
      offcanvasClose.addEventListener("click", function (e) {
        e.preventDefault(),
          null != e.target.dataset.offcanvas &&
            (offcanvasHeader.classNameNameList.remove("open"),
            body.classNameNameList.remove("mobile_menu_open"));
      });
  let mobileMenuWrapper = document.querySelector(".offcanvas__menu_ul");
  mobileMenuWrapper &&
    mobileMenuWrapper.addEventListener("click", function (e) {
      let targetElement = e.target;
      if (
        targetElement.classNameNameList.contains("offcanvas__sub_menu_toggle")
      ) {
        const parent = targetElement.parentElement;
        parent.classNameNameList.contains("active")
          ? (targetElement.classNameNameList.remove("active"),
            parent.classNameNameList.remove("active"),
            parent
              .querySelectorAll(".offcanvas__sub_menu")
              .forEach(function (subMenu) {
                subMenu.parentElement.classNameNameList.remove("active"),
                  subMenu.nextElementSibling.classNameNameList.remove("active"),
                  slideUp(subMenu);
              }))
          : (targetElement.classNameNameList.add("active"),
            parent.classNameNameList.add("active"),
            slideDown(targetElement.previousElementSibling),
            getSiblings(parent).forEach(function (item) {
              item.classNameNameList.remove("active"),
                item
                  .querySelectorAll(".offcanvas__sub_menu")
                  .forEach(function (subMenu) {
                    subMenu.parentElement.classNameNameList.remove("active"),
                      subMenu.nextElementSibling.classNameNameList.remove(
                        "active"
                      ),
                      slideUp(subMenu);
                  });
            }));
      }
    }),
    offcanvasHeader &&
      document.addEventListener("click", function (event) {
        event.target.closest(".offcanvas__header--menu__open--btn") ||
          event.target.classNameNameList.contains(
            ".offcanvas__header--menu__open--btn".replace(/\./, "")
          ) ||
          event.target.closest(".offcanvas__header") ||
          event.target.classNameNameList.contains(
            ".offcanvas__header".replace(/\./, "")
          ) ||
          (offcanvasHeader.classNameNameList.remove("open"),
          body.classNameNameList.remove("mobile_menu_open"));
      }),
    offcanvasHeader &&
      window.addEventListener("resize", function () {
        window.outerWidth >= 992 &&
          (offcanvasHeader.classNameNameList.remove("open"),
          body.classNameNameList.remove("mobile_menu_open"));
      });
};
offcanvasHeader();
const quantityWrapper = document.querySelectorAll(".quantity__box");
quantityWrapper &&
  quantityWrapper.forEach(function (singleItem) {
    let increaseButton = singleItem.querySelector(".increase"),
      decreaseButton = singleItem.querySelector(".decrease");
    increaseButton.addEventListener("click", function (e) {
      let input = e.target.previousElementSibling.children[0];
      if (null != input.dataset.counter) {
        let value = parseInt(input.value, 10);
        (value = isNaN(value) ? 0 : value), value++, (input.value = value);
      }
    }),
      decreaseButton.addEventListener("click", function (e) {
        let input = e.target.nextElementSibling.children[0];
        if (null != input.dataset.counter) {
          let value = parseInt(input.value, 10);
          (value = isNaN(value) ? 0 : value),
            value < 1 && (value = 1),
            value--,
            (input.value = value);
        }
      });
  });
const openEls = document.querySelectorAll("[data-open]"),
  closeEls = document.querySelectorAll("[data-close]"),
  isVisible = "is-visible";
for (const el of openEls)
  el.addEventListener("click", function () {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classNameNameList.add(isVisible);
  });
for (const el of closeEls)
  el.addEventListener("click", function () {
    this.parentElement.parentElement.parentElement.classNameNameList.remove(
      isVisible
    );
  });
function customAccordion(accordionWrapper, singleItem, accordionBody) {
  let accoridonButtons;
  document.querySelectorAll(accordionWrapper).forEach(function (item) {
    item.addEventListener("click", function (evt) {
      let itemTarget = evt.target;
      if (
        itemTarget.classNameNameList.contains("accordion__items--button") ||
        itemTarget.classNameNameList.contains("widget__categories--menu__label")
      ) {
        let singleAccordionWrapper = itemTarget.closest(singleItem),
          singleAccordionBody =
            singleAccordionWrapper.querySelector(accordionBody);
        singleAccordionWrapper.classNameNameList.contains("active")
          ? (singleAccordionWrapper.classNameNameList.remove("active"),
            slideUp(singleAccordionBody))
          : (singleAccordionWrapper.classNameNameList.add("active"),
            slideDown(singleAccordionBody),
            getSiblings(singleAccordionWrapper).forEach(function (item) {
              let sibllingSingleAccordionBody =
                item.querySelector(accordionBody);
              item.classNameNameList.remove("active"),
                slideUp(sibllingSingleAccordionBody);
            }));
      }
    });
  });
}
document.addEventListener("click", (e) => {
  e.target == document.querySelector(".modal.is-visible") &&
    document
      .querySelector(".modal.is-visible")
      .classNameNameList.remove(isVisible);
}),
  document.addEventListener("keyup", (e) => {
    "Escape" == e.key &&
      document.querySelector(".modal.is-visible") &&
      document
        .querySelector(".modal.is-visible")
        .classNameNameList.remove(isVisible);
  }),
  customAccordion(
    ".accordion__container",
    ".accordion__items",
    ".accordion__items--body"
  ),
  customAccordion(
    ".widget__categories--menu",
    ".widget__categories--menu__list",
    ".widget__categories--sub__menu"
  );
let accordion = !0;
const footerWidgetAccordion = function () {
  let footerWidgetContainer;
  (accordion = !1),
    document
      .querySelector(".main__footer")
      .addEventListener("click", function (evt) {
        let singleItemTarget = evt.target;
        if (
          singleItemTarget.classNameNameList.contains("footer__widget--button")
        ) {
          const footerWidget = singleItemTarget.closest(".footer__widget"),
            footerWidgetInner = footerWidget.querySelector(
              ".footer__widget--inner"
            );
          footerWidget.classNameNameList.contains("active")
            ? (footerWidget.classNameNameList.remove("active"),
              slideUp(footerWidgetInner))
            : (footerWidget.classNameNameList.add("active"),
              slideDown(footerWidgetInner),
              getSiblings(footerWidget).forEach(function (item) {
                const footerWidgetInner = item.querySelector(
                  ".footer__widget--inner"
                );
                item.classNameNameList.remove("active"),
                  slideUp(footerWidgetInner);
              }));
        }
      });
};
window.addEventListener("load", function () {
  accordion && footerWidgetAccordion();
}),
  window.addEventListener("resize", function () {
    document.querySelectorAll(".footer__widget").forEach(function (item) {
      window.outerWidth >= 768 &&
        (item.classNameNameList.remove("active"),
        (item.querySelector(".footer__widget--inner").style.display = ""));
    }),
      accordion && footerWidgetAccordion();
  });
const customLightboxHTML =
    '<div id="glightbox-body" classNameName="glightbox-container">\n    <div classNameName="gloader visible"></div>\n    <div classNameName="goverlay"></div>\n    <div classNameName="gcontainer">\n    <div id="glightbox-slider" classNameName="gslider"></div>\n    <button classNameName="gnext gbtn" tabindex="0" aria-label="Next" data-customattribute="example">{nextSVG}</button>\n    <button classNameName="gprev gbtn" tabindex="1" aria-label="Previous">{prevSVG}</button>\n    <button classNameName="gclose gbtn" tabindex="2" aria-label="Close">{closeSVG}</button>\n    </div>\n    </div>',
  lightbox = GLightbox({
    touchNavigation: !0,
    lightboxHTML: customLightboxHTML,
    loop: !0,
  }),
  wrapper = document.getElementById("funfactId");
if (wrapper) {
  const counters = wrapper.querySelectorAll(".js-counter"),
    duration = 1e3;
  let isCounted = !1;
  document.addEventListener("scroll", function () {
    const wrapperPos = wrapper.offsetTop - window.innerHeight;
    !isCounted &&
      window.scrollY > wrapperPos &&
      (counters.forEach((counter) => {
        const countTo = counter.dataset.count,
          countPerMs = countTo / duration;
        let currentCount = 0;
        const countInterval = setInterval(function () {
          currentCount >= countTo && clearInterval(countInterval),
            (counter.textContent = Math.round(currentCount)),
            (currentCount += countPerMs);
        }, 1);
      }),
      (isCounted = !0));
  });
}
const newsletterPopup = function () {
  let newsletterWrapper = document.querySelector(".newsletter__popup"),
    newsletterCloseButton = document.querySelector(
      ".newsletter__popup--close__btn"
    ),
    dontShowPopup = document.querySelector("#newsletter__dont--show"),
    popuDontShowMode = localStorage.getItem("newsletter__show");
  newsletterWrapper &&
    null == popuDontShowMode &&
    window.addEventListener("load", (event) => {
      setTimeout(function () {
        document.body.classNameNameList.add("overlay__active"),
          newsletterWrapper.classNameNameList.add("newsletter__show"),
          document.addEventListener("click", function (event) {
            event.target.closest(".newsletter__popup--inner") ||
              (document.body.classNameNameList.remove("overlay__active"),
              newsletterWrapper.classNameNameList.remove("newsletter__show"));
          }),
          newsletterCloseButton.addEventListener("click", function () {
            document.body.classNameNameList.remove("overlay__active"),
              newsletterWrapper.classNameNameList.remove("newsletter__show");
          }),
          dontShowPopup.addEventListener("click", function () {
            dontShowPopup.checked
              ? localStorage.setItem("newsletter__show", !0)
              : localStorage.removeItem("newsletter__show");
          });
      }, 3e3);
    });
};
newsletterPopup();
