console.log("Testing...");

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

/******** Displaying and Hiding the Form **************/

/******** Selecting DOM elements **************/
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");

/******** Creating DOM elements **************/
const factsList = document.querySelector(".facts-list");

factsList.innerHTML = "";

// Inserting text manually onto the facts list
/************ https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML ************* */
// factsList.insertAdjacentHTML("afterbegin", "<li>Suraj</li>");
// factsList.insertAdjacentHTML("afterbegin", "<li>Deepak</li>");

// Fetching fact data from the array of objects
// .join()  ==> https://www.w3schools.com/jsref/jsref_join.asp

//Below function is taking that array of objects as an argument
createFactsList(initialFacts);

//Here, we will be fetching values from the keys `text, source, and category` from our object
function createFactsList(dataArray) {
  const htmlArr = dataArray.map((fact) => {
    return `<li class="fact">
    <p>
      ${fact.text}
      <a class="source"
        href="${fact.source}"
        target="_blank"
        >(Source)</a
      >
    </p>
    <span class="tag" style="background-color: #3b82f6;">${fact.category}</span>
  </li>`;
  });

  console.log(htmlArr);

  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

console.dir(btn); // returns all the DOM properties for a particular HTML element
// Each HTML element gets converted to Javascript object, onto which we can use these properties
// (eg : classList, etc)

/******** Displaying and Hiding the Form **************/
/******** Toggle Form Visibility **************/
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});
