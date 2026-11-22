import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, BookOpen, ExternalLink, Building2, Calendar } from 'lucide-react';
import { useGitHub } from '../../hooks/useGitHub.js';

const LEVEL_CLASSES = [
  'bg-foreground/10',
  'bg-accent/30',
  'bg-accent/50',
  'bg-accent/75',
  'bg-accent',
];

const LANG_COLORS = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Rust: '#dea584',
  Python: '#3572A5',
  Java: '#b07219',
  Kotlin: '#A97BFF',
  C: '#555555',
  'C++': '#f34b7d',
  Shell: '#89e051',
  HTML: '#e34c26',
  CSS: '#563d7c',
};

const buildWeeks = (days) => {
  if (!days?.length) return [];
  const weeks = [];
  let week = new Array(new Date(`${days[0].date}T00:00:00`).getDay()).fill(null);
  days.forEach((day) => {
    week.push(day);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  });
  if (week.length) weeks.push(week);
  return weeks;
};

const formatDay = (date) =>
  new Date(`${date}T00:00:00`).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

const ContributionGraph = ({ contributions }) => {
  const weeks = useMemo(
    () => buildWeeks(contributions?.contributions),
    [contributions]
  );
  const total = contributions?.total?.lastYear;

  if (!weeks.length) {
    return (
      <p className="text-foreground/40 font-mono text-xs uppercase tracking-widest">
        Contribution data unavailable —{' '}
        <a
          href="https://github.com/EDSONZ-WASSWA"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          view it on GitHub
        </a>
      </p>
    );
  }

  const monthLabels = weeks.map((week, i) => {
    const first = week.find(Boolean);
    if (!first) return '';
    const date = new Date(`${first.date}T00:00:00`);
    const prev = i > 0 ? weeks[i - 1].find(Boolean) : null;
    const prevDate = prev ? new Date(`${prev.date}T00:00:00`) : null;
    if (!prevDate || prevDate.getMonth() !== date.getMonth()) {
      return date.toLocaleString('en-US', { month: 'short' });
    }
    return '';
  });

  return (
    <div>
      <div className="flex items-baseline justify-between gap-6 mb-6">
        <h4 className="text-[10px] font-mono uppercase tracking-[0.4em] text-accent/60">Contribution activity</h4>
        {total != null && (
          <p className="text-[10px] font-mono uppercase tracking-widest text-foreground/40">
            <span className="text-accent font-bold">{total}</span> in the last year
          </p>
        )}
      </div>

      <div className="overflow-x-auto pb-2">
        <div className="inline-block">
          <div className="grid grid-flow-col auto-cols-[14px] mb-1">
            {monthLabels.map((label, i) => (
              <div key={i} className="text-[9px] font-mono text-foreground/30 select-none">
                {label}
              </div>
            ))}
          </div>
          <div className="grid grid-flow-col auto-cols-[11px] grid-rows-[repeat(7,11px)] gap-[3px]">
            {weeks.flat().map((day, i) => (
              <div
                key={i}
                title={day ? `${day.count} contribution${day.count === 1 ? '' : 's'} on ${formatDay(day.date)}` : undefined}
                className={`w-[11px] h-[11px] rounded-[2px] transition-transform hover:scale-125 ${
                  day ? LEVEL_CLASSES[day.level] : 'bg-transparent'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end gap-2 mt-4 text-[9px] font-mono uppercase tracking-widest text-foreground/30">
        <span>Less</span>
        {LEVEL_CLASSES.map((cls) => (
          <span key={cls} className={`w-[11px] h-[11px] rounded-[2px] ${cls}`} />
        ))}
        <span>More</span>
      </div>
    </div>
  );
};

const StatTile = ({ label, value }) => (
  <div className="bg-foreground/[0.03] p-5 border border-foreground/5 flex flex-col justify-between gap-4">
    <p className="text-[9px] font-mono uppercase tracking-[0.3em] text-foreground/30">{label}</p>
    <p className="text-2xl font-display font-bold text-accent">{value}</p>
  </div>
);

export const GitHub = () => {
  const { status, profile, orgs, repos, contributions, username } = useGitHub();

  const featuredRepos = useMemo(
    () => repos.filter((r) => !r.fork && r.description).slice(0, 3),
    [repos]
  );

  const joined = profile?.created_at
    ? new Date(profile.created_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
    : null;

  return (
    <section id="github" className="py-32 bg-background relative">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[10px] font-mono text-accent/40 tracking-[0.5em]">06</span>
              <div className="w-12 h-px bg-accent/20" />
              <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-accent">Open Source</h2>
            </div>
            <h3 className="text-5xl md:text-8xl font-display font-bold tracking-tighter leading-[0.9]">
              Proof of <br /> work<span className="text-accent">.</span>
            </h3>
          </div>
          <p className="text-foreground/50 text-lg leading-relaxed italic max-w-md">
            "Everything I build lives on GitHub — the commits, the experiments, the open-source forks.
            Here's a live look at what I've been up to."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.88 }}
            className="p-8 md:p-10 bg-foreground/[0.03] border border-foreground/10 shadow-(--shadow-card) relative overflow-hidden group flex flex-col"
          >
            <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-accent/20 group-hover:border-accent/50 transition-colors duration-[0.88s]" />

            {profile ? (
              <>
                <div className="flex items-center gap-6 mb-8">
                  <div className="relative shrink-0">
                    <img
                      src={profile.avatar_url}
                      alt={profile.name || username}
                      className="w-20 h-20 border border-foreground/10 grayscale group-hover:grayscale-0 transition-all duration-[1.12s]"
                    />
                    <div className="absolute -inset-2 border border-accent/20 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-[1.12s] pointer-events-none" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-display font-bold tracking-tight">{profile.name || username}</h4>
                    <a
                      href={profile.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-accent/70 hover:text-accent transition-colors"
                    >
                      @{profile.login}
                    </a>
                  </div>
                </div>

                {profile.bio && (
                  <p className="text-foreground/60 text-sm leading-relaxed italic mb-8">"{profile.bio}"</p>
                )}

                {joined && (
                  <p className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.3em] text-foreground/40 mb-8">
                    <Calendar size={12} className="text-accent/60" />
                    Joined {joined}
                  </p>
                )}

                <div className="grid grid-cols-2 gap-3 mb-8 mt-auto">
                  <StatTile label="Repos" value={profile.public_repos} />
                  <StatTile label="Followers" value={profile.followers} />
                  <StatTile label="Following" value={profile.following} />
                  <StatTile label="Gists" value={profile.public_gists} />
                </div>
              </>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center gap-6 py-16 text-center">
                <Github size={32} className="text-accent/60" />
                <p className="text-foreground/40 font-mono text-xs uppercase tracking-widest max-w-[240px]">
                  {status === 'loading' ? 'Fetching GitHub profile…' : 'GitHub profile unavailable right now'}
                </p>
              </div>
            )}

            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link mt-auto inline-flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.2em] text-foreground/40 hover:text-accent transition-colors"
            >
              <ExternalLink size={14} className="group-hover/link:rotate-12 transition-transform" />
              <span>View full profile</span>
            </a>
          </motion.div>

          {/* Contribution Graph + Orgs */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.88, delay: 0.12 }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            <div className="p-8 md:p-10 bg-foreground/[0.03] border border-foreground/10 shadow-(--shadow-card) flex-1">
              {status === 'loading' ? (
                <div className="h-[120px] bg-foreground/5 animate-pulse" />
              ) : (
                <ContributionGraph contributions={contributions} />
              )}
            </div>

            <div className="p-8 md:p-10 bg-foreground/[0.03] border border-foreground/10 shadow-(--shadow-card)">
              <div className="flex items-center gap-4 mb-8">
                <h4 className="text-[10px] font-mono uppercase tracking-[0.4em] text-accent/60 flex items-center gap-3">
                  <Building2 size={12} />
                  Organizations
                </h4>
                <div className="h-px flex-1 bg-foreground/5" />
              </div>
              {orgs.length > 0 ? (
                <div className="flex flex-wrap gap-4">
                  {orgs.map((org) => (
                    <a
                      key={org.id}
                      href={`https://github.com/${org.login}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 px-5 py-4 bg-foreground/[0.02] border border-foreground/5 hover:border-accent/30 hover:-translate-y-1 transition-all duration-[0.45s]"
                    >
                      <img src={org.avatar_url} alt={org.login} className="w-10 h-10" />
                      <span className="text-xs font-mono uppercase tracking-widest">{org.login}</span>
                    </a>
                  ))}
                </div>
              ) : (
                <p className="text-foreground/30 font-mono text-[10px] uppercase tracking-[0.3em]">
                  {status === 'loading'
                    ? 'Checking memberships…'
                    : 'No public organization memberships — yet. Most of my open-source work happens through forks.'}
                </p>
              )}
            </div>
          </motion.div>
        </div>

        {/* Featured Repos */}
        {featuredRepos.length > 0 && (
          <div>
            <h4 className="text-[10px] font-mono uppercase tracking-[0.4em] text-accent/60 mb-8 flex items-center gap-4">
              <BookOpen size={12} />
              Latest from the lab
              <div className="flex-1 h-px bg-foreground/5" />
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredRepos.map((repo, index) => (
                <motion.a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 bg-foreground/[0.03] border border-foreground/10 hover:border-accent/30 hover:-translate-y-1 transition-all duration-[0.45s] group flex flex-col"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h5 className="font-display font-bold text-xl tracking-tight group-hover:text-accent transition-colors truncate">
                      {repo.name}
                    </h5>
                    <Github size={18} className="text-foreground/30 group-hover:text-accent transition-colors shrink-0" />
                  </div>
                  <p className="text-sm text-foreground/50 leading-relaxed italic line-clamp-3 mb-8">
                    "{repo.description}"
                  </p>
                  <div className="mt-auto flex items-center gap-6 text-[10px] font-mono uppercase tracking-widest text-foreground/40">
                    {repo.language && (
                      <span className="flex items-center gap-2">
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: LANG_COLORS[repo.language] || '#8b8b8b' }}
                        />
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center gap-2">
                      <Star size={12} />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-2">
                      <GitFork size={12} />
                      {repo.forks_count}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
