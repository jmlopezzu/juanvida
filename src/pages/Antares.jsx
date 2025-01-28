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
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <header className="bg-black text-white shadow-md h-16 flex items-center px-4">
                <Link to="/" className="flex items-center">
                    <img src="miguel-logo.png" alt="Miguel Román" className="h-12" />
                </Link>
            </header>

            {/* Main Content */}
            <main className="flex-grow py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Blog de Miguel Román</h1>
                    <p className="text-lg text-center text-gray-700 mb-12">
                        Aquí comparto mis pensamientos sobre el toreo, el triatlón y mi trabajo en el Parque de la Salud.
                    </p>

                    {/* Blog Posts */}
                    <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
                        {blogPosts.map((post, index) => (
                            <div key={index} className="relative bg-white shadow-lg rounded-lg p-6">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{post.title}</h3>
                                <p className="text-gray-600 mb-4">{post.date}</p>
                                <p className="text-gray-700">{post.content.slice(0, 150)}...</p>
                                <Link to={`/miguel-blog/${index}`} className="text-green-600 mt-4 inline-block">
                                    Leer más
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-black text-white py-6">
                <div className="container mx-auto flex justify-between">
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
