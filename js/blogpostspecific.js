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
                                         <h2 class="wordpress-specific-post-title">${details.title.rendered}</h2>
                                         <div class="wordpress-specific-content">${details.content.rendered}</div>
                                         `;
}

function createTitle(details) {
    const titleName = document.querySelector(".specificblogtitle");
    const orientationName = document.querySelector(".specificblogorientation");

    titleName.innerHTML += `${details.title.rendered}`;
    orientationName.innerHTML += `${details.title.rendered}`;
}











