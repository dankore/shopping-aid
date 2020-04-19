export default function firtTimeVisit() {
  const closeBtn = document.getElementById("first-time-visit-btn");
  const modalContainer = document.getElementById("first-time-visit");
  
  if (!localStorage.notFirstVisit) {
    modalContainer.style.display = "block";
    localStorage.notFirstVisit = true;
  }

  closeBtn.addEventListener(
    "click",
    () => (modalContainer.style.display = "none")
  );
}
