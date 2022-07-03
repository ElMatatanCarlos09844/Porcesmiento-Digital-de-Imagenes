segmentacion_real_time = function(){
    navigator.mediaDevices.getUserMedia({ audio: false, video: true }).then(stream =>{
        console.log(stream)
    
        let video = document.getElementById('video');
        video.srcObject = stream;
    
    }).catch((err) => console.log(err))
}

const processor = {};

processor.doLoad = function doLoad() {
    const video = document.getElementById('video');
    this.video = video;

    this.c1 = document.getElementById('imagen1_space');
    this.contexto1 = this.c1.getContext('2d');

    this.c2 = document.getElementById('imagen1_result');
    this.contexto2 = this.c2.getContext('2d');

    video.addEventListener('play', () => {
      this.width = video.videoWidth / 2;
      this.height = video.videoHeight / 2;
      this.timerCallback();
    }, false);


};

processor.timerCallback = function timerCallback() {
    if (this.video.paused || this.video.ended) {
      return;
    }
    this.computeFrame();
    setTimeout(() => {
        this.timerCallback();
    }, 0);
};

processor.computeFrame = function computeFrame() {
    this.c1.width = this.video.videoWidth/2;
    this.c1.height = this.video.videoHeight/2;

    this.contexto1.drawImage(this.video, 0, 0, this.width, this.height);
    var frame = this.contexto1.getImageData(0, 0, this.width, this.height);
    var data = frame.data;
    var frame_result = this.contexto1.getImageData(0, 0, this.width, this.height);
    var resultado = frame_result.data;

    var length = frame.width*frame.height;
    img1=1;
    for(i=0 ; i<length ; i++){
        if(op == 1)
            d = Math.abs((data[i*4] - Red_s)) + Math.abs((data[i*4+1] - Green_s)) + Math.abs((data[i*4+2] - Blue_s));
        else if(op == 2)
            d = Math.sqrt( Math.pow(data[i*4] - Red_s , 2) + Math.pow(data[i*4+1] - Green_s , 2) + Math.pow(data[i*4+2] - Blue_s , 2) );
        if( d >= valor_umbral ){
            resultado[i*4] = resultado[i*4+1] = resultado[i*4+2] = 200;
        }else{
            resultado[i*4] = Red_s;
            resultado[i*4+1] = Green_s;
            resultado[i*4+2] = Blue_s;
        }
    }

    this.c2.width = this.video.videoWidth/2;
    this.c2.height = this.video.videoHeight/2;
    this.contexto2.putImageData(frame_result, 0, 0);
  };

