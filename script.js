document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
        if(burger.classList.contains('toggle')) {
            burger.children[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
            burger.children[1].style.opacity = '0';
            burger.children[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
        } else {
            burger.children[0].style.transform = 'none';
            burger.children[1].style.opacity = '1';
            burger.children[2].style.transform = 'none';
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if(nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
                burger.children[0].style.transform = 'none';
                burger.children[1].style.opacity = '1';
                burger.children[2].style.transform = 'none';
            }
        });
    });

    // Custom Cursor
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    
    let posX = 0, posY = 0, mouseX = 0, mouseY = 0;

    gsap.to({}, 0.016, {
        repeat: -1,
        onRepeat: function() {
            posX += (mouseX - posX) / 9;
            posY += (mouseY - posY) / 9;
            gsap.set(follower, {
                css: { left: posX - 20, top: posY - 20 }
            });
            gsap.set(cursor, {
                css: { left: mouseX, top: mouseY }
            });
        }
    });

    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Expand cursor on hover
    const links = document.querySelectorAll('a, .btn, .portfolio-item, .skill-box');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.classList.add('active');
            follower.classList.add('active');
        });
        link.addEventListener('mouseleave', () => {
            cursor.classList.remove('active');
            follower.classList.remove('active');
        });
    });

    // Magnetic Buttons
    const magnets = document.querySelectorAll('.btn');
    magnets.forEach(magnet => {
        magnet.addEventListener('mousemove', function(e) {
            const position = magnet.getBoundingClientRect();
            const x = e.pageX - position.left - position.width / 2;
            const y = e.pageY - position.top - position.height / 2;
            
            gsap.to(magnet, {
                x: x * 0.3,
                y: y * 0.3,
                duration: 0.5,
                ease: "power2.out"
            });
        });
        
        magnet.addEventListener('mouseleave', function() {
            gsap.to(magnet, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: "power2.out"
            });
        });
    });

    // Vanilla Tilt
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll(".glass-card"), {
            max: 10,
            speed: 400,
            glare: true,
            "max-glare": 0.2,
        });
    }

    // GSAP Scroll Animations
    gsap.registerPlugin(ScrollTrigger);

    // Hero Animations
    gsap.from(".title", {
        duration: 1.2,
        y: 100,
        opacity: 0,
        ease: "power4.out",
        delay: 0.2
    });
    
    gsap.from(".subtitle", {
        duration: 1,
        x: -50,
        opacity: 0,
        ease: "power3.out",
        delay: 0.5
    });

    gsap.from(".profession", {
        duration: 1,
        opacity: 0,
        ease: "power3.out",
        delay: 0.7
    });

    gsap.from(".cta-buttons a", {
        duration: 0.8,
        y: 30,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out",
        delay: 1
    });

    gsap.from(".image-wrapper", {
        duration: 1.5,
        scale: 0.8,
        opacity: 0,
        ease: "power4.out",
        delay: 0.5
    });

    // Scroll Triggered Animations for Sections
    const sections = ['about', 'portfolio', 'contact'];
    
    sections.forEach(sec => {
        gsap.from(`#${sec} .section-title h2`, {
            scrollTrigger: {
                trigger: `#${sec}`,
                start: "top 80%",
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });
    });

    // Skills stagger
    gsap.from(".skill-box", {
        scrollTrigger: {
            trigger: ".skills-container",
            start: "top 85%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
    });

    // Portfolio stagger
    gsap.from(".portfolio-item", {
        scrollTrigger: {
            trigger: ".portfolio-grid",
            start: "top 85%",
        },
        scale: 0.9,
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
    });
});
