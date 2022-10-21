# Project Exam 1

The goal here was to put into practice the skills I had learned over my first year of studies.
My task was creating a blog site.  I could choose the design and topics covered on the blog, but it should have at least the following pages:
-	Home page
-	About page
-	List of blog posts
-	Blog post specific pages
-	Contact page.

## Description

### Home Page
The home page should have a ‘Latest Posts’ section which uses a carousel (slider) for users to click to view more posts. For example, by default the user can see four posts, then they can click an arrow on the right to view the next four posts, and click it again to view the next four posts. The user can also click back to view results they had previously seen.

### Blog Page

The blog posts page should show the first 10 blogs, and the user could click to view more results which then show underneath the first 10 blogs.

### Blog Specific Page

The content of the blog specific page should be dynamically built using a query string parameter based on whatever link the user clicked. The title of the blog specific page should change based on the blog that has been clicked on e.g. “My Blog | An Article I Wrote”.

If images on the blog post page are clicked, a modal should appear giving the user a bigger view of that image. Clicking outside the image should hide the modal.

### Contact page

I needed to create a contact us page, there should be 4 textboxes on this page.
-	Name (Must be more than 5 characters long)
-	Email address (Must be a valid email address)
-	Subject (Must be more than 15 characters long)
-	Message content (Must be more than 25 characters long)

I needed to use JavaScript for validation, show error messages if the values in the textboxes do not meet the requirements.

### WordPress

The content for my website should be stored on a WordPress installation used as a Headless CMS. It was important to note that we are only using WordPress to provide an API and add content for the blog. I wasn't supposed to submit a link to a WordPress site, but build my website using HTML, CSS and JavaScript and making a call to the WordPress REST API to fetch the data. 

The project had two aspects:
-	API from your WordPress installation
-	My website built with HTML, CSS and JavaScript

I needed to add at least 12 blogs for my website. I could use lorem ipsum for paragraphs if I needed, but headings, images etc. should all make sense.

## Level 1 Process

1.	I needed to decide on the theme for the blog I was going to make
2.	Create a prototype of the website
3.	Install WordPress on my web host and add the blogs on the admin panel. 
4.	Use the GitHub repo created by GitHub Classroom for my files and deploy to Netlify
5.	Build my website using HTML, CSS and JavaScript making a call to the WordPress REST API to fetch my data.
6.	Install Hotjar on my website.
7.	Ask users to test my website, and adjust based on their feedback and any insights from Hotjar.
8.	Write a report documenting my project.

## Level 2 Process (optional)

1.	I could try adding a sort, filter, or search to the blog posts page allowing users to find the blog post more easily that they’re looking for.

## Built With

- HTML
- CSS
- Javascript

## Getting Started

### Installing

1. Clone the repo:

```bash
git clone git@github.com:NoroffFEU/portfolio-1-example.git
```

2. Install the dependencies:

```
npm install
```

### Running

To run the app, run the following commands:

```bash
npm run start
```

## Contact

[My LinkedIn page](www.linkedin.com/in/prebeneide)
