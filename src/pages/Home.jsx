export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 py-20"
      style={{ backgroundColor: 'var(--dim-white)', color: 'var(--black)' }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left: Intro */}
        <div className="text-center md:text-left space-y-6">
          <h3 className="text-xl font-medium" style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
            Hello, I'm
          </h3>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight" style={{ color: 'var(--black)' }}>
            MD Rehman <span style={{ color: 'var(--orange)' }}>Toufique</span>
          </h1>

          <h2 className="text-2xl font-semibold text-[var(--orange)] tracking-wide">
            Full Stack Web Developer
          </h2>

          <p className="text-base leading-relaxed text-[rgba(0,0,0,0.7)] max-w-xl">
          Passionate developer with 2+ years of experience in building fast, scalable, and secure full-stack applications. 
          I specialize in MERN Stack and love solving complex problems through clean code and elegant design. 
          I'm also a competitive programmer ranked Specialist in Codeforces and I'm constantly sharpening my problem-solving skills.
        </p>


          <a
          href="/MD_REHMAN_TOUFIQUE_CV.pdf"
          download="MD_REHMAN_TOUFIQUE_CV.pdf"
          className="inline-block px-6 py-3 rounded-md font-medium transition"
          style={{
            backgroundColor: 'var(--orange)',
            color: 'var(--dim-white)',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#d1491a')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--orange)')}
        >
          Download CV
        </a>

        </div>

        {/* Right: Image */}
        <div className="flex justify-center">
          <img
            src="coder.png" // Replace with your image path
            alt="Toufique"
            className="w-full max-w-sm rounded-xl shadow-lg border border-[rgba(237,91,45,0.2)]"
          />
        </div>
      </div>
    </section>
  );
}
