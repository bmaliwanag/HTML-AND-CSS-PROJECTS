function validateInput() {
    let x = document.getElementByName('email').value;
    let y = document.getElementByName('psw').value;
    if (x === '' || y === '') {
        alert('Please enter both email and password .');
        return false;
    }
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

$("#slideshow > div:gt(0)").hide(); setInterval(function () { $('#slideshow > div:first') .fadeOut(1000) .next() .fadeIn(1000) .end() .appendTo('#slideshow'); }, 3000);