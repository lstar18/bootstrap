console.log('Bootstrap');

const ducks = [
{   color: 'blue', 
    isRubber: true,
    gender: 'female',
    isMirgator: false,
    socialStatus: 'married',
    diet: 'vegan',
    age: 47,
    featherNum: 0,
    name: 'Stacey',
    imageUrl: "https://lilalu-shop.com/media/image/81/f6/59/1513_f_600x600.png"
},

{   color: 'pink',
    isRubber: true,
    gender: 'female',
    isMirgator: false,
    socialStatus: 'married',
    diet: 'meat',
    age: 30,
    featherNum: 0,
    name: 'Julie',
    imageUrl: "https://images-na.ssl-images-amazon.com/images/I/41mNq6dA7bL._SL1000_.jpg"
},

{   color: 'gold',
    isRubber: true,
    gender: 'female',
    isMirgator: false,
    socialStatus: 'married',
    diet: 'vegan',
    age: 33,
    featherNum: 0,
    name: 'Lori',
    imageUrl: "https://images-na.ssl-images-amazon.com/images/I/41Lzx6Mnl1L._SY355_.jpg"
},

{   color: 'blue',
    isRubber: false,
    gender: 'male',
    isMirgator: true,
    socialStatus: 'dating',
    diet: 'pescatarian',
    age: 1,
    featherNum: 40,
    name: 'Simon',
    imageUrl: "data:image/jpeg;base64,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"
},

{   color: 'blue',
    isRubber: true,
    gender: 'male',
    isMirgator: false,
    socialStatus: 'single',
    diet: 'vegetarian',
    age: 1,
    featherNum: 0,
    name: 'Lev',
    imageUrl: "https://cdn.shopify.com/s/files/1/0604/4801/products/Blue_2.jpeg?v=1514845837"
},

{   color: 'gold',
    isRubber: false,
    gender: 'male',
    isMirgator: true,
    socialStatus: 'taken',
    diet: 'vegan',
    age: 65,
    featherNum: 100,
    name: 'Stan',
    imageUrl: "https://i.pinimg.com/originals/33/9d/68/339d68cf77753090be9fe1de64f0c0fb.jpg"
},

{   color: 'blue',
    isRubber: false,
    gender: 'male',
    isMirgator: false,
    socialStatus: 'married',
    diet: 'meat',
    age: 18,
    featherNum: 0,
    name: 'Sam',
    imageUrl: "https://animals.net/wp-content/uploads/2019/07/Blue-Duck-2-650x425.jpg"
},

{   color: 'gold',
    isRubber: false,
    gender: 'male',
    isMirgator: true,
    socialStatus: 'ready to mingle',
    diet: 'vegan',
    age: 23,
    featherNum: 75, 
    name: 'Billy',
    imageUrl: "https://c8.alamy.com/comp/XA2YK9/bird-animals-spain-golden-duck-fresh-water-lake-inland-water-water-XA2YK9.jpg"
}
]
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
    };
    
    const duckCards = (quacks) => {
        let domString = '';
        for(let i= 0; i < quacks.length; i++) {
        domString += '<div class="col-md-6 col-lg-4">';
        domString += '<div class="card">';
        domString += `<img src="${quacks[i].imageUrl}" class="card-img-top" alt="...">`;
        domString += '<div class="card-body">';
        domString += `<h5 class="card-title">${quacks[i].name}</h5>`;
        domString += `<p class="card-text"> ${quacks[i].socialStatus} </p>`
        domString += `<p class="card-text"> ${quacks[i].diet} </p>`
        domString += `</div>`;
        domString += `</div>`;
        domString += '</div>';
      
        };
    printToDom('duck-cards', domString);
    };

const choseColor = (e) => {
    const buttonId = e.target.id;
    const selectedDucks = [];
    for( let i= 0; i < ducks.length; i++) {
        if (ducks[i].color === buttonId) {
        selectedDucks.push(ducks[i]);
        }
    }
   duckCards(selectedDucks);
};


const choseGender = (e) => {
    const buttonId = e.target.id;
    const selectedDucks = [];
    for( let i= 0; i < ducks.length; i++) {
        if (ducks[i].gender === buttonId) {
        selectedDucks.push(ducks[i]);
        }
    }
   duckCards(selectedDucks);
};


const choseRubber = () => {
   
    const selectedDucks = [];
    for( let i= 0; i < ducks.length; i++) {
        if (ducks[i].isRubber) {
        selectedDucks.push(ducks[i]);
        }
    }
   duckCards(selectedDucks);
};


const events = () => {
    document.getElementById('blue').addEventListener('click', choseColor);
    document.getElementById('pink').addEventListener('click', choseColor);
    document.getElementById('gold').addEventListener('click', choseColor);
    document.getElementById('female').addEventListener('click', choseGender);
    document.getElementById('male').addEventListener('click', choseGender);
    document.getElementById('rubber').addEventListener('click', choseRubber);

};
    const init = () => {
        duckCards(ducks);
        events();
    }

init ();