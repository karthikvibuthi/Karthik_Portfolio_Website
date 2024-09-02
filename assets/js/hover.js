document.addEventListener("DOMContentLoaded", function() {
    const hoverArea = document.getElementById('hover-area');
    const hoverImage = document.getElementById('hover-image');

    hoverArea.addEventListener('mouseenter', function(event) {
        hoverImage.style.display = 'block';
        hoverImage.style.top = event.clientY + 'px';
        hoverImage.style.left = event.clientX + 'px';
    });

    hoverArea.addEventListener('mousemove', function(event) {
        hoverImage.style.top = event.clientY + 'px';
        hoverImage.style.left = event.clientX + 'px';
    });

    hoverArea.addEventListener('mouseleave', function() {
        hoverImage.style.display = 'none';
    });
});
