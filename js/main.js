/*jshint esversion: 6 */

class Portfolio_Item{
  constructor(title, description, image_url, target_url){
    this.title = title;
    this.description = description;
    this.image = image_url;
    this.link = target_url;
  }
  render() {
    return `
      <div class="row portfolio-item align-items-center border mt-5 mb-5 text-center">
        <div class="col-12 col-md-4 pl-5 pr-5">
          <img class="img-fluid" src=${this.image}>
        </div>
        <div class="col-12 col-md-8 text-md-left pl-0">
          <h1 class="display">${this.title}</h1>
          <p>${this.description}</p>
          <a href="${this.link}">Read More</a>
      </div>
    `;
  }
}

const portfolio_items = [
  new Portfolio_Item(
    "Rethinking HR Time",
    "Improving the way millions of hourly workers get paid",
    "img/logo-1.png",
    "work/modernizing-hr.html"
  ),
  new Portfolio_Item(
    "New Hire Onboarding",
    "Engaging new employees with a human approach",
    "img/logo-2.png",
    "work/new-hire-onboarding.html"
  ),
  new Portfolio_Item(
    "FuboTV",
    "Selling the Netflix of sports",
    "img/logo-3.png",
    "work/fubotv.html"
  ),
  new Portfolio_Item(
    "Tinder for Ballroom Dancers",
    "Concept exploration and discovery",
    "img/logo-4.png",
    "work/dancr.html"
  ),
];


class Insight {
  constructor(title, description, icon_url){
    this.title = title;
    this.description = description;
    this.icon = icon_url;
  }
  render() {
    return `
    <div class="insight-container row">
    <div class="insight-left bg-light col-3">
    <img class="insight-icon" src="../modernizing-hr/${this.icon}">
    </div>
    <div class="col-9">
    <h5>${this.title}</h5>
    <p>${this.description}</p>
    </div>
    </div>`;
  }
}

const insights_time = [
  new Insight(
    "HOURLY & SALARIED EMPLOYEES",
    "The primary employee segments are those who clock in and out, those who enter their hours, and those who automatically get paid.",
    "../img/modernizing-hr/insight-icon-1.svg"
  ),
  new Insight(
    "MICRO & SKIMMING MANAGERS",
    "The primary manager segments are those who lean into making sure every single detail is correct, and those who don't really have time to do administrative managerial tasks.",
    "../img/modernizing-hr/insight-icon-2.svg"
  ),
  new Insight(
    "ONE SIZE DOES NOT FIT ALL",
    "An on-call nurse records time differently than a fitness instructor, expecting mother, or software engineer.",
    "../img/modernizing-hr/insight-icon-3.svg"
  ),
  new Insight(
    "TIME IS MONEY",
    "Accurate time entry is a high stakes activity, since it directly impacts pay. Furthermore, both employees and managers want to minimize time spent in HR systems.",
    "../img/modernizing-hr/insight-icon-4.svg"
  ),
  new Insight(
    "MISTAKES ARE COSTLY",
    "Inaccurate time entries such as missed punches cause employees to be paid incorrectly and give managers more work to fix.",
    "../img/modernizing-hr/insight-icon-5.svg"
  ),
  new Insight(
    "THE SEAMS ARE SHOWING",
    "Users are confused when completing a task requires switching between legacy and new systems.",
    "../img/modernizing-hr/insight-icon-6.svg"
  ),
];

const insights_onb = [
  new Insight(
    "Operational Inefficiencies",
    "one in two HR practitioners felt their onboarding process was “somewhat structured” to “not-at-all” structured.",
    "../img/modernizing-hr/insight-icon-1.svg"
  ),
  new Insight(
    "Get Comfortable",
    "New Hires are anxious their first day of work and want to feel like everythings okay.",
    "../img/modernizing-hr/insight-icon-2.svg"
  ),
  new Insight(
    "Culture Bomb",
    "Practitioners and managers want to share their company culture and way of doing things with their new hires.",
    "../img/modernizing-hr/insight-icon-3.svg"
  ),
  new Insight(
    "Spark a Connection",
    "Both new hires and managers want to build a relationship with each other and the company.",
    "../img/modernizing-hr/insight-icon-4.svg"
  ),
  new Insight(
    "Compliance, Compliance, Compliance",
    "Managers and practitioners need to ensure that the new hires complete the required paperwork.",
    "../img/modernizing-hr/insight-icon-5.svg"
  ),
  new Insight(
    "Time Sensitive Paperwork",
    "Some paperwork, such as Form I-9, must be completed in a set time frame or else new hires are not able to work.",
    "../img/modernizing-hr/insight-icon-6.svg"
  ),
];

