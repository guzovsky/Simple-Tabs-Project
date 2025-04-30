function showTab(index) {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.content');

    tabs.forEach((tab, i) => {
      tab.classList.toggle('active', i === index);
      contents[i].classList.toggle('active', i === index);
    });
  }