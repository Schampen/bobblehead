window.location.replace("#");


if (typeof window.history.replaceState == 'function') {
  history.replaceState({}, '', window.location.href.slice(0, -1));
}
