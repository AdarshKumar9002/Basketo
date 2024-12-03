class UpdateCarouselIndicator {
  static updateDot(currentDot, targetDot) {
    currentDot.classList.remove('carousel__indicator-btn--active');
    targetDot.classList.add('carousel__indicator-btn--active');
  }

  static updateNextDot() {
    const CURRENT_ACTIVE_DOT = document.querySelector(
      '.carousel__indicator-btn--active',
    );
    const NEXT_ACTIVE_DOT = CURRENT_ACTIVE_DOT.nextElementSibling;
    UpdateCarouselIndicator.updateDot(CURRENT_ACTIVE_DOT, NEXT_ACTIVE_DOT);
  }

  static updatePreviousDot() {
    const CURRENT_ACTIVE_DOT = document.querySelector(
      '.carousel__indicator-btn--active',
    );
    const PREVIOUS_ACTIVE_DOT = CURRENT_ACTIVE_DOT.previousElementSibling;
    UpdateCarouselIndicator.updateDot(CURRENT_ACTIVE_DOT, PREVIOUS_ACTIVE_DOT);
  }
}

export default UpdateCarouselIndicator;
