let nav = document.querySelectorAll("li a");

nav.forEach((link) => {
  link.onclick = () => {
    removeAllActiveClasses();
    link.classList.add("active");
  };
});

var sections = document.querySelectorAll("section");
onscroll = function () {
  var scrollPosition = document.documentElement.scrollTop;
  sections.forEach((section) => {
    if (
      scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
      scrollPosition <
        section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25
    ) {
      var currentId = section.attributes.id.value;
      removeAllActiveClasses();
      addActiveClass(currentId);
    }
  });
};

function removeAllActiveClasses() {
  nav.forEach((link) => {
    link.classList.remove("active");
  });
}
function addActiveClass(id) {
  var selector = `nav a[href="#${id}"]`;
  document.querySelector(selector).classList.add("active");
}
