const tabs = Array.from(document.querySelectorAll(".tab"));
const text = document.querySelector(".content-text");

const tabContents = [
  "This is the content of the First tab: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, architecto!",
  "This is the content of the Second tab: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, architecto!",
  "This is the content of the Third tab: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, architecto!",
  "This is the content of the Fourth tab: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, architecto!"
];

tabs.forEach((tab, i) => {
  tab.addEventListener("click", () => {

    if (tab.classList.contains("active")) {
      return;
    }

    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    // Animate content change
    text.classList.remove("fade");
    const content = document.querySelector(".content");
    content.classList.remove("appear");

    void text.offsetWidth; // force reflow

    text.classList.add("fade");
    content.classList.add("appear");

    text.textContent = tabContents[i];
  });
});
