(function(){
  // Add "Back to top" link at the end of each chapter automatically.
  const main = document.querySelector("main");
  if(!main) return;

  const topLink = document.createElement("p");
  topLink.className = "small";
  topLink.style.marginTop = "22px";
  topLink.innerHTML = '<a href="#top">Back to top</a> • <a href="../toc.html">Table of Contents</a>';
  main.appendChild(topLink);

  // External links open in a new tab (optional).
  document.querySelectorAll('a[href^="http"]').forEach(a=>{
    a.setAttribute("target","_blank");
    a.setAttribute("rel","noopener");
  });
})();