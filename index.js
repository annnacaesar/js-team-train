//1. Используя функцию if...else,
//напишите код, который будет спрашивать:
//"Какое официальное название JavaScript?"
//Если пользователь вводит "ECMAScript",
//то показать через alert: "Верно!"
//в противном случае отобразить:"Не знаете? ECMAScript!"
// const userInput = prompt("Какое официальное название JavaScript?")
// let message = "Не знаете? ECMAScript!"
// if (userInput === "ECMAScript") {
// 	message = "Верно!";
// }
// const message = userInput === "ECMAScript" ? "Верно!" : "Не знаете? ECMAScript!";
// console.log(message);

//2. Напишите программу, которая получит от пользователя
//число (количество минут) и выведет в консоль
//строку в формате часов и минут
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10

// const userInput = 70;
// const hours = Math.floor(userInput / 60) ;
// const minuts = userInput % 60;
// const modifHours = String(hours).padStart(2, 0);
// const modifMinuts = String(minuts).padStart(2, 0);
// console.log(modifHours + ':' + modifMinuts);

// console.log(`${modifHours}:${modifMinuts}`);

//3. Напишите цикл, который выводит в консоль
//числа от max до min по убыванию
// Додайте все четные чисела от min до max

// const max = 50;
// const min = 23;
// let total = 0;
// for (let i = max; i >= min; i -= 1) {
//     if (i % 2 !== 0) {
//         continue;

//     } total += i;

// } console.log(total);

//4. Напишите код, который будет спрашивать
//логин с помощью prompt и логировать результат
//в консоль браузера

//Если посетитель вводит "Админ",
//то prompt запрашивает пароль.
//Если ничего не ввели или нажата клавиша Esc
//вывести стороку "Отменено"
//В противном случае вывксти строку "Я вас не знаю"

//Пароль проверять так:
//Если введён пароль "Я главный",
//то вывести строку "Здравствуйте!"
//иначе выводить строку "Неверный пароль!"

// const loginInput = prompt("Введіть логін");

// console.log(loginInput);

// switch (loginInput) {
//     case "Admin":
//         const passInput = prompt('Введіть пароль');
//         switch (passInput) {
//             case "Я главный":
//                 console.log("Здраствуйте");
//                 break;
//             case null:
//                 console.log("Отменено");
//                 break;
//             default: console.log("Неверный пароль!");

//         }

//         break;
//     case null:
//         console.log("Отменено");
//         break;
//     default:
//         console.log("Я вас не знаю");
// }

// if (loginInput === "Admin") {
//     const passInput = prompt('Введіть пароль');
//     if (passInput === "Я главный") {
//         console.log("Здраствуйте");
//     } else if (passInput === null) {
//         console.log("Отменено");

//     } else {
//         console.log("Неверный пароль!");
//     }

// } else if (loginInput === null) {
//     console.log("Отменено")

// } else {
//     console.log("Я вас не знаю")

// }

//5. При загрузке страницы пользователю предлагается
//в prompt ввести число. Ввод добавляется к значению
//переменной total.
//Операция ввода числа продолжается до тех пор,
//пока пользователь не нажмет кнопку Cancel в prompt.
//После того как пользователь прекратил ввод нажав на
//кнопку Cancel, показать alert со строкой "Общая сумма введенных чисел равна [число]."
//Делать проверку,что пользователь ввел именно число,
//а не произвольный набор символов, не нужно.

// let total = 0;
// let userInput = prompt('введіть число');
// while(userInput) {
//     total += Number(userInput);
//     userInput = prompt('введіть число');

// }
// console.log(total);

// let check = false;
// do{
//     if (userInput){
//         check = true;
//         total += Number(userInput);
//         userInput = prompt('введіть число');
//     } else {
//         check = false;
//         console.log(`Общая сумма введенных чисел равна ${total}.`);
//     }
// } while(check);

