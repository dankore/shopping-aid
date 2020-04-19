export default function firtTimeVisit(){
    if (!localStorage.notFirstVisits) {
      document.getElementById("first-time-visit").style.display = "block";
      localStorage.notFirstVisits = true;
    }
}