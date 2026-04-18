import React, { useState } from 'react';
import { useDebounce } from '../hooks/useDebounce';
import { useFetch } from '../hooks/useFetch';
import './Github.css';

function Github() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  
  const url = debouncedSearchTerm 
    ? `https://api.github.com/search/users?q=${debouncedSearchTerm}&per_page=12`
    : null;
  
  const { data, loading, error } = useFetch(url);

  const users = data?.items || [];

  return (
    <div className='github-container'>
      <h1>GitHub User Search</h1>
      
      <div className='search-box'>
        <input
          type='text'
          placeholder='Search GitHub users...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='search-input'
        />
      </div>

      {error && <div className='error-message'>Error: {error}</div>}
      
      {loading && <div className='loading'>Fetching users...</div>}

      {debouncedSearchTerm && !loading && users.length === 0 && (
        <div className='no-results'>No users found for "{debouncedSearchTerm}"</div>
      )}

      <div className='users-grid'>
        {users.map((user) => (
          <div key={user.id} className='user-card'>
            <img src={user.avatar_url} alt={user.login} className='avatar' />
            <h3>{user.login}</h3>
            <p className='user-id'>@{user.login}</p>
            <a
              href={user.html_url}
              target='_blank'
              rel='noopener noreferrer'
              className='profile-link'
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Github;
