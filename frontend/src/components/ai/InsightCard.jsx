import { motion } from "framer-motion";

export default function InsightCard({
  title,
  items,
  icon: Icon,
  color = "green",
}) {
  const colorStyles = {
    green: {
      iconBg: "bg-emerald-500/10",
      iconText: "text-emerald-400",
      dot: "bg-emerald-400",
      border: "border-emerald-500/20",
      glow: "hover:shadow-emerald-500/20",
    },
    orange: {
      iconBg: "bg-orange-500/10",
      iconText: "text-orange-400",
      dot: "bg-orange-400",
      border: "border-orange-500/20",
      glow: "hover:shadow-orange-500/20",
    },
    red: {
      iconBg: "bg-red-500/10",
      iconText: "text-red-400",
      dot: "bg-red-400",
      border: "border-red-500/20",
      glow: "hover:shadow-red-500/20",
    },
    blue: {
      iconBg: "bg-cyan-500/10",
      iconText: "text-cyan-400",
      dot: "bg-cyan-400",
      border: "border-cyan-500/20",
      glow: "hover:shadow-cyan-500/20",
    },
    purple: {
      iconBg: "bg-violet-500/10",
      iconText: "text-violet-400",
      dot: "bg-violet-400",
      border: "border-violet-500/20",
      glow: "hover:shadow-violet-500/20",
    },
  };

  const style = colorStyles[color] || colorStyles.green;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className={`
        p-6
        rounded-3xl
        bg-slate-900/60
        backdrop-blur-xl
        border
        ${style.border}
        shadow-xl
        transition-all
        duration-300
        ${style.glow}
      `}
    >
      <div className="flex items-center gap-3 mb-5">

        <div
          className={`
            p-3
            rounded-xl
            ${style.iconBg}
            ${style.iconText}
          `}
        >
          <Icon size={22} />
        </div>

        <h3 className="text-lg font-semibold text-white">
          {title}
        </h3>

      </div>

      <ul className="space-y-4">

        {items?.map((item, index) => (

          <motion.li
            key={index}
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: index * 0.08,
            }}
            className="flex items-start gap-3 text-slate-300"
          >

            <span
              className={`
                mt-2
                w-2
                h-2
                rounded-full
                ${style.dot}
                flex-shrink-0
              `}
            />

            <span className="leading-relaxed">
              {item}
            </span>

          </motion.li>

        ))}

      </ul>
    </motion.div>
  );
}