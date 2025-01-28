import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Instagram, Phone, Mail, MapPin } from "lucide-react";
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
        // { image: blog4, title: 'Respiración consciente: mejora tu vida', link: '#' },
        // { image: blog5, title: 'Posturas básicas para principiantes', link: '#' },
        // { image: blog6, title: 'Cómo el yoga fortalece tu cuerpo y mente', link: '#' },
    ];

    const beneficios = [
        {
            icon: "🧘‍♀️",
            title: "Reducción del Estrés",
            desc: "Calma tu mente y cuerpo a través de la meditación guiada.",
        },
        {
            icon: "💖",
            title: "Bienestar Físico",
            desc: "Fortalece tu cuerpo con posturas suaves y desafiantes.",
        },
        {
            icon: "🌿",
            title: "Armonía Interior",
            desc: "Conecta con tu esencia a través del yoga holístico.",
        },
    ];

    const testimonios = [
        { text: 'Las clases son increibles, me ayudan a conectar ... a veces, en el tiempo libre que tengo en la U Manizales me gusta participar.', name: 'Isabela Gómez ', photo: testimonio1 },
        { text: 'En la meditación encuentro paz y creatividad para mis proyectos de manera conciente', name: 'Leonardo Martinez', photo: testimonio2 },
        { text: 'Me siento muy orgullosa de mi hijo, me ayuda a mejorar mi salud, fortalecer mi cuerpo, a compartir y sentirme tranquila.', name: 'Blanca Velasquez', photo: testimonio3 }
    ];

    const aliados = [aliado1, aliado2, aliado3, aliado4];

    const elementos = [
        { icon: <FaFire />, title: "Fuego", desc: "Clases para tu energía y vitalidad." },
        { icon: <FaWater />, title: "Agua", desc: "Vidas en calma y armonía." },
        { icon: <FaWind />, title: "Aire", desc: "Respira y conoce quienes somos." },
        { icon: <FaLeaf />, title: "Tierra", desc: "Productos para tu bienestar. " },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Lógica de auto-play para pantallas móviles
    useEffect(() => {
        const isMobile = window.innerWidth < 768;
        const interval = isMobile ? setInterval(() => nextSlide(), 5000) : null;
        return () => clearInterval(interval);
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % elementos.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + elementos.length) % elementos.length);
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <header className="bg-black text-white shadow-md h-12 flex items-end justify-between px-4">

                {/* Contact Information */}
                <div className="flex items-center space-x-6 ml-auto">
                    <span className="flex items-center text-sm">
                        <Phone className="h-4 w-4 mr-1" /> +57 3204997492
                    </span>
                    <span className="flex items-center text-sm">
                        <MapPin className="h-4 w-4 mr-1" /> Manizales, Colombia
                    </span>

                    {/* Instagram Logo */}
                    <a
                        href="https://instagram.com/juanvida222"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400"
                    >
                        <Instagram className="h-5 w-5" />
                    </a>
                </div>
            </header>

            <header className="bg-white shadow-md h-16 flex items-center px-4">
                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img src={JV} alt="Juan Vida Yoga" className="h-12" />
                </Link>

                {/* Botón hamburguesa */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="ml-auto lg:hidden block text-gray-600 focus:outline-none"
                >
                    <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>

                {/* Menú de navegación */}
                <nav
                    className={`lg:flex gap-4 ml-auto ${isMenuOpen ? "block" : "hidden"
                        } absolute lg:static top-16 right-4 bg-white shadow-lg rounded-md lg:shadow-none lg:bg-transparent p-4 lg:p-0`}
                    style={{ width: "max-content" }} // Tamaño dinámico
                >
                    {[
                        "Clases",
                        "Eventos",
                        "Productos",
                        "Quienes somos",
                        "Contacto",
                    ].map((item) => (
                        <Link
                            key={item}
                            to="#"
                            className="text-sm font-bold hover:text-green-500 block lg:inline-block mb-2 lg:mb-0"
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

                    {/* Vista móvil: Carrusel */}
                    <div className="block md:hidden relative">
                        <div
                            className="flex transition-transform duration-500"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {elementos.map((element, index) => (
                                <div
                                    key={index}
                                    className="min-w-full flex flex-col items-center text-center"
                                >
                                    <div className="bg-green-600 text-white text-4xl p-4 rounded-full">
                                        {element.icon}
                                    </div>
                                    <h3 className="mt-4 text-xl font-bold">{element.title}</h3>
                                    <p className="text-gray-700">{element.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* Botones de navegación */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray text-white p-2 rounded-full"
                        >
                            &#8249;
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray text-white p-2 rounded-full"
                        >
                            &#8250;
                        </button>
                    </div>

                    {/* Indicadores */}
                    <div className="md:hidden flex justify-center mt-4">
                        {elementos.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 mx-1 rounded-full ${index === currentIndex ? "bg-green-600" : "bg-gray-300"
                                    }`}
                            ></button>
                        ))}
                    </div>

                    {/* Vista escritorio: Diseño estático */}
                    <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {elementos.map((element, index) => (
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

            <section className="py-20 bg-gradient-to-r from-gray-50 via-green-50 to-gray-50">
                <div className="container mx-auto px-6 lg:flex lg:items-center">
                    {/* Text Content */}
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-8">
                            Exploramos <span className="text-green-600">Ishka Kankueb Yoga</span>
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-10">
                            En Juan Vida nos sumergimos en el arte de{" "}
                            <span className="text-green-600 font-semibold">
                                Ishka Kankueb Yoga
                            </span>
                            , una práctica única que equilibra cuerpo, mente y espíritu a través de
                            movimientos fluidos y conscientes. Diseñamos experiencias personalizadas
                            para transformar tu bienestar integral.
                        </p>
                        <div className="space-y-8">
                            {[
                                {
                                    title: "Conexión Interior",
                                    desc: "Fomentamos la conexión profunda con tu ser a través de técnicas de respiración y meditación.",
                                },
                                {
                                    title: "Movimientos Armónicos",
                                    desc: "Integramos posturas y secuencias que promueven flexibilidad y fuerza en equilibrio.",
                                },
                                {
                                    title: "Entorno Natural",
                                    desc: "Disfruta de prácticas en espacios naturales diseñados para potenciar la serenidad y la paz.",
                                },
                            ].map((feature, index) => (
                                <div
                                    key={index}
                                    className="p-6 bg-green-100 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-700">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="lg:w-1/2 mt-12 lg:mt-0 lg:pl-12 relative">
                        <img
                            src="iky.jpg" // Reemplaza con la ruta real de la imagen principal
                            alt="Ishka Kankueb Yoga"
                            className="rounded-xl shadow-lg w-full object-cover h-[600px]"
                        />
                        <img
                            src="JV.png" // Reemplaza con la ruta real de la imagen secundaria (pequeña)
                            alt="Ishka Yoga Logo"
                            className="absolute bottom-4 right-4 w-24 h-24 rounded-full border-4 border-white shadow-md"
                        />
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-100">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center text-green-900 mb-8">
                        Nuestros Aliados
                    </h2>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {aliados.map((logo, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-center bg-white shadow-md rounded-lg p-6 min-h-[200px]"
                            >
                                <img
                                    src={logo}
                                    alt={`Aliados`}
                                    className="h-30 w-auto  mb-4"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-green-900 mb-8">
                        Beneficios del Yoga
                    </h2>
                    <div className="grid gap-8 md:grid-cols-3">
                        {blogPosts.map((post, index) => (
                            <div
                                key={index}
                                className="relative shadow-lg rounded-lg overflow-hidden group"
                            >
                                {/* Imagen del Blog */}
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform"
                                />

                                {/* Información del beneficio al hacer hover */}
                                <div className="absolute inset-0 bg-green-900 bg-opacity-90 flex flex-col items-center justify-center text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="bg-white text-green-900 text-4xl p-4 rounded-full mb-4">
                                        {beneficios[index].icon}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">{beneficios[index].title}</h3>
                                    <p className="text-center text-sm">{beneficios[index].desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-r bg-gray-100">
                {/* Título principal */}
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-extrabold text-gray-900 leading-tight text-center mb-12">
                        El impacto del <span className="text-green-600">hielo en el bienestar</span>
                    </h2>
                </div>

                {/* Contenido de la sección con la imagen a la izquierda */}
                <div className="container mx-auto px-6 lg:flex lg:items-center lg:space-x-12">
                    {/* Imagen a la izquierda */}
                    <div className="lg:w-1/2 relative">
                        <img
                            src="hielo.jpg"
                            alt="Terapia de Hielo"
                            className="rounded-xl shadow-lg w-full object-cover h-[600px]"
                        />
                        <img
                            src="JV.png"
                            alt="Método Wim Hof Logo"
                            className="absolute top-4 left-4 w-24 h-24 rounded-full border-4 border-white shadow-md"
                        />
                    </div>

                    {/* Contenido de texto a la derecha */}
                    <div className="lg:w-1/2 mt-12 lg:mt-0">
                        <p className="text-lg text-gray-700 leading-relaxed mb-10">
                            La terapia de hielo y el{" "}
                            <span className="text-green-600 font-semibold">método Wim Hof</span> son
                            herramientas revolucionarias para fortalecer tu cuerpo, mente y espíritu.
                            Experimenta una conexión profunda contigo mismo mientras mejoras tu salud y
                            bienestar general.
                        </p>
                        <div className="space-y-8">
                            {[
                                {
                                    title: "Mejora la Resiliencia Física",
                                    desc: "El frío extremo entrena tu sistema circulatorio, fortaleciendo tu capacidad para adaptarte a condiciones adversas.",
                                },
                                {
                                    title: "Reducción del Estrés",
                                    desc: "Las técnicas de respiración y exposición al frío ayudan a regular tu sistema nervioso, reduciendo la ansiedad.",
                                },
                                {
                                    title: "Recuperación Muscular",
                                    desc: "El frío reduce la inflamación y acelera la recuperación después del ejercicio intenso.",
                                },
                            ].map((benefit, index) => (
                                <div
                                    key={index}
                                    className="p-6 bg-green-100 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-700">{benefit.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonios */}
            <section className="py-16 bg-gradient-to-r from-green-100 to-green-200 text-center">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-green-900 mb-8">Testimonios</h2>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center p-8">
                        {testimonios.map((testimonial, index) => (
                            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                                <div className="w-24 h-24 mx-auto overflow-hidden rounded-full">
                                    <img
                                        src={testimonial.photo}
                                        alt={`Testimonio de ${testimonial.name}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
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
