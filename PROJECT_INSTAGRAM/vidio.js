const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.play();
            console.log(1)
        }
        else{
            entry.target.pause();
            console.log(0)
        }
    });
});

const videos = document.querySelectorAll('.vid');
videos.forEach(vid =>{
    observer.observe(vid);
})
