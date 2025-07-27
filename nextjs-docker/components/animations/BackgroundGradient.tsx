import { cn } from "../../utils/animationUtils";
import React from "react";
import { motion } from "motion/react";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
  color = "rgb(99,102,241)",
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
  color?: string;
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };

  // Generate gradient colors based on the prop color
  const generateGradientStyle = (baseOpacity: number = 1) => {
    // Parse RGB string format like "rgb(251,176,94)"
    const parseRgb = (rgbString: string) => {
      const match = rgbString.match(/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/);
      return match ? {
        r: parseInt(match[1], 10),
        g: parseInt(match[2], 10),
        b: parseInt(match[3], 10)
      } : null;
    };

    const rgb = parseRgb(color);
    if (!rgb) return { background: 'transparent' };

    const { r, g, b } = rgb;
    return {
      background: `radial-gradient(circle farthest-side at 0 100%, rgba(${r}, ${g}, ${b}, ${baseOpacity * 0.8}), transparent), radial-gradient(circle farthest-side at 100% 0, rgba(${r}, ${g}, ${b}, ${baseOpacity * 0.6}), transparent), radial-gradient(circle farthest-side at 100% 100%, rgba(${r}, ${g}, ${b}, ${baseOpacity * 0.4}), transparent), radial-gradient(circle farthest-side at 0 0, rgba(${r}, ${g}, ${b}, ${baseOpacity * 0.7}), #141316)`
    };
  };
  return (
    <div className={cn("relative p-[4px] group", containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
          ...generateGradientStyle(0.6),
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl  transition duration-500 will-change-transform"
        )}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
          ...generateGradientStyle(1.0),
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] will-change-transform"
        )}
      />

      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
