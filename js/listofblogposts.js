const baseUrl = "http://project-exam-1-prebeneide.preben.one/wp-json/wp/v2/posts";
const listOfPostsContainer = document.querySelector(".wordpresslistofblogposts");
const perPage = document.querySelector(".per-page-selection");
const categories = document.querySelectorAll(".categories");
const corsEnabledUrl = "https://noroffcors.herokuapp.com/" + baseUrl;

async function getListOfPosts(url){
    const response = await fetch(url);
    const posts = await response.json();
    posts.forEach(function(post){
        listOfPostsContainer.innerHTML +=
        `<a href="blogpostspecificpages.html?id=${post.id}"
        <div class="wordpresspostsdiv">
        <p class="wordpressposttitle">${post.title.rendered}</p>
        <div class="wordpresstext">${post.excerpt.rendered}</div>
        </div>
        </a>`
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

