function showSpecial() {
  const specials = [
    "Maple Pecan Danish",
    "Pumpkin Spice Muffins",
    "Cinnamon Swirl Bread",
    "Lemon Poppyseed Loaf",
    "Salted Caramel Brownies"
  ];
  const randomSpecial = specials[Math.floor(Math.random() * specials.length)];
  document.getElementById("specialItem").textContent = "Today’s Special: " + randomSpecial + " 🍰";
}

