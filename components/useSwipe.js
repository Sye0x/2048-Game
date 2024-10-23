import { PanResponder } from "react-native";

const useSwipe = (onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown) => {
  let startX = 0;
  let startY = 0;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: (evt, gestureState) => {
      startX = gestureState.x0;
      startY = gestureState.y0;
    },
    onPanResponderRelease: (evt, gestureState) => {
      const deltaX = gestureState.moveX - startX;
      const deltaY = gestureState.moveY - startY;

      const absDeltaX = Math.abs(deltaX);
      const absDeltaY = Math.abs(deltaY);

      // Determine swipe direction based on the distance moved
      if (absDeltaX > absDeltaY) {
        // Horizontal swipe
        if (deltaX > 0) {
          onSwipeRight();
        } else {
          onSwipeLeft();
        }
      } else {
        // Vertical swipe
        if (deltaY > 0) {
          onSwipeDown();
        } else {
          onSwipeUp();
        }
      }
    },
  });

  return panResponder;
};

export default useSwipe;
