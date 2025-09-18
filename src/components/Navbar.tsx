import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Logo from '/logo.svg'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={Logo} alt="Logotipo do Site" className='h-16'/>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={() => scrollToSection('home')}
                className="cursor-pointer text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="cursor-pointer text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="cursor-pointer text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="cursor-pointer text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contato
              </button>
              <Button onClick={() => scrollToSection('contact')} className="cursor-pointer ml-4">
                Demonstração Gratuita
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="cursor-pointer text-gray-700 hover:text-blue-600 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-1 border-gray-300 absolute left-0 w-full">
              <button
                onClick={() => scrollToSection('home')}
                className="cursor-pointer text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="cursor-pointer text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="cursor-pointer text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="cursor-pointer text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                Contato
              </button>
              <div className="cursor-pointer px-3 py-2">
                <Button onClick={() => scrollToSection('contact')} className="w-full">
                  Demonstração Gratuita
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}