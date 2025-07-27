import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Lottie from 'lottie-react';
import { useRouter } from 'next/router';
import { useScrollSection } from './useScrollSection';
import shrinkLogoAnimation from '../public/shrink-logo.json';
import growLogoAnimation from '../public/grow-logo.json';

interface DynamicLogoProps {
  className?: string;
}

const DynamicLogo: React.FC<DynamicLogoProps> = ({ className }) => {
  const { isCompact, isAnimating, setIsAnimating } = useScrollSection();
  const [showGrowAnimation, setShowGrowAnimation] = useState(true);
  const growLottieRef = useRef<any>(null);
  const shrinkLottieRef = useRef<any>(null);
  const router = useRouter();
  const initialized = useRef(false);
  const lastCompactState = useRef(false);

  // Only show dynamic logo on homepage
  const isHomepage = router.pathname === '/';

  // Initialize grow animation on page load
  useEffect(() => {
    if (isHomepage && !initialized.current && growLottieRef.current) {
      // Start with grow animation on final frame (full logo)
      growLottieRef.current.goToAndStop(0, true);
      growLottieRef.current.play();
      initialized.current = true;
      console.log('Initialized with grow animation on final frame');
    }
  }, [isHomepage, showGrowAnimation]);

  // Reset initialization when leaving homepage to ensure proper reinitialization when returning
  useEffect(() => {
    if (!isHomepage) {
      initialized.current = false;
      lastCompactState.current = false;
      setShowGrowAnimation(true); // Reset to grow animation for next homepage visit
    }
  }, [isHomepage]);

  // Handle state changes from the scroll hook
  useEffect(() => {
    if (!isHomepage || lastCompactState.current === isCompact || isAnimating) return;

    console.log('Logo transition triggered:', { 
      from: lastCompactState.current ? 'compact' : 'full', 
      to: isCompact ? 'compact' : 'full'
    });
    
    setIsAnimating(true);
    lastCompactState.current = isCompact;
    
    if (isCompact) {
      // Transitioning to compact: use shrink animation
      setShowGrowAnimation(false);
      setTimeout(() => {
        if (shrinkLottieRef.current) {
          shrinkLottieRef.current.goToAndStop(0, true);
          shrinkLottieRef.current.play();
        }
      }, 10);
    } else {
      // Transitioning to full: use grow animation
      setShowGrowAnimation(true);
      setTimeout(() => {
        if (growLottieRef.current) {
          growLottieRef.current.goToAndStop(0, true);
          growLottieRef.current.play();
        }
      }, 10);
    }
  }, [isCompact, isAnimating, isHomepage, setIsAnimating]);

  const handleGrowAnimationComplete = useCallback(() => {
    console.log('Grow animation completed - staying on final frame');
    setIsAnimating(false);
  }, [setIsAnimating]);

  const handleShrinkAnimationComplete = useCallback(() => {
    console.log('Shrink animation completed - staying on final frame');
    setIsAnimating(false);
  }, [setIsAnimating]);

  // If not on homepage, show static primary logo
  if (!isHomepage) {
    return (
      <Link href="/" className={`flex items-center space-x-3 ${className || ''}`}>
        <Image 
          src="/images/blaize-logo__primary.svg" 
          alt="Blaize" 
          width={118.5} 
          height={40}
          priority
        />
      </Link>
    );
  }

  return (
    <Link href="/" className={`flex items-center space-x-3 ${className || ''}`}>
      <div className="relative flex items-center justify-center" style={{ width: '118.5px', height: '40px' }}>
        
        {/* Grow Animation (Full Logo) */}
        {showGrowAnimation && (
          <Lottie
            lottieRef={growLottieRef}
            animationData={growLogoAnimation}
            autoplay={false}
            loop={false}
            onComplete={handleGrowAnimationComplete}
            className="absolute inset-0"
            style={{ width: '100%', height: '100%' }}
          />
        )}

        {/* Shrink Animation (Compact Logo) */}
        {!showGrowAnimation && (
          <Lottie
            lottieRef={shrinkLottieRef}
            animationData={shrinkLogoAnimation}
            autoplay={false}
            loop={false}
            onComplete={handleShrinkAnimationComplete}
            className="absolute inset-0"
            style={{ width: '100%', height: '100%' }}
          />
        )}
      </div>
    </Link>
  );
};

export default DynamicLogo; 