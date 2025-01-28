import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function MiguelBlog() {
    const blogPosts = [
        {
            title: 'Reflexiones sobre el Torero: Entre el arte y el sacrificio',
            date: 'Enero 2025',
            content: 'El arte del toreo es una disciplina que no solo requiere destreza física, sino también una profunda conexión con el entorno...',
        },
        {
            title: 'Triatlón: Superando límites personales',
            date: 'Diciembre 2024',
            content: 'El triatlón es una de las pruebas más desafiantes. Correr, nadar y pedalear no solo ponen a prueba el cuerpo, sino también la mente...',
        },
        {
            title: 'Mi experiencia en el Parque de la Salud: Un lugar para el bienestar',
            date: 'Noviembre 2024',
            content: 'Trabajar en el Parque de la Salud ha sido una experiencia enriquecedora. Cada día me recuerda la importancia del bienestar integral...',
        },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-amber-50">
            {/* Header */}
            <header className="bg-green-700 text-white shadow-md h-16 flex items-center px-6">
                <Link to="/" className="flex items-center">
                    <img src="miguel-logo.png" alt="Miguel Román" className="h-12" />
                </Link>
                <nav className="ml-auto flex gap-6 text-sm">
                    <Link to="/" className="hover:underline">Inicio</Link>
                    <Link to="/sobre-mi" className="hover:underline">Sobre mí</Link>
                    <Link to="/contacto" className="hover:underline">Contacto</Link>
                </nav>
            </header>

            {/* Main Content */}
            <main className="flex-grow py-16">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-center text-green-800 mb-8">Blog de Miguel Román</h1>
                    <p className="text-lg text-center text-gray-700 mb-12">
                        Aquí comparto mis pensamientos sobre el toreo, el triatlón y mi trabajo en el Parque de la Salud.
                    </p>

                    {/* Blog Posts */}
                    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {blogPosts.map((post, index) => (
                            <div key={index} className="relative bg-white shadow-lg rounded-xl p-6 border border-gray-200">
                                <h3 className="text-2xl font-semibold text-green-700 mb-4">{post.title}</h3>
                                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                                <p className="text-gray-700 mb-4">{post.content.slice(0, 150)}...</p>
                                <Link to={`/miguel-blog/${index}`} className="text-green-600 hover:text-green-800 font-medium">
                                    Leer más
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-green-700 text-white py-6">
                <div className="container mx-auto flex justify-between items-center">
                    <p className="text-sm">&copy; 2025 Miguel Román. Todos los derechos reservados.</p>
                    <nav className="flex gap-4">
                        <Link to="#" className="hover:underline">Términos</Link>
                        <Link to="#" className="hover:underline">Privacidad</Link>
                    </nav>
                </div>
            </footer>
        </div>
    );
}
