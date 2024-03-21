var detailsBox = document.getElementById('details-box');

document.addEventListener('click', function (e) {
  if (e.target.tagName == 'path') {
    var state = e.target.dataset.state;
    if (state) {
      window.location.href = "http://www.fivetalentsrealty.com/va-loan-pre-qualification";
    }
  }
});

document.addEventListener('mouseover', function (e) {
  if (e.target.tagName == 'path') {
    var content = e.target.dataset.name;
    detailsBox.innerHTML = content;
    detailsBox.style.opacity = "100%";
  }
  else {
    detailsBox.style.opacity = "0%";
  }
});

window.onmousemove = function (e) {
  var x = e.clientX,
      y = e.clientY;
  detailsBox.style.top = (y + 20) + 'px';
  detailsBox.style.left = (x) + 'px';
};
