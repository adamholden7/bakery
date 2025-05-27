function showTab(tabName) {
  const tabs = document.querySelectorAll(".menu-tab");
  tabs.forEach(tab => {
    tab.classList.add("hidden");
    tab.classList.remove("active");
  });

  const activeTab = document.getElementById(tabName);
  activeTab.classList.remove("hidden");
  activeTab.classList.add("active");

  const buttons = document.querySelectorAll(".menu-tabs .tab");
  buttons.forEach(btn => btn.classList.remove("active"));

  // Mark the clicked button as active
  event.target.classList.add("active");
}
