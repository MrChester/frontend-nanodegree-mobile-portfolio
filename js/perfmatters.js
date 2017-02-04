// Measuring the Critical Rendering Path with Navigation Timing
// https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp

 function measureCRP() {
        var t = window.performance.timing,
          interactive = t.domInteractive - t.domLoading,
          dcl = t.domContentLoadedEventStart - t.domLoading,
          complete = t.domComplete - t.domLoading;
        var stats = document.getElementById('crp-stats');
        stats.textContent = 'Interactive: ' + interactive + 'ms. ' +
            'DCL: ' + dcl + 'ms. Complete: ' + complete + 'ms.';
      }

window.addEventListener("load", function(event) {
  logCRP();
});
