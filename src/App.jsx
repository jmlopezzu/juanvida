import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Zap, Heart } from 'lucide-react';
import JV from '@/assets/JV.png';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
        <img src={JV} alt="Juan Vida Yoga" className="h-12 mt-12" />
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Cursos
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Eventos
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Productos
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contacto
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Encuentra paz en cada respiración
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Descubre la armonía interior con nuestros cursos de yoga personalizados.
                </p>
              </div>
              <img
                src="jvy.jpeg"
                alt="Practicante de yoga en un entorno sereno"
                className="w-full max-w-lg rounded-lg shadow-lg"
              />
              <div className="space-x-4">
                <Button>
                  Empieza ahora
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline">Más información</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Beneficios de Practicar Yoga</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-3 text-center">
                <CheckCircle className="h-10 w-10 text-green-500" />
                <h3 className="text-xl font-bold">Reducción del Estrés</h3>
                <p className="text-gray-500 dark:text-gray-400">Calma tu mente y cuerpo a través de la meditación guiada.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <Zap className="h-10 w-10 text-purple-500" />
                <h3 className="text-xl font-bold">Conexión Interior</h3>
                <p className="text-gray-500 dark:text-gray-400">Encuentra balance y energía con prácticas holísticas.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <Heart className="h-10 w-10 text-pink-500" />
                <h3 className="text-xl font-bold">Bienestar Físico</h3>
                <p className="text-gray-500 dark:text-gray-400">Fortalece tu cuerpo con posturas suaves y desafiantes.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">¿Listo para transformar tu vida?</h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Únete a nuestra comunidad de bienestar y comienza tu viaje hacia la paz interior.
                </p>
              </div>
              <img
                src="flow.jpg"
                alt="Grupo disfrutando de una clase de yoga"
                className="w-full max-w-lg rounded-lg shadow-lg"
              />
              <Button size="lg">
                Inicia tu prueba gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2025 Juan Vida Yoga. Todos los derechos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Términos de Servicio
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacidad
          </Link>
        </nav>
      </footer>
    </div>
  );
}