//7. Напишите цикл, который предлагает ввести
//число больше 100 через prompt.
//Если если посетитель ввёл другое число - попросить
//ввести ещё раз и так далее.
//Цикл должет спрашивать число, пока посетитель не
//введёт число больше 100, либо не нажмет кнопку
//Отмена в prompt
// let check = false;
// let userInput = prompt("Введіть число більше 100");
// // while (userInput <= 100){
// //     userInput = prompt("Введіть число більше 100");
// // }
// do{
//     if(userInput <= 100){
//         check = true;
//         userInput = prompt("Введіть число більше 100");
//     }else{
//         check=false;
//     }
// }while (check);
// console.log(`ви ввели ${userInput}`)

//Создайте массив styles с элементами «Джаз» и «Блюз».
//Добавьте «Рок-н-ролл» в конец.
//Замените значение «Блюз» на «Классика».
//Удалите первый элемент массива и выведите его в консоль.
//Вставьте «Рэп» и «Регги» в начало массива.

// const styles = ['Джаз', 'Блюз'];
// console.log(styles);
// // styles.push('Рок-н-ролл');
// console.log(styles.push('Рок-н-ролл'));
// console.log(styles);
// styles.splice(1,1, 'Классика');
// console.log(styles);
// console.log(styles.shift());
// console.log(styles);
// styles.unshift('Рэп', 'Регги');
// console.log(styles);

//Напишите функцию min(a, b), которая возвращает
//меньшее из чисел a, b
//нужно добавить проверку, что функция получает числа

// function min(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     console.log("Не число");
//     console.log(typeof a);
//     console.log(typeof b);
//     return;
//   }
//   if (a < b) {
//     return a;
//   }
//   return b;
// }

// console.log(min(5, false));
// /Напишите функцию logItems(array) которая принимает
//массив и использует цикл for, который для каждого
//элемента массива будет выводить сообщение в формате
//<номер элемента> - <значение элемента>
//Нумерация элементов должна начинаться с 1.
// const array = [{name: 'Джаз', engl: "jazz", number: 1}, {name: 'Блюз', engl: "blues", number: 2}, {name: 'Рок-н-ролл', engl: "rock 'n' roll ", number: 3}, {name: 'Регги', engl: "reggae", number: 4}, {name: 'Рэп', engl: "rap", number: 5}]

// function logItems(array) {
//     let count = 0;
//     for(const cislovodsk of array){

//         console.log(`номер ${cislovodsk.number} name ${cislovodsk.name} знач ${cislovodsk.engl}.`  );
//         // console.log(cislovodsk.engl);
//         // console.log(cislovodsk.number);
//     }

// }
// logItems(array)

//Проверка на палиндром
//Лёша на полке клопа нашёл
//А роза упала на лапу Азора

// function isPolindrom(str) {
//   const lower = str.toLowerCase().replaceAll(" ", "");
//   console.log(lower);
//   const array = lower.split("");
//   const reverse = array.reverse().join("");
//   console.log(reverse);
//   if (lower === reverse) {
//     return true;
//   }
//   return false;
// }

// console.log(isPolindrom("Лёша на полке клопа нашёл"));
// console.log(isPolindrom("А роза упала на лапу Азора"));
// console.log(isPolindrom("Мне нужен Артеон"));

//Напиши функцию findSmallerNumber(numbers)
//которая ищет самое маленькое число в массиве
//Добавь проверку что функция получает массив
//const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// function findSmallerNumber(numbers) {
//     let minElement = numbers[0];
//     if (!Array.isArray(numbers)) {
//         console.log("Не массив");
//     return};
//     for (let number of numbers) {
//         if (number < minElement) { minElement = number }
//             }
//     console.log(minElement);

// }

// findSmallerNumber([2, 5, 35, 56, 12, 24, 7, 80, 3])
// findSmallerNumber("dfhxfdggkfghk");

// const people = [
//   {
//     name: 'Alex',
//     know: ['Alex', 'Jhon'],
//   },
//   {
//     name: 'Jhon',
//     know: [],
//   },
//   {
//     name: 'Eva',
//     know: ['Alex', 'Jhon'],
//   },
//   {
//     name: 'Ivan',
//     know: ['Jhon', 'Eva'],
//   },
// ];
// // нарцис  'Jhon'

