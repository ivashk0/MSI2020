// получаем шутку Random
const mainJoke = document.querySelector('.main-joke');
const buttonGetJoke = document.querySelector('.button__get-joke');

buttonGetJoke.addEventListener('click', function () {
	fetch('https://api.chucknorris.io/jokes/random?category=animal')
		/*fetch('https://api.chucknorris.io/jokes/random?category=animal')
		fetch('https://api.chucknorris.io/jokes/random?category=career')
		fetch('https://api.chucknorris.io/jokes/random?category=celebrity')
		fetch('https://api.chucknorris.io/jokes/random?category=dev')
		fetch('https://api.chucknorris.io/jokes/search?query=')*/

		.then(response => response.json())
		.then(data => {
			const mainJokeBox = document.createElement('div');
			mainJokeBox.classList.add('main-joke_box');
			const jokeBox = document.createElement('div');
			jokeBox.classList.add('joke__box');
			mainJokeBox.appendChild(jokeBox);
			mainJoke.append(mainJokeBox);
			// block heart
			const mainBoxHeart = document.createElement('div');
			mainBoxHeart.classList.add('main__box_heart');
			const heartButton = document.createElement('button');
			heartButton.classList.add('heart_btn1');
			const heartButtonIcon = document.createElement('img');
			heartButtonIcon.src = 'img/heart1.svg';
			heartButton.appendChild(heartButtonIcon);
			mainBoxHeart.appendChild(heartButton);
			// block item
			const mainBoxItem = document.createElement('div');
			mainBoxItem.classList.add('main__box_item');
			const mainBoxItemCol = document.createElement('div');
			mainBoxItemCol.classList.add('main__box_col');
			const mainBoxItemColIcon = document.createElement('div');
			mainBoxItemColIcon.classList.add('main__box_col_icon');
			mainBoxItemCol.appendChild(mainBoxItemColIcon);
			const mainBoxIcon = document.createElement('div');
			mainBoxIcon.classList.add('main__box_icon');
			mainBoxItemColIcon.appendChild(mainBoxIcon);
			const mainBoxItemColIconImg = document.createElement('img');
			mainBoxItemColIconImg.src = 'img/msg.svg';
			mainBoxIcon.appendChild(mainBoxItemColIconImg);
			const mainBoxColContent = document.createElement('div');
			mainBoxColContent.classList.add('main__box_col_content');
			// block ID
			const mainBoxId = document.createElement('div');
			mainBoxId.classList.add('main__box_id');
			const idLink = document.createElement('span');
			idLink.classList.add('box__id_link');
			mainBoxId.appendChild(idLink);
			const idText = document.createElement('a');
			idText.classList.add('box__id_text');
			mainBoxId.appendChild(idText);
			const idJoke = document.createElement('span');
			idJoke.classList.add('box__idjoke');
			idText.appendChild(idJoke);
			const svgLink = document.createElement('img');
			svgLink.src = 'img/link.svg';
			mainBoxId.appendChild(svgLink);

			const mainBoxText = document.createElement('div');
			mainBoxText.classList.add('main__box_text');
			mainBoxColContent.append(mainBoxId, mainBoxText);
			mainBoxItem.append(mainBoxItemColIcon, mainBoxColContent);
			// block footer
			const mainBoxFooter = document.createElement('div');
			mainBoxFooter.classList.add('main__box_footer');
			const boxUpd = document.createElement('div');
			boxUpd.classList.add('main__box_upd');
			const boxUpdJoke = document.createElement('p');
			boxUpdJoke.classList.add('box__upd_joke');
			const boxCategorie = document.createElement('div');
			boxCategorie.classList.add('box__categorie');
			const boxCategorieText = document.createElement('p');
			boxCategorieText.classList.add('box__categorie_text');
			boxCategorie.appendChild(boxCategorieText);
			
			mainBoxFooter.append(boxUpd, boxCategorie);
			
			boxUpd.appendChild(boxUpdJoke);

			const timeJoke = document.createElement('p');
			timeJoke.innerHTML = `
				Last update: ${
					Math.ceil((Date.now() - new Date(data.updated_at.split(".")[0].replace(" ", "T"))) / 36e5)
				} hours ago`;
			boxUpdJoke.appendChild(timeJoke);

			jokeBox.append(mainBoxHeart, mainBoxItem, mainBoxFooter);

			console.log(data);
			idText.href = data.url;
			idText.target = '_blank';
			idText.innerHTML = data.id;
			idLink.innerHTML = 'ID: ';
			mainBoxText.innerHTML = data.value;
			boxCategorieText.innerHTML = data.categories;
		});
});


// fetch('https://api.chucknorris.io/jokes/random?category=animal')
// /*fetch('https://api.chucknorris.io/jokes/random?category=animal')
// fetch('https://api.chucknorris.io/jokes/random?category=career')
// fetch('https://api.chucknorris.io/jokes/random?category=celebrity')
// fetch('https://api.chucknorris.io/jokes/random?category=dev')
// fetch('https://api.chucknorris.io/jokes/search?query=')*/

//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//     url.href = data.url;
//     id.innerHTML = data.id;
//     value.innerHTML = data.value;
//     updated.innerHTML = Math.ceil((Date.now() - new Date(data.updated_at.split(".")[0].replace(" ", "T"))) / 36e5);
//     categories.innerHTML = data.categories;
//   } )


// function getJoke(){}
// document.querySelector('#random').addEventListener("submit", function() {
//       getJoke();
//     });
//     getJoke();


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
let radioInputs = document.querySelectorAll('.radio__input');
let innerBlocks = document.querySelectorAll('.inner-block');

const setActiveItem = (index, items) => {
	items.forEach((item, itemIndex) => {
		index === itemIndex
			? item.classList.add('active')
			: item.classList.remove('active')
	})
}

radioInputs.forEach((item, index) => {
	item.addEventListener('click', () => {
		setActiveItem(index, innerBlocks);
	});
});

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


