/* Preview hosts answer /cdn-cgi/image/ with a 404 before the worker can
   rewrite it. Drop that srcset and load the uploaded file. */
document.addEventListener(
  'error',
  function (event) {
    var node = event.target;
    if (!node || node.tagName !== 'IMG') return;
    if (node.getAttribute('data-cf-fallback') === '1') return;
    var current = node.currentSrc || node.src || '';
    if (current.indexOf('/cdn-cgi/image/') === -1) return;
    var path = current;
    var search = '';
    try {
      var parsed = new URL(current, location.origin);
      path = parsed.pathname;
      search = parsed.search;
    } catch (e) {
      return;
    }
    var marker = '/cdn-cgi/image/';
    var slash = path.indexOf('/', marker.length);
    if (slash < 0) return;
    var asset = path.slice(slash);
    if (asset.charAt(0) !== '/' || asset.charAt(1) === '/' || asset.indexOf('..') !== -1) return;
    node.setAttribute('data-cf-fallback', '1');
    node.srcset = '';
    node.src = asset + search;
  },
  true,
);