// const people1 = [
//   {
//     name: 'Alex',
//     know: ['Alex', 'Jhon'],
//   },
//   {
//     name: 'Jhon',
//     know: [],
//   },
//   {
//     name: 'Eva',
//     know: [],
//   },
//   {
//     name: 'Ivan',
//     know: ['Jhon', 'Eva'],
//   },
// ];
// //немає нарциса'

// const people2 = [
//   {
//     name: 'Alex',
//     know: ['Alex', 'Eva'],
//   },
//   {
//     name: 'Jhon',
//     know: [],
//   },
//   {
//     name: 'Eva',
//     know: ['Alex', 'Jhon'],
//   },
//   {
//     name: 'Ivan',
//     know: ['Jhon', 'Eva'],
//   },
// ];
//немає нарциса

// const people3 = [
//   {
//     name: 'Alex',
//     know: ['Alex', 'Jhon'],
//   },
//   {
//     name: 'Jhon',
//     know: ['Eva'],
//   },
//   {
//     name: 'Eva',
//     know: ['Alex', 'Jhon'],
//   },
//   {
//     name: 'Ivan',
//     know: ['Jhon', 'Eva'],
//   },
// ];
// //немає нарциса'

// function narcissus(people) {

//     for (const proletar of people) {

//         if (proletar.know.length === 0) {
//             console.log(proletar.name);
//            return  narcissusName(proletar.name, people);

//         }
//     }
//     console.log('Нарциса не найдено');
// }
// narcissus(people);
// narcissus(people1);
// narcissus(people2);
// narcissus(people3);
// function narcissusName(narcissus, people) {
//     for (const proletar of people) {
//         if (proletar.name === narcissus) {
//             continue;
//         }
//         if (!proletar.know.includes(narcissus)) {
//            return console.log(`нарциса не найдено`)
//         }

//     }
//     console.log(`${narcissus} - нарциз`);
// }

// =======task1
//Напиши функцию конструктор User для создания пользователя со следующими свойствами
//a. userName - имя, строка
//b. age - возраст, число
//c. numbersOfPost - количество постов, число
//d. класс ожидает 1 параметр - объект настроек с одноименными свойствами
//Добавь метод getInfo(), который возвращает строку:
//`Пользователю ${} ${} лет и у него ${} публикаций.`

// class User {
//   constructor({ name, age, post }) {
//     this.name = name;
//     this.age = age;
//     this.numbersOfPost = post;
//   }
// }

// const User = function ({ name, age, post, sex }) {
//   this.name = name;
//   this.age = age;
//   this.post = post;
//   this.sex = sex;
// };

// User.prototype.getInfo = function () {
//   console.log(
//     `Користувачу ${this.name} ${this.age} років і в ${
//       this.sex === 'male' ? 'нього' : 'неї'
//     } ${this.post} публікацій.`
//   );
// };
// const ivika = new User({ name: 'Ivika', age: 25, post: 250, sex: 'female' });
// ivika.getInfo();
// const myroslav = new User({
//   name: 'Myroslav',
//   age: 18,
//   post: 240,
//   sex: 'male',
// });
// myroslav.getInfo();

//2. Напиши функцию конструктор Storage который создаёт объкты
//для управления складом товаров.
//При вызове будет получать один агрумент - начальный массив товаров,
//и записывать его в свойство items.
//Добавь методы класса:
//getItems() - возвращайте массив товаров
//addItems(item) - получает новый товар и добавляет его к текущим
//removeItem(item) - плучает товар и, если он есть, удаляет его из текущих

// const Storage = function (items)  {

//         this._items = items;

//         this.getItems =  function() {
//             return this._items
//         };

// }

//     // Storage.prototype.getItems = function() {
//     //     return this._items
//     // }

//     Storage.prototype.addItems = function(item) {
//         this._items.push(item)
//     }

//     Storage.prototype.removeItem = function(item){
//            this._items = this._items.filter(element => element !== item)
//     }

// const array = new Storage (['q', 'w', 'e', 'r'])
// console.log(array);
// array.addItems('y');
// array.removeItem('y');
// // console.log(array.getItems());

// console.dir(array);

// //task3
// Напиши класс Client котрорый создает объект
// //со свойствами login email
// //Объяви приватные свойства #login #email,
// //доступ к которым сделай через геттер и сеттер login email

