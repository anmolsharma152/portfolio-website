import Section from '../ui/Section';
import Card from '../ui/Card';

const projects = [
  {
    title: 'Predictive Analytics Model',
    description: 'Developed a machine learning model for predicting economic indicators using historical data and advanced statistical methods.',
    imageUrl: '/projects/predictive-analytics.jpg',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy']
  },
  {
    title: 'Natural Language Processing System',
    description: 'Built an NLP system for analyzing political discourse and sentiment analysis using deep learning techniques.',
    imageUrl: '/projects/nlp-system.jpg',
    technologies: ['Python', 'TensorFlow', 'NLTK', 'Transformers']
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'Created an interactive dashboard for visualizing complex economic data using modern visualization tools.',
    imageUrl: '/projects/dashboard.jpg',
    technologies: ['Python', 'Plotly', 'Dash', 'Pandas']
  },
  {
    title: 'Time Series Forecasting',
    description: 'Implemented advanced time series forecasting models for economic trend prediction.',
    imageUrl: '/projects/time-series.jpg',
    technologies: ['Python', 'Prophet', 'ARIMA', 'Statsmodels']
  },
  {
    title: 'Classification Model',
    description: 'Developed a multi-class classification model for categorizing political documents using machine learning.',
    imageUrl: '/projects/classification.jpg',
    technologies: ['Python', 'PyTorch', 'Scikit-learn', 'NLP']
  },
  {
    title: 'Data Pipeline Automation',
    description: 'Built an automated data pipeline for processing and analyzing large-scale economic datasets.',
    imageUrl: '/projects/pipeline.jpg',
    technologies: ['Python', 'Airflow', 'SQL', 'Docker']
  }
];

export default function Portfolio() {
  return (
    <Section id="portfolio" title="My Portfolio">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card 
            key={index}
            title={project.title}
            imageUrl={project.imageUrl}
          >
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span 
                  key={tech}
                  className="bg-gray-100 px-2 py-1 rounded-full text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}