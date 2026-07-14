// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior:"smooth"
        });
    });
});

// Fade in sections
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";
        }
    });
});

sections.forEach(section=>{
    section.style.opacity="0";
    section.style.transform="translateY(40px)";
    section.style.transition="all .8s ease";
    observer.observe(section);
});
