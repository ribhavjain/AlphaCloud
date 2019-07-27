import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  taskTitle: string = "Name of the Problem";
  taskSummary: string = "Summary of the Problem";
  address: string = "Address";
  currentLang: string = "Language";
  email: string = "Email";
  date: string ='Date';
  time: string = 'Time';
  city: string = 'City';
  state: string = 'State';
  postAProb: string = 'Post a Problem';
  Usernamestr: string = "Username";
  Passwordstr: string = "Password";
  SignUp: string = "Sign Up";
  SignIn: string = "log in";
  basicInfo: string = "Help Out is a community organizing tool that matches people in need with people from their own community willing to help. To contact us about this product, email injazatduke@gmail.com.";
  accessCode: string = "Access Code";
  name: string = "Name";
  lastName: string = "Last name";
  incorrectInfo: string = "Incorrect information";

  constructor() { }


  toEnglish() {
    this.Usernamestr = "Username";
    this.currentLang ="Language"
    this.Passwordstr = "Password";
    this.SignUp = "Sign Up";
    this.SignIn = "Log in";
    this.basicInfo = "Help Out is a community organizing tool that matches people in need with people from their own community willing to help. To contact us about this product, email injazatduke@gmail.com.";
    this.taskTitle = "Name of the Problem";
    this.taskSummary = "Summary of the Problem";
    this.address = "Address";
    this.email = "Email";
    this.date  ='Date';
    this.time = 'Time';
    this.city = 'City';
    this.state = 'State';
    this.postAProb = 'Post a Problem';
    this.accessCode= "Access Code";
    this.name = "Name";
    this.lastName = "Last name";
    this.incorrectInfo = "Incorrect information";
    return [this.Usernamestr, this.currentLang, this.Passwordstr, this.SignUp, this.SignIn, this.basicInfo, this.taskTitle, this.taskSummary, this.address, this.email, this.date, this.time, this.city, this.state, this.postAProb, this.accessCode, this.name, this.lastName, this.incorrectInfo];
  }
  toFrench() {
    this.basicInfo = "Help Out is a community organizing tool that matches people in need with people from their own community willing to help. To contact us about this product, email injazatduke@gmail.com.";
    this.Usernamestr = "Nom d'utilisateur";
    this.Passwordstr = "Mot de passe";
    this.SignUp = "Inscrivez-vous";
    this.SignIn = "S'identifier";
    this.currentLang ="Votre langue"
    this.basicInfo = "Help Out est un outil d'organisation communautaire qui associe les personnes dans le besoin à des membres de leur propre communauté disposés à aider. Pour nous contacter à propos de ce produit, envoyez un email à injazatduke@gmail.com.";
    this.taskTitle = "Titre du problème";
    this.taskSummary = "Résumé du problème";
    this.address = "Adresse de l'aide";
    this.email = "Email";
    this.date  ='Date de l\'aide';
    this.time = 'Temps de l\'aide';
    this.city = 'Ville';
    this.state = 'Etat';
    this.postAProb = 'Partager le problème';
    this.accessCode= "Code d\'accès";
    this.name = "Nom";
    this.lastName = "Nom de famille";
    this.incorrectInfo = "Information incorrecte";
    return [this.Usernamestr, this.currentLang, this.Passwordstr, this.SignUp, this.SignIn, this.basicInfo, this.taskTitle, this.taskSummary, this.address, this.email, this.date, this.time, this.city, this.state, this.postAProb, this.accessCode, this.name, this.lastName, this.incorrectInfo];
  }
  toSpanish() {
    this.Usernamestr = "nombre de usuario";
    this.Passwordstr = "Contraseña";
    this.SignUp = "Regístrate";
    this.SignIn = "Iniciar sesión";
    this.currentLang ="Idioma"
    this.basicInfo = "Help Out es una herramienta de organización comunitaria que relaciona a las personas necesitadas con personas de su propia comunidad dispuestas a ayudar. Para contactarnos sobre este producto, envíe un correo electrónico a injazatduke@gmail.com.";
    this.taskTitle = "Nombre del problema";
    this.taskSummary = "Resumen del problema";
    this.address = "Dirección de la ayuda";
    this.email = "Correo electrónico";
    this.date  ='Fecha de la ayuda';
    this.time = 'Hora de la ayuda';
    this.city = 'Ciudad';
    this.state = 'Estado';
    this.postAProb = 'Comparte el problema';
    this.accessCode= "Código de acceso";
    this.name = "Nombre";
    this.lastName = "Apellido";
    this.incorrectInfo = "Información incorrecta";
    return [this.Usernamestr, this.currentLang, this.Passwordstr, this.SignUp, this.SignIn, this.basicInfo, this.taskTitle, this.taskSummary, this.address, this.email, this.date, this.time, this.city, this.state, this.postAProb, this.accessCode, this.name, this.lastName, this.incorrectInfo];
  }
  toNapali() {
    this.Usernamestr = "प्रयोगकर्तानाम";
    this.Passwordstr = "पासवर्ड";
    this.SignUp = "साइन अप";
    this.SignIn = "लग - इन";
    this.currentLang ="भाषा"
    this.basicInfo = "सहायता आउट एक सामुदायिक व्यवस्थित उपकरण हो जसले मानिसहरूलाई सहयोग गर्न इच्छुक मानिसहरूसँगको खाँचो छ। यस उत्पादनको बारेमा हामीलाई सम्पर्क गर्न, इमेल injazatduke@gmail.com।";
    this.taskTitle = "समस्याको नाम";
    this.taskSummary = "समस्याको सारांश";
    this.address = "ठेगाना";
    this.email = "इमेल";
    this.date  ='सहायता इतिहास';
    this.time = 'सहयोगको समय';
    this.city = 'शहर';
    this.state = 'राज्य';
    this.postAProb = 'तपाईंको समस्या साझेदारी गर्नुहोस्';
    this.accessCode= "पहुँचको शब्द";
    this.name = "तिम्रो नाम";
    this.lastName = "थर";
    this.incorrectInfo = "गलत जानकारी";
    return [this.Usernamestr, this.currentLang, this.Passwordstr, this.SignUp, this.SignIn, this.basicInfo, this.taskTitle, this.taskSummary, this.address, this.email, this.date, this.time, this.city, this.state, this.postAProb, this.accessCode, this.name, this.lastName, this.incorrectInfo];
  }
  toSwahili() {
    this.Usernamestr = "Jina la mtumiaji";
    this.Passwordstr = "Nenosiri";
    this.SignUp = "Saini";
    this.SignIn = "Ingia";
    this.currentLang ="Lugha"
    this.basicInfo = "Msaada Nje ni chombo cha kuandaa jumuiya ambacho kinalingana na watu wanaohitaji na watu kutoka kwa jumuiya yao wenyewe wanaotaka kusaidia. Wasiliana nasi kuhusu bidhaa hii, barua pepe injazatduke@gmail.com.";
    this.taskTitle = "Jina la tatizo";
    this.taskSummary = "Muhtasari wa tatizo";
    this.address = "Anwani ya msaada";
    this.email = "Barua pepe";
    this.date  ='Tarehe ya msaada';
    this.time = 'Wakati wa msaada';
    this.city = 'jiji';
    this.state = 'Hali';
    this.postAProb = 'Shiriki tatizo lako';
    this.accessCode= "msimbo wa kufikia";
    this.name = "jina";
    this.lastName = "jina la familia";
    this.incorrectInfo = "habari isiyo sahihi";
    return [this.Usernamestr, this.currentLang, this.Passwordstr, this.SignUp, this.SignIn, this.basicInfo, this.taskTitle, this.taskSummary, this.address, this.email, this.date, this.time, this.city, this.state, this.postAProb, this.accessCode, this.name, this.lastName, this.incorrectInfo];
  }
  toBurmese() {
    this.Usernamestr = "အသုံးပြုသူအမည်";
    this.Passwordstr = "စကားဝှက်ကို";
    this.SignUp = "ဆိုင်းအပ်";
    this.currentLang ="ဘာသာစကား"
    this.SignIn = "လော့ဂ်အင်";
    this.basicInfo = "အထဲကကိုကူညီပါကူညီဖို့ဆန္ဒရှိမိမိတို့ကိုယ်ပိုင်အသိုင်းအဝိုင်းထံမှလူတို့နှင့်အတူလိုအပ်ချက်ရှိလူများကိုက်ညီမယ့်အသိုင်းအဝိုင်းစည်းရုံးရေးကိရိယာတခုဖြစ်တယ်။ ဒီထုတ်ကုန်, အီးမေးလ် injazatduke@gmail.com အကြောင်းကျွန်တော်တို့ကိုဆက်သွယ်ပါရန်။";
    this.taskTitle = "ပြဿနာရဲ့နာမကိုအမှီ";
    this.taskSummary = "ပြဿနာရဲ့အကျဉ်းချုပ်";
    this.address = "အကူအညီများ၏လိပ်စာ";
    this.email = "အီးမေးလ်က";
    this.date  ='အကူအညီများ၏ရက်စွဲကို';
    this.time = 'အကူအညီများ၏အချိန်';
    this.city = 'မြို့';
    this.state = 'ပြည်နယ်';
    this.postAProb = 'သင့်ရဲ့ပြဿနာ post';
    this.accessCode= "မှတ်ပုံတင်ကုဒ်";
    this.name = "နာမတျောကို";
    this.lastName = "မျိုးနွယ်အမည်";
    this.incorrectInfo = "မမှန်ကန်သောအချက်အလက်";
    return [this.Usernamestr, this.currentLang, this.Passwordstr, this.SignUp, this.SignIn, this.basicInfo, this.taskTitle, this.taskSummary, this.address, this.email, this.date, this.time, this.city, this.state, this.postAProb, this.accessCode, this.name, this.lastName, this.incorrectInfo];
  }
  toArabic() {
    this.Usernamestr = "اسم المستخدم";
    this.Passwordstr = "كلمة السر";
    this.SignUp = "سجل";
    this.SignIn = "تسجيل الدخول";
    this.currentLang ="لغتك"
    this.basicInfo = "Help Out هي أداة تنظيم مجتمعية تلبي احتياجات المحتاجين مع أشخاص من مجتمعهم الخاص على استعداد للمساعدة. للاتصال بنا بخصوص هذا المنتج ، يرجى إرسال بريد إلكتروني إلى injazatduke@gmail.com.";
    this.taskTitle = "اسم المشكلة";
    this.taskSummary = "وصف المشكلة";
    this.address = "عنوان المساعدة";
    this.email = "بريد الكتروني";
    this.date  ='تاريخ المساعدة';
    this.time = 'وقت المساعدة';
    this.city = 'مدينة';
    this.state = 'ولاية';
    this.postAProb = 'مشاركة مشكلتك';
    this.accessCode= "كلمة الوصول";
    this.name = "اسم";
    this.lastName = "اسم العائلة";
    this.incorrectInfo = "معلومات غير صحيحة";
    return [this.Usernamestr, this.currentLang, this.Passwordstr, this.SignUp, this.SignIn, this.basicInfo, this.taskTitle, this.taskSummary, this.address, this.email, this.date, this.time, this.city, this.state, this.postAProb, this.accessCode, this.name, this.lastName, this.incorrectInfo];
  }
  toArmenian() {
    this.Usernamestr = "օգտագործողի անունը";
    this.Passwordstr = "գաղտնաբառը";
    this.SignUp = "գրանցվել";
    this.SignIn = "մուտք գործել";
    this.currentLang ="լեզու"
    this.basicInfo = "Օգնություն Out- ը համայնքային կազմակերպչական գործիք է, որն օգնում է մարդկանց կարիք ունենալ նրանց սեփական համայնքից, ովքեր ցանկանում են օգնել: Կապ մեզ հետ այս ապրանքի մասին, էլեկտրոնային injazatduke@gmail.com:";
    this.taskTitle = "խնդրի անունը";
    this.taskSummary = "խնդրի ամփոփում";
    this.address = "օգնության հասցեն";
    this.email = "էլ";
    this.date  ='օգնության ամսաթիվը';
    this.time = 'օգնություն ստանալու ժամանակը';
    this.city = 'քաղաքը';
    this.state = 'Պետ';
    this.postAProb = 'կիսվել ձեր խնդիրը';
    this.accessCode= "մուտքագրման կոդը";
    this.name = "Անուն";
    this.lastName = "Ազգանուն";
    this.incorrectInfo = "սխալ տեղեկատվություն";
    return [this.Usernamestr, this.currentLang, this.Passwordstr, this.SignUp, this.SignIn, this.basicInfo, this.taskTitle, this.taskSummary, this.address, this.email, this.date, this.time, this.city, this.state, this.postAProb, this.accessCode, this.name, this.lastName, this.incorrectInfo];
  }

}