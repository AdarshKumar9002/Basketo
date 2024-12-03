import CarouselNavigation from './carousel-navigation';

class MobileSwipeControl {
  constructor() {
    this.startingPosition = 0;
    this.currentPosition = 0;
  }

  getOriginalPosition(event) {
    this.startingPosition = event.touches[0].clientX;
  }

  getCurrentPosition(event) {
    this.currentPosition = event.touches[0].clientX;
  }

  moveSlide() {
    const positionDifference = this.currentPosition - this.startingPosition;

    if (positionDifference > 50) {
      CarouselNavigation.moveToPrevSlide();
    }
    if (positionDifference < 0 && positionDifference < -50) {
      CarouselNavigation.moveToNextSlide();
    }
  }
}

export default MobileSwipeControl;
