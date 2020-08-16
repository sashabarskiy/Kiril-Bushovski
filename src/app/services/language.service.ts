import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  language = "en-EN";

  set(language: string){
    this.language = language;
  }

  dictionary = [];

  get(code: string){
    return this.dictionary[code + " " + this.language];
  }

  constructor() {

    let code = "about";
    this.dictionary[code + " en-EN"] = "About";
    this.dictionary[code + " it-IT"] = "Chi siamo";
    this.dictionary[code + " ru-RU"] = "О нас";

    code = "language";
    this.dictionary[code + " en-EN"] = "Language";
    this.dictionary[code + " it-IT"] = "Lingua";
    this.dictionary[code + " ru-RU"] = "Язык";

    code = "russian";
    this.dictionary[code + " en-EN"] = "Russian";
    this.dictionary[code + " it-IT"] = "Russo";
    this.dictionary[code + " ru-RU"] = "Русский";

    code = "italian";
    this.dictionary[code + " en-EN"] = "Italian";
    this.dictionary[code + " it-IT"] = "Italiano";
    this.dictionary[code + " ru-RU"] = "Итальянский";

    code = "english";
    this.dictionary[code + " en-EN"] = "English";
    this.dictionary[code + " it-IT"] = "Inglese";
    this.dictionary[code + " ru-RU"] = "Английский";

    code = "something will be written here";
    this.dictionary[code + " en-EN"] = "Something will be written here";
    this.dictionary[code + " it-IT"] = "Qualcosa verrà scritto qui";
    this.dictionary[code + " ru-RU"] = "Тут будет что-то написано";

    code = "start changing the world";
    this.dictionary[code + " en-EN"] = "START CHANGING THE WORLD";
    this.dictionary[code + " it-IT"] = "INIZIA A CAMBIARE IL MONDO";
    this.dictionary[code + " ru-RU"] = "НАЧНИТЕ МЕНЯТЬ МИР";

    code = "experiment artifact";
    this.dictionary[code + " en-EN"] = "Experiment Artifact";
    this.dictionary[code + " it-IT"] = "Artefatto dell'esperimento";
    this.dictionary[code + " ru-RU"] = "Артефакт эксперимента";

    code = "long_text_1";
    this.dictionary[code + " en-EN"] = "Our studio was originally created in order to provide possible connections with the creators of the applications they like. Thanks to this, it became possible to advise on the implementation of web products, as an add-on, we began to offer implementation (on favorable terms) and got customers. The idea of a laboratory was born.";
    this.dictionary[code + " it-IT"] = "Il nostro studio è stato originariamente creato per fornire possibili collegamenti con i creatori delle applicazioni che preferiscono. Grazie a questo, è diventato possibile fornire consulenza sull'implementazione di prodotti web, come componente aggiuntivo, abbiamo iniziato a offrire l'implementazione (a condizioni favorevoli) e abbiamo ottenuto clienti. È nata l'idea di un laboratorio.";
    this.dictionary[code + " ru-RU"] = "Наша студия изначально была создана для того, чтобы дать возможными связи с создателями понравившихся им приложений. Благодаря этому появилась возможность консультировать по вопросам реализации веб-продуктов, как дополнение мы начали предлагать реализацию (на выгодных условиях) и заполучили клиентов. Возникла идея лаборатории.";

    code = "long_text_2";
    this.dictionary[code + " en-EN"] = "A painter should begin every canvas with a wash of black, because all things in nature are dark except where\n" +
        "        exposed by the light.";
    this.dictionary[code + " it-IT"] = "Un pittore dovrebbe iniziare ogni tela con una pennellata di nero, perché tutte le cose in natura sono scure tranne dove \n" +
        "        esposto alla luce.";
    this.dictionary[code + " ru-RU"] = "Художник должен начинать каждый холст с размытия черного, потому что все в природе темное, кроме того, где \n" +
        "        выставлено светом.";

    code = "leonardo";
    this.dictionary[code + " en-EN"] = "Leonardo da Vinci";
    this.dictionary[code + " it-IT"] = "Leonardo da Vinci";
    this.dictionary[code + " ru-RU"] = "Леонардо да Винчи";

    code = "sorry_1";
    this.dictionary[code + " en-EN"] = "Sorry, our canvases starts with cookie notifications.";
    this.dictionary[code + " it-IT"] = "Spiacenti, le nostre tele iniziano con le notifiche dei cookie.";
    this.dictionary[code + " ru-RU"] = "К сожалению, наши холсты начинаются с уведомлений о файлах cookie.";

    code = "contact";
    this.dictionary[code + " en-EN"] = "contact";
    this.dictionary[code + " it-IT"] = "contatto";
    this.dictionary[code + " ru-RU"] = "контакт";

    code = "please order time";
    this.dictionary[code + " en-EN"] = "please order time";
    this.dictionary[code + " it-IT"] = "si prega di ordinare il tempo";
    this.dictionary[code + " ru-RU"] = "пожалуйста, заказывайте время";

    code = "read more";
    this.dictionary[code + " en-EN"] = "Read more";
    this.dictionary[code + " it-IT"] = "Leggi di più";
    this.dictionary[code + " ru-RU"] = "Читать далее";

    code = "buy";
    this.dictionary[code + " en-EN"] = "Buy";
    this.dictionary[code + " it-IT"] = "Acquistare";
    this.dictionary[code + " ru-RU"] = "Купить";

    code = "3d cube image slider";
    this.dictionary[code + " en-EN"] = "3D Cube Image Slider";
    this.dictionary[code + " it-IT"] = "Cursore immagine cubo 3D";
    this.dictionary[code + " ru-RU"] = "Слайдер изображения 3D-куба";

    code = "click the image to show next one";
    this.dictionary[code + " en-EN"] = "Click the image to show next one";
    this.dictionary[code + " it-IT"] = "Fare clic sull'immagine per visualizzare quella successiva";
    this.dictionary[code + " ru-RU"] = "Щелкните изображение, чтобы просмотреть следующее";

    code = "images credit";
    this.dictionary[code + " en-EN"] = "Images credit";
    this.dictionary[code + " it-IT"] = "Credito immagini";
    this.dictionary[code + " ru-RU"] = "Кредит на изображения";

    code = "History of our studio";
    this.dictionary[code + " en-EN"] = "History of our studio";
    this.dictionary[code + " it-IT"] = "Storia del nostro studio";
    this.dictionary[code + " ru-RU"] = "История нашей студии";

    code = "A secret military project endangers Neo-Tokyo when it turns a biker gang member into a rampaging psychic psychopath that only two teenagers, and a group of psychics can stop.";
    this.dictionary[code + " en-EN"] = "A secret military project endangers Neo-Tokyo when it turns a biker gang member into a rampaging psychic psychopath that only two teenagers, and a group of psychics can stop.";
    this.dictionary[code + " it-IT"] = "Un progetto militare segreto mette in pericolo Neo-Tokyo quando trasforma un membro di una banda di motociclisti in uno psicopatico psichico scatenato che solo due adolescenti e un gruppo di sensitivi possono fermare.";
    this.dictionary[code + " ru-RU"] = "Секретный военный проект подвергает Нео-Токио опасности, когда он превращает члена байкерской банды в неистового психопата, которого могут остановить только двое подростков и группа экстрасенсов.";

    code = "laboratory";
    this.dictionary[code + " en-EN"] = "laboratory";
    this.dictionary[code + " it-IT"] = "laboratorio";
    this.dictionary[code + " ru-RU"] = "лаборатория";

    code = "produces 100% under 10% conditions";
    this.dictionary[code + " en-EN"] = "produces 100% under 10% conditions";
    this.dictionary[code + " it-IT"] = "produce il 100% in condizioni del 10%";
    this.dictionary[code + " ru-RU"] = "производит 100% в условиях 10%";

    code = "This project is designed to ensure the constant activity of our employees, and give the opportunity to create your own personal project almost free of charge to anyone.";
    this.dictionary[code + " en-EN"] = "This project is designed to ensure the constant activity of our employees, and give the opportunity to create your own personal project almost free of charge to anyone.";
    this.dictionary[code + " it-IT"] = "Questo progetto è pensato per garantire l'attività costante dei nostri dipendenti, e dare la possibilità di creare il proprio progetto personale quasi gratuitamente a chiunque.";
    this.dictionary[code + " ru-RU"] = "Этот проект призван обеспечить постоянную активность наших сотрудников, и дать возможность создать свой личный  проект практически бесплатно любому.";

    code = "portfolio";
    this.dictionary[code + " en-EN"] = "portfolio";
    this.dictionary[code + " it-IT"] = "portafoglio";
    this.dictionary[code + " ru-RU"] = "портфолио";

    code = "Products of our studio";
    this.dictionary[code + " en-EN"] = "Products of our studio";
    this.dictionary[code + " it-IT"] = "Prodotti del nostro studio";
    this.dictionary[code + " ru-RU"] = "Продукция нашей студии";

    code = "A blade runner must pursue and try to terminate four replicants who stole a ship in space and have returned to Earth to find their creator.";
    this.dictionary[code + " en-EN"] = "A blade runner must pursue and try to terminate four replicants who stole a ship in space and have returned to Earth to find their creator.";
    this.dictionary[code + " it-IT"] = "Un blade runner deve inseguire e cercare di eliminare quattro replicanti che hanno rubato una nave nello spazio e sono tornati sulla Terra per trovare il loro creatore.";
    this.dictionary[code + " ru-RU"] = "Бегущий по лезвию должен преследовать и пытаться уничтожить четырех репликантов, которые украли корабль в космосе и вернулись на Землю, чтобы найти своего создателя.";

    code = "shop";
    this.dictionary[code + " en-EN"] = "shop";
    this.dictionary[code + " it-IT"] = "negozio";
    this.dictionary[code + " ru-RU"] = "магазин";

    code = "we sell projects";
    this.dictionary[code + " en-EN"] = "we sell projects";
    this.dictionary[code + " it-IT"] = "vendiamo progetti";
    this.dictionary[code + " ru-RU"] = "мы продаем проекты";

    code = "Marty McFly, a 17-year-old into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.";
    this.dictionary[code + " en-EN"] = "Marty McFly, a 17-year-old into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.";
    this.dictionary[code + " it-IT"] = "Marty McFly, un diciassettenne nel passato in una DeLorean che viaggia nel tempo inventata dal suo caro amico, lo scienziato anticonformista Doc Brown.";
    this.dictionary[code + " ru-RU"] = "Марти Макфлай, 17-летний парень, погрузился в прошлое в путешествии во времени DeLorean, изобретенном его близким другом, ученым-индивидуалистом Доком Брауном.";

    code = "contacts";
    this.dictionary[code + " en-EN"] = "contacts";
    this.dictionary[code + " it-IT"] = "contatti";
    this.dictionary[code + " ru-RU"] = "контакты";

    code = "constant communication with us";
    this.dictionary[code + " en-EN"] = "constant communication with us";
    this.dictionary[code + " it-IT"] = "comunicazione costante con noi";
    this.dictionary[code + " ru-RU"] = "постоянная связь с нами";

    code = "You can solve any questions related to our studio in a convenient way for you by simply contacting any of the places indicated by us.";
    this.dictionary[code + " en-EN"] = "You can solve any questions related to our studio in a convenient way for you by simply contacting any of the places indicated by us.";
    this.dictionary[code + " it-IT"] = "Puoi risolvere qualsiasi domanda relativa al nostro studio in modo conveniente per te semplicemente contattando uno dei luoghi da noi indicati.";
    this.dictionary[code + " ru-RU"] = "Вы можете  удобным для вас способом  решить любые вопросы связанные с нашей студией просто  обратившись влюбое из указанных нами мест.";

    code = "";
    this.dictionary[code + " en-EN"] = "";
    this.dictionary[code + " it-IT"] = "";
    this.dictionary[code + " ru-RU"] = "";

  }

}
