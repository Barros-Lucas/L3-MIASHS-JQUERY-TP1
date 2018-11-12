$(document).ready(initPage);

function initPage(){
  


  $('#bt').click(get_color);
  


  function get_color(){

    $.ajax({
      type: 'GET',
      url: 'https://api.tisseo.fr/v1/lines.json?key=a3732a1074e2403ce364ad6e71eb998cb',
      data: true,
      dataType:"json",
      success: function(data){
      $("#showliste").append("<ul>");
      $(data.lines.line).each(function(){
          $("#showliste").append($("<li>"+this.shortName + " - " + this.name + "</li>").css("color", this.bgXmlColor));
      })
      $("#showliste").append("</ul>"); 
      },
      error: function(xhr, type, exception) {
        alert("ajax error response type "+type);
      },
      
    });

  }
}