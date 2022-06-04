document.addEventListener('DOMContentLoaded', () => {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(res => res.json())
    .then(data => {
        for (const img of data.message) {
            createImg(img)
        }
    })  
})

document.addEventListener('DOMContentLoaded', () => {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(data => {
        for(const breed in data.message){
            let li = document.createElement('li');
            li.textContent = breed
            li.addEventListener('click', e => e.target.style.color = 'red')
            document.querySelector('#dog-breeds').appendChild(li)
        }
    })
})

document.addEventListener('DOMContentLoaded', () => {
    let dropDown = document.getElementById('breed-dropdown')
    dropDown.addEventListener('click', e => {
        console.log(e.target.value)
    })

    let list = document.querySelectorAll('li')
    console.log(list)
   
})

function createImg(source) {
    let img = document.createElement('img');
    img.src = source;
    document.querySelector('#dog-image-container').appendChild(img);
}

