
function showParagraph(paraId) {
  hideAll();
  document.getElementById(paraId).style.display = 'block';
}

function hideAll() {
  document.getElementById('p1').style.display = 'none';
  document.getElementById('p2').style.display = 'none';
  document.getElementById('p3').style.display = 'none';
}