import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
} from 'react-icons/fa';

import reactLogo from '../assets/react.svg';
import nextjsLogo from '../assets/next.svg';
import nodejsLogo from '../assets/node.svg';
import pythonLogo from '../assets/python.svg';
import djangoLogo from '../assets/django.svg';
import flaskLogo from '../assets/flask.svg';
import tensorflowLogo from '../assets/tensorflow.svg';
import pytorchLogo from '../assets/pytorch.svg';
import mongodbLogo from '../assets/mongodb.svg';
import postgresqlLogo from '../assets/postgresql.svg';
import mysqlLogo from '../assets/mysql.svg';
import firebaseLogo from '../assets/firebase.svg';
import flutterLogo from '../assets/flutter.svg';
import swiftLogo from '../assets/swift.svg';
import kotlinLogo from '../assets/kotlin.svg';
import javaLogo from '../assets/java.svg';
import dockerLogo from '../assets/docker.svg';
import javacsriptLogo from '../assets/javascript.svg';
import githubLogo from '../assets/github.svg';
import linuxLogo from '../assets/linux.svg';
import expressLogo from '../assets/express.svg';
import cppLogo from '../assets/cpp.svg';
import gitLogo from '../assets/git.svg';
import phpLogo from '../assets/php.svg';


export default function About() {
  const technologies = [
    { name: 'C++', logo: cppLogo },
    { name: 'Python', logo: pythonLogo },
    { name: 'javascript', logo: javacsriptLogo },

    { name: 'Node.js', logo: nodejsLogo },
    { name: 'React.js', logo: reactLogo },
    { name: 'Express.js', logo: expressLogo },
    
    { name: 'PHP', logo: phpLogo },

    { name: 'MongoDB', logo: mongodbLogo },
    { name: 'MySQL', logo: mysqlLogo },

    { name: 'TensorFlow', logo: tensorflowLogo },
    { name: 'PyTorch', logo: pytorchLogo },
    
    
    { name: 'GitHub', logo: githubLogo },
    
    { name: 'Git', logo: gitLogo },
    
    { name: 'linux', logo: linuxLogo },
    
    
  ];

  return (
    <section
      id="about"
      className="min-h-screen px-6 py-16"
      style={{ backgroundColor: 'var(--dim-white)', color: 'var(--black)' }}
    >
      <div className="max-w-6xl mx-auto">
          
        {/* Education Section */}
        
        <section className="mb-12 p-6 md:p-8 bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-[rgba(237,91,45,0.15)]">
        
        <h2
          className="text-2xl md:text-3xl font-bold text-center mb-6 text-[var(--orange)] border-b border-[var(--orange)] pb-2"
        >
          Education
        </h2>
        <div className="text-center text-[rgba(0,0,0,0.85)] dark:text-gray-200">
          <p className="text-lg font-medium mb-1">
            B.Sc. in Computer Science & Engineering
          </p>
          <p className="text-base mb-1 text-gray-700 dark:text-gray-300">
            Rajshahi University of Engineering & Technology (RUET)
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Jan 2020 – Jun 2025
          </p>
        </div>
      </section>

        
        {/* Technical Skills Section */}
        <section className="mb-10 p-8 bg-white rounded-xl shadow-md border border-[rgba(237,91,45,0.2)]">
          <h2
          className="text-2xl md:text-3xl font-bold text-center mb-6 text-[var(--orange)] border-b border-[var(--orange)] pb-2"
        >
            Technical Skills
          </h2>
          <div className="mt-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white/70 backdrop-blur-sm rounded-lg px-3 py-2 shadow hover:shadow-md border border-[#ed5b2d]/30 hover:border-[#ed5b2d] transition duration-200 group"
                >
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-8 h-8 mr-3 object-contain"
                  />
                  <span className="text-black text-sm font-medium group-hover:text-[#ed5b2d]">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
