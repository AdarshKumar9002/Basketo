class MoveToTargetSlide {

  static moveSlide(trackElement, currentSlide, targetSlide) {
    MoveToTargetSlide.updateTrackPosition(trackElement, targetSlide);
    MoveToTargetSlide.updateCurrentSlide(currentSlide, targetSlide);
  }

  static updateTrackPosition(trackElement, targetSlide) {
     trackElement.style.transform = `translateX(-${targetSlide.style.left})`;
  }

  static updateCurrentSlide(currentSlide, targetSlide) {
    currentSlide.classList.remove('carousel__slide--current-slide');
    targetSlide.classList.add('carousel__slide--current-slide');    
  }
}

export default MoveToTargetSlide;
