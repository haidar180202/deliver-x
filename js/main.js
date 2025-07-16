gsap.from("header", { duration: 1, y: -50, opacity: 0, ease: "power3.out" });
gsap.from(".text-content small", { duration: 0.7, x: -20, opacity: 0, delay: 1 });
gsap.from(".text-content h1", { duration: 1, x: -50, opacity: 0, delay: 1.2 });
gsap.from(".text-content p", { duration: 1, x: -30, opacity: 0, delay: 1.4 });

gsap.from(".circle-bg", { duration: 1, scale: 0, opacity: 0, delay: 1.6 });
gsap.from(".delivery-person", { duration: 1, x: 100, opacity: 0, delay: 1.8 });
gsap.from(".burger-card", { duration: 1, y: 50, opacity: 0, delay: 2 });
gsap.from(".delivery-time-card", { duration: 1, y: 50, opacity: 0, delay: 2.2 });

gsap.registerPlugin(ScrollTrigger);
