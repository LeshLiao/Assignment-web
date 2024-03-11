
let Button1 = document.querySelector('#btn1');
let Button2 = document.querySelector('#btn2');
let showValue = document.getElementById("show-value");

let currentPage = 0;
updatePage(currentPage);

Button1.addEventListener('click', function() {
  if (currentPage < 6) {
    currentPage++;
    updatePage(currentPage);
  }
});

Button2.addEventListener('click', function() {
  if (currentPage != 0) {
    currentPage -= 1;
    updatePage(currentPage);
  }
});

function updatePage(page) {
  if (currentPage == 6) {
    showValue.textContent = "Last page";
  } else if (currentPage == 0) {
    showValue.textContent = "First page";
  } else {
    showValue.textContent = currentPage;
  }
}