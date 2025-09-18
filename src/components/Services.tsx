import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, BarChart3, CreditCard, Check } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <ShoppingCart className="h-12 w-12 text-blue-600" />,
      title: "Cardápio Online",
      description: "Plataforma completa para pequenas lojas venderem seus produtos online",
      features: [
        "Catálogo de produtos personalizado",
        "Gestão de estoque em tempo real",
        "Pedidos via WhatsApp integrado",
        "Design responsivo e moderno",
        "Sem taxa de setup"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-purple-600" />,
      title: "ERP Integrado",
      description: "Sistema completo de gestão empresarial para otimizar seus processos",
      features: [
        "Controle financeiro completo",
        "Gestão de fornecedores",
        "Relatórios em tempo real",
        "Controle de vendas e compras",
        "Dashboard intuitivo"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <CreditCard className="h-12 w-12 text-pink-600" />,
      title: "PDV Moderno",
      description: "Ponto de venda completo e fácil de usar para sua loja física",
      features: [
        "Interface intuitiva e rápida",
        "Múltiplas formas de pagamento",
        "Impressão de cupons fiscais",
        "Sincronização com estoque",
        "Funciona offline"
      ],
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">
            Nossas Soluções
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Tudo que sua loja precisa
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              em um só lugar
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções integradas que crescem com seu negócio. Do online ao físico, 
            temos as ferramentas certas para impulsionar suas vendas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white"
            >
              {/* Gradient Background */}
              <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${service.color}`} />
              
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gray-50 rounded-full">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Integration Message */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Tudo Integrado, Tudo Sincronizado
            </h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Nossos sistemas trabalham juntos para que você tenha uma visão completa do seu negócio. 
              Vendas online e físicas, estoque, financeiro - tudo em perfeita harmonia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}