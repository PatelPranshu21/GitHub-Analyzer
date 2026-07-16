import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export default function ScoreCircle({ score }) {
  const radius = 58;
  const circumference = 2 * Math.PI * radius;

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, score, {
      duration: 2,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [score, count]);

  const getColor = (value) => {
    if (value < 40) return "#ef4444"; // Red
    if (value < 70) return "#eab308"; // Yellow
    return "#22c55e"; // Green
  };

  const color = getColor(score);

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-44 h-44">
        <svg className="w-full h-full -rotate-90">
          {/* Background Circle */}
          <circle
            cx="72"
            cy="72"
            r={radius}
            stroke="currentColor"
            strokeWidth="10"
            fill="transparent"
            className="text-slate-800"
          />

          {/* Animated Progress Circle */}
          <motion.circle
            cx="72"
            cy="72"
            r={radius}
            strokeWidth="10"
            fill="transparent"
            stroke={color}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{
              strokeDashoffset: circumference,
            }}
            animate={{
              strokeDashoffset:
                circumference -
                (circumference * score) / 100,
            }}
            transition={{
              duration: 2,
              ease: "easeOut",
            }}
            style={{
              filter: `drop-shadow(0 0 10px ${color})`,
            }}
          />
        </svg>

        {/* Center Score */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span className="text-4xl font-bold text-white">
            {rounded}
          </motion.span>

          <span className="text-sm text-slate-400 font-medium">
            /100
          </span>
        </div>
      </div>

      {/* Bottom Label */}
      <p className="mt-4 text-sm font-medium tracking-wide text-slate-400 uppercase">
        Portfolio Score
      </p>
    </div>
  );
}