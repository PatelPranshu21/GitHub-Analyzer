

import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onSearch(username.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 w-full max-w-xl" style={{ display: 'flex', gap: '8px' }}>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ padding: '8px', fontSize: '16px' }}
      />
      <button 
        type="submit" 
        disabled={!username.trim()}
        style={{ padding: '8px 16px', fontSize: '16px', cursor: 'pointer' }}
      >
        Analyze
      </button>
    </form>
  );
};

export default SearchBar;

