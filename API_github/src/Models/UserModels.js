class UserModels{
    constructor(name, avatar, location, repos, followers, following){
        this._name = name;
        this._avatar = avatar;
        this._location = location;
        this._repos = repos;
        this._followers = followers;
        this._following = following;
    }

    get user(){
        let user = {
            name: this._name,
            avatar: this._avatar,
            location: this._location,
            repos: this._repos,
            followers: this._followers,
            following: this._following
        }
        return user
    }
}