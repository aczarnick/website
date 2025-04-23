export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Professional Background</h2>
          <p className="text-gray-600 dark:text-gray-300">
            I&apos;m a software engineer experienced in full-stack development and hardware integration.
            My focus is on building scalable, maintainable applications and developing efficient solutions 
            for complex technical challenges. With a strong background in both web technologies and systems
            programming, I bring a comprehensive approach to software development.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <SkillCategory 
              title="Programming & Scripting"
              skills={['C#', 'TypeScript', 'Python', 'Rust', 'Java', 'C/C++', 'Kotlin', 'Bash', 'SQL', 'R']}
            />
            <SkillCategory 
              title="Web & Frameworks"
              skills={['.NET', 'Node.js', 'React', 'Spring', 'REST APIs', 'OAuth/OIDC']}
            />
            <SkillCategory 
              title="Cloud & DevOps"
              skills={['Azure', 'Kubernetes', 'Docker', 'Terraform', 'GitHub Actions', 'Pulumi']}
            />
            <SkillCategory 
              title="AI & ML"
              skills={['Azure OpenAI', 'Azure AI Search', 'Ollama', 'OpenWebUI', 'Azure AI Speech']}
            />
            <SkillCategory 
              title="Data & Storage"
              skills={['SQL Server', 'MongoDB', 'PostgreSQL', 'NATs', 'LaunchDarkly']}
            />
            <SkillCategory 
              title="Observability"
              skills={['OpenTelemetry', 'Grafana', 'Prometheus', 'Splunk', 'Loki']}
            />
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <h3 className="text-l font-bold mb-4">The University of Nebrasksa - Lincoln</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Bachelor of Science in Computer Engineering<br/>
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Interests & Activities</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Beyond coding, I&apos;m passionate about open source development and contributing to the 
            tech community. I actively participate in software development communities, engage in 
            hardware projects, and continuously explore emerging technologies to stay at the forefront 
            of technological innovation.
          </p>
        </div>
      </div>
    </div>
  );
}

function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <ul className="space-y-1">
        {skills.map((skill) => (
          <li key={skill} className="text-gray-600 dark:text-gray-300">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}