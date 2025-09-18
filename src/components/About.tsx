import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, Lightbulb, Heart } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Foco no Cliente",
      description: "Cada solução é pensada para resolver problemas reais dos pequenos empreendedores."
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "Parceria",
      description: "Não somos apenas fornecedores, somos parceiros no crescimento do seu negócio."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-yellow-500" />,
      title: "Inovação",
      description: "Sempre buscamos as melhores tecnologias para manter você à frente da concorrência."
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Paixão",
      description: "Acreditamos no poder dos sonhos e trabalhamos para torná-los realidade."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">
              Sobre a DreamBringers
            </Badge>
            
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Transformamos
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                sonhos em realidade
              </span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600">
              <p>
                Na DreamBringers, acreditamos que todo empreendedor merece ter acesso às melhores 
                ferramentas tecnológicas para fazer seu negócio crescer. Nascemos da necessidade 
                de democratizar a tecnologia para pequenas lojas e negócios locais.
              </p>
              
              <p>
                Nossa missão é simples: fornecer soluções completas, integradas e acessíveis 
                que permitam aos pequenos empreendedores competir de igual para igual com as 
                grandes empresas.
              </p>
              
              <p>
                Com mais de 500 lojas atendidas e uma taxa de satisfação de 99%, continuamos 
                inovando e evoluindo para atender às necessidades do mercado brasileiro.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-1">5+</div>
                <div className="text-gray-600">Anos de Experiência</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-1">50+</div>
                <div className="text-gray-600">Cidades Atendidas</div>
              </div>
            </div>
          </div>

          {/* Right Content - Values */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center lg:text-left">
              Nossos Valores
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-gray-50 rounded-full">
                        {value.icon}
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              "Tecnologia não deve ser um privilégio, mas um direito de todo empreendedor."
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Esta é a filosofia que nos move todos os dias. Cada linha de código, cada funcionalidade, 
              cada atendimento é pensado para tornar a tecnologia mais acessível e eficaz para você.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}