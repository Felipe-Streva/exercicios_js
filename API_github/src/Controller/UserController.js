class UserController{

    static newSearch(user){

        let request = new XMLHttpRequest();
        request.open("GET",`https://api.github.com/users/${user}`)

        request.addEventListener('load', ()=>{
            if (request.status !== 200) {
                let errorRequest = document.querySelector('#error')
                errorRequest.classList.remove('hidden')
                setTimeout(()=>{errorRequest.classList.add('hidden')},5000)
            } else {
            let objectFormat = JSON.parse(request.responseText)
            let userModel = new UserModels(objectFormat.login,
                                     objectFormat.avatar_url,
                                     objectFormat.location,
                                     objectFormat.repos_url,
                                     objectFormat.followers,
                                     objectFormat.following);
            
            UserView.template(userModel.user)

            let requestRepository = new XMLHttpRequest();
            requestRepository.open("GET", userModel._repos)
            requestRepository.addEventListener('load', ()=>{
                if(requestRepository.status != 200){
                    let errorRequestRepository = document.querySelector('#repositoryError')
                    errorRequestRepository.classList.remove('hidden')
                    setTimeout(()=>{errorRequestRepository.classList.add('hidden')},5000)
                } else {

                let objectFormatRepository = JSON.parse(requestRepository.responseText)
                let arrayRepository = []
                for(let i = 0; i<objectFormatRepository.length;i++){
                    let repository = {
                        name: objectFormatRepository[i].name,
                        url: objectFormatRepository[i].html_url
                    }
                    arrayRepository.push(repository)
                }
                RepositoryView.template(arrayRepository)
                }
                
            })
            requestRepository.send()
            }
        })

        request.send()

    }
}