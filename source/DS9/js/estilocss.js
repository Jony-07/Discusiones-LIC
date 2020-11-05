var test = document.getElementById("test");

document.getElementById("btn").addEventListener("click", function () {
    test.style.backgroundColor = null;
    test.style.fontStyle=null;
    test.style.textAlign=null;
    test.style.color=null;
});

function Aling() {
    var op = document.getElementById("alineacion").value;
    test.style.textAlign = op;
  }
  function Color()
  {
      var optwo = document.getElementById('color').value;
      test.style.color=optwo
  }
  function FontS()
  {
      var opthree = document.getElementById('fstyle').value;
      test.style.fontStyle=opthree
  }
  
  function BG()
  {
      var opfour = document.getElementById('bg').value;
      test.style.backgroundColor=opfour
  }