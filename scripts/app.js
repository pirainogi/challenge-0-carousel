window.addEventListener('DOMContentLoaded', (e) => {
    console.log('DOM fully loaded and parsed');

  const imageContainter = document.querySelector(".hero-image")
  let carouselIndex = 0

  let cycleImages = () => {
    // console.log("1 second");
    let currentImage = document.querySelector(".image")
    currentImage.style.backgroundImage = `url("./images/hero-image-${carouselIndex}.jpg")`
    carouselIndex ++
    if(carouselIndex === 3){carouselIndex = 0}
  }

  setInterval(cycleImages, 1000)

  // function changeImages() {
  //   setTimeout(function(){
  //     let currentImage = document.querySelector(".image")
  //     if (currentImage.style.backgroundImage === `url("./images/hero-image-0.jpg")`){
  //       currentImage.style.backgroundImage = `url("./images/hero-image-1.jpg")`
  //     }
  //     else if (currentImage.style.backgroundImage === `url("./images/hero-image-1.jpg")`){
  //       currentImage.style.backgroundImage = `url("./images/hero-image-2.jpg")`
  //     }
  //     else if (currentImage.style.backgroundImage ===  `url("./images/hero-image-2.jpg")`){
  //       currentImage.style.backgroundImage = `url("./images/hero-image-3.jpg")`
  //     }
  //     else if (currentImage.style.backgroundImage ===  `url("./images/hero-image-3.jpg")`){
  //       currentImage.style.backgroundImage = `url("./images/hero-image-0.jpg")`
  //     }
  //     changeImages()
  //   }, 1000)
  // }

  // changeImages()

}) // end of dom listener
