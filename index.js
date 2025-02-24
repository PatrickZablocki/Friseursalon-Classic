document.addEventListener("DOMContentLoaded", function() {
    const track = document.querySelector(".review_track");
    const prevBtn = document.getElementById("prevBtn");
    const next = document.getElementById("nextBtn");
    let index = 0;
    const totalReviews = document.querySelectorAll(".review").length;
    const visibleReviews = 3;
    const step = 100

    nextBtn.addEventListener("click", function () {
        if (index < totalReviews - visibleReviews) {
            index ++;
        } else {
            index = 0;
        }
        track.style.transform = `translateX(-${index *step}%)`;
    });

    prevBtn.addEventListener("click", function (){
        if (index > 0) {
            index--;
        } else {
            index = totalReviews - visibleReviews;
        }
        track.style.transform = `translateX(-${index * step}%)`;
    });
});