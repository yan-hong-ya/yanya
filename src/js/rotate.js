class RotateImg {
  constructor() {
      this.el = null;
  }
  init(cls) {
      this.el = document.getElementById(cls);
      // this.el = document.getElementsByClassName(cls)[0];
      return this;
  }
  DragStart() {
     this.el.onmousedown = (evt) => {
          var e = evt || window.event;

          var downX=e.pageX
          var downY=e.pageY

          this.DragIng();
          this.DragEnd(downX,downY)
      }
  }
  DragIng() {
      document.onmousemove = (evt) => {
          var e = evt || window.event;
      }
  }
  DragEnd(x,y) {
      document.onmouseup=(e) => {
          document.onmouseup = document.onmousemove = null;

          var upX=e.pageX
          var upY=e.pageY

          let disX=Math.abs(upX-x)
          let disY=Math.abs(upY-y)
          let z=Math.sqrt(disX*disX+disY*disY)

          let angle=Math.round(Math.asin(disY/z)/Math.PI*180)

          if(upX-x>0){
            this.el.style.transform=`rotate(${angle}deg)`
          }else{
            this.el.style.transform=`rotate(-${angle}deg)`
          }


      }
  }
}

export default new RotateImg()