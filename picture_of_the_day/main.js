function elementFactory(type, id, classe, content){
    let elementCreated = document.createElement(`${type}`);
    elementCreated.setAttribute('id', `${id}`);
    elementCreated.classList.add(`${classe}`);
    elementCreated.innerText = `${content}`;

    return elementCreated;
}

function deleteElement(id, classePai){
    let element = document.getElementById(`${id}`);
    classePai.removeChild(element)
}


let myRequest = new XMLHttpRequest();

myRequest.open("GET", `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)

myRequest.addEventListener("load", function(){

    if(myRequest.status==200){
        let aux = JSON.parse((myRequest.responseText))

        const body = document.querySelector('body')

        const h2 = elementFactory('h2','title', 'title', aux.title);
        body.appendChild(h2)

        if(aux.media_type == 'image'){
            const img = elementFactory('img','foto','foto','')
            if(aux.hdurl != undefined ){
                img.src = aux.hdurl
                body.appendChild(img)
            } else {
                img.src = aux.url
                body.appendChild(img)
            }
        } else {
            const iframe = elementFactory('iframe','foto', 'iframe', '');
            iframe.src = aux.url
            body.appendChild(iframe)
        }

        const day = elementFactory('p','date', 'date', aux.date);
        body.appendChild(day)

        const text = elementFactory('p','text', 'date', aux.explanation);
        body.appendChild(text)

        const copy = elementFactory('p','copy', 'date', '');
        copy.innerHTML = `&copy; ${aux.copyright}` 
        body.appendChild(copy)
    } else {
        window.location.href = 'erro.html'
    }
})
myRequest.send()

let form = document.querySelector('form');
form.addEventListener('submit', function(event){
    event.preventDefault()
    const body = document.querySelector('body')
    deleteElement('title', body)
    deleteElement('date', body)
    deleteElement('text', body)
    deleteElement('copy', body)
    deleteElement('foto', body)



    myRequest.open("GET", `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${this.elements.date.value}`)

    
    myRequest.send()
})