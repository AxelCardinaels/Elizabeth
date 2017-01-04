(function(){

  var elizabethContainers = $(".elizabeth__container");
  var elizabethPictures = $(".elizabeth__item");
  var body = $("body");

  function showPicture(){
    elizabethPictures.click(function(event){
      event.preventDefault();
      var picture = this;

      console.log(this.getAttribute("data-elizabeth-caption"));
      body.append('<div class="elizabeth__viewer"><div class="viewer__table"><img class="elizabeth__picture" src="'+(this.href)+'"/></div></div>');






    });
  }

  showPicture();


})();
