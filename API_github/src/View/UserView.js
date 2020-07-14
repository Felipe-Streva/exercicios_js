class UserView{
    static template(user){
        let body = document.querySelector('body')
        deleteElement('div', body)

        let div = elementFactory('div', 'div', 'main', '')
        body.appendChild(div)

        let divAvatar = elementFactory('div', 'divAvatar', 'div-avatar', '')
        div.appendChild(divAvatar)

        let avatar = elementFactory('img', 'avatar', 'avatar', '')
        avatar.src = `${user.avatar}`
        divAvatar.appendChild(avatar)

        let divName = elementFactory('div', 'divName', 'div-name', '')
        div.appendChild(divName)


        let name = elementFactory('h3', 'name', 'name', `${user.name}`)
        divName.appendChild(name)

        if(user.location != null){
            let location = elementFactory('p', 'infos', 'infos', `${user.location}`)
            divName.appendChild(location)
        }

        let followers = elementFactory('p', 'infos', 'infos', `${user.followers} followers`)
        divName.appendChild(followers)

        let following = elementFactory('p', 'infos', 'infos', `${user.following} following`)
        divName.appendChild(following)
        
    }
}