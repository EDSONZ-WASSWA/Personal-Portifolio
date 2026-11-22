import { useState, useEffect } from 'react';

const USERNAME = 'EDSONZ-WASSWA';

const getJson = async (res) => {
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return res.json();
};

const safeFetch = (url) =>
  fetch(url)
    .then(getJson)
    .catch(() => null);

export const useGitHub = () => {
  const [state, setState] = useState({
    status: 'loading',
    profile: null,
    orgs: [],
    repos: [],
    contributions: null,
  });

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      const [profile, orgs, repos, contribData] = await Promise.all([
        safeFetch(`https://api.github.com/users/${USERNAME}`),
        safeFetch(`https://api.github.com/users/${USERNAME}/orgs`),
        safeFetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=pushed`),
        safeFetch(`https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`),
      ]);

      if (cancelled) return;

      setState({
        status: profile || contribData ? 'success' : 'error',
        profile,
        orgs: Array.isArray(orgs) ? orgs : [],
        repos: Array.isArray(repos) ? repos : [],
        contributions: contribData,
      });
    };

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return { ...state, username: USERNAME };
};
