const baseUrl = "http://project-exam-1-prebeneide.preben.one/wp-json/wp/v2/posts";
const listOfPostsContainer = document.querySelector(".wordpresslistofblogposts");
const perPage = document.querySelector(".per-page-selection");
const categories = document.querySelectorAll(".categories");
const corsEnabledUrl = "https://noroffcors.herokuapp.com/" + baseUrl;
const searchButton = document.querySelector(".search-button");

async function getListOfPosts(url){
    const response = await fetch(url);
    const posts = await response.json();
    posts.forEach(function(post){
        listOfPostsContainer.innerHTML +=
        `<div class="wordpresspostsdiv">
        <a href="blogpostspecificpages.html?id=${post.id}">
        <h2 class="wordpressposttitle">${post.title.rendered}</h2>
        <p class="wordpresstext">${post.excerpt.rendered}</p>
        </a></div>`
    })
}

getListOfPosts(corsEnabledUrl);



perPage.onchange = function(event){
    const newUrl = corsEnabledUrl + `?per_page=${event.target.value}`;
    console.log(newUrl);
    listOfPostsContainer.innerHTML = "";
    getListOfPosts(newUrl);
}

categories.forEach(function(category){
    category.onclick = function(event){
        let newUrl;
            const categoryChosen = event.target.value;
            newUrl = corsEnabledUrl + `?categories=${categoryChosen}`;
            console.log(newUrl);
        listOfPostsContainer.innerHTML = "";
        getListOfPosts(newUrl);
    }
})

searchButton.onclick = function() {
    const searchInput = document.querySelector("#search-input").value;
    const newUrl = corsEnabledUrl + `?search=${searchInput}`;
    listOfPostsContainer.innerHTML = "";
    getListOfPosts(newUrl);
}

var modal = document.getElementById("myModal");

var img = document.getElementsByClassName("wp-block-image size-large");
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
  }

