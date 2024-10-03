
const categoriesList = document.querySelector("#categories");

const categoriesItem = categoriesList.querySelectorAll(".item");

console.log(`Number of categoris: ${categoriesItem.length}`);

categoriesItem.forEach((item) => {
    const titleCategories = item.querySelector("h2").textContent;
    const elements = item.querySelectorAll("ul li").length;



    console.log(`Category: ${titleCategories}`);
    console.log(`Elements: ${elements}`);
});