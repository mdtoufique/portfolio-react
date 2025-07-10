export default function Services() {
  const services = [
    {
      icon: 'fa-code',
      title: 'Full-Stack Web Development',
      desc: 'Building robust web applications using MERN and PHP stacks with responsive frontends and scalable backends.',
    },
    {
      icon: 'fa-database',
      title: 'Database Design & Management',
      desc: 'Designing and managing efficient relational and NoSQL databases using MySQL and MongoDB.',
    },
    {
      icon: 'fa-server',
      title: 'Backend Development',
      desc: 'Creating secure and scalable backend systems with Node.js and Express.js tailored to meet business needs.',
    },
    {
      icon: 'fa-brain',
      title: 'Problem Solving & Algorithms',
      desc: 'Providing solutions to complex algorithmic challenges with expertise in data structures and competitive programming.',
    },
    {
      icon: 'fa-cogs',
      title: 'Custom Project Development',
      desc: 'Delivering tailored solutions such as ticket systems, messaging apps, and portfolio websites from scratch.',
    },
    {
      icon: 'fa-code-branch',
      title: 'Version Control & Collaboration',
      desc: 'Experienced with Git and GitHub for managing codebases and collaborating in team environments effectively.',
    },
  ];

  return (
    
    

    <section
      id="services"
      className="min-h-screen px-6 py-16"
      style={{ backgroundColor: 'var(--dim-white)', color: 'var(--black)' }}
    >
    <div className="max-w-6xl mx-auto">
      <section className="mb-12 p-6 md:p-8 bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-[rgba(237,91,45,0.15)]">
        
        <h2
          className="text-2xl md:text-3xl font-bold text-center mb-6 text-[var(--orange)] border-b border-[var(--orange)] pb-2"
        >
          Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md border border-[rgba(237,91,45,0.2)] hover:shadow-lg hover:border-[var(--orange)] transition-all duration-300 hover:scale-100"
            >
              <div className="text-[var(--orange)] text-3xl mb-4">
                <i className={`fa ${service.icon}`}></i>
              </div>
              <h4
                className="text-xl font-semibold mb-2"
                style={{ color: 'var(--black)' }}
              >
                {service.title}
              </h4>
              <p className="text-[rgba(0,0,0,0.7)] text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
      </div>
    </section>
  );
}
