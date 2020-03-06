(function() {

    function makeSlideshow(slides) {
        // const slides = document.getElementById(slidesID)
        const slidesInner = slides.querySelector('.slides-inner')
        const images = slidesInner.querySelectorAll('img')

        // ---------------------------------------------------
        //Set up buttons
        const nextButton = slides.querySelector('.ms-next-button')
        const prevButton = slides.querySelector('.ms-prev-button')

        if (nextButton != null) {
            nextButton.addEventListener('click', function(e) {
                e.preventDefault()
                clearInterval()
                setInterval(nextSlide, delay)
                nextSlide()
            })
        }

        if(prevButton != null) {
            prevButton.addEventListener('click', function(e) {
                e.preventDefault()
                clearInterval()
                setInterval(prevSlide, delay)
                prevSlide()
            })
        }

        // ---------------------------------------------------
        //Set up indicators
        const indicatorContainer = slides.querySelector('.ms-slide-indicators')
        const indicators = []
        if (indicatorContainer != null) {
            for (let i=0; i < images.length; i+=1) {
                const li = document.createElement("li") // generates new <li></li> item
                indicatorContainer.appendChild(li)
                indicators.push(li)
            }
        }

        // ---------------------------------------------------
        // Set up timer
        const delay = parseInt(slides.dataset.delay)
        const transition = parseInt(slides.dataset.transition)
        slidesInner.style.transition = `$(transition)ms`

        const slidesWidth = slides.clientWidth

        let index = 0

        let interval = setInterval(nextSlide, delay)
        // clearInterval(interval)


        function nextSlide() {
            //check index of slide
            index += 1
            //make sure it doesn't go out of range
            if (index === images.length) {
                index = 0
            }
            showSlide()

        }

        function prevSlide() {
            //check index of slide
            index -= 1
            //make sure it doesn't go out of range
            if (index < 0) {
                index = images.length - 1
            }
            showSlide()
        }

        function showSlide() {
            // move slides
            // CSS - transform: translate3d( 0, 0, 0);
            slidesInner.style.transform = `translate3d(${index * -slidesWidth}px, 0, 0)`

        }

    } //end makeSlideshow

    const slideshows = document.querySelectorAll('.ms-slideshow')
    for (let i= 0; i<slideshows.length; i+=1) {
        makeSlideshow(slideshows[i])
    }

})() // IIFE (immediately invoked function expression)


