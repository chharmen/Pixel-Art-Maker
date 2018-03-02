$(function(){
  $('#submit-button').on( 'click', function makeGrid() {
      // store values from user
      let gridHeigth = document.getElementById('grid-heigth').value;
      let gridWidth = $('#grid-width').val();    // question: is there any difference between this both?
      let table = document.getElementById('designCanvas');
       // code to create table:
       table.innerHTML = '';
       let tbody = document.createElement('tbody');
          for (let i = 0; i < gridHeigth; i++) {
            let tr = document.createElement('tr');
            for (let h = 0; i < gridWidth; h++) {
              let td = document.createElement('td');
              td.className = 'grid-cell';
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
    }
    table.appendChild(tbody);
  })
    // To change the color of cell when clicked:
    $('body').on('Click' , 'td' , function() {
      let color = document.getElementById('color').value;
      $(this).css('background-color' , color);
    })
  });
