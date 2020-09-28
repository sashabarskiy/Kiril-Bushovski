import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  languages = ["ru", "en", "it"];

  language = "en";

  set(language: string){
    this.language = language[0] + language[1];
    // TODO fare la lingua bielorussa e ucraina
    if(this.language === 'be' || this.language === 'ua')
      this.language = 'ru';
    if(this.language.indexOf(this.language) == -1)
      this.language = 'en';
  }

  dictionary = [];

  get(code: string){
    return this.dictionary[code + " " + this.language];
  }

  constructor() {

    let code = "about";
    this.dictionary[code + " en"] = "About";
    this.dictionary[code + " it"] = "Chi siamo";
    this.dictionary[code + " ru"] = "О нас";

    code = "language";
    this.dictionary[code + " en"] = "Language";
    this.dictionary[code + " it"] = "Lingua";
    this.dictionary[code + " ru"] = "Язык";

    code = "russian";
    this.dictionary[code + " en"] = "Russian";
    this.dictionary[code + " it"] = "Russo";
    this.dictionary[code + " ru"] = "Русский";

    code = "italian";
    this.dictionary[code + " en"] = "Italian";
    this.dictionary[code + " it"] = "Italiano";
    this.dictionary[code + " ru"] = "Итальянский";

    code = "english";
    this.dictionary[code + " en"] = "English";
    this.dictionary[code + " it"] = "Inglese";
    this.dictionary[code + " ru"] = "Английский";

    code = "something will be written here";
    this.dictionary[code + " en"] = "Something will be written here";
    this.dictionary[code + " it"] = "Qualcosa verrà scritto qui";
    this.dictionary[code + " ru"] = "Тут будет что-то написано";

    code = "start changing the world";
    this.dictionary[code + " en"] = "START CHANGING THE WORLD";
    this.dictionary[code + " it"] = "INIZIA A CAMBIARE IL MONDO";
    this.dictionary[code + " ru"] = "НАЧНИТЕ МЕНЯТЬ МИР";

    code = "experiment artifact";
    this.dictionary[code + " en"] = "Experiment Artifact";
    this.dictionary[code + " it"] = "Artefatto dell'esperimento";
    this.dictionary[code + " ru"] = "Артефакт эксперимента";

    code = "long_text_1";
    this.dictionary[code + " en"] = "Our studio was originally created in order to provide possible connections with the creators of the applications they like. Thanks to this, it became possible to advise on the implementation of web products, as an add-on, we began to offer implementation (on favorable terms) and got customers. The idea of a laboratory was born.";
    this.dictionary[code + " it"] = "Il nostro studio è stato originariamente creato per fornire possibili collegamenti con i creatori delle applicazioni che preferiscono. Grazie a questo, è diventato possibile fornire consulenza sull'implementazione di prodotti web, come componente aggiuntivo, abbiamo iniziato a offrire l'implementazione (a condizioni favorevoli) e abbiamo ottenuto clienti. È nata l'idea di un laboratorio.";
    this.dictionary[code + " ru"] = "Наша студия изначально была создана для того, чтобы дать возможными связи с создателями понравившихся им приложений. Благодаря этому появилась возможность консультировать по вопросам реализации веб-продуктов, как дополнение мы начали предлагать реализацию (на выгодных условиях) и заполучили клиентов. Возникла идея лаборатории.";

    code = "long_text_2";
    this.dictionary[code + " en"] = "A painter should begin every canvas with a wash of black, because all things in nature are dark except where\n" +
        "        exposed by the light.";
    this.dictionary[code + " it"] = "Un pittore dovrebbe iniziare ogni tela con una pennellata di nero, perché tutte le cose in natura sono scure tranne dove \n" +
        "        esposto alla luce.";
    this.dictionary[code + " ru"] = "Художник должен начинать каждый холст с размытия черного, потому что все в природе темное, кроме того, где \n" +
        "        выставлено светом.";

    code = "leonardo";
    this.dictionary[code + " en"] = "Leonardo da Vinci";
    this.dictionary[code + " it"] = "Leonardo da Vinci";
    this.dictionary[code + " ru"] = "Леонардо да Винчи";

    code = "sorry_1";
    this.dictionary[code + " en"] = "Sorry, our canvases starts with cookie notifications.";
    this.dictionary[code + " it"] = "Spiacenti, le nostre tele iniziano con le notifiche dei cookie.";
    this.dictionary[code + " ru"] = "К сожалению, наши холсты начинаются с уведомлений о файлах cookie.";

    code = "contact";
    this.dictionary[code + " en"] = "contact";
    this.dictionary[code + " it"] = "contatto";
    this.dictionary[code + " ru"] = "контакт";

    code = "please order time";
    this.dictionary[code + " en"] = "please order time";
    this.dictionary[code + " it"] = "si prega di ordinare il tempo";
    this.dictionary[code + " ru"] = "пожалуйста, заказывайте время";

    code = "read more";
    this.dictionary[code + " en"] = "Read more";
    this.dictionary[code + " it"] = "Leggi di più";
    this.dictionary[code + " ru"] = "Читать далее";

    code = "buy";
    this.dictionary[code + " en"] = "Buy";
    this.dictionary[code + " it"] = "Acquistare";
    this.dictionary[code + " ru"] = "Купить";

    code = "3d cube image slider";
    this.dictionary[code + " en"] = "3D Cube Image Slider";
    this.dictionary[code + " it"] = "Cursore immagine cubo 3D";
    this.dictionary[code + " ru"] = "Слайдер изображения 3D-куба";

    code = "click the image to show next one";
    this.dictionary[code + " en"] = "Click the image to show next one";
    this.dictionary[code + " it"] = "Fare clic sull'immagine per visualizzare quella successiva";
    this.dictionary[code + " ru"] = "Щелкните изображение, чтобы просмотреть следующее";

    code = "images credit";
    this.dictionary[code + " en"] = "Images credit";
    this.dictionary[code + " it"] = "Credito immagini";
    this.dictionary[code + " ru"] = "Кредит на изображения";

    code = "History of our studio";
    this.dictionary[code + " en"] = "History of our studio";
    this.dictionary[code + " it"] = "Storia del nostro studio";
    this.dictionary[code + " ru"] = "История нашей студии";

    code = "A secret military project endangers Neo-Tokyo when it turns a biker gang member into a rampaging psychic psychopath that only two teenagers, and a group of psychics can stop.";
    this.dictionary[code + " en"] = "A secret military project endangers Neo-Tokyo when it turns a biker gang member into a rampaging psychic psychopath that only two teenagers, and a group of psychics can stop.";
    this.dictionary[code + " it"] = "Un progetto militare segreto mette in pericolo Neo-Tokyo quando trasforma un membro di una banda di motociclisti in uno psicopatico psichico scatenato che solo due adolescenti e un gruppo di sensitivi possono fermare.";
    this.dictionary[code + " ru"] = "Секретный военный проект подвергает Нео-Токио опасности, когда он превращает члена байкерской банды в неистового психопата, которого могут остановить только двое подростков и группа экстрасенсов.";

    code = "laboratory";
    this.dictionary[code + " en"] = "laboratory";
    this.dictionary[code + " it"] = "laboratorio";
    this.dictionary[code + " ru"] = "лаборатория";

    code = "produces 100% under 10% conditions";
    this.dictionary[code + " en"] = "produces 100% under 10% conditions";
    this.dictionary[code + " it"] = "produce il 100% in condizioni del 10%";
    this.dictionary[code + " ru"] = "производит 100% в условиях 10%";

    code = "This project is designed to ensure the constant activity of our employees, and give the opportunity to create your own personal project almost free of charge to anyone.";
    this.dictionary[code + " en"] = "This project is designed to ensure the constant activity of our employees, and give the opportunity to create your own personal project almost free of charge to anyone.";
    this.dictionary[code + " it"] = "Questo progetto è pensato per garantire l'attività costante dei nostri dipendenti, e dare la possibilità di creare il proprio progetto personale quasi gratuitamente a chiunque.";
    this.dictionary[code + " ru"] = "Этот проект призван обеспечить постоянную активность наших сотрудников, и дать возможность создать свой личный  проект практически бесплатно любому.";

    code = "portfolio";
    this.dictionary[code + " en"] = "portfolio";
    this.dictionary[code + " it"] = "portafoglio";
    this.dictionary[code + " ru"] = "портфолио";

    code = "Products of our studio";
    this.dictionary[code + " en"] = "Products of our studio";
    this.dictionary[code + " it"] = "Prodotti del nostro studio";
    this.dictionary[code + " ru"] = "Продукция нашей студии";

    code = "A blade runner must pursue and try to terminate four replicants who stole a ship in space and have returned to Earth to find their creator.";
    this.dictionary[code + " en"] = "A blade runner must pursue and try to terminate four replicants who stole a ship in space and have returned to Earth to find their creator.";
    this.dictionary[code + " it"] = "Un blade runner deve inseguire e cercare di eliminare quattro replicanti che hanno rubato una nave nello spazio e sono tornati sulla Terra per trovare il loro creatore.";
    this.dictionary[code + " ru"] = "Бегущий по лезвию должен преследовать и пытаться уничтожить четырех репликантов, которые украли корабль в космосе и вернулись на Землю, чтобы найти своего создателя.";

    code = "shop";
    this.dictionary[code + " en"] = "shop";
    this.dictionary[code + " it"] = "negozio";
    this.dictionary[code + " ru"] = "магазин";

    code = "we sell projects";
    this.dictionary[code + " en"] = "we sell projects";
    this.dictionary[code + " it"] = "vendiamo progetti";
    this.dictionary[code + " ru"] = "мы продаем проекты";

    code = "Marty McFly, a 17-year-old into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.";
    this.dictionary[code + " en"] = "Marty McFly, a 17-year-old into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.";
    this.dictionary[code + " it"] = "Marty McFly, un diciassettenne nel passato in una DeLorean che viaggia nel tempo inventata dal suo caro amico, lo scienziato anticonformista Doc Brown.";
    this.dictionary[code + " ru"] = "Марти Макфлай, 17-летний парень, погрузился в прошлое в путешествии во времени DeLorean, изобретенном его близким другом, ученым-индивидуалистом Доком Брауном.";

    code = "contacts";
    this.dictionary[code + " en"] = "contacts";
    this.dictionary[code + " it"] = "contatti";
    this.dictionary[code + " ru"] = "контакты";

    code = "constant communication with us";
    this.dictionary[code + " en"] = "constant communication with us";
    this.dictionary[code + " it"] = "comunicazione costante con noi";
    this.dictionary[code + " ru"] = "постоянная связь с нами";

    code = "You can solve any questions related to our studio in a convenient way for you by simply contacting any of the places indicated by us.";
    this.dictionary[code + " en"] = "You can solve any questions related to our studio in a convenient way for you by simply contacting any of the places indicated by us.";
    this.dictionary[code + " it"] = "Puoi risolvere qualsiasi domanda relativa al nostro studio in modo conveniente per te semplicemente contattando uno dei luoghi da noi indicati.";
    this.dictionary[code + " ru"] = "Вы можете  удобным для вас способом  решить любые вопросы связанные с нашей студией просто  обратившись влюбое из указанных нами мест.";

    code = "Your Name:";
    this.dictionary[code + " en"] = "Your  Name:";
    this.dictionary[code + " it"] = "Il tuo nome:";
    this.dictionary[code + " ru"] = "Ваше имя:";

    code = "Your Email:";
    this.dictionary[code + " en"] = "Your Email:";
    this.dictionary[code + " it"] = "La tua email:";
    this.dictionary[code + " ru"] = "Ваша почта:";

    code = "Your Message:";
    this.dictionary[code + " en"] = "Your Message:";
    this.dictionary[code + " it"] = "Il tuo messaggio:";
    this.dictionary[code + " ru"] = "Ваше сообщение:";

    code = "Submit";
    this.dictionary[code + " en"] = "Submit";
    this.dictionary[code + " it"] = "Invia";
    this.dictionary[code + " ru"] = "Отправить";

    code = "";
    this.dictionary[code + " en"] = "";
    this.dictionary[code + " it"] = "";
    this.dictionary[code + " ru"] = "";

  }

}
