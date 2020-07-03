function elementFactory(type, id, classe, content){
    let elementCreated = document.createElement(`${type}`);
    elementCreated.setAttribute('id', `${id}`);
    elementCreated.classList.add(`${classe}`);
    elementCreated.innerText = `${content}`;

    return elementCreated;
}

const myRequest = new XMLHttpRequest();
myRequest.open("GET", "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")

myRequest.addEventListener("load", function(){

    if(myRequest.status==200){
        let aux = JSON.parse((myRequest.responseText))

        let body = document.querySelector('body')

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
            const iframe = elementFactory('iframe','iframe', 'iframe', '');
            iframe.src = aux.url
            body.appendChild(iframe)
        }

        const data = elementFactory('p','date', 'date', aux.date);
        body.appendChild(data)

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