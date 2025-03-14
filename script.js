document.addEventListener("DOMContentLoaded", function () {
  const prevButton = document.getElementById("prevLesson");
  const nextButton = document.getElementById("nextLesson");

  function getCurrentPage() {
    const match = window.location.pathname.match(/(\d+)\.html$/);
    return match ? parseInt(match[1], 10) : 1;
  }

  function navigateTo(page) {
    if (page >= 1 && page <= 21) {
      window.location.href = `/progTutor/pages/lessons/${page}.html`;
    }
  }

  prevButton.addEventListener("click", function () {
    navigateTo(getCurrentPage() - 1);
  });

  nextButton.addEventListener("click", function () {
    navigateTo(getCurrentPage() + 1);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const link = document.createElement("link");
  link.rel = "icon";
  link.type = "image/png";
  link.href = "./assets/images/favicon.png"; 

  document.head.appendChild(link);
});
