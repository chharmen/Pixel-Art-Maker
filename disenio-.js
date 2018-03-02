
  $(function () {
  function makeGrid() {
    // Let us jQuery methods since we are already downloading jQuery.
    const gridHeigth = $('#grid-heigth').val(); // con JS seria: let gridHeigth = document.getElementById('grid-heigth').value;
    const gridWidth = $('#grid-width').val();
    const table = $('#designCanvas');
    table.html(''); // Easy way to clear element using jQuery.
    const tBody = $('<tbody>'); // Easy way to create elements using jQuery. - con JS seria: let tbody = document.createElement('tbody');
    // Create height number of rows
    for (let i = 0; i < gridHeigth; i++) {
      const tr = $('<tr>'); // con js seria: let tr = document.createElement('tr');
      // Create width number of cells
      for (let j = 0; j < gridWidth; j++) {
        const td = $('<td>');
        td.addClass('grid-cell'); // Easy way to add class using jQuery - creo que JS seria td.className = 'grid-cell';
        tr.append(td); // Easy way to append elements
      }
      tBody.append(tr);
    }
    table.append(tBody);
  }

  // Easy way to use onclick
  $('#submit-button').click(makeGrid);
});
$('.grid-cell').on("click", function colorGrid() {
    //select picked color and store it
    let color = $("#color").val();
    // fill only clicked cell with selected color
    $(this).css("background-color", color);
});
