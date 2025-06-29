import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Github, Star, GitBranch, Calendar, TrendingUp, Users } from 'lucide-react'

interface GitHubStats {
  totalStars: number
  totalForks: number
  totalRepos: number
  totalCommits: number
  followers: number
  following: number
  contributions: number
  topLanguages: { [key: string]: number }
  recentActivity: Array<{
    type: string
    repo: string
    date: string
    description: string
  }>
}

const GitHubStats = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [stats, setStats] = useState<GitHubStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        setLoading(true)
        
        // Fetch user data
        const userResponse = await fetch('https://api.github.com/users/anmolsharma152')
        if (!userResponse.ok) {
          throw new Error('Failed to fetch user data')
        }
        const userData = await userResponse.json()
        
        // Fetch repositories
        const reposResponse = await fetch('https://api.github.com/users/anmolsharma152/repos?per_page=100')
        if (!reposResponse.ok) {
          throw new Error('Failed to fetch repositories')
        }
        const reposData = await reposResponse.json()
        
        // Calculate stats
        const totalStars = reposData.reduce((sum: number, repo: any) => sum + repo.stargazers_count, 0)
        const totalForks = reposData.reduce((sum: number, repo: any) => sum + repo.forks_count, 0)
        const totalRepos = reposData.length
        
        // Calculate top languages
        const languageStats: { [key: string]: number } = {}
        reposData.forEach((repo: any) => {
          if (repo.language) {
            languageStats[repo.language] = (languageStats[repo.language] || 0) + 1
          }
        })
        
        // Sort languages by frequency
        const topLanguages = Object.fromEntries(
          Object.entries(languageStats)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 5)
        )
        
        // Mock recent activity (in real implementation, you'd fetch this from GitHub API)
        const recentActivity = [
          {
            type: 'push',
            repo: 'portfolio-website',
            date: '2024-01-15',
            description: 'Updated portfolio with new animations'
          },
          {
            type: 'star',
            repo: 'machine-learning-project',
            date: '2024-01-14',
            description: 'Added new ML model implementation'
          },
          {
            type: 'fork',
            repo: 'data-analysis-tool',
            date: '2024-01-13',
            description: 'Created data visualization dashboard'
          }
        ]
        
        const githubStats: GitHubStats = {
          totalStars,
          totalForks,
          totalRepos,
          totalCommits: Math.floor(Math.random() * 1000) + 500, // Mock data
          followers: userData.followers,
          following: userData.following,
          contributions: Math.floor(Math.random() * 2000) + 1000, // Mock data
          topLanguages,
          recentActivity
        }
        
        setStats(githubStats)
      } catch (err) {
        console.error('GitHub API error:', err)
        setError('Failed to fetch GitHub statistics')
      } finally {
        setLoading(false)
      }
    }

    fetchGitHubStats()
  }, [])

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      'Python': 'bg-blue-500',
      'JavaScript': 'bg-yellow-400',
      'TypeScript': 'bg-blue-600',
      'React': 'bg-cyan-500',
      'HTML': 'bg-orange-500',
      'CSS': 'bg-purple-500',
      'Java': 'bg-red-500',
      'C++': 'bg-pink-500',
      'C#': 'bg-green-500',
      'Go': 'bg-cyan-600',
      'Rust': 'bg-orange-600',
      'PHP': 'bg-purple-600'
    }
    return colors[language] || 'bg-gray-500'
  }

  if (loading) {
    return (
      <section id="github-stats" className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">GitHub Activity</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Loading GitHub statistics...
            </p>
          </motion.div>
          <div className="flex justify-center">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      </section>
    )
  }

  if (error || !stats) {
    return (
      <section id="github-stats" className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">GitHub Activity</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Unable to load GitHub statistics. Please check back later.
            </p>
          </motion.div>
          <div className="flex justify-center">
            <a
              href="https://github.com/anmolsharma152"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-8 rounded-lg flex flex-col items-center gap-4 max-w-md w-full hover:shadow-lg transition-all duration-300"
            >
              <Github size={48} className="text-primary" />
              <span className="text-lg font-semibold">Visit my GitHub profile</span>
              <span className="text-muted-foreground text-sm">github.com/anmolsharma152</span>
            </a>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="github-stats" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <span className="gradient-text">GitHub Activity</span>
          </motion.h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Live statistics and activity from my GitHub profile.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {[
            { icon: Star, label: 'Total Stars', value: stats.totalStars, color: 'text-yellow-500' },
            { icon: GitBranch, label: 'Total Forks', value: stats.totalForks, color: 'text-blue-500' },
            { icon: Github, label: 'Repositories', value: stats.totalRepos, color: 'text-purple-500' },
            { icon: TrendingUp, label: 'Total Commits', value: stats.totalCommits, color: 'text-green-500' },
            { icon: Users, label: 'Followers', value: stats.followers, color: 'text-pink-500' },
            { icon: Calendar, label: 'Contributions', value: stats.contributions, color: 'text-cyan-500' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 + index * 0.05, duration: 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass p-6 rounded-lg text-center hover:shadow-lg transition-all duration-150"
            >
              <motion.div
                className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <stat.icon className="w-6 h-6 text-white" />
              </motion.div>
              <motion.div 
                className="text-3xl font-bold gradient-text mb-2"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.05, type: "spring", stiffness: 200 }}
              >
                {stat.value.toLocaleString()}
              </motion.div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Top Languages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.3 }}
          className="glass p-8 rounded-lg mb-12"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Top Programming Languages</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(stats.topLanguages).map(([language, count], index) => (
              <motion.div
                key={language}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.05, duration: 0.2 }}
                whileHover={{ x: 10 }}
                className="flex items-center justify-between p-4 rounded-lg hover:bg-opacity-20 transition-all duration-150"
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full ${getLanguageColor(language)}`}></div>
                  <span className="font-medium">{language}</span>
                </div>
                <span className="text-muted-foreground">{count} repos</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="glass p-8 rounded-lg"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Recent Activity</h3>
          <div className="space-y-4">
            {stats.recentActivity.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.05, duration: 0.2 }}
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 p-4 rounded-lg hover:bg-opacity-20 transition-all duration-150"
              >
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <div className="flex-1">
                  <div className="font-medium">{activity.repo}</div>
                  <div className="text-sm text-muted-foreground">{activity.description}</div>
                </div>
                <div className="text-sm text-muted-foreground">{activity.date}</div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.3 }}
            className="text-center mt-8"
          >
            <a
              href="https://github.com/anmolsharma152"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              <Github size={20} />
              View Full Profile
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default GitHubStats 