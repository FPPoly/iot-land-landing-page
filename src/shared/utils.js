async function includeHTML() {
  const header = document.querySelector("header.main-header");
  const footer = document.querySelector("footer.main-footer");

  if (header) {
    const res = await fetch("/src/shared/header.html");
    header.innerHTML = await res.text();
  }

  if (footer) {
    const res = await fetch("/src/shared/footer.html");
    footer.innerHTML = await res.text();
  }
}

document.addEventListener("DOMContentLoaded", includeHTML);
