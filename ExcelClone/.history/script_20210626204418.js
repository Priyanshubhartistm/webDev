// To prevent Auto Spelling Check
let body = document.querySelector("body");
body.spellcheck = false;
let oldCell;
let dataObj = {};


//For Menu-Bar Column
let menuBarPtags = document.querySelectorAll(".menu-bar p");
for (let i = 0; i < menuBarPtags.length; i++) {
  menuBarPtags[i].addEventListener("click", function (e) {
    if (e.currentTarget.classList.contains("menu-bar-option-selected")) {
      e.currentTarget.classList.remove("menu-bar-option-selected");
    } else {
      for (let j = 0; j < menuBarPtags.length; j++) {
        if (menuBarPtags[j].classList.contains("menu-bar-option-selected"))
          menuBarPtags[j].classList.remove("menu-bar-option-selected");
      }

      e.currentTarget.classList.add("menu-bar-option-selected");
    }
  });
}


//For Column
let columnTags = document.querySelector(".column-tags");
for (let i = 0; i < 26; i++) {
  let div = document.createElement("div");
  div.classList.add("column-tag-cell");
  div.innerText = String.fromCharCode(65 + i);
  columnTags.append(div);
}


//For Row
let rowNumbers = document.querySelector(".row-numbers");
for (let i = 1; i <= 100; i++) {
  let div = document.createElement("div");
  div.classList.add("row-number-cell");
  div.innerText = i;
  rowNumbers.append(div);
}


//For Grid cell
let grid = document.querySelector(".grid");
for (let j = 1; j <= 100; j++) {
  let row = document.createElement("div");
  row.classList.add("row");
  
  for (let i = 0; i < 26; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    //cell.setAttribute("data-address",  let address = 65) + j);
    let address = String.fromCharCode(^65+)
   
    cell.setAttribute("data-address", address);
    dataObj[address] = {
      value: "",
      formula: "",
      upstream: [],
      downstream: [],
    };

    // Cell selection & De-Selection 
    let formulaSelectCell = document.querySelector("#select-cell");
    cell.addEventListener("click", function (e) {
      //Check if a old cell selected already or not
      if (oldCell) {
        // if already old cell selected then deselect old cell by removing class 
        oldCell.classList.remove("grid-selected-cell");
      }
      //jis cell pr click kra use select kro class add krke
      e.currentTarget.classList.add("grid-selected-cell");

      let cellAddress = e.currentTarget.getAttribute("data-address");

      formulaSelectCell.value = cellAddress;

      //and ab jo naya cell select hogya use save krdo old cell wali variable taki next time agr click ho kisi nye cell pr to ise deselect kr pai
      oldCell = e.currentTarget;
    });

    cell.contentEditable = true;
    row.append(cell);
  }
  grid.append(row)
}