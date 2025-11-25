import { useEffect, useRef, useState, useCallback } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

interface ScrollLottieProps {
  animationData: object;
  autoPlayDuration?: number; // Duration in seconds for initial autoplay (in animation time, not real time)
  playbackSpeed?: number; // Playback speed multiplier (0.5 = half speed)
  className?: string;
}

const ScrollLottie = ({
  animationData,
  autoPlayDuration = 3,
  playbackSpeed = 0.5,
  className = ""
}: ScrollLottieProps) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAutoPlayComplete, setIsAutoPlayComplete] = useState(false);
  const [totalFrames, setTotalFrames] = useState(0);
  const autoPlayEndFrameRef = useRef(0);
  const frameCheckIntervalRef = useRef<number | null>(null);
  const scrollStartPositionRef = useRef<number | null>(null);

  // Initialize and handle autoplay
  useEffect(() => {
    if (!lottieRef.current) return;

    const lottie = lottieRef.current;
    const originalDuration = lottie.getDuration() || 7; // Original duration in seconds
    const frames = lottie.getDuration(true) || 210; // Total frames
    const fps = frames / originalDuration; // Frames per second

    setTotalFrames(frames);

    // Calculate the frame where autoplay should stop (3 seconds of animation = 3 * fps frames)
    const autoPlayEndFrame = Math.floor(autoPlayDuration * fps);
    autoPlayEndFrameRef.current = autoPlayEndFrame;

    // Set playback speed
    lottie.setSpeed(playbackSpeed);

    // Play animation
    lottie.play();

    // Check current frame periodically and stop at autoPlayEndFrame
    frameCheckIntervalRef.current = window.setInterval(() => {
      if (!lottieRef.current) return;

      const currentFrame = lottieRef.current.animationItem?.currentFrame || 0;

      if (currentFrame >= autoPlayEndFrame) {
        lottieRef.current.goToAndStop(autoPlayEndFrame, true);

        // Save container position at the moment autoplay completes
        if (containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect();
          scrollStartPositionRef.current = rect.top;
        }

        setIsAutoPlayComplete(true);

        if (frameCheckIntervalRef.current) {
          clearInterval(frameCheckIntervalRef.current);
          frameCheckIntervalRef.current = null;
        }
      }
    }, 16); // ~60fps check rate

    return () => {
      if (frameCheckIntervalRef.current) {
        clearInterval(frameCheckIntervalRef.current);
      }
    };
  }, [animationData, autoPlayDuration, playbackSpeed]);

  // Handle scroll-based animation after autoplay
  useEffect(() => {
    if (!isAutoPlayComplete || !containerRef.current || !lottieRef.current) return;

    const handleScroll = () => {
      if (!containerRef.current || !lottieRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();

      // If scroll start position is not set, use current position
      if (scrollStartPositionRef.current === null) {
        scrollStartPositionRef.current = rect.top;
      }

      const startPosition = scrollStartPositionRef.current;
      const sectionHeight = rect.height;

      // How much user has scrolled from the start position
      const scrolled = startPosition - rect.top;

      // Total scroll range: animation reaches 50% when section leaves viewport
      // Multiply by 2 so full animation requires 2x more scrolling
      const scrollRange = (startPosition + sectionHeight) * 2;

      // Progress from 0 to 1
      let progress = scrolled / scrollRange;
      progress = Math.max(0, Math.min(1, progress));

      // Map progress to frames (starting from autoplay end frame)
      const startFrame = autoPlayEndFrameRef.current;
      const remainingFrames = totalFrames - startFrame;
      const targetFrame = startFrame + (progress * remainingFrames);

      // Go to frame (with subframe for smoothness)
      lottieRef.current.goToAndStop(targetFrame, true);
    };

    // Initial call
    handleScroll();

    // Add scroll listener with passive for performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isAutoPlayComplete, totalFrames]);

  return (
    <div ref={containerRef} className={className}>
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        autoplay={false}
        loop={false}
        className="w-full"
      />
    </div>
  );
};

export default ScrollLottie;
