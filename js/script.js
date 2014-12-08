$("ul li").click(
  function(){
    $("#article_nav").children().each(
      function(){
        $(this).removeClass('active')
      }
    );
    $(this).addClass('active');
    $("#articles article").each(function(){
      $(this).removeClass('active')
    })
    $("#article-"+$(this).data("target")).addClass('active');
  }
);
$('#home-button').click(function(){
  $("#screen-frame").attr('src',"./codiqa/")
});
