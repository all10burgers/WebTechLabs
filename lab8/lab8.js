
function getDataFromForm() {
  var fname = document.getElementsByName('fname')[0].value;
  var lname = document.getElementsByName('lname')[0].value;

  runAjax(fname, lname);
}

function runAjax(fname, lname) {
  var xhr = new XMLHttpRequest();
  var url = 'ajax.php?fname=' + fname + '&lname=' + lname;

  xhr.open('GET', url, true);

  xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
          var response = xhr.responseText;
          document.getElementById('responseString').innerText = response;
      }
  };

  xhr.send();
}