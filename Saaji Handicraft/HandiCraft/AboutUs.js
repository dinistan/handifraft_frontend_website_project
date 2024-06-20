document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.number');
    const speed = 200; // The lower the speed, the faster the count

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            const inc = target / speed;

            if(count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 50);
            } else {
                counter.innerText = target;
            }
        };

        const checkScroll = () => {
            const rect = counter.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                updateCount();
                window.removeEventListener('scroll', checkScroll);
            }
        };

        window.addEventListener('scroll', checkScroll);
        checkScroll();
    });
});