import CarouselNavigation from './carousel-navigation';

class DesktopSwipeControl {
  constructor() {
    this.startingPosition = 0;
    this.currentPosition = 0;
    this.isDragging = false;
  }

  getOriginalPosition(event) {
    this.isDragging = true;
    this.startingPosition = event.clientX;
    
  }

  getCurrentPosition(event) {
    if(!this.isDragging) return;
    
    this.currentPosition = event.clientX;

  }

  moveSlide() {
    if(!this.isDragging) return;
    this.isDragging= false;
    const positionDifference = this.currentPosition - this.startingPosition;


    if (positionDifference > 80) {
      CarouselNavigation.moveToPrevSlide();
    }
    if (positionDifference < 0 && positionDifference < -80) {
      CarouselNavigation.moveToNextSlide();
    }

  }
}

export default DesktopSwipeControl;
