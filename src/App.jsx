import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import JV from '@/assets/JV.png';
import testimonio1 from '@/assets/testimonio1.jpg';
import testimonio2 from '@/assets/testimonio2.jpg';
import testimonio3 from '@/assets/testimonio3.jpg';
import testimonio4 from '@/assets/testimonio4.jpg';
import blog1 from '@/assets/blog1.jpg';
import blog2 from '@/assets/blog2.jpg';
import blog3 from '@/assets/blog3.jpg';
import blog4 from '@/assets/blog4.jpg';
import blog5 from '@/assets/blog5.jpg';
import blog6 from '@/assets/blog6.jpg';
import aliado1 from '@/assets/aliado1.png';
import aliado2 from '@/assets/aliado2.png';
import aliado3 from '@/assets/aliado3.png';
import aliado4 from '@/assets/aliado4.png';
import { FaFire, FaWater, FaWind, FaLeaf } from "react-icons/fa";

export default function App() {
  const blogPosts = [
    { image: blog1, title: 'Los 5 beneficios del yoga en tu día a día', link: '#' },
    { image: blog2, title: 'Cómo empezar una práctica diaria de yoga', link: '#' },
    { image: blog3, title: 'Técnicas de meditación para principiantes', link: '#' },
    { image: blog4, title: 'Respiración consciente: mejora tu vida', link: '#' },
    { image: blog5, title: 'Posturas básicas para principiantes', link: '#' },
    { image: blog6, title: 'Cómo el yoga fortalece tu cuerpo y mente', link: '#' },
  ];

  const testimonios = [
    { text: 'Gracias a Juan Vida, encontré la paz interior.', name: 'Ana López', photo: testimonio1 },
    { text: 'Las clases de yoga transformaron mi bienestar.', name: 'Carlos Gómez', photo: testimonio2 },
    { text: 'El enfoque personalizado hizo toda la diferencia.', name: 'Marta Ruiz', photo: testimonio3 },
    { text: 'Nunca me había sentido tan conectada conmigo misma.', name: 'Sofía Martínez', photo: testimonio4 },
  ];

  const aliados = [aliado1, aliado2, aliado3, aliado4];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md h-16 flex items-center px-4">
        <Link to="/" className="flex items-center">
          <img src={JV} alt="Juan Vida Yoga" className="h-12" />
        </Link>
        <nav className="ml-auto flex gap-4">
          {['Inicio', 'Cursos', 'Eventos', 'Productos', 'Contacto'].map((item) => (
            <Link
              key={item}
              to="#"
              className="text-sm font-bold hover:text-green-500"
            >
              {item}
            </Link>
          ))}
        </nav>
      </header>

      {/* Hero Section */}
      <section
        className="w-full h-full py-60 text-white text-center bg-cover bg-center"
        style={{
          backgroundImage: `url('jvy.jpeg')`,
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
        }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Encuentra paz en cada respiración</h1>
          <p className="text-lg mb-6">Descubre la armonía interior con nuestros cursos de yoga personalizados.</p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-green-400 text-green-900 font-bold rounded-full">
              Empieza ahora
            </Button>
            <Button size="lg" className="bg-green-600 text-white font-bold rounded-full">
              Aprende más
            </Button>
          </div>
        </div>
      </section>

      {/* Sección de los 4 Elementos */}
      <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-900 mb-8">Los 4 Elementos</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {[
            { icon: <FaFire />, title: 'Fuego', desc: 'Conecta con tu energía interior.' },
            { icon: <FaWater />, title: 'Agua', desc: 'Fluye con calma y armonía.' },
            { icon: <FaWind />, title: 'Aire', desc: 'Respira y libérate de tensiones.' },
            { icon: <FaLeaf />, title: 'Tierra', desc: 'Encuentra estabilidad y equilibrio.' },
          ].map((element, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-green-600 text-white text-4xl p-4 rounded-full">
                {element.icon}
              </div>
              <h3 className="mt-4 text-xl font-bold">{element.title}</h3>
              <p className="text-gray-700">{element.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Ishka Kankueb Yoga Section */}
      <section className="py-20 bg-gradient-to-r text-black">
        <div className="container mx-auto px-4 lg:flex lg:items-center">
          {/* Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-8">Exploramos Ishka Kankueb Yoga</h2>
            <p className="text-lg mb-6">
              En Juan Vida nos sumergimos en el arte de <span className="text-green-300 font-bold">Ishka Kankueb Yoga</span>,
              una práctica única que equilibra cuerpo, mente y espíritu a través de movimientos fluidos y conscientes.
              Diseñamos experiencias personalizadas para transformar tu bienestar integral.
            </p>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
              {[
                {
                  title: 'Conexión Interior',
                  desc: 'Fomentamos la conexión profunda con tu ser a través de técnicas de respiración y meditación.'
                },
                {
                  title: 'Movimientos Armónicos',
                  desc: 'Integramos posturas y secuencias que promueven flexibilidad y fuerza en equilibrio.'
                },
                {
                  title: 'Entorno Natural',
                  desc: 'Disfruta de prácticas en espacios naturales diseñados para potenciar la serenidad y la paz.'
                },
              ].map((feature, index) => (
                <div key={index} className="p-6 bg-black bg-opacity-70 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-white">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 mt-12 lg:mt-0 lg:pl-12 relative">
            <img
              src="iky.jpg" // Reemplaza con la ruta real de la imagen principal
              alt="Ishka Kankueb Yoga"
              className="rounded-lg shadow-xl h-130 w-full"
            />
            <img
              src="JV.png" // Reemplaza con la ruta real de la imagen secundaria (pequeña)
              alt="Ishka Yoga Logo"
              className="absolute bottom-4 right-4 w-20 h-20 rounded-full border-4 border-white shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Nuestros Aliados Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-900 mb-8">Nuestros Aliados</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {aliados.map((logo, index) => (
              <div key={index} className="flex items-center justify-center bg-white shadow-md rounded-lg p-4">
                <img src={logo} alt={`Aliado ${index + 1}`} className="h-20 w-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-900 mb-8">Nuestro Blog</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {blogPosts.map((post, index) => (
              <div key={index} className="relative shadow-md rounded-lg overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Link to={post.link} className="text-yellow-400 text-lg font-bold">
                    Leer Más
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-900 mb-8">Beneficios de Practicar Yoga</h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {[{ icon: '🧘‍♀️', title: 'Reducción del Estrés', desc: 'Calma tu mente y cuerpo a través de la meditación guiada.' },
            { icon: '💖', title: 'Bienestar Físico', desc: 'Fortalece tu cuerpo con posturas suaves y desafiantes.' },
            { icon: '🌿', title: 'Armonía Interior', desc: 'Conecta con tu esencia a través del yoga holístico.' }].map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="bg-green-600 text-white text-4xl p-4 rounded-full">{feature.icon}</div>
                <h3 className="mt-4 text-xl font-bold">{feature.title}</h3>
                <p className="text-gray-700">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16 bg-gradient-to-r from-green-100 to-green-200 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-green-900 mb-8">Testimonios</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {testimonios.map((testimonial, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                <img
                  src={testimonial.photo}
                  alt={`Testimonio de ${testimonial.name}`}
                  className="w-16 h-16 rounded-full mx-auto"
                />
                <p className="mt-4 italic text-gray-700">"{testimonial.text}"</p>
                <p className="mt-4 font-bold text-green-900">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-6">
        <div className="container mx-auto flex justify-between">
          <p className="text-sm">&copy; 2025 Juan Vida Yoga. Todos los derechos reservados.</p>
          <nav className="flex gap-4">
            <Link to="#" className="hover:underline">Términos</Link>
            <Link to="#" className="hover:underline">Privacidad</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
