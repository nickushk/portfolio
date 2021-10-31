function errorForm() {
    var x = document.forms["forms"]["fname"].value;
    if (x == "" || x == null) {
      alert("Inkorrekt input!");
      return false;
    }
  }