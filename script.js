//your JS code here. If req


let btnref = document.getElementsByTagName("input")[0]
btnref.addEventListener("click",removeSelectedColor)
function removeSelectedColor() {
      var selectElement = document.getElementById("colorSelect");
      var selectedIndex = selectElement.selectedIndex;
      if (selectedIndex !== -1) {
        selectElement.remove(selectedIndex);
      }
    }