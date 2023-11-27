function printTable() {
  // Select all elements with the class "table"
  var printableTables = document.querySelectorAll(".table");

  // Select the somme display element
  var thead = document.querySelector(".fixed-thead");
  var container = document.querySelector(".container");

  if (printableTables.length > 0) {
    // Add the class "table-title" to each table
    printableTables.forEach(function (table) {
      table.classList.add("table-title");
    });

    // Remove the display element class before printing
    thead.classList.remove("fixed-thead");
    container.classList.remove("container");

    // Trigger the browser's print functionality
    window.print();

    // Add the display element class back after printing
    thead.classList.add("fixed-thead");
    container.classList.add("container");
  } else {
    // Show an alert if no tables are found
    alert("Table not found.");
  }
}
