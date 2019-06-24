window.addEventListener('DOMContentLoaded', (e) => {
    console.log('DOM fully loaded and parsed');

  const imageContainter = document.querySelector(".hero-image")

  carousel = [
    "./images/hero-image-0.jpg",
    "./images/hero-image-1.jpg",
    "./images/hero-image-2.jpg",
    "./images/hero-image-3.jpg",
  ]


  function changeImages() {
    setTimeout(function (){
      console.log("1 second");
      let currentImage = document.querySelector(".image")

      // for (let j = 0; j<4; j++){
      //   currentImage.style.backgroundImage = `url("${carousel[j]}")`
      //   if(j === 3) j = 0
      // }
      if (currentImage.style.backgroundImage === `url("./images/hero-image-0.jpg")`){
        currentImage.style.backgroundImage = `url("./images/hero-image-1.jpg")`
      }
      else if (currentImage.style.backgroundImage === `url("./images/hero-image-1.jpg")`){
        currentImage.style.backgroundImage = `url("./images/hero-image-2.jpg")`
      }
      else if (currentImage.style.backgroundImage ===  `url("./images/hero-image-2.jpg")`){
        currentImage.style.backgroundImage = `url("./images/hero-image-3.jpg")`
      }
      else if (currentImage.style.backgroundImage ===  `url("./images/hero-image-3.jpg")`){
        currentImage.style.backgroundImage = `url("./images/hero-image-0.jpg")`
      }
      // let currentImage = document.querySelector(".image")
      changeImages();
    }, 1000)
  }

  changeImages()

}) // end of dom listener
