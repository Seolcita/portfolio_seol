/** @format */

//------------- Main Projects -----------
const resultMainProj = document.querySelector('.result__mainProj');
const searchMainProj = document.querySelector('.search__mainProj');
const checkboxesMainProjBtns = document.querySelectorAll(
  '.checkbox__mainProj--btn'
);
let mainProjects = [];

// Get data & display
async function getMainProjData() {
  const res = await fetch('json/mainProj.json');
  const dataProjMain = await res.json();

  resultMainProj.innerHTML = '';
  console.log('resultMainProj', resultMainProj);

  dataProjMain.forEach((proj) => {
    const cardProjMain = document.createElement('div');
    cardProjMain.classList.add('card');

    const stacks = proj.stack.join(' • ').toString();

    cardProjMain.innerHTML = `
    <div class="container--toy">
      <div class="front--toy" style="background-image: url(${proj.image})">
        <div class="inner--toy">                 
          <p class="name--toy">${proj.title}</p>                  
        </div>
      </div>
      <div class="back--toy">
        <div class="inner--toy">       
          <p class="stacks--toy">${stacks}</p>
          <button><a href="${proj.demo}" class="proj-btn">Demo</a></button>
          <button><a href="${proj.github}" class="proj-btn">Github</a></button>            
        </div>
      </div>  
    </div>
    `;

    mainProjects.push(cardProjMain);

    resultMainProj.appendChild(cardProjMain);
  });
}

console.log('mainProjects', mainProjects);

// Search Function
searchMainProj.addEventListener('input', (e) =>
  filterProjDataMain(e.target.value)
);

function filterProjDataMain(searchTerm) {
  console.log('searchTerm', searchTerm);
  mainProjects.forEach((proj) => {
    // console.log('proj', proj);
    // if (proj.innerText.includes(searchTerm)) {
    if (proj.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      console.log('YES', searchTerm);
      proj.classList.remove('hidden');
    } else {
      console.log('searchTerm not found');
      proj.classList.add('hidden');
    }
  });
}

checkboxesMainProjBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    console.log(e.target.value);
    filterProjDataMain(e.target.value);
  });
});

getMainProjData();

/*

//------------- Toy Projects -----------
const resultToyProj = document.querySelector('.result__toyProj');
const searchToyProj = document.querySelector('.search__toyProj');
const checkboxesToyProjBtns = document.querySelectorAll(
  '.checkbox__toyProj--btn'
);
let toyProjects = [];

// Get data & display
async function getToyProjData() {
  const res = await fetch('json/toyProj.json');
  const dataProjToy = await res.json();

  resultToyProj.innerHTML = '';
  console.log('dataProjToy', dataProjToy);

  dataProjToy.forEach((proj) => {
    const cardProjToy = document.createElement('div');
    cardProjToy.classList.add('card');

    const stacks = proj.stack.join(' • ').toString();

    cardProjToy.innerHTML = `
    <div class="container--toy">
      <div class="front--toy" style="background-image: url(${proj.image})">
        <div class="inner--toy">                 
          <p class="name--toy">${proj.title}</p>                  
        </div>
      </div>
      <div class="back--toy">
        <div class="inner--toy">       
          <p class="stacks--toy">${stacks}</p>
          <button><a href="${proj.demo}" class="proj-btn">Demo</a></button>
          <button><a href="${proj.github}" class="proj-btn">Github</a></button>            
        </div>
      </div>  
    </div>
    `;

    toyProjects.push(cardProjToy);

    resultToyProj.appendChild(cardProjToy);
  });
}

console.log('projects', projects);
// Search Function
searchToyProj.addEventListener('input', (e) => filterProjData(e.target.value));

function filterProjData(searchTerm) {
  console.log('searchTerm', searchTerm);
  toyProjects.forEach((proj) => {
    // console.log('proj', proj);
    // if (proj.innerText.includes(searchTerm)) {
    if (proj.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      console.log('YES', searchTerm);
      proj.classList.remove('hidden');
    } else {
      console.log('searchTerm not found');
      proj.classList.add('hidden');
    }
  });
}

checkboxesToyProjBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    console.log(e.target.value);
    filterProjData(e.target.value);
  });
});

getToyProjData();
*/
