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

const Header = {
  isIndex: (window.location.href.indexOf("index.html") > -1) ? "active" : "",
  isWriting: (window.location.href.indexOf("writing.html") > -1) ? "active" : "",
  isAbout: (window.location.href.indexOf("about.html") > -1) ? "active" : "",
  render: function() {
    return `
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light pt-3">
        <a class="navbar-brand" href="#">
          <svg width="88px" height="88px" viewBox="0 0 88 88" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="KLMonogram" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <path d="M28,77.3711374 L28,83.9247152 C12.1752288,77.577049 1,62.0935818 1,44 C1,20.2517558 20.2517558,1 44,1 C47.4428206,1 50.7911395,1.40460953 54,2.16887175 L54,8.36717785 C50.8192028,7.47636367 47.4652317,7 44,7 C23.5654643,7 7,23.5654643 7,44 C7,58.703515 15.5766245,71.4038519 28,77.3711374 Z M35,79.8977488 C37.881051,80.6177482 40.8958856,81 44,81 C64.4345357,81 81,64.4345357 81,44 C81,29.6943696 72.8812707,17.2849701 61.0000042,11.1279935 L61,4.49119252 C76.2935208,11.0805415 87,26.2899546 87,44 C87,67.7482442 67.7482442,87 44,87 C40.9132338,87 37.9024333,86.6747519 35,86.056657 L35,79.8977488 Z" id="Combined-Shape" fill="#000000" fill-rule="nonzero"></path>
              <path d="M14.9156337,29.4806048 C15.8397675,27.6330295 16.934769,25.885795 18.1799248,24.2596146 L38.5416306,44.6213203 L38.2487373,44.9142136 L38.5416306,45.2071068 L18.991315,64.7574223 C17.6924571,63.1942816 16.5373685,61.5074171 15.5463381,59.7171179 L30.3492424,44.9142136 L14.9156337,29.4806048 Z M11.2156349,25.780606 L10.2573593,24.8223305 L14.5,20.5796898 L14.6174204,20.6971102 C13.3513915,22.2913049 12.2123643,23.9909023 11.2156349,25.780606 Z M15.4426769,68.3060605 L14.5,69.2487373 L10.2573593,65.0060967 L11.8872392,63.3762168 C12.9398547,65.1170078 14.1300217,66.7653101 15.4426769,68.3060605 Z M72.8389469,59 C71.7170366,61.1525787 70.3611911,63.1638169 68.805125,65 L47,65 L47,59 L72.8389469,59 Z" id="Combined-Shape" fill="#000000"></path>
              <g id="Group-2" transform="translate(35.000000, 5.000000)" fill="#000000">
                <rect id="Rectangle" x="12" y="0" width="7" height="60"></rect>
                <rect id="Rectangle" x="0" y="17" width="7" height="60"></rect>
              </g>
            </g>
          </svg>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item p-3 ${this.isIndex}">
              <a class="nav-link" href="/index.html">WORK <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item p-3 ${this.isWriting}">
              <a class="nav-link" href="/writing.html">WRITING</a>
            </li>
            <li class="nav-item p-3 ${this.isAbout}">
              <a class="nav-link" href="/about.html">ABOUT</a>
            </li>
          </ul>
          <span class="navbar-text">
            Kevin Lu is a product designer in NYC.
          </span>
        </div>
      </nav>
    </div>
    `
  }
}
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
const header = document.getElementById("header");
header.innerHTML += Header.render();

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
