const translate = document.querySelectorAll(".translate");
// now make the title disappear
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header");
// shadow height increases as we scroll the page
const shadow = document.querySelector(".shadow");
// content
const content = document.querySelector(".content");
const section = document.querySelector("section");
//picture
const image_container = document.querySelector(".imgContainer");
// make the image and content appear as we scrolling
const opacity = document.querySelectorAll(".opacity");
// make the width of border increase as we scrolling
const border = document.querySelector(".border");


let header_height = header.offsetHeight;
// console.log(header_height);
let section_height = section.offsetHeight;
// console.log(section_height);

window.addEventListener("scroll", () => {
    //  console to check the number of pixels when scroll
    //  very useful
    // console.log("hi");
    let scroll = window.pageYOffset;
    // console.log(scroll);
    let sectionY = section.getBoundingClientRect();
    // console.log(sectionY.top);

    translate.forEach(element => {
        // to get the speed of each element
        let speed = element.dataset.speed;
        // console.log(speed);
        // this is backtick
        // negative speed will let elements go up; positive will go down slowly(according to speed)
        element.style.transform = `translateY(${scroll * speed}px)`;
        // after this, we can simply add 'translate' to other elements and set a speed for them
    });

    opacity.forEach(element => {
        element.style.opacity = scroll / (sectionY.top + section_height);
    })

    // set the opacity value of the title using a formula which output result between 0 and 1 based on the scroll value
    big_title.style.opacity = - scroll / (header_height / 2) + 1;

    shadow.style.height = `${scroll * 0.5 + 300}px`;

    // return value between 0 and -50
    content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50})`;
    image_container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -50 + 50})`;

    border.style.width = `${scroll / (sectionY.top + section_height) * 30}%`;
})