// main.js - Better Care SA mobile navigation

document.addEventListener('DOMContentLoaded', function () {
  // 在当前页面里找到 header 里的 nav 和 按钮
  const header = document.querySelector('.site-header');
  if (!header) return;

  const navToggle = header.querySelector('.nav-toggle');
  const nav = header.querySelector('.main-nav');

  if (!navToggle || !nav) return;

  // 点击 ☰ 展开/收起导航
  navToggle.addEventListener('click', function () {
    nav.classList.toggle('nav-open');
  });

  // 点击任意菜单链接后，把菜单收起来（防止手机端菜单一直挂着）
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('nav-open');
    });
  });

  // 当视窗变宽（从手机切回电脑）时，顺手关掉 nav-open，避免样式错乱
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      nav.classList.remove('nav-open');
    }
  });
});
