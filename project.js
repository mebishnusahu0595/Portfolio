// AOS Animation initialization
document.addEventListener('DOMContentLoaded', () => {
    const projects = document.querySelectorAll('.project');
    
    // Adding scrolling animation with AOS (Animate On Scroll)
    window.addEventListener('scroll', () => {
        projects.forEach(project => {
            const rect = project.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                project.classList.add('aos-animate');
            }
        });
    });
});
