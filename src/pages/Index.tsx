import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50" style={{ fontFamily: "'Open Sans', sans-serif" }}>
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#FF6B6B] via-[#45B7D1] to-[#4ECDC4] py-24 px-6 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            
            {/* Photo */}
            <div className="animate-scale-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-3xl blur-xl"></div>
                <img 
                  src="https://cdn.poehali.dev/files/8db455a5-5a4a-4cef-a950-265be9c1cdc6.jpg" 
                  alt="Румянцев Максим" 
                  className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-3xl shadow-2xl border-4 border-white/50 hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Greeting */}
            <div className="text-white text-center md:text-left animate-slide-up">
              <h1 className="text-5xl md:text-7xl font-bold mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Привет! 👋
              </h1>
              <h2 className="text-3xl md:text-5xl font-semibold mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Я Румянцев Максим
              </h2>
              <p className="text-xl md:text-2xl text-white/90 font-light">
                Добро пожаловать в моё портфолио
              </p>
            </div>

          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
      </section>

      {/* About Me Section */}
      <section className="py-20 px-6 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Icon name="User" size={36} className="text-[#FF6B6B]" />
            <h2 className="text-4xl md:text-5xl font-bold text-[#2D3436]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Обо мне
            </h2>
          </div>

          <Card className="border-none shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 animate-slide-up">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                
                <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-br from-[#FF6B6B]/10 to-[#FF6B6B]/5 hover:scale-105 transition-transform">
                  <div className="w-16 h-16 rounded-full bg-[#FF6B6B]/20 flex items-center justify-center mb-4">
                    <Icon name="Briefcase" size={32} className="text-[#FF6B6B]" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Опыт</h3>
                  <p className="text-gray-600">Развиваюсь в выбранной сфере</p>
                </div>

                <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-br from-[#45B7D1]/10 to-[#45B7D1]/5 hover:scale-105 transition-transform">
                  <div className="w-16 h-16 rounded-full bg-[#45B7D1]/20 flex items-center justify-center mb-4">
                    <Icon name="Target" size={32} className="text-[#45B7D1]" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Цели</h3>
                  <p className="text-gray-600">Стремлюсь к постоянному росту</p>
                </div>

                <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-br from-[#4ECDC4]/10 to-[#4ECDC4]/5 hover:scale-105 transition-transform">
                  <div className="w-16 h-16 rounded-full bg-[#4ECDC4]/20 flex items-center justify-center mb-4">
                    <Icon name="Lightbulb" size={32} className="text-[#4ECDC4]" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Подход</h3>
                  <p className="text-gray-600">Креативное решение задач</p>
                </div>

              </div>

              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Я — целеустремленный специалист, который стремится к профессиональному развитию и достижению новых высот. 
                  Мой подход основан на внимании к деталям, ответственности и желании создавать качественные результаты.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  В своей работе я ценю командное взаимодействие, открытость к новым идеям и постоянное обучение. 
                  Готов принимать вызовы и находить нестандартные решения.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Icon name="GraduationCap" size={36} className="text-[#45B7D1]" />
            <h2 className="text-4xl md:text-5xl font-bold text-[#2D3436]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Образование
            </h2>
          </div>

          <div className="space-y-6">
            
            {/* Education Item 1 */}
            <Card className="border-l-4 border-l-[#FF6B6B] shadow-lg hover:shadow-xl transition-all duration-300 bg-white animate-slide-up">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[#2D3436] mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      Высшее образование
                    </h3>
                    <p className="text-xl text-gray-700 font-semibold mb-1">Название учебного заведения</p>
                    <p className="text-gray-600">Специальность / Направление подготовки</p>
                  </div>
                  <Badge className="bg-gradient-to-r from-[#FF6B6B] to-[#45B7D1] text-white px-4 py-2 text-sm">
                    2020 - 2024
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline" className="border-[#45B7D1] text-[#45B7D1]">Диплом</Badge>
                  <Badge variant="outline" className="border-[#4ECDC4] text-[#4ECDC4]">Бакалавр</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Education Item 2 */}
            <Card className="border-l-4 border-l-[#45B7D1] shadow-lg hover:shadow-xl transition-all duration-300 bg-white animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[#2D3436] mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      Дополнительное образование
                    </h3>
                    <p className="text-xl text-gray-700 font-semibold mb-1">Курсы / Сертификаты</p>
                    <p className="text-gray-600">Описание программы обучения</p>
                  </div>
                  <Badge className="bg-gradient-to-r from-[#45B7D1] to-[#4ECDC4] text-white px-4 py-2 text-sm">
                    2023 - 2024
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline" className="border-[#FF6B6B] text-[#FF6B6B]">Сертификат</Badge>
                  <Badge variant="outline" className="border-[#4ECDC4] text-[#4ECDC4]">Повышение квалификации</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Education Item 3 */}
            <Card className="border-l-4 border-l-[#4ECDC4] shadow-lg hover:shadow-xl transition-all duration-300 bg-white animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[#2D3436] mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      Среднее образование
                    </h3>
                    <p className="text-xl text-gray-700 font-semibold mb-1">Школа / Лицей / Гимназия</p>
                    <p className="text-gray-600">Профиль обучения</p>
                  </div>
                  <Badge className="bg-gradient-to-r from-[#4ECDC4] to-[#FF6B6B] text-white px-4 py-2 text-sm">
                    2015 - 2020
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline" className="border-[#45B7D1] text-[#45B7D1]">Аттестат</Badge>
                  <Badge variant="outline" className="border-[#FF6B6B] text-[#FF6B6B]">С отличием</Badge>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D3436] text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Румянцев Максим
          </h3>
          <p className="text-gray-300 mb-6">Портфолио © 2024</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF6B6B] transition-colors">
              <Icon name="Mail" size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#45B7D1] transition-colors">
              <Icon name="Linkedin" size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#4ECDC4] transition-colors">
              <Icon name="Github" size={20} />
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Index;
