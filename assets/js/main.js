document.addEventListener("DOMContentLoaded", function () {
    let observer = new IntersectionObserver(
      function (entries) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("zoom-in-active"); 
            observer.unobserve(entry.target); 
          }
        });
      },
      { threshold: 0.5 } 
    );
  
    let target = document.querySelector(".footer-logo");
    if (target) {
      observer.observe(target);
    }
  });
  