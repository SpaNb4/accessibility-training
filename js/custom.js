(function () {
  var burger = document.querySelector('.burger');
  var menu = document.querySelector('#' + burger.dataset.target);
  burger.addEventListener('click', function () {
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
  });
})();

document.querySelectorAll('#nav li').forEach(function (navEl) {
  navEl.onclick = function () {
    toggleTab(this.id, this.dataset.target);
  };
});

function toggleTab(selectedNav, targetId) {
  var navEls = document.querySelectorAll('#nav li');

  navEls.forEach(function (navEl) {
    if (navEl.id == selectedNav) {
      navEl.classList.add('is-active');
      navEl.setAttribute('aria-selected', 'true');
      navEl.setAttribute('tabindex', '0');
    } else {
      if (navEl.classList.contains('is-active')) {
        navEl.classList.remove('is-active');
      }
    }
  });

  var tabs = document.querySelectorAll('.tab-pane');

  tabs.forEach(function (tab) {
    if (tab.id == targetId) {
      tab.style.display = 'block';
    } else {
      tab.style.display = 'none';
    }
  });
}

function showNewTabMessage() {
  alert('will open in a new tab');
}

let tabs = document.querySelectorAll('.tabs ul li');
const LEFT_ARROW = 'ArrowLeft';
const RIGHT_ARROW = 'ArrowRight';
const ENTER = 'Enter';
const SPACE = 'Space';
const HOME = 'Home';
const END = 'End';
const IS_ACTIVE = 'is-active';

function deactivateTabs() {
  tabs.forEach((tab) => {
    tab.setAttribute('tabindex', '-1');
    tab.setAttribute('aria-selected', 'false');
  });
}

function activateTab(target, direction) {
  if (direction === LEFT_ARROW) {
    target.previousSibling.previousSibling.focus();
  } else if (direction === RIGHT_ARROW) {
    target.nextSibling.nextSibling.focus();
  } else {
    target.focus();
  }
}

tabs.forEach((tab) => {
  tab.addEventListener('keydown', (e) => {
    if (e.code === RIGHT_ARROW && e.target.closest('li').nextSibling.nextSibling) {
      activateTab(e.target.closest('li'), RIGHT_ARROW);
    } else if (e.code === LEFT_ARROW && e.target.closest('li').previousSibling.previousSibling) {
      activateTab(e.target.closest('li'), LEFT_ARROW);
    } else if (e.code === ENTER || e.code === SPACE) {
      e.preventDefault();
      deactivateTabs();
      e.target.click();
    } else if (e.code === HOME) {
      e.preventDefault();
      activateTab(tabs[0]);
    } else if (e.code === END) {
      e.preventDefault();
      activateTab(tabs[tabs.length - 1]);
    }
  });
});
