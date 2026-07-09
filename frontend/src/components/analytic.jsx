import React from 'react';

const AnalyticsCard = ({ analytics }) => {
  // Return null to render nothing if the analytics prop is not provided
  if (!analytics) {
    return null;
  }

  const {
    total_stars,
    total_forks,
    most_used_language,
    total_repositories,
    top_repository,
  } = analytics;

  return (
    <div style={{
      border: '1px solid #e1e4e8',
      borderRadius: '6px',
      padding: '16px',
      maxWidth: '320px',
      backgroundColor: '#ffffff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', borderBottom: '1px solid #e1e4e8', paddingBottom: '8px' }}>
        Repository Analytics
      </h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div>
          <span style={{ fontSize: '12px', color: '#586069', display: 'block' }}>Total Repositories</span>
          <strong style={{ fontSize: '18px', color: '#0366d6' }}>{total_repositories}</strong>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <span style={{ fontSize: '12px', color: '#586069', display: 'block' }}>Total Stars</span>
            <strong style={{ fontSize: '16px' }}>{total_stars}</strong>
          </div>
          <div>
            <span style={{ fontSize: '12px', color: '#586069', display: 'block' }}>Total Forks</span>
            <strong style={{ fontSize: '16px' }}>{total_forks}</strong>
          </div>
        </div>

        <div>
          <span style={{ fontSize: '12px', color: '#586069', display: 'block' }}>Most Used Language</span>
          <strong style={{ fontSize: '16px' }}>{most_used_language || 'N/A'}</strong>
        </div>

        <div>
          <span style={{ fontSize: '12px', color: '#586069', display: 'block' }}>Top Repository</span>
          {top_repository ? (
            <div>
              <strong style={{ fontSize: '15px', color: '#0366d6', display: 'block' }}>
                {top_repository.name}
              </strong>
              <span style={{ fontSize: '12px', color: '#586069' }}>
                ⭐ {top_repository.stargazers_count} stars
              </span>
            </div>
          ) : (
            <strong style={{ fontSize: '15px', color: '#586069' }}>N/A</strong>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCard;