// получаем шутку Random
const url = document.querySelector('.box__id_text');
const id = document.querySelector('#box__idjoke');
const value = document.querySelector('.main__box_text');
const updated = document.querySelector('#updjoke');
const categories = document.querySelector('#caterogiesJoke');


fetch('https://api.chucknorris.io/jokes/random')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    url.href = data.url;
    id.innerHTML = data.id;
    value.innerHTML = data.value;
    updated.innerHTML = Math.ceil((Date.now() - new Date(data.updated_at.split(".")[0].replace(" ", "T"))) / 36e5);
    categories.innerHTML = data.categories;
  } )

// fetch('https://api.chucknorris.io/jokes/categories')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
// })

// нажымаем скрыить/показать подкатегорию
    function showHide(block_id) {
                //Если элемент с id-шником element_id существует
                if (document.getElementById(block_id)) { 
                    //Записываем ссылку на элемент в переменную obj
                    var obj = document.getElementById(block_id);

                    //Если css-свойство display не block, то: 
                    if (obj.style.display != "block") { 
                        obj.style.display = "block"; //Показываем элемент
                    }
                    else obj.style.display = "none"; //Скрываем элемент
                }
            }  


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
      	caterogiesJoke	= json["categories"];

      document.getElementById("box__idjoke").innerHTML = idjoke;	
      document.getElementById("main__box_text").innerHTML = fact;
      document.getElementById("updjoke").innerHTML = updjoke;
      document.getElementById("caterogiesJoke").innerHTML = caterogiesJoke;
    }

    // Finally we add a click event listener on the logo of Chuck Norris
    // to load a new random fact when the user will click on it
    document.getElementById("jokeForm").addEventListener("submit", function() {
      randomFact();
    });
    randomFact();
// закончили получать шутку Random
*/




