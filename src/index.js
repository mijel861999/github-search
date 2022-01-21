
const buttonUser = document.getElementById('search-user');
const inputUser = document.getElementById('input-user');

const userImage = document.getElementById('img-user');
const nameContainer = document.getElementById('name');
const userContainer = document.getElementById('user');
const dateContainer = document.getElementById('date');
const bioContainer = document.getElementById('bio');
const reposContainer = document.getElementById('repos');
const followersContainer = document.getElementById('followers');
const followingContainer = document.getElementById('following');

buttonUser.addEventListener('click', async () => {
    console.log(inputUser.value)
    try {
        const user = await getData(inputUser.value);
        
        nameContainer.innerText = user.twitter_username;
        userContainer.innerText = '@' + user.login;
        dateContainer.innerText = user.created_at;
        reposContainer.innerText = user.public_repos;
        followersContainer.innerText = user.followers;
        followingContainer.innerText = user.following;
        userImage.style.backgroundImage = `url(${user.avatar_url})`
        
        if(user.bio == null) {
            bioContainer.innerText = 'No hay biografia disponible :c'
        }else {
            bioContainer.innerText = user.bio;
        }
        
    } catch( e ){
        alert('Este usuario no existe')
    }

})


const getData = async ( user ) => {
    const apiURL = 'https://api.github.com/users/'

    const response = await fetch(apiURL+ user);
    const data = await response.json();

    return data
}
