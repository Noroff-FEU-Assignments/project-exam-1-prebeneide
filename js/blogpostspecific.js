const specificBlogContainer = document.querySelector(".wordpress-specific-blog-div");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const baseUrl = "http://project-exam-1-prebeneide.preben.one/wp-json/wp/v2/posts/";

const corsEnabledUrl = "https://noroffcors.herokuapp.com/" + baseUrl;

const url = corsEnabledUrl + id;


async function fetchSpecificBlogPost() {
    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(details);

        specificBlogContainer.innerHTML = "";

        createHtml(details);

        createTitle(details);
    } catch(error) {
        console.log(error);
        specificBlogContainer.innerHTML = error;
    }
}

fetchSpecificBlogPost();

function createHtml(details) {
    
    console.log(details);

    specificBlogContainer.innerHTML +=  `
                                         <div class="wordpress-specific-post-div">
                                         <h1 class="wordpress-specific-post-title">${details.title.rendered}</h1>
                                         <div class="wordpress-specific-text">${details.content.rendered}</div>
                                         </div>
                                         `;
}

function createTitle(details) {
    const titleName = document.querySelector(".specificblogtitle");

    titleName.innerHTML += `${details.title.rendered}`;
}






