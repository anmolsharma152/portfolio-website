import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Github, Users } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

interface IGitHubStats {
  followers: number;
  following: number;
  public_repos: number;
  public_gists: number;
}

const GitHubStats = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [stats, setStats] = useState<IGitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.github.com/users/anmolsharma152');
        if (!response.ok) {
          throw new Error('Failed to fetch GitHub data');
        }
        const userData = await response.json();

        const githubStats: IGitHubStats = {
          followers: userData.followers || 0,
          following: userData.following || 0,
          public_repos: userData.public_repos || 0,
          public_gists: userData.public_gists || 0,
        };

        setStats(githubStats);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, []);

  if (loading) {
    return (
      <section id="github-stats" className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600 dark:text-gray-300">
            Loading GitHub stats...
          </div>
        </div>
      </section>
    );
  }

  if (error || !stats) {
    return (
      <section id="github-stats" className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-red-500"
          >
            Error loading GitHub stats: {error || 'No data available'}
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="github-stats" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">GitHub Stats</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here&apos;s a quick overview of my GitHub activity and statistics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full mx-auto mb-4">
              <Github className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-3xl font-bold text-center mb-2">{stats.public_repos}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">Public Repositories</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-pink-100 dark:bg-pink-900 rounded-full mx-auto mb-4">
              <Users className="w-8 h-8 text-pink-600 dark:text-pink-400" />
            </div>
            <h3 className="text-3xl font-bold text-center mb-2">
              {stats.followers} / {stats.following}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">Followers / Following</p>
          </motion.div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://github.com/anmolsharma152"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
          >
            <Github className="w-5 h-5 mr-2" />
            View Full GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