class Post{
  constructor(name, description, date, image_url, link_url) {
    this.name = name;
    this.description = description;
    this.date = date;
    this.image = image_url;
    this.link = link_url;
  }
  render() {
    return `
  <div class="col-lg-4 col-sm-6 mb-4">
    <div class="card h-100">
      <a href="${this.link}"><img class="card-img-top" src="img/${this.image}" alt=""></a>
      <div class="card-body">
        <h4 class="card-title">
          <a href="${this.link}">${this.name}</a>
        </h4>
        <p class="card-text">${this.description}</p>
        <p class="card-text">${this.date}</p>
      </div>
  </div>`;
  }
}

const posts = [
  new Post(
    "Behavioral Economics for Cognitive UX Patterns",
    "What cognitive biases tell us about designing better products",
    "March 12, 2019",
    "cognitive-ux.png",
    "https://medium.com/@xkevinlu/evernote-guerilla-usability-testing-73decea897b6"
  ),
  new Post(
    "UX KPIs Framework for Scrum",
    "How to work better with your product teams through a common language",
    "March 12, 2019",
    "uxkpi.png",
    "https://medium.com/@xkevinlu/evernote-guerilla-usability-testing-73decea897b6"
  ),
  new Post(
    "Better Design Presentations",
    "Understanding what makes for a better presentation",
    "March 12, 2019",
    "design-presentations.png",
    "https://medium.com/@xkevinlu/evernote-guerilla-usability-testing-73decea897b6"
  ),
  new Post(
    "Basic Web Scraper with Python Tutorial",
    "Cleaning a dataset off a website",
    "April 3, 2019",
    "python.jpeg",
    "https://medium.com/@xkevinlu/basic-web-scraping-with-python-tutorial-e715ee36f6c1"
  ),
  new Post(
    "Making of a Design Quiz Game",
    "Designer coding his own side project",
    "April 2, 2019",
    "pixel-perfect-thumbnail.png",
    "https://medium.com/@xkevinlu/making-of-a-design-quiz-game-4a8b43eb4f37"
  ),
  new Post(
    "Evernote Feature Suggestion & Usability Testing",
    "Uncovering pain points in Evernote's Reminder feature",
    "May 22, 2016",
    "evernote.jpg",
    "https://medium.com/@xkevinlu/evernote-guerilla-usability-testing-73decea897b6"
  ),
];

const Footer = {
  render: function() {
    return `
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-12">
            <p class="small text-sm-center text-md-left font-weight-light">
            kevinludesign@gmail.com |
            <a href="https://www.linkedin.com/in/kevinalu/">LinkedIn</a> |
            <a href="https://www.behance.net/kevinalu">Behance</a>
            </p>
          </div>
          <div class="col-md-6 col-12">
            <p class="small font-weight-light text-sm-center text-md-right">Website & content by Kevin Lu</p>
          </div>
        </div>
      </div>
    `;
  }
};

const footer = document.getElementById("footer");
footer.innerHTML += Footer.render();

try {
  const insights_hr_render_area = document.getElementById("insights-hr");
  for (let i=0; i<insights_time.length; i++) {
    insights_hr_render_area.innerHTML += insights_time[i].render();
  }
}
 catch (error) {
  console.log("not this page");
}

try {
  const posts_render = document.getElementById("posts-render");
  for (let i=3; i<posts.length; i++) {
    posts_render.innerHTML += posts[i].render();
  }
}
 catch (error) {
  console.log("not this page");
}

try {
  const portfolio_render_area = document.getElementById("portfolio-items");
  for (let i=0; i<portfolio_items.length; i++) {
    portfolio_render_area.innerHTML += portfolio_items[i].render();
  }
  }
catch (error) {
  console.log("not this page");
}

function onReady(callback) {
    var intervalID = window.setInterval(checkReady, 1000);

    function checkReady() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalID);
            callback.call(this);
        }
    }
}

onReady(function () {
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").style.display = "block";
});
