(function() {
  "use strict";
  var cardEnhancement = function() {
    var cardsArray = Array.prototype.slice.call(document.querySelectorAll('[data-component="card"]'));
    if (cardsArray) {
      cardsArray.forEach(function(card) {
        var mainLink = card.querySelector(".card__link");
        var clickableElems = Array.prototype.slice.call(card.querySelectorAll("[data-click]"));
        if (clickableElems) {
          clickableElems.forEach(function(elem) {
            return elem.addEventListener("click", function(event) {
              return event.stopPropagation();
            });
          });
        }
        card.addEventListener("click", function(event) {
          if (event.redispatched || event.target === mainLink) {
            return;
          }
          let noTextSelected = !window.getSelection().toString();
          if (noTextSelected) {
            const event2 = new MouseEvent("click", event);
            event2.redispatched = true;
            mainLink.dispatchEvent(event2);
          }
        });
      });
    }
  };
  var collapsibles = function() {
    var collapseArray = Array.prototype.slice.call(document.querySelectorAll('[data-component="collapsibles"]'));
    if (collapseArray) {
      collapseArray.forEach(function(item) {
        var headingsArray = Array.prototype.slice.call(item.querySelectorAll('[data-heading="collapsibles"]'));
        headingsArray.forEach(function(heading, index) {
          heading.innerHTML = '<button class="button--ghost" aria-expanded="false"><span class="js-collapsible-heading">' + heading.innerHTML + '</span><span class="js-collapsible-toggle"><span class="visuallyhidden">, </span><span class="with-icon--before"><svg class="icon icon--24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path fill="none" d="M0 0h24v24H0z"/><path d="M15.08 9.59 12 12.67 8.92 9.59 7.5 11l4.5 4.5 4.5-4.5-1.42-1.41z" class="circle-down"/><path d="m12 9-4.5 4.5 1.41 1.41L12 11.83l3.09 3.09 1.41-1.411z" class="circle-up"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg><span class="js-collapsible-label">Show</span><span class="visuallyhidden"> this section</span></span></span></button>';
          heading.nextElementSibling.setAttribute("aria-hidden", "true");
          var btn = heading.querySelector("button");
          var toggleText = btn.querySelector(".js-collapsible-label");
          btn.addEventListener("click", function(event) {
            var expanded = btn.getAttribute("aria-expanded") === "true";
            btn.setAttribute("aria-expanded", !expanded);
            heading.nextElementSibling.setAttribute("aria-hidden", expanded);
            if (expanded == true) {
              toggleText.textContent = "Show";
            } else {
              toggleText.textContent = "Hide";
            }
          });
        });
      });
    }
  };
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  }
  if (!Element.prototype.closest) {
    Element.prototype.closest = function(s) {
      var el = this;
      if (!document.documentElement.contains(el)) return null;
      do {
        if (el.matches(s)) return el;
        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);
      return null;
    };
  }
  var disclosureWidget = function() {
    var toggleButtonArray = Array.prototype.slice.call(document.querySelectorAll('[data-toggle="true"]'));
    var closeDisclosures = function() {
      toggleButtonArray.forEach(function(btn) {
        if (btn.getAttribute("aria-expanded") === "true") {
          btn.setAttribute("aria-expanded", "false");
        }
      });
    };
    if (toggleButtonArray) {
      toggleButtonArray.forEach(function(btn) {
        btn.removeAttribute("style");
        btn.setAttribute("aria-expanded", "false");
      });
      document.addEventListener("click", function(event) {
        if (event.target.matches('[data-toggle="true"]')) {
          var toggleTarget = event.target.nextElementSibling;
          if (event.target.matches('[aria-expanded="false"]')) {
            closeDisclosures();
            event.target.setAttribute("aria-expanded", "true");
            toggleTarget.setAttribute("data-item-expanded", "true");
          } else {
            event.target.setAttribute("aria-expanded", "false");
            toggleTarget.removeAttribute("data-item-expanded");
          }
        } else if (event.target.closest('[data-item-expanded="true"]')) {
          return;
        } else {
          closeDisclosures();
        }
      });
      document.addEventListener("keyup", function(event) {
        if (event.defaultPrevented) {
          return;
        }
        let key = event.key || event.keyCode;
        if (key === "Escape" || key === "Esc" || key === 27) {
          closeDisclosures();
        }
      });
    }
  };
  var formErrorSummary = function() {
    var errorSummary = document.querySelector('[data-component="error-summary"]');
    if (errorSummary) {
      errorSummary.focus();
    }
  };
  if (typeof Object.assign != "function") {
    Object.defineProperty(Object, "assign", {
      value: function assign(target, varArgs) {
        if (target == null) {
          throw new TypeError("Cannot convert undefined or null to object");
        }
        var to = Object(target);
        for (var index = 1; index < arguments.length; index++) {
          var nextSource = arguments[index];
          if (nextSource != null) {
            for (var nextKey in nextSource) {
              if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }
        return to;
      },
      writable: true,
      configurable: true
    });
  }
  const navSingleLevel = function(menu, options) {
    menu.parentElement;
    let mobileToggle = document.querySelector('[data-trigger="mobile-nav"]');
    let defaults = {
      breakpoint: 1024,
      mobileIcon: '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" class="icon icon--24" focusable="false" aria-hidden="true" fill="currentColor"><path class="open" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/><path class="close" d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>'
    };
    let settings = Object.assign({}, defaults, options);
    this.init = function() {
      mobileToggleSetup();
      document.addEventListener("click", clickHandler);
      document.addEventListener("keyup", closeOnEscKey);
    };
    function clickHandler(event) {
      if (event.target.matches('[data-trigger="mobile-nav"]')) {
        if (event.target.matches('[aria-expanded="true"]')) {
          event.target.setAttribute("aria-expanded", "false");
        } else {
          event.target.setAttribute("aria-expanded", "true");
        }
      }
    }
    function closeOnEscKey(event) {
      if (event.defaultPrevented) {
        return;
      }
      let key = event.key || event.keyCode;
      if (key === "Escape" || key === "Esc" || key === 27) {
        if (mobileToggle.style.display === "inline-flex") {
          mobileToggle.setAttribute("aria-expanded", "false");
        }
      }
    }
    function mobileToggleSetup() {
      mobileToggle.innerHTML += settings.mobileIcon;
      mobileToggle.setAttribute("aria-expanded", "false");
      mobileToggle.style.display = "inline-flex";
      let mqValue = settings.breakpoint / 16;
      let mq = window.matchMedia("(min-width: " + mqValue + "em)");
      mq.addListener(WidthChange);
      WidthChange(mq);
      function WidthChange(mq2) {
        if (!mq2.matches) {
          mobileToggle.setAttribute("aria-expanded", "false");
          mobileToggle.style.display = "inline-flex";
        } else {
          mobileToggle.setAttribute("aria-expanded", "true");
          mobileToggle.style.display = "none";
        }
      }
    }
  };
  const navDoubleLevel = function(menu, options) {
    let mobileToggle = document.querySelector('[data-trigger="mobile-nav"]');
    let defaults = {
      breakpoint: 1024,
      cloneTopLevelLink: true,
      replaceTopLevelLinks: true,
      mobileIcon: '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" class="icon icon--24" focusable="false" aria-hidden="true" fill="currentColor"><path class="open" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/><path class="close" d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>',
      submenuIcon: '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" class="icon icon--24" focusable="false" aria-hidden="true" fill="currentColor"><path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" /></svg>',
      submenuDirection: "vertical",
      submenuIntro: false
    };
    let settings = Object.assign({}, defaults, options);
    this.init = function() {
      mobileToggleSetup();
      menuSetup();
      document.addEventListener("click", clickHandler);
      document.addEventListener("keyup", closeOnEscKey);
    };
    function closeSubmenus() {
      let subNavTriggers = Array.prototype.slice.call(menu.querySelectorAll('[data-trigger="sub-nav"]'));
      subNavTriggers.forEach(function(trigger) {
        trigger.setAttribute("aria-expanded", "false");
      });
    }
    function clickHandler(event) {
      if (event.target.matches('[data-trigger="mobile-nav"]')) {
        if (event.target.matches('[aria-expanded="true"]')) {
          closeSubmenus();
          event.target.setAttribute("aria-expanded", "false");
        } else {
          event.target.setAttribute("aria-expanded", "true");
        }
      } else if (event.target.matches('[data-trigger="sub-nav"]')) {
        const button = event.target;
        const submenu = button.nextElementSibling;
        if (event.target.matches('[aria-expanded="true"]')) {
          event.target.setAttribute("aria-expanded", "false");
        } else {
          closeSubmenus();
          event.target.setAttribute("aria-expanded", "true");
          if (settings.submenuIntro === false) {
            preventOffScreenSubmenu(submenu);
          }
        }
      } else if (event.target.matches('[data-button="mobile-back"]')) {
        event.target.closest("li").querySelector('[data-trigger="sub-nav"]').setAttribute("aria-expanded", "false");
      } else {
        closeSubmenus();
      }
    }
    function closeOnEscKey(event) {
      if (event.defaultPrevented) {
        return;
      }
      let key = event.key || event.keyCode;
      if (key === "Escape" || key === "Esc" || key === 27) {
        let subNavTriggers = Array.prototype.slice.call(menu.querySelectorAll('[data-trigger="sub-nav"]'));
        let result = true;
        for (let i = 0; i < subNavTriggers.length; i++) {
          if (subNavTriggers[i].getAttribute("aria-expanded") === "true") {
            result = false;
            break;
          }
        }
        if (result && mobileToggle.style.display === "inline-flex") {
          mobileToggle.setAttribute("aria-expanded", "false");
        } else {
          closeSubmenus();
        }
      }
    }
    function preventOffScreenSubmenu(submenu) {
      const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      const parent = submenu.parentElement;
      const menuLeftEdge = parent.getBoundingClientRect().left;
      const menuRightEdge = menuLeftEdge + submenu.offsetWidth;
      if (menuRightEdge + 32 > screenWidth) {
        submenu.classList.add("js-sub-menu-right");
      }
    }
    function mobileToggleSetup() {
      mobileToggle.innerHTML += settings.mobileIcon;
      mobileToggle.setAttribute("aria-expanded", "false");
      mobileToggle.style.display = "inline-flex";
      let mqValue = settings.breakpoint / 16;
      let mq = window.matchMedia("(min-width: " + mqValue + "em)");
      mq.addListener(WidthChange);
      WidthChange(mq);
      function WidthChange(mq2) {
        if (!mq2.matches) {
          mobileToggle.setAttribute("aria-expanded", "false");
          mobileToggle.style.display = "inline-flex";
        } else {
          mobileToggle.setAttribute("aria-expanded", "true");
          mobileToggle.style.display = "none";
        }
      }
    }
    function menuSetup() {
      if (settings.submenuIntro === true) {
        menu.setAttribute("id", "js-click-nav-intro");
      } else if (settings.replaceTopLevelLinks === false) {
        menu.setAttribute("id", "js-click-nav-both");
      } else {
        menu.setAttribute("id", "js-click-nav-" + settings.submenuDirection);
      }
      const subMenuWrappers = Array.prototype.slice.call(menu.querySelectorAll('[data-nav="submenu"]'));
      subMenuWrappers.forEach(function(wrapper) {
        const menuItem = wrapper.parentElement;
        if ("undefined" !== typeof wrapper) {
          if (settings.replaceTopLevelLinks === true) {
            let button = convertLinkToButton(menuItem);
            setUpAria(wrapper, button);
          } else {
            let button = addButtonAfterLink(menuItem);
            setUpAria(wrapper, button);
          }
        }
      });
    }
    function addButtonAfterLink(menuItem) {
      const link = menuItem.getElementsByTagName("a")[0];
      const icon = settings.submenuIcon;
      const button = document.createElement("button");
      let subMenu = link.nextElementSibling.querySelector("ul");
      button.setAttribute("data-trigger", "sub-nav");
      button.innerHTML = icon + '<span class="visuallyhidden">' + link.textContent + " menu</span>";
      link.after(button);
      if (settings.submenuDirection === "horizontal") {
        const backButton = document.createElement("button");
        backButton.setAttribute("data-button", "mobile-back");
        backButton.setAttribute("class", "button button--ghost");
        backButton.innerHTML = icon + " Back";
        if (settings.submenuIntro === true) {
          subMenu.parentNode.insertBefore(backButton, subMenu.parentNode.children[0]);
        } else subMenu.parentNode.insertBefore(backButton, subMenu);
      }
      return button;
    }
    function convertLinkToButton(menuItem) {
      const link = menuItem.getElementsByTagName("a")[0];
      const linkHTML = link.innerHTML;
      const linkAtts = link.attributes;
      const icon = settings.submenuIcon;
      const button = document.createElement("button");
      button.setAttribute("data-trigger", "sub-nav");
      const li = document.createElement("li");
      let subMenu = link.nextElementSibling.querySelector("ul");
      if (null !== link) {
        button.innerHTML = linkHTML.trim();
        button.innerHTML = button.innerHTML + icon;
        for (let i = 0, length = linkAtts.length; i < length; i++) {
          let attr = linkAtts[i];
          if ("href" !== attr.name) {
            button.setAttribute(attr.name, attr.value);
          }
        }
        if (settings.cloneTopLevelLink === true) {
          const linkClone = link.cloneNode(true);
          li.appendChild(linkClone);
          subMenu.insertBefore(li, subMenu.children[0]);
        }
        menuItem.replaceChild(button, link);
      }
      if (settings.submenuDirection === "horizontal") {
        const backButton = document.createElement("button");
        backButton.setAttribute("data-button", "mobile-back");
        backButton.setAttribute("class", "button button--ghost");
        backButton.innerHTML = icon + " Back";
        if (settings.submenuIntro === true) {
          subMenu.parentNode.insertBefore(backButton, subMenu.parentNode.children[0]);
        } else subMenu.parentNode.insertBefore(backButton, subMenu);
      }
      return button;
    }
    function setUpAria(submenu, button) {
      const submenuId = submenu.getAttribute("id");
      let id;
      if (null === submenuId) {
        id = "js-" + button.textContent.trim().replace(/\s+/g, "-").toLowerCase() + "-submenu";
      } else {
        id = submenuId + "-submenu";
      }
      button.setAttribute("aria-controls", id);
      button.setAttribute("aria-expanded", "false");
      submenu.setAttribute("id", id);
    }
  };
  function domLoadedActions() {
    cardEnhancement();
    collapsibles();
    disclosureWidget();
    formErrorSummary();
    const navExampleSingle = document.querySelector('[data-component="nav-single"]');
    if (navExampleSingle) {
      let siteNav = new navSingleLevel(navExampleSingle, {
        breakpoint: 768
      });
      siteNav.init();
    }
    const navExampleDoubleSimple = document.querySelector('[data-nav-example="dbl1"] [data-component="nav-double"]');
    if (navExampleDoubleSimple) {
      let siteNav = new navDoubleLevel(navExampleDoubleSimple, {
        breakpoint: 768
      });
      siteNav.init();
    }
    const navExampleDoubleBack = document.querySelector('[data-nav-example="dbl2"] [data-component="nav-double"]');
    if (navExampleDoubleBack) {
      let siteNav = new navDoubleLevel(navExampleDoubleBack, {
        breakpoint: 768,
        submenuDirection: "horizontal"
      });
      siteNav.init();
    }
    const navDoubleBoth = document.querySelector('[data-nav-example="dbl3"] [data-component="nav-double"]');
    if (navDoubleBoth) {
      let siteNav = new navDoubleLevel(navDoubleBoth, {
        breakpoint: 768,
        cloneTopLevelLink: false,
        replaceTopLevelLinks: false
      });
      siteNav.init();
    }
    const navDoubleIntro = document.querySelector('[data-component="nav-double-intro"]');
    if (navDoubleIntro) {
      let siteNav = new navDoubleLevel(navDoubleIntro, {
        breakpoint: 768,
        cloneTopLevelLink: false,
        submenuDirection: "horizontal",
        submenuIntro: true
      });
      siteNav.init();
    }
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", domLoadedActions);
  } else {
    domLoadedActions();
  }
})();