// class Clients {
//     #login;
//     #email;
//     constructor({login, email}){
//         this.#login = login;
//         this.#email = email;
//     }

// class Clients {
//     #login;
//     #email;
//     constructor({login, email}){
//         this.#login = login;
//         this.#email = email;
//     }

//     get userInfo (){
//         return {login:this.#login, email:this.#email};
//     }

// // СОРТ ЭЛЕМЕНТОВ БЕЗ МЕТИОД МАССИВА
// let a=[7,7,7,5,5,5];
// for(let i=0; i<a.length/2;i+=1){
//   console.log("a[i])", a[i]);
//   console.log("a[a.length-1-i])", a[a.length-1-i]);
//   let template = a[i];
//   a[i]=a[a.length-1-i]
//   a[a.length-1-i]= template;
// }
// console.log(a);

// const vehicles = [
//   { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
//   { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
//   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
//   { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
//   { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
//   { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
//   { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
//   { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
//   { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
//   { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
// ];

// // const getAvailableCarNames = (cars, amountThreshold) => cars.filter(car=>car.amount > amountThreshold)
// // .map(car=>car.model);
// // ВЕРНУТЬ НАЗВНИЕ МОДЕЛЕЙ, АМОУНТ КОТОРЫХ БОЛЬШЕ amountThreshold

// const getAvailableCarNames = (cars, amountThreshold) => {
//   return cars.reduce((acc , car) =>{
//     if (car.amount > amountThreshold){
//       //// acc.push(car.model)
//       return [...acc, car.model];
//     }
//     return acc;
//   },[])
// }

// console.log(getAvailableCarNames(vehicles, 12));

// const sortedCars = function (array, price) {
//     return array.filter((car) => car.onSale && car.price > price).sort((a, b) => b.price - a.price)

// }
// console.table(sortedCars(vehicles, 23000));

//Необходимо написать функцию (isEqualSymbols), принимающую
//в аргументах две строки и возвращающую true, если эти строки
//состоят из идентичных букв и false в противном случае.

// 1.

// const isEqualSymbols = function (string1, string2) {
//   const string1ToArray = string1.split("");
//   const string2ToArray = string2.split("");
//   console.log(string1ToArray);
//   if (string1ToArray.length !== string2ToArray.length) {
//     return false;
//   }
//   for (let i = 0; i < string1ToArray.length; i += 1) {
//     if (!string1ToArray.includes(string2ToArray[i])) {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(isEqualSymbols("кот", "ток")); // выведет true
// console.log(isEqualSymbols("кот", "тик")); // выведет false

// const monitors = ['SAMSUNG', 'LG', 'ASUS', 'DELL', 'BENQ', 'ASER'];

// const sortedMonitors = [...monitors].sort((a, b) => {
//   if (a < b) {
//     return 1
//   }
//   if (a > b) {
//     return -1
//   }
//   return 0
// })
// console.log(sortedMonitors);

// console.log(monitors.sort());

// ===========================================

//Собрать в allTopics массив всех предметов всех курсов
//Выполнить фильтрацию, оставив в uniqueTopics только уникальные элементы

const courses = [
  {
    name: 'Basic HTML+CSS',
    topics: ['VSCode', 'HTML', 'CSS', 'GitHub', 'GitHub Desctop'],
  },
  {
    name: 'Intermediate HTML+CSS',
    topics: ['VSCode', 'HTML', 'CSS', 'GitHub', 'Git', 'Terminal'],
  },
  {
    name: 'Basic JavaScript',
    topics: [
      'VSCode',
      'Type system',
      'Loops',
      'Function',
      'Git',
      'Conditions',
      'Classes',
      'GitHub',
      'DOM',
    ],
  },
  {
    name: 'Intermediate JavaScript',
    topics: ['VSCode', 'NPM', 'VSCode', 'Bundlers', 'Transpiling', 'Git', 'Promises', 'AJAX', 'GitHub'],
  },
];

const unicCourses = courses.flatMap(cours => cours.topics).filter((topic, index, array) => array.indexOf(topic) === index);
console.log(unicCourses);

