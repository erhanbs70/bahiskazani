// Canlı saat ve tarih (Türkiye saati)
(function () {
  var tz = "Europe/Istanbul";
  var tf = new Intl.DateTimeFormat("tr-TR", { timeZone: tz, hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });
  var df = new Intl.DateTimeFormat("tr-TR", { timeZone: tz, day: "numeric", month: "long", year: "numeric" });
  var wf = new Intl.DateTimeFormat("tr-TR", { timeZone: tz, weekday: "long" });
  function set(sel, html) { document.querySelectorAll(sel).forEach(function (el) { if (el.innerHTML !== html) el.innerHTML = html; }); }
  function tick() {
    var now = new Date(), t = tf.format(now).split(":"), wd = wf.format(now);
    set("[data-time]", t[0] + "<span>:</span>" + t[1] + "<span>:</span>" + t[2]);
    set("[data-time-short]", t[0] + ":" + t[1]);
    set("[data-date]", df.format(now));
    set("[data-weekday]", wd.charAt(0).toLocaleUpperCase("tr-TR") + wd.slice(1));
  }
  tick();
  setInterval(tick, 1000);
})();

// Sayfadaki ilk giriş butonu ekrandan çıkınca üst barda giriş butonunu göster
(function () {
  var first = document.querySelector("main .btn-go");
  if (!first || !("IntersectionObserver" in window)) return;
  new IntersectionObserver(function (e) {
    document.body.classList.toggle("scrolled", !e[0].isIntersecting && e[0].boundingClientRect.top < 0);
  }).observe(first);
})();
