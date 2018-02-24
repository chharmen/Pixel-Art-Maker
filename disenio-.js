function makeGrid() {
      // store values from user
      let gridHeigth = document.getElementById('grid-heigth').value;
      let gridWidth = $('grid-width').val();  // question: is there any difference between this both?
      let table = document.getElementById('designCanvas');
       // code to create table:
       table.innerHTML = '';
       let tbody = document.createElement('tbody');
          for (var i = 0; i < gridHeigth; i++) {
            var tr = document.createElement('tr');
            for (var h = 0; i < gridWidth; h++) {
              var td = document.createElement('td');
      td.appendChild(document.createTextNode('')); //string containing the data to be put in the text node
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    }
    // To change the color of cell when clicked:
    $('body').on.('Click' , 'td' , function() {
      var color = document.getElementById('color').value;
      $(this).css('background-color' , color);
    });    
