document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const navMenu = document.querySelector('.nav-menu');

    if(menuBtn && navMenu) {
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Toggle body scroll when menu is open
            if(navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
                document.body.style.overflowX = 'hidden';
            }
        });
    }

    // Scroll Parallax Effect
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const bgText = document.querySelector('.huge-bg-text');
        const heroImages = document.querySelectorAll('.hero-image');
        
        if (bgText) {
            // 背景文字往下捲動時產生視差 (向下移動)
            bgText.style.transform = `translate(-50%, calc(-50% + ${scrollY * 0.4}px))`;
        }
        
        heroImages.forEach(img => {
            // 機器人/美食圖片往上捲動產生視差 (向上浮動)
            img.style.transform = `translateY(${scrollY * -0.15}px)`;
        });
    });
});
