/* ======================
   Hero — Mouse-follow split face

   - Moves clip-path split line with cursor
   - Shifts photo position toward cursor side
   - Fades in the text on the side you move toward
   - Fades out the opposite text
   ====================== */

(function () {
    var face     = document.getElementById('face');
    var photoW   = document.getElementById('photoWrap');
    if (!face || !photoW) return;

    var artHalf  = face.querySelector('.face__art');
    var realHalf = face.querySelector('.face__real');
    var descL    = face.querySelector('.face__side--left .face__desc');
    var descR    = face.querySelector('.face__side--right .face__desc');
    var codeEl   = face.querySelector('.face__code');
    var paintEl  = face.querySelector('.face__paint');

    var target  = 50;   // target split % (50 = center)
    var current = 50;   // smoothed value
    var targetShift  = 0;  // photo horizontal shift target
    var currentShift = 0;  // smoothed shift

    function isDesktop() {
        return window.innerWidth > 768;
    }

    face.addEventListener('mousemove', function (e) {
        if (!isDesktop()) return;

        var rect = face.getBoundingClientRect();
        var pct  = ((e.clientX - rect.left) / rect.width) * 100;

        // Split range: 25% to 75%
        target = Math.max(25, Math.min(75, pct));

        // Photo shift: moves toward cursor (-30px to +30px)
        targetShift = ((pct - 50) / 50) * 30;
    });

    face.addEventListener('mouseleave', function () {
        target = 50;
        targetShift = 0;
    });

    function animate() {
        // Smooth easing
        current      += (target - current) / 10;
        currentShift += (targetShift - currentShift) / 12;

        if (isDesktop()) {
            // --- Clip-path split ---
            if (artHalf)  artHalf.style.clipPath  = 'inset(0 ' + (100 - current) + '% 0 0)';
            if (realHalf) realHalf.style.clipPath  = 'inset(0 0 0 ' + current + '%)';

            // --- Photo shift toward cursor ---
            photoW.style.transform = 'translateX(calc(-50% + ' + currentShift + 'px))';

            // --- Text opacity: cursor-side text becomes clear, other fades ---
            var ratio = (current - 50) / 25; // -1 to +1

            // Moving right → right text (coder) gets clearer
            if (descL) descL.style.opacity = Math.max(0.15, 0.85 + ratio * 0.6);
            if (descR) descR.style.opacity = Math.max(0.15, 0.85 - ratio * 0.6);

            // Code decorations (right side) get brighter when going right
            if (codeEl)  codeEl.style.opacity  = 0.2 - ratio * 0.15;

            // Paint decorations (left side) get brighter when going left
            if (paintEl) paintEl.style.opacity = 0.12 + ratio * 0.1;
        }

        requestAnimationFrame(animate);
    }

    animate();

    // Reset on mobile
    window.addEventListener('resize', function () {
        if (!isDesktop()) {
            if (artHalf)  artHalf.style.clipPath  = '';
            if (realHalf) realHalf.style.clipPath  = '';
            photoW.style.transform = '';
            if (descL) descL.style.opacity = '';
            if (descR) descR.style.opacity = '';
            if (codeEl)  codeEl.style.opacity  = '';
            if (paintEl) paintEl.style.opacity = '';
            target  = 50;
            current = 50;
            targetShift  = 0;
            currentShift = 0;
        }
    });
})();
