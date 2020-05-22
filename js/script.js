// получаем шутку Random
const url = document.querySelector('.box__id_text');
const id = document.querySelector('#box__idjoke');
const value = document.querySelector('.main__box_text');
const updated = document.querySelector('#updjoke');
const categories = document.querySelector('#categoriesJoke');

fetch('https://api.chucknorris.io/jokes/random?category=animal')
/*fetch('https://api.chucknorris.io/jokes/random?category=animal')
fetch('https://api.chucknorris.io/jokes/random?category=career')
fetch('https://api.chucknorris.io/jokes/random?category=celebrity')
fetch('https://api.chucknorris.io/jokes/random?category=dev')
fetch('https://api.chucknorris.io/jokes/search?query=')*/

  .then(response => response.json())
  .then(data => {
    console.log(data)
    url.href = data.url;
    id.innerHTML = data.id;
    value.innerHTML = data.value;
    updated.innerHTML = Math.ceil((Date.now() - new Date(data.updated_at.split(".")[0].replace(" ", "T"))) / 36e5);
    categories.innerHTML = data.categories;
  } )


function getJoke(){}
document.querySelector('#random').addEventListener("submit", function() {
      getJoke();
    });
    getJoke();


// показать блок "избранное"
const favBtn = document.querySelector('.fav_btn');

favBtn.addEventListener('click', function () {
  const activeClasses = document.querySelectorAll(
    '.favburger, .favourite, .generator, .fav_btn, .menu_favourite, .favourite__header_text, .favourite__main_joke, .main__header, .main__header_icon'
  )
  for(let i = 0; i < activeClasses.length; i++) {
    activeClasses[i].classList.toggle('active');
  }
  const lockClasses = document.querySelectorAll(
  	'body'
  )
  for(let i = 0; i < lockClasses.length; i++) {
    lockClasses[i].classList.toggle('lock');
	}
})

// показать/скрыть блоки радиокнопок
const randomChosen = document.querySelector('#random');
const categoriesChosen = document.querySelector('#categories');
const searchChosen = document.querySelector('#search');

randomChosen.addEventListener('click', function (){
	const removeClasses = document.querySelectorAll(
		'.choise_categories, .joke__search'
		)
	for(let i = 0; i < removeClasses.length; i++) {
    removeClasses[i].classList.remove('active');
  }
})

categoriesChosen.addEventListener('click', function (){
	const removeClasses = document.querySelectorAll(
		'.joke__search'
		)
	for(let i = 0; i < removeClasses.length; i++) {
    removeClasses[i].classList.remove('active');
  }
  const activeClasses = document.querySelectorAll(
		'.choise_categories'
		)
	for(let i = 0; i < activeClasses.length; i++) {
    activeClasses[i].classList.add('active');
  }
})

searchChosen.addEventListener('click', function (){
	const removeClasses = document.querySelectorAll(
		'.choise_categories'
		)
	for(let i = 0; i < removeClasses.length; i++) {
    removeClasses[i].classList.remove('active');
  }
  const activeClasses = document.querySelectorAll(
		'.joke__search'
		)
	for(let i = 0; i < activeClasses.length; i++) {
    activeClasses[i].classList.add('active');
  }
})

// выбор категории (animal/career/cel/dev)
/*const activeCat = document.querySelector('.btn__categories');

activeCat.addEventListener('click', function (){
	const activeClasses = document.querySelectorAll(
		'.btn__categories'
		)
	for(let i = 0; i < activeClasses.length; i++) {
    activeClasses[i].classList.add('active');
  }
})*/



/* скрытие меню при клике 
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $('.favorite.active'); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.hide(); // скрываем его
		}
	});

*/

/*
// делаем шутки
function randomFact() {
      // We call the Web Service via AJAX
      var xmlhttp = new XMLHttpRequest();
      var url = "https://api.chucknorris.io/jokes/random";
      xmlhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
          var json = JSON.parse(this.responseText);
          // We parse the JSON response
          parseJson(json);
        }
      };

      xmlhttp.open("GET", url, true);
      xmlhttp.send();
    }

    function parseJson(json) {
      var
      	idjoke 			= json["id"]
      	fact 			= json["value"]
      	updjoke 		= json["updated_at"]
      	categoriesJoke	= json["categories"];

      document.getElementById("box__idjoke").innerHTML = idjoke;	
      document.getElementById("main__box_text").innerHTML = fact;
      document.getElementById("updjoke").innerHTML = updjoke;
      document.getElementById("categoriesJoke").innerHTML = categoriesJoke;
    }

    // Finally we add a click event listener on the logo of Chuck Norris
    // to load a new random fact when the user will click on it
    document.getElementById("jokeForm").addEventListener("submit", function() {
      randomFact();
    });
    randomFact();
// закончили получать шутку Random
*/


