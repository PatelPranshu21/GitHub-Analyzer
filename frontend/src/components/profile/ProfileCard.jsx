import React from 'react';

const ProfileCard = ({ profile }) => {
  if (!profile) {
    return null;
  }

  return (
    <div className=" bg-white/10
      backdrop-blur-md
      border border-white/20
      rounded-3xl
      shadow-2xl
      p-8
      w-full
      max-w-md
      transition
      duration-300
      hover:scale-105">
      <div className="flex flex-col items-center text-center">
        {/* Avatar */}
        <img
          src={profile.avatar_url}
          alt={`${profile.login || 'User'}'s avatar`}
          className="w-24 h-24 rounded-full border-2 border-zinc-800 group-hover:border-blue-500/50 transition-colors duration-300 object-cover"
        />

        {/* Name and Username */}
        <h2 className="mt-4 text-xl font-bold text-white tracking-tight">
          {profile.name || profile.login}
        </h2>
        <a
          href={profile.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-400 hover:underline mt-1"
        >
          @{profile.login}
        </a>

        {/* Optional Bio */}
        {profile.bio && (
          <p className="mt-3 text-sm text-zinc-400 max-w-xs leading-relaxed">
            {profile.bio}
          </p>
        )}
      </div>

      {/* Metrics Section */}
      <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-zinc-800/60 text-center">
        <div>
          <p className="text-lg font-bold text-white font-mono">
            {profile.public_repos?.toLocaleString() ?? 0}
          </p>
          <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold mt-0.5">
            Repos
          </p>
        </div>
        <div>
          <p className="text-lg font-bold text-white font-mono">
            {profile.followers?.toLocaleString() ?? 0}
          </p>
          <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold mt-0.5">
            Followers
          </p>
        </div>
        <div>
          <p className="text-lg font-bold text-white font-mono">
            {profile.following?.toLocaleString() ?? 0}
          </p>
          <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold mt-0.5">
            Following
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;