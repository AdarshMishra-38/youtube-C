

// ######################## import section  #########################################

import { FetchVideos, FetchSearchedVideos } from "./FetchVideos.js";
import DisplayCrousal from "./DisplayCrousel.js";
import paginate from "./paginate.js";
import displayVideos from "./DisplayVideos.js";
import displayButtons from './DisplayButton.js';
import Searchedresult from "./SearchResult.js ";




// ################################ Element section ####################################


const SideSection = document.querySelector("#Side-Section");
const MidSection = document.querySelector("#Mid-Section");
const Menu = document.querySelector("#Hamburger-Menu");
const BtnContainer = document.querySelector(".btn-container");
const FormInput = document.querySelector("#TextInput");
const VideoCards = document.querySelector("#Video-Section");
const SearchButton = document.querySelector("#Searchbutton");
const CrousalItems = document.querySelector("#Crousal-Items");
console.log(FormInput.value)


let pages = [];
let index = 0;


const TempSideSection = SideSection.cloneNode(true);
let c = 0;







// ################################### SIDEBAR FUNCTIONALITY ############################################

Menu.addEventListener("click", loadSidebarContent);

function loadSidebarContent() {
    fetch('../SideBar/sidebar.html')
        .then(response => response.text())
        .then(data => {


            const tempdiv = document.createElement("div");
            tempdiv.innerHTML = data;
            const tempcontent = tempdiv.querySelector(".Menu-container")

            if (c === 0) {
                SideSection.innerHTML = tempcontent.innerHTML;

                c = 1;

            }
            else {


                SideSection.innerHTML = TempSideSection.innerHTML;
                c = 0;
            }



        })
        .catch(error => console.error('Error fetching content:', error));
}






// #################################### DISPLAY VIDEOS ##########################################

const setupUI = () => {

    displayVideos(pages[index]);
    displayButtons(BtnContainer, pages, index)
    
}






// #################################### FETCH VIDEOS AND PAGINATION ##############################


const INIT = async () => {

    let data = await FetchVideos();
    data = data.items;
    // console.log(data)
    pages = paginate(data);
    // console.log(pages)
    setupUI();

}

INIT();





// ############################### PAGE BUTTON FUNCTIONALITY  #####################################



BtnContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('btn-container')) return
    if (e.target.classList.contains('page-btn')) {
        index = parseInt(e.target.dataset.index)
    }
    if (e.target.classList.contains('next-btn')) {
        index++
        if (index > pages.length - 1) {
            index = 0
        }
    }
    if (e.target.classList.contains('prev-btn')) {
        index--
        if (index < 0) {
            index = pages.length - 1
        }
    }

    console.log(FormInput.value)

    if (FormInput.value) {

        SearchResultUI();

    }
    else {


        setupUI();
    }


})








// ################################# SEARCH FUNCTIONALITY ################################################





function SearchResultUI() {

    Searchedresult(pages[index]);
    displayButtons(BtnContainer, pages, index);


}



let Fetch_Search_Results = async () => {
    const value = FormInput.value;
    console.log("function called");

    if (!value) {
        VideoCards.innerHTML = '<div class="error"> please enter valid search term</div>';

    }
    else {


        let data = await FetchSearchedVideos(value);
        data = data.items;
        // console.log(data)
        pages = paginate(data);
        index = 0;

        SearchResultUI();

        // console.log(pages)
    }

}

SearchButton.addEventListener("click", (event) => {
    event.preventDefault();
    Fetch_Search_Results();
});







// ##################################### CROUSAL SEARCH FUNCTIONALITY ####################################3


CrousalItems.addEventListener("click",(event)=>{
    
   
    FormInput.value = event.target.innerHTML;
    Fetch_Search_Results(); 

})






// #################################### CROUSAL DISPLAY FUNCTIONALITY ##################################

let items = DisplayCrousal();
items.forEach(element => {
    let Elementlength = element.textContent.length;
    let width = Elementlength * 2;
    let height = "32px";

    element.style.width = width;
    element.style.height = height;



});
















