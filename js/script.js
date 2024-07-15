const mainContainer = document.querySelector('.container');


for (let id = 1; id<= 150 ;id++){
    let url = `https://pokeapi.co/api/v2/pokemon/${id}`
let imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    const card= cardCreator(data , imageUrl);
    mainContainer.appendChild(card);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
}




function cardCreator(data,imgUrl){
    const box = document.createElement('div');
    box.appendChild(imageBox(imgUrl));
    box.appendChild(numberBox(data));
    box.appendChild(nameBox(data));
    box.appendChild(typeBox(data));
    box.className='card';
    return box;
}

function imageBox(imgUrl){
    const imgBox=document.createElement('div');
    imgBox.className='image';
    imgBox.style.backgroundImage = `url(${imgUrl})`;    
    imgBox.style.backgroundSize = 'cover';
    imgBox.style.backgroundRepeat= 'no-repeat';
    return imgBox;
}
function numberBox(data){
    const numBox = document.createElement('div');
    numBox.className = 'number';
    numBox.textContent = `#${data.id}`;
    return numBox;
}
function nameBox(data) {
    const name = document.createElement('div');
    name.className = 'name';
    name.textContent = data.name;
    return name;
}

function typeBox(data){
    const type = document.createElement('div');
    type.className = 'type';
    let arr=[];
    data.types.forEach(ele => {
        arr.push(ele.type.name);
    });

    type.textContent = arr.join(',');
    return type;
}


// mainConatiner.appendChild(cardCreator());