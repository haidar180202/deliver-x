gsap.from("header", { duration: 1, y: -50, opacity: 0, ease: "power3.out" });
gsap.from(".text-content small", { duration: 0.7, x: -20, opacity: 0, delay: 1 });
gsap.from(".text-content h1", { duration: 1, x: -50, opacity: 0, delay: 1.2 });
gsap.from(".text-content p", { duration: 1, x: -30, opacity: 0, delay: 1.4 });

gsap.from(".circle-bg", { duration: 1, scale: 0, opacity: 0, delay: 1.6 });
gsap.from(".delivery-person", { duration: 1, x: 100, opacity: 0, delay: 1.8 });
gsap.from(".burger-card", { duration: 1, y: 50, opacity: 0, delay: 2 });
gsap.from(".delivery-time-card", { duration: 1, y: 50, opacity: 0, delay: 2.2 });

gsap.registerPlugin(ScrollTrigger);

 document.addEventListener("DOMContentLoaded", () => {
    const cards = gsap.utils.toArray(".journey-card");
    const batchSize = 2;
    let currentBatch = 0;

    // Inisialisasi posisi dan tampilan kartu semua: sembunyikan dengan opacity 0 dan translateY 50px
    gsap.set(cards, { opacity: 0, y: 50, pointerEvents: "none" });

    // Fungsi tampilkan batch kartu sesuai indeks batch
    function showBatch(batchIndex) {
      cards.forEach((card, i) => {
        if (i >= batchIndex && i < batchIndex + batchSize) {
          // munculkan kartu batch ini dengan animasi
          gsap.to(card, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            pointerEvents: "auto",
            ease: "power3.out",
            stagger: 0.15,
          });
        } else {
          // sembunyikan kartu lain
          gsap.to(card, {
            opacity: 0,
            y: 50,
            duration: 0.4,
            pointerEvents: "none",
            ease: "power3.out",
          });
        }
      });
    }

    // Tampilkan batch pertama saat load
    showBatch(currentBatch);

    // Kontrol scroll (wheel) pada container .our-journey untuk navigasi batch kartu
    const container = document.querySelector(".our-journey");
    let scrollTimeout;

    container.addEventListener("wheel", (e) => {
      e.preventDefault();
      if (scrollTimeout) return; // throttle scroll supaya animasi selesai dulu

      if (e.deltaY > 0) {
        // scroll ke bawah, next batch jika ada
        if (currentBatch + batchSize < cards.length) {
          currentBatch += batchSize;
          showBatch(currentBatch);
        }
      } else {
        // scroll ke atas, prev batch jika ada
        if (currentBatch - batchSize >= 0) {
          currentBatch -= batchSize;
          showBatch(currentBatch);
        }
      }

      scrollTimeout = setTimeout(() => {
        scrollTimeout = null;
      }, 700);
    }, { passive: false });
  });