
const url = "https://api.github.com/users/";

const searchInputEl = document.getElementById("searchInput");
const searchButtonEL = document.getElementById("search-btn");
const profileContainer = document.getElementById("profileContainer");
const loading = document.getElementById("loading");


const genrateProfile = (profile) => {
    return (
        `
        <div class="profile-box">
            <div class="top-section">
                 <div class="left">
                    <div class="avatar">
                        <img src="${profile.avatar_url}" alt="" width="100">
                    </div>
                    <div class="self">
                        <h1>${profile.name}</h1>
                        <h1>${profile.login}</h1>
                    </div>

                 </div>
                <a  href="${profile.repos_url}">
                <button class="primary-btn">Check Profile</button>
                </a>
            </div>
            <div class="about">
                <h2>About</h2>
                <p>${profile.bio}</p>
            </div>
            <div class="status">
                <div class="status-item">
                    <h3>Followers</h3>
                    <p>${profile.followers}</p>
                </div>
                <div class="status-item">
                    <h3>Followings</h3>
                    <p>${profile.following}</p>
                </div>
                <div class="status-item">
                    <h3>Repos</h3>
                    <p>${profile.repos_url}</p>
                </div>
            </div>
        </div>
        `
    )
};



const fetchProfile = async () =>{

    const usersname = searchInputEl.value;
    loading.innerText = "Loading....."
    loading.style.color = "black";
    try{
const res = await fetch(`${url}${usersname}`)
const data = await res.json();
if(data.bio){
    loading.innerText = "";
    profileContainer.innerHTML = genrateProfile(data);
}else{
loading.innerHTML = data.message; 
loading.style.color = "red";
}
console.log(data);
    }catch(error){
console.log(error); 
    }
}

searchButtonEL.addEventListener('click', fetchProfile);