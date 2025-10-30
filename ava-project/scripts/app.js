document.addEventListener('DOMContentLoaded', function() {
    const progressBars = document.querySelectorAll('.progress');

    progressBars.forEach(bar => {
        const progress = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = progress;
        }, 300);
    });
});
