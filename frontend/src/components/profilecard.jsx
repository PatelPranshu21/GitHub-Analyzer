import React from "react";
import { motion } from "framer-motion";

const ProfileCard = ({ profile }) => {
  if (!profile) return null;

  const {
    avatar_url,
    login,
    name,
    followers,
    following,
    public_repos,
  } = profile;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.03 }}
      className="
        bg-white/10
        backdrop-blur-md
        border border-white/20
        rounded-3xl
        shadow-2xl
        p-8
        w-full
        max-w-md
        text-center
      "
    >
      <img
        src={avatar_url}
        alt={`${login}'s avatar`}
        className="w-28 h-28 rounded-full mx-auto mb-5 border-4 border-white/20"
      />

      <h2 className="text-3xl font-bold text-white">
        {name || login}
      </h2>

      {name && (
        <p className="text-slate-300 mt-2 mb-6">
          @{login}
        </p>
      )}

      <div className="border-t border-white/20 pt-6 grid grid-cols-3 gap-4">
        <div>
          <p className="text-slate-400 text-sm">
            Followers
          </p>
          <p className="text-xl font-bold text-white">
            {followers}
          </p>
        </div>

        <div>
          <p className="text-slate-400 text-sm">
            Following
          </p>
          <p className="text-xl font-bold text-white">
            {following}
          </p>
        </div>

        <div>
          <p className="text-slate-400 text-sm">
            Repositories
          </p>
          <p className="text-xl font-bold text-white">
            {public_repos}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileCard;