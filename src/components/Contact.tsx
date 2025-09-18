import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    toast.success('Obrigado pelo seu interesse! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      title: "Telefone",
      content: "(11) 9999-9999",
      description: "Segunda a sexta, 8h às 18h"
    },
    {
      icon: <Mail className="h-6 w-6 text-purple-600" />,
      title: "E-mail",
      content: "contato@dreambringers.com.br",
      description: "Resposta em até 2 horas"
    },
    {
      icon: <MapPin className="h-6 w-6 text-green-600" />,
      title: "Endereço",
      content: "São Paulo, SP",
      description: "Atendimento em todo Brasil"
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-pink-600" />,
      title: "WhatsApp",
      content: "(11) 99999-9999",
      description: "Suporte instantâneo"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">
            Fale Conosco
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Pronto para transformar
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              seu negócio?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entre em contato conosco e descubra como nossas soluções podem 
            impulsionar o crescimento da sua loja.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Solicite uma Demonstração Gratuita
              </CardTitle>
              <CardDescription className="text-gray-600">
                Preencha o formulário e nossa equipe entrará em contato em até 2 horas úteis.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Seu nome completo"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Seu e-mail"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="phone"
                      placeholder="Seu telefone/WhatsApp"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Input
                      name="company"
                      placeholder="Nome da sua loja"
                      value={formData.company}
                      onChange={handleChange}
                      className="h-12"
                    />
                  </div>
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Conte-nos sobre sua loja e suas necessidades..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="cursor-pointer w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-lg"
                >
                  Solicitar Demonstração Gratuita
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-gray-50 rounded-lg">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {info.title}
                        </h3>
                        <p className="text-gray-900 font-medium mb-1">
                          {info.content}
                        </p>
                        <p className="text-sm text-gray-600">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Info */}
            <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 mr-3" />
                  <h3 className="text-xl font-semibold">Horário de Atendimento</h3>
                </div>
                <div className="space-y-2 text-blue-100">
                  <p>Segunda a Sexta: 8h às 18h</p>
                  <p>Sábado: 9h às 13h</p>
                  <p>WhatsApp: 24/7 para emergências</p>
                </div>
              </CardContent>
            </Card>

            {/* Guarantee */}
            <Card className="border-0 shadow-lg bg-green-50 border-green-200">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  🎯 Garantia de Satisfação
                </h3>
                <p className="text-green-700">
                  30 dias para testar nossas soluções. Se não ficar satisfeito, 
                  devolvemos 100% do seu investimento.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}