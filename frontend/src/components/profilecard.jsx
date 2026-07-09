import React from 'react';

const ProfileCard = ({ profile }) => {
  // If no profile data is provided, return null to render nothing
  if (!profile) {
    return null;
  }

  const { avatar_url, login, name, followers, following, public_repos } = profile;

  return (
    <div style={{
      border: '1px solid #e1e4e8',
      borderRadius: '6px',
      padding: '16px',
      maxWidth: '320px',
      backgroundColor: '#ffffff',
      textAlign: 'center',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <img 
        src={avatar_url} 
        alt={`${login}'s avatar`} 
        style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '12px' }} 
      />
      
      <h2 style={{ margin: '0 0 4px 0', fontSize: '20px' }}>{name || login}</h2>
      {name && <p style={{ color: '#586069', margin: '0 0 16px 0', fontSize: '14px' }}>@{login}</p>}

      <div style={{ display: 'flex', justifyContent: 'space-around', borderTop: '1px solid #e1e4e8', paddingTop: '16px' }}>
        <div>
          <span style={{ fontSize: '12px', color: '#586069', display: 'block' }}>Followers</span>
          <strong style={{ fontSize: '16px' }}>{followers}</strong>
        </div>
        <div>
          <span style={{ fontSize: '12px', color: '#586069', display: 'block' }}>Following</span>
          <strong style={{ fontSize: '16px' }}>{following}</strong>
        </div>
        <div>
          <span style={{ fontSize: '12px', color: '#586069', display: 'block' }}>Public Repos</span>
          <strong style={{ fontSize: '16px' }}>{public_repos}</strong>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;