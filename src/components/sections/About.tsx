import Section from '../ui/Section';

export default function About() {
  return (
    <Section id="about" background="secondary" title="About Me">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/3">
          <div className="bg-card w-full aspect-square rounded-lg overflow-hidden">
            {/* Add your profile image here */}
          </div>
        </div>
        <div className="w-full md:w-2/3 space-y-6">
          <p className="text-muted-foreground text-lg">
            At 28 years old, I'm a Data Scientist with a unique academic background that combines 
            Political Science and Economics from Jaipur, Rajasthan. This interdisciplinary foundation 
            has given me a distinctive perspective in approaching data-driven problems.
          </p>
          <p className="text-muted-foreground text-lg">
            My expertise lies in Machine Learning and Artificial Intelligence, where I apply 
            advanced statistical methods and cutting-edge ML algorithms to extract meaningful 
            insights from complex datasets. I'm passionate about using data science to solve 
            real-world problems and drive informed decision-making.
          </p>
          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-4 text-primary">Skills</h3>
            <div className="flex flex-wrap gap-3">
              {[
                'Python', 'Machine Learning', 'Deep Learning', 'Data Analysis',
                'Statistical Modeling', 'TensorFlow', 'PyTorch', 'Scikit-learn',
                'Pandas', 'NumPy', 'SQL', 'Data Visualization'
              ].map((skill) => (
                <span 
                  key={skill}
                  className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
} 