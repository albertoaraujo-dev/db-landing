import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                DreamBringers
              </h3>
              <p className="text-gray-300 text-lg mb-4">
                Tecnologia a serviço do seu sonho
              </p>
              <p className="text-gray-400 leading-relaxed">
                Transformamos pequenos negócios em grandes sucessos através de soluções 
                tecnológicas integradas. Cardápio online, ERP e PDV em uma única plataforma.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 hover:bg-pink-600 rounded-lg transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 hover:bg-blue-500 rounded-lg transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 hover:bg-blue-400 rounded-lg transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="cursor-pointer text-gray-400 hover:text-white transition-colors duration-300 text-left"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="cursor-pointer text-gray-400 hover:text-white transition-colors duration-300 text-left"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="cursor-pointer text-gray-400 hover:text-white transition-colors duration-300 text-left"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="cursor-pointer text-gray-400 hover:text-white transition-colors duration-300 text-left"
                >
                  Contato
                </button>
              </li>
              <li>
                <a href="#" className="cursor-pointer text-gray-400 hover:text-white transition-colors duration-300">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="cursor-pointer text-gray-400 hover:text-white transition-colors duration-300">
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-purple-400" />
                <span className="text-gray-400">contato@dreambringers.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-green-400" />
                <span className="text-gray-400">São Paulo, SP</span>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-6">
              <h5 className="font-medium text-white mb-2">Horário de Atendimento</h5>
              <div className="text-sm text-gray-400 space-y-1">
                <p>Segunda a Sexta: 8h às 18h</p>
                <p>Sábado: 9h às 13h</p>
                <p>WhatsApp 24/7</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-4">
              Fique por dentro das novidades
            </h4>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Receba dicas exclusivas, atualizações de produtos e conteúdos sobre gestão de negócios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 w-full sm:w-auto"
              />
              <button className="cursor-pointer px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-medium transition-all duration-300 w-full sm:w-auto">
                Inscrever-se
              </button>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-800" />

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} DreamBringers. Todos os direitos reservados.
          </div>
          
          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              🔒 Site Seguro
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              ⚡ Suporte 24/7
            </Badge>
          </div>
        </div>
      </div>
    </footer>
  );
}