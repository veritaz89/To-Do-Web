  $( function() {
    $( "#datepicker" ).datepicker({
		prevText: '&#x3c;', prevStatus: '',
        prevJumpText: '&#x3c;&#x3c;', prevJumpStatus: '',
        nextText: '&#x3e;', nextStatus: '',
        nextJumpText: '&#x3e;&#x3e;', nextJumpStatus: '',
        currentText: 'heute', currentStatus: '',
        todayText: 'heute', todayStatus: '',
        clearText: '-', clearStatus: '',
        closeText: 'schließen', closeStatus: '',
        monthNames: ['Jan','Feb','Mär','Apr','Mai','Jun',
        'Jul','Aug','Sep','Okt','Nov','Dez'],
        monthNamesShort: ['Jan','Feb','Mär','Apr','Mai','Jun',
        'Jul','Aug','Sep','Okt','Nov','Dez'],
        dayNames: ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'],
        dayNamesShort: ['So','Mo','Di','Mi','Do','Fr','Sa'],
        dayNamesMin: ['So','Mo','Di','Mi','Do','Fr','Sa'],
      showMonthAfterYear: false,
      //showOn: 'both',
      //buttonImage: 'media/img/calendar.png',
      buttonImageOnly: false,
      dateFormat:'dd.mm.yy'
	});
  } );


  function addRow(){
  	var task = document.getElementById('task').value;
  	var category = document.getElementById('category').value;
  	var datespliter = this['datepicker'].value.split(".");
  	var day = datespliter[0];
  	var month = datespliter[1];
  	var year = datespliter[2];
  	var date = day+'.'+month+'.'+year;
  	$("tbody").append("<tr><td>"+task+"</td><td>"+date+"</td><td>"+category+"</td></tr>");
  	
  };