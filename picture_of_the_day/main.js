function elementFactory(type, id, classe, content){
    let elementCreated = document.createElement(`${type}`);
    elementCreated.setAttribute('id', `${id}`);
    elementCreated.classList.add(`${classe}`);
    elementCreated.innerText = `${content}`;

    return elementCreated;
}

const myRequest = new XMLHttpRequest();
myRequest.open("GET", "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
myRequest.send()

myRequest.addEventListener("load", function(){
    let aux = JSON.parse((myRequest.responseText))

    let body = document.querySelector('body')

    const h2 = elementFactory('h2','title', 'title', aux.title);
    body.appendChild(h2)

    const iframe = elementFactory('iframe','iframe', 'iframe', '');
    iframe.src = aux.url
    body.appendChild(iframe)

    const data = elementFactory('p','date', 'date', aux.date);
    body.appendChild(data)

    const text = elementFactory('p','text', 'date', aux.explanation);
    body.appendChild(text)

    const copy = elementFactory('p','copy', 'date', '');
    copy.innerHTML = `&copy; ${aux.copyright}` 
    body.appendChild(copy)




})