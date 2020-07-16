class RepositoryView{
    static template(arrayRepository){
        let body = document.querySelector('body')
        deleteElement('repository', body)

        let divRepository = elementFactory('div', 'repository', 'repository', '')
        body.appendChild(divRepository)

        for(let i = 0; i<arrayRepository.length;i++){
            let eachRepository = elementFactory('div', 'each', 'each', '')
            divRepository.appendChild(eachRepository)

            let link = elementFactory('a', 'link', 'link', `<img class="git-img" src="Octocat/Octocat.png" alt=""><p class="text-hiperlink">${arrayRepository[i].name}</p>`)
            link.href = arrayRepository[i].url
            link.target = '_blank'
            eachRepository.appendChild(link)
        }
        
    }
}