class Move{
  constructor(options) {
        this.options = $.extend({
            content: null,
            cover: null
        }, options);
        this.ele = this.options.content;
        this.cover = this.options.cover;
        this.heg = $(this.ele).height();
        this.wid = $(this.ele).width();
        this.events();
  }

   animate(i, ev, bool, x, y){
     var top = $(this.ele).eq(i).offset().top;
     var bottom = top + this.heg;
     var left = $(this.ele).eq(i).offset().left;
     var right = left + this.wid;

     var sT = Math.abs(y - top),
         sB = Math.abs(y - bottom),
         sL = Math.abs(x - left),
         sR = Math.abs(x - right);

     var a = Math.min( sT , sB , sL , sR );

     this.a = Math.min( sT , sB , sL , sR );

     switch( this.a ){

       case sT:
         if (bool) {
           this.cover.eq(i).css({
             left:0,
             top: -this.heg+'px'
           }).animate({
             top:0
           },200);
         } else {
           this.cover.eq(i).stop(1,1).animate({
             top: -this.heg+'px'
           },200);
         }
       break;

       case sB:
         if ( bool ) {
           this.cover.eq(i).css({
             left:0,
             top: this.heg+'px'
           }).animate({
             top:0
           },200);
         } else {
           this.cover.eq(i).stop(1,1).animate({
             top: this.heg+'px'
           },200);
         }

       break;
       case sL:
         if ( bool ) {
           this.cover.eq(i).css({
             left: -this.wid+'px',
             top:0
           }).animate({
             left:0
           },200);
         } else {
           this.cover.eq(i).stop(1,1).animate({
             left:-this.wid+'px'
           },200);
         }

       break;
       case sR:
         if ( bool ) {
           this.cover.eq(i).css({
             left:this.wid+'px',
             top:0
           }).animate({
             left:0
           },200);
         } else {
           this.cover.eq(i).stop(1,1).animate({
             left:this.wid+'px'
           },200);
         }

       break;


     }
   }
   events(){
     let that = this;
     this.ele.hover(function(ev){
       const i = $(this).index();
       that.animate(i ,ev,true,ev.pageX,ev.pageY);

     },function(ev){
       const i = $(this).index();
       that.animate(i,ev,false,ev.pageX,ev.pageY);

     })
   }
}

window.Move = Move;
