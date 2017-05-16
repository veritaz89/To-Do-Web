  $( function() {
    $( "#datepicker" ).datepicker({dateFormat: "dd.mm.yy"});
  } );


  function addRow(){
  	var task = document.getElementById('task').value;
  	var category = document.getElementById('category').value;
  	var datespliter = this['datepicker'].value.split("-");
  	var day = datespliter[2];
  	var month = datespliter[1];
  	var year = datespliter[0];
  	var date = day+'.'+month+'.'+year;
  	$("tbody").append("<tr><td>"+task+"</td><td>"+date+"</td><td>"+category+"</td></tr>");
  	
  };