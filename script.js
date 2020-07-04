//Variables Globales
let JsonG;
let Goals=0;
let Point=0;
/*Creacion de Clase para almacenar inf bajo un objeto con constructor donde
*/ 
class Question {
    constructor(category,Question,Boolean,TrueA,usera) {
      this.CategoryName = category;
      this.QuestioName = Question;
      this.BooleanAnswer = Boolean;
      this.TrueAnswer = TrueA;
      this.UserAnswer = usera;
    }

    //Getters and Setters

    get CategoryN() {
        return this.CategoryName;
    }

    set CategoryN(Ca) {
        this.CategoryName = Ca;
    }

    get QuestionN() {
        return this.QuestioName;
    }

    set QuestionN(Qu) {
        this.QuestionName = Qu;
    }

    get BooleanA() {
        return this.BooleanAnswer;
    }

    set BooleanA(Bo) {
        this.BooleanAnswer = Bo;
    }

    get TrueAns() {
        return this.TrueAnswer;
    }

    set TrueAns(t) {
        this.TrueAnswer = t;
    }

    get UserAns() {
        return this.UserAnswer;
    }

    set UserAns(u) {
        this.UserAnswer = u;
    }

}

//Creacion de Objetos hijos para crear preguntas

question1 = new Question("Culture","The Everest height is 8848 meters",true,"Yes, The Everest height is 8848 meters");
question2 = new Question("Maths","(5*5+2/2) = 6",false,"The correct answer is 26");
question3 = new Question("Social Sciences","China is in Europe", false, "China is a Country in Asia");
question4 = new Question("English Syntax", "You can write: a apple", false, "You must write: an apple " );
question5 = new Question("Tecnology", "The AI is Artificial Intelligene", true, "Yes, Because the meaning about AI is Artificial Intelligence");
question6 = new Question("Culture","The Spartan culture was from Germany",false,"Because, the Spartan Culture was from Greece");
question7 = new Question("Maths"," 5*5*5 = 125 ",true,"yes, the because 5*5 = 25 and 25*5 = 125");
question8 = new Question("Social Sciencies","EEUU is in South America",false, "Because, EEUU is in North America");
question9 = new Question("English Syntax","you can write: an apples",false,"Because the objects are in plural, and when you use a or an is  because the object is in singular, only one object, So you can use the for plural objects");
question10 = new Question("Tecnology","The true tecnical name about Teflon is Politetrafluoretileno",true,"Yes, Teflon is meaning Poli......");
question11 = new Question("Culture","The Inca culture was from Mexico, in North America",false,"Because the real culture in Mexico was Azteca and the Incas culture was from South America");

//Creacion de un array que contendra a todos los objetos hijos creados y su inf

var QuestionsArray=[question1,question2,question3,question4,
    question5,question6,question7,question8,
    question9,question10,question11];

//Listener para el primer boton que nos envia al wirefrime 2

document.getElementById("button").addEventListener("click", myFunction);

/*Function para ocultar el wirefrime uno y traer el wirefrime 2 
ademas de llamar a la funcion que carga la informacion de la pregunta
*/
function myFunction() {
    document.getElementById("welcome").style.display = "none";
    document.getElementById("PlayGame").style.display = "block";
    document.getElementById("play1").style.display = "none";
    PlayGameStart();
}

//funcion que carga informacion de la primer pregunta

function PlayGameStart(){
    document.getElementById("category").innerHTML = question1.CategoryN;
    document.getElementById("question").innerHTML = question1.QuestionN;
    document.getElementById("span1").innerHTML = Point+1;
}

/*Funcion que espera ser llamada por el boton del wirefrime 2.
Esta funcion guarda la respeusta del usuarion en el objeto contenido en el array.
Luego carga la siguiente pregunta, y espera por ser llamada nuevamente
Cuando terminana las preguntas cara el tercer wirefrime
*/
function FunctionNextQ(){
    var Bolean = document.forms[0];
    document.getElementById("span1").innerHTML = Point+2;
    for (i = 0; i < 2; i++) {
      if (Bolean[i].checked) {
          
        var boolValue = (/true/i).test(Bolean[i].value);
        QuestionsArray[Point].UserAnswer=boolValue;
      }
    }
    //console.log(QuestionsArray[Point]);
    Point=Point+1;  
    if(Point==11){
        document.getElementById("PlayGame").style.display = "none";
        document.getElementById("Scores").style.display = "block";
        Analitics();
        document.getElementById("goals").innerHTML = Goals;
        document.getElementById("err").innerHTML = Errors();
        alert("A continuacion encontras una parte del JSON GLobal en un ALERT, puedes aceder al JSON mediante consola con la variable JsonG");
        //cargando JSON y mostrandolo en un alert y en la consola
        JsonG=JSONG();
        alert(JsonG);
        console.log(JsonG);
    }
    else{
        document.getElementById("category").innerHTML = QuestionsArray[Point].CategoryN;
        document.getElementById("question").innerHTML = QuestionsArray[Point].QuestionN;
    }
}


//Funcion que analiza el numero de respuestas correctas y las muestra
function Analitics(){
    for (i=0;i<11;i++){
        if(QuestionsArray[i].BooleanAnswer==QuestionsArray[i].UserAnswer){
            Goals++
        }
        else{
            Goals=Goals;
        }
    }
}

//Funcion para ver los errores
function Errors(){
    txt="";
    for (i=0;i<11;i++){
        txt = `${txt}CATEGORY: ${QuestionsArray[i].CategoryName}<br>${i+1}. ${QuestionsArray[i].QuestioName}<br>THE TRUE ANSWER: ${QuestionsArray[i].BooleanAnswer}<br>YOUR ANSWER: ${QuestionsArray[i].UserAnswer}<br> ABOUT ANSWER: ${QuestionsArray[i].TrueAnswer}<br><br>`;
        //console.log(txt);
    }
    return txt;
}

//transfomrando SuperObjeto a un JSON

function JSONG(){ 
   var JSONGLOBAL= JSON.stringify(QuestionsArray);
   return JSONGLOBAL;
}

//Funcion para el ultimo boton inicializa variables en cero y carga el segundo wirefrime
function myFunction2(){
    JsonG=0;
    Goals=0;
    Point=0;
    document.getElementById("Scores").style.display = "none";   
    myFunction();
}