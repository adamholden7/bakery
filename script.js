function showTab(tabName) {
  const tabs = document.querySelectorAll(".menu-tab");
  tabs.forEach(tab => {
    tab.classList.add("hidden");
    tab.classList.remove("active");
  });

  document.getElementById(tabName).classList.remove("hidden");
  document.getElementById(tabName).classList.add("active");

  const buttons = document.querySelectorAll(".menu-tabs .tab");
  buttons.forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");
}
