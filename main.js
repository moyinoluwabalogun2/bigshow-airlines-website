const carousel = document.getElementById('carousel');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        let scrollAmount = 0;

        nextBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: carousel.clientWidth, behavior: 'smooth' });
            scrollAmount += carousel.clientWidth;
            if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
                scrollAmount = 0;
                carousel.scrollTo({ left: 0, behavior: 'smooth' });
            }
        });

        prevBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: -carousel.clientWidth, behavior: 'smooth' });
            scrollAmount -= carousel.clientWidth;
            if (scrollAmount < 0) {
                scrollAmount = carousel.scrollWidth - carousel.clientWidth;
                carousel.scrollTo({ left: carousel.scrollWidth, behavior: 'smooth' });
            }
        });