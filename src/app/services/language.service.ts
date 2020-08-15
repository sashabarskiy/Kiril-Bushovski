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

    code = "";
    this.dictionary[code + " en-EN"] = "";
    this.dictionary[code + " it-IT"] = "";
    this.dictionary[code + " ru-RU"] = "История нашей студии";

    code = "";
    this.dictionary[code + " en-EN"] = "";
    this.dictionary[code + " it-IT"] = "A secret military project endangers Neo-Tokyo when it turns a biker gang member into a rampaging psychic psychopath that only two teenagers, and a group of psychics can stop.";
    this.dictionary[code + " ru-RU"] = "";

    code = "";
    this.dictionary[code + " en-EN"] = "";
    this.dictionary[code + " it-IT"] = "";
    this.dictionary[code + " ru-RU"] = "лаборатория";

    code = "";
    this.dictionary[code + " en-EN"] = "";
    this.dictionary[code + " it-IT"] = "";
    this.dictionary[code + " ru-RU"] = "производит 100% в условиях 10%";

    code = "";
    this.dictionary[code + " en-EN"] = "";
    this.dictionary[code + " it-IT"] = "";
    this.dictionary[code + " ru-RU"] = "Этот проект призван обеспечить постоянную активность наших сотрудников, и дать возможность создать свой личный  проект практически бесплатно любому.";

    code = "";
    this.dictionary[code + " en-EN"] = "";
    this.dictionary[code + " it-IT"] = "";
    this.dictionary[code + " ru-RU"] = "портфолио";

    code = "";
    this.dictionary[code + " en-EN"] = "";
    this.dictionary[code + " it-IT"] = "";
    this.dictionary[code + " ru-RU"] = "";

    code = "";
    this.dictionary[code + " en-EN"] = "";
    this.dictionary[code + " it-IT"] = "";
    this.dictionary[code + " ru-RU"] = "";

    code = "";
    this.dictionary[code + " en-EN"] = "";
    this.dictionary[code + " it-IT"] = "";
    this.dictionary[code + " ru-RU"] = "";

    code = "";
    this.dictionary[code + " en-EN"] = "";
    this.dictionary[code + " it-IT"] = "";
    this.dictionary[code + " ru-RU"] = "";

    code = "";
    this.dictionary[code + " en-EN"] = "";
    this.dictionary[code + " it-IT"] = "";
    this.dictionary[code + " ru-RU"] = "";

    code = "";
    this.dictionary[code + " en-EN"] = "";
    this.dictionary[code + " it-IT"] = "";
    this.dictionary[code + " ru-RU"] = "";

  }



}
