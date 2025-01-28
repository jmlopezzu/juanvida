import React from 'react'; 
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import aliado1 from '@/assets/aliado1.png';
import aliado2 from '@/assets/aliado2.png';
import aliado3 from '@/assets/aliado3.png';
import aliado4 from '@/assets/aliado4.png';
import blogImage1 from '@/assets/migue.jpg';
import blogImage2 from '@/assets/migue.jpg';
import blogImage3 from '@/assets/migue.jpg';

export default function MiguelBlog() {
    const blogPosts = [
        {
            title: 'Reflexiones sobre el Torero: Entre el arte y el sacrificio',
            date: 'Enero 2025',
            content: 'El arte del toreo es una disciplina que no solo requiere destreza física, sino también una profunda conexión con el entorno...',
            image: blogImage1,
        },
        {
            title: 'Triatlón: Superando límites personales',
            date: 'Diciembre 2024',
            content: 'El triatlón es una de las pruebas más desafiantes. Correr, nadar y pedalear no solo ponen a prueba el cuerpo, sino también la mente...',
            image: blogImage2,
        },
        {
            title: 'Mi experiencia en el Parque de la Salud: Un lugar para el bienestar',
            date: 'Noviembre 2024',
            content: 'Trabajar en el Parque de la Salud ha sido una experiencia enriquecedora. Cada día me recuerda la importancia del bienestar integral...',
            image: blogImage3,
        },
    ];

    const aliados = [aliado1, aliado2, aliado3, aliado4];

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
                            <div key={index} className="relative bg-white shadow-lg rounded-lg overflow-hidden">
                                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">{post.title}</h3>
                                    <p className="text-gray-600 mb-2 text-sm">{post.date}</p>
                                    <p className="text-gray-700 mb-4">{post.content.slice(0, 150)}...</p>
                                    <Link to={`/miguel-blog/${index}`} className="text-green-600 font-medium hover:underline">
                                        Leer más
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>


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

