const items = document.querySelector("#Crousal-Items");

let DisplayCrousal = ()=>{
    let CrousalItems = ["All", "Computer Programming", "Akshay Kumar", "live", "News", "sports", "Recently Uploaded", "Watched", "New to you"];
items.innerHTML = CrousalItems.map((item) => {
    return `<a  href="#">${item}</a>`

}).join("");

return items;

}

export default DisplayCrousal;