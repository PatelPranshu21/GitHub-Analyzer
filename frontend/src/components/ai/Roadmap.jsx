import { motion } from "framer-motion";

export default function Roadmap({ steps = [] }) {
  return (
    <div className="relative space-y-6">

      {steps?.map((step, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.4,
            delay: index * 0.12,
          }}
          whileHover={{
            x: 8,
          }}
          className="flex items-start gap-5"
        >

          {/* Timeline */}

          <div className="flex flex-col items-center">

            <motion.div
              whileHover={{
                scale: 1.15,
                rotate: 5,
              }}
              className="
                w-10
                h-10
                rounded-full
                bg-gradient-to-br
                from-violet-500
                to-indigo-600
                text-white
                font-bold
                flex
                items-center
                justify-center
                shadow-lg
                shadow-violet-500/30
                border
                border-violet-400/30
                z-10
              "
            >
              {index + 1}
            </motion.div>

            {index !== steps.length - 1 && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: 60 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.4,
                }}
                className="
                  w-[2px]
                  bg-gradient-to-b
                  from-violet-500
                  via-indigo-500
                  to-slate-700
                "
              />
            )}

          </div>

          {/* Step Card */}

          <motion.div
            whileHover={{
              scale: 1.02,
            }}
            className="
              flex-1
              rounded-2xl
              border
              border-slate-700/60
              bg-slate-900/60
              backdrop-blur-xl
              p-5
              shadow-xl
              transition-all
              duration-300
              hover:border-violet-500/40
              hover:shadow-violet-500/10
            "
          >

            <h4 className="text-sm font-semibold text-violet-400 mb-2">
              Step {index + 1}
            </h4>

            <p className="text-slate-300 leading-relaxed">
              {step}
            </p>

          </motion.div>

        </motion.div>

      ))}

    </div>
  );
}