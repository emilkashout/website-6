
let firstHeading = document.getElementById("first-heading");

function isVisible(element) {
    let elementBox = element.getBoundingClientRect();
    let distanceFromTop = -200; 

    if(elementBox.top - window.innerHeight < distanceFromTop) {
        return true;
    } else {
        return false;
    }
}

function scanDocument() {
    let sectionList = document.querySelectorAll('.hidden');
    sectionList.forEach(function(section) {
        if(isVisible(section)) {
            section.classList.remove('hidden');
        };
    });

}


document.addEventListener("scroll", scanDocument);
