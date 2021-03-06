
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
const placeContainer = document.getElementById('place');
const personalPageContainer = document.getElementById('personal-page');
const twitterContainer = document.getElementById('twitter');
const companyContainer = document.getElementById('company');

buttonUser.addEventListener('click', async () => {
        
    const user = await getData(inputUser.value);
    if( user.login == null) {
        alert('Este usuario no existe')
    }else {
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

        placeContainer.innerText = user.location;
        personalPageContainer.innerText = user.html_url;
        personalPageContainer.href = `https://github.com/${user.login}`;
        twitterContainer.innerText = user.twitter_username;
        twitterContainer.href=`https://twitter.com/${user.twitter_username}`;
        companyContainer.innerText = user.company;
    } 

})


const getData = async ( user ) => {
    const apiURL = 'https://api.github.com/users/'

    try {
        const response = await fetch(apiURL+ user);
        const data = await response.json();

        return data

    } catch(e) {
        console.log(e)
    }
}
