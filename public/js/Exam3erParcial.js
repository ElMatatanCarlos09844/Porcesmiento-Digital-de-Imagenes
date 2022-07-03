var image1 = new Image();
var image2 = new Image();
var imageAux = new Image();
var image1_result = new Image();

var canvas1 = document.getElementById('imagen1_space');
var canvas2 = document.getElementById('imagen2_space');
var canvas1_result = document.getElementById('imagen1_result');

var ctx1= canvas1.getContext('2d');
var ctx2= canvas2.getContext('2d');
var ctx3= canvas1_result.getContext('2d');

var imagen1 = document.getElementById('imagen1');
var imageCa1 = document.getElementById('main');
var imageCa2 = document.getElementById('main1');
imagen1.addEventListener('change', updateImage1);
var img1 = false;

function updateImage1(){
    var curFile = imagen1.files;
    source = curFile[0].name;
    if(validFileType(curFile[0])){
        img1 = true;
        source = curFile[0].name;
        image1.src = window.URL.createObjectURL(curFile[0]);
        image1.onload = function(){
            canvas1.width  = image1.width;
            canvas1.height = image1.height;
            ctx1.drawImage(image1, 0, 0);

            //console.log("dimensiones: " + image1.width + " x " + image1.height);
            imageCa1.style.setProperty("width", ""+image1.width+"px");
            imageCa1.style.setProperty("height", ""+image1.height+"px");
            //console.log("dimensiones: " + imageCa1.style.width + " x " + imageCa1.style.height);
        }
    }
}

var fileTypes = [
    'image/jpeg',
    'image/pjpeg',
    'image/png'
];

function validFileType(file){
    for(var i = 0; i < fileTypes.length; i++){
        if(file.type === fileTypes[i]) 
            return true;
    }
}

//---------------------------- S E G M E N T A C I O N ---------------------------------
const segmenatacion_range = document.getElementById('input_segmentation_range');
var prrf_segmen_value = document.getElementById('prrf_segmen_value');
var valor_umbral = segmenatacion_range.value;
prrf_segmen_value.innerHTML = "Tolerancia: "+valor_umbral + "&nbsp;&nbsp;";
segmenatacion_range.onchange = function(){
    valor_umbral = segmenatacion_range.value;
    prrf_segmen_value.innerHTML = "Tolerancia: "+valor_umbral + "&nbsp;&nbsp;";
    parcial3();
}

const MatrizType = document.getElementById('MatrizType');
var MatrizType_value = MatrizType.value;
console.log("tipo de matriz: "+MatrizType_value);
MatrizType.onchange = function(){
    MatrizType_value = MatrizType.value;
    console.log("tipo de matriz: "+MatrizType_value);
    parcial3();
    
}

const AlgoritmoType = document.getElementById('AlgoritmoType');
var AlgoritmoType_value = AlgoritmoType.value;
console.log("Tipo de algoritomo: "+AlgoritmoType_value);
AlgoritmoType.onchange = function(){
    AlgoritmoType_value = AlgoritmoType.value;
    console.log("Tipo de algoritomo: "+AlgoritmoType_value);
    parcial3();
}

const rangoInput_OpMorfo = document.getElementById('rangoInput_OpMorfo');
var var_range_OpMorfo = document.getElementById('var_range_OpMorfo');
var rangoInput_OpMorfo_value = rangoInput_OpMorfo.value;

rangoInput_OpMorfo.onchange = function(){
    rangoInput_OpMorfo_value = rangoInput_OpMorfo.value;
    var_range_OpMorfo.innerHTML = rangoInput_OpMorfo_value+" x "+rangoInput_OpMorfo_value;
    console.log(rangoInput_OpMorfo_value+" x "+rangoInput_OpMorfo_value);
    parcial3();
}

const num_esque = document.getElementById('num_esque');
const app_num_esque = document.getElementById('app_num_esque');
var app_num_esque_value = app_num_esque.value;

app_num_esque.onchange = function(){
    app_num_esque_value = app_num_esque.value;
    console.log("Numero de erosiones: "+app_num_esque_value );
    parcial3();
}

segmentacion = function(){
    
    image1 = ctx1.getImageData(0,0,canvas1.width,canvas1.height);
    pixels = image1.data;

    var tam = rangoInput_OpMorfo_value;
    var retro = tam-1;
        
    ctx2.width = canvas1.width + retro*2;
    ctx2.height = canvas1.height; + retro*2;
    canvas2.width = canvas1.width + retro*2;
    canvas2.height = canvas1.height + retro*2;
    ctx2.fillStyle = '#FFFFFF';
    ctx2.fillRect(0,0,canvas2.width,canvas2.height);
    image2 = ctx2.getImageData(0,0,canvas2.width,canvas2.height);
    resultado = image2.data;

    var d = 0;
    var h = image2.height, w=image2.width;
    //console.log(h + " x " + w);
    for(var i=retro; i < h-retro; i++){
        for(var j = retro; j < w-retro; j++){
            d = Math.sqrt( Math.pow(pixels[(i-retro)*(w-retro*2)*4 + (j-retro)*4], 2) + 
            Math.pow(pixels[(i-retro)*(w-retro*2)*4 + (j-retro)*4+1], 2) + 
            Math.pow(pixels[(i-retro)*(w-retro*2)*4 + (j-retro)*4+2], 2) );

            if( d >= valor_umbral ){
                resultado[i*w*4 + j*4] = resultado[i*w*4 + j*4+1] = 
                resultado[i*w*4 + j*4+2] = 255;
            }else{
                resultado[i*w*4 + j*4] = 0;
                resultado[i*w*4 + j*4+1] = 0;
                resultado[i*w*4 + j*4+2] = 0;
            }
        }
    }
        
    canvas2.width = w;
    canvas2.height = h;
    ctx2.putImageData(image2,0,0);
};

//--------------------------------------------------------------------------------------


parcial3 = function(){
    
    if(img1 == true){
        limpiarcanvas2();
        limpiarcanvas3();
        segmentacion();
        

        if(AlgoritmoType_value == "Esqueletización"){
            num_esque.style.display="block";
        }else{
            num_esque.style.display="none";
        }

        switch(AlgoritmoType_value){
            case "Dilatacion": 
                operadores_morfologicos(1,MatrizType_value);//con esto se hace la dilatacion
            break;
            case "Erosion": 
                operadores_morfologicos(2,MatrizType_value);//con esto se hace la erosion
            break; 
            case "Perímetro":
                perimetro(MatrizType_value);//con esto se hace el algorito de perimetro
            break;
            case "Relleno": 

            break;
            case "Cierre": 
                cierre(MatrizType_value);
            break;
            case "Limpieza": 
                limpieza(MatrizType_value);
            break;
            case "Esqueletización":
                esqueletizacion(MatrizType_value);
            break;
            default:
                    
            break;
        }
    }else{
        alerta_img();
    }    
}

operadores_morfologicos = function(op,type){
    if(img1 == 1){
        var tam = rangoInput_OpMorfo_value;
        
        var retro = tam-1;
        var band_aux = true;

        image2 = ctx2.getImageData(0,0,canvas2.width,canvas2.height);
        pixels = image2.data;

        image1_result = ctx2.getImageData(0,0,canvas2.width,canvas2.height);
        resultado = image1_result.data;
        
        var h = image2.height, w=image2.width;
        console.log(h+" x "+w);
        for(var i=0; i < h-retro; i++){
            for(var j = 0; j < w-retro; j++){
                resultado[i*w*4 + j*4+3] = 255;       //para quitarle la transparencia
                
                switch(op) {
                    case 1://---------------- D I L A T A C I O N -------------------------------------
                        dilatacion(band_aux,tam,i,j,w,pixels,resultado,type);
                    break;
                    case 2://----------------------E R O S I O N------------------------------------------
                        erosion(band_aux,tam,i,j,w,pixels,resultado,type);
                    break;
                    default:break;
                }
            }
        }

        canvas1_result.width = w;
        canvas1_result.height = h;
        ctx3.putImageData(image1_result,0,0);
    }else{
        
        //alerta_img();
    }
};

perimetro = function(){
    operadores_morfologicos(2,MatrizType_value);//primero erosiono;
    //luego resto la imagen original con la erosionada
    
    image2 = ctx2.getImageData(0,0,canvas2.width,canvas2.height);   
    imageAux = ctx3.getImageData(0,0,canvas2.width,canvas2.height);
    image1_result = ctx3.getImageData(0,0,canvas2.width,canvas2.height);

    pixelsImg1 = image2.data;
    pixelsImg2 = imageAux.data;
    pixelsImgR = image1_result.data;

    var dim = image2.width * image2.height;
    for(var i = 0; i < dim ; i++){
        pixelsImgR[i*4] = Math.abs(pixelsImg1[i*4] - pixelsImg2[i*4]);
        pixelsImgR[i*4+1] = Math.abs(pixelsImg1[i*4+1] - pixelsImg2[i*4+1]);
        pixelsImgR[i*4+2] = Math.abs(pixelsImg1[i*4+2] - pixelsImg2[i*4+2]);
    }

    canvas1_result.width = image2.width;
    canvas1_result.height = image2.height;
    ctx3.putImageData(image1_result,0,0);
};

cierre =  function(){
    operadores_morfologicos(1,MatrizType_value);//primero se aplica la dilatacion.

    //ahora aplico la erosion
    image2 = ctx2.getImageData(0,0,canvas2.width,canvas2.height);
    pixels = image2.data;
    image1_result = ctx2.getImageData(0,0,canvas2.width,canvas2.height);
    resultado = image1_result.data;

    var tam = rangoInput_OpMorfo_value;
    var h = image2.height, w=image2.width;
    var retro = tam-1;
    var band_aux = true;
   

    for(var i=0; i < h-retro; i++){
        for(var j = 0; j < w-retro; j++){
            resultado[i*w*4 + j*4+3] = 255;       //para quitarle la transparencia
            erosion(band_aux,tam,i,j,w,pixels,resultado,MatrizType_value);
        }
    }

    canvas1_result.width = w;
    canvas1_result.height = h;
    ctx3.putImageData(image1_result,0,0);
}

limpieza =  function(){
    operadores_morfologicos(2,MatrizType_value);//primero se aplica la erosion.

    //ahora aplico la dilatacion
    image2 = ctx2.getImageData(0,0,canvas2.width,canvas2.height);
    pixels = image2.data;
    image1_result = ctx2.getImageData(0,0,canvas2.width,canvas2.height);
    resultado = image1_result.data;

    var tam = rangoInput_OpMorfo_value;
    var h = image2.height, w=image2.width;
    var retro = tam-1;
    var band_aux = true;
   

    for(var i=0; i < h-retro; i++){
        for(var j = 0; j < w-retro; j++){
            resultado[i*w*4 + j*4+3] = 255;       //para quitarle la transparencia
            dilatacion(band_aux,tam,i,j,w,pixels,resultado,MatrizType_value);
        }
    }

    canvas1_result.width = w;
    canvas1_result.height = h;
    ctx3.putImageData(image1_result,0,0);
};

esqueletizacion = function(){
    operadores_morfologicos(2,MatrizType_value);//erosiono una vez;

    //ahora aplico la erosion cuantas veces mas sea necesario
    for(var k = 0 ; k < app_num_esque_value - 1 ; k++){
        image1_result = ctx3.getImageData(0,0,canvas1_result.width,canvas1_result.height);
        pixels = image1_result.data;
        imageAux = ctx3.getImageData(0,0,canvas1_result.width,canvas1_result.height);
        resultado = imageAux.data;

        var tam = rangoInput_OpMorfo_value;
        var h = image2.height, w=image2.width;
        var retro = tam-1;
        var band_aux = true;
    

        for(var i=0; i < h-retro; i++){
            for(var j = 0; j < w-retro; j++){
                resultado[i*w*4 + j*4+3] = 255;       //para quitarle la transparencia
                erosion(band_aux,tam,i,j,w,pixels,resultado,MatrizType_value);
            }
        }

        canvas1_result.width = w;
        canvas1_result.height = h;
        ctx3.putImageData(imageAux,0,0);
    }
}
;

dilatacion = function(band_aux,tam,i,j,w,pixels,resultado,type){

    band_aux = true;
    var p = 0;
    var centro = Math.trunc(tam/2);

    if(type == "Matriz completa"){      //patron de matriz completa
        for(var l = 0; l < tam && band_aux; l++){
            for(var k = 0; k < tam && band_aux; k++){
                p = pixels[(i+l)*w*4 + (j+k)*4];
                
                if( p == 0 && band_aux){//si encuentro un negro
                    band_aux = false;
                    resultado[(i+centro)*w*4 + (j+centro)*4] = 0;
                    resultado[(i+centro)*w*4 + (j+centro)*4+1] = 0;
                    resultado[(i+centro)*w*4 + (j+centro)*4+2] = 0;
                }
            }
        }
    }else if(type == "Matriz en cruz"){
        for(var l = 0; l < tam && band_aux; l++){
            
            for(var k = 0; k < tam && band_aux; k++){
                
                if(k == centro || l == centro){
                    p = pixels[(i+l)*w*4 + (j+k)*4];
                    if( p == 0 && band_aux){//si encuentro un negro
                        band_aux = false;
                        resultado[(i+centro)*w*4 + (j+centro)*4] = 0;
                        resultado[(i+centro)*w*4 + (j+centro)*4+1] = 0;
                        resultado[(i+centro)*w*4 + (j+centro)*4+2] = 0;
                    }
                }
                
            }
        }
    }
    
};

erosion = function(band_aux,tam,i,j,w,pixels,resultado,type){
    band_aux = true;
    var p = 0;
    var centro = Math.trunc(tam/2);

    if(type == "Matriz completa"){      //patron de matriz completa
        for(var l = 0; l < tam && band_aux; l++){
            for(var k = 0; k < tam && band_aux; k++){
                p = pixels[(i+l)*w*4 + (j+k)*4];          
                if( p == 0 && band_aux){//para checar si todos los capos de la imagen son negros
                    band_aux = true;;
                }else{
                    band_aux = false;
                }
            }
        }
    
        if(band_aux){
            resultado[(i+centro)*w*4 + (j+centro)*4] = 0;
            resultado[(i+centro)*w*4 + (j+centro)*4+1] = 0;
            resultado[(i+centro)*w*4 + (j+centro)*4+2] = 0;
        }else{
            resultado[i*w*4 + j*4] = 255;
            resultado[i*w*4 + j*4+1] = 255;
            resultado[i*w*4 + j*4+2] = 255;
        }
    }else if(type == "Matriz en cruz"){

        for(var l = 0; l < tam && band_aux; l++){
            for(var k = 0; k < tam && band_aux; k++){
                
                if(k == centro || l == centro){
                    p = pixels[(i+l)*w*4 + (j+k)*4];          
                    if( p == 0 && band_aux){//para checar si todos los capos de la imagen son negros
                        band_aux = true;;
                    }else{
                        band_aux = false;
                    }
                }
                
            }
        }
    
        if(band_aux){
            resultado[(i+centro)*w*4 + (j+centro)*4] = 0;
            resultado[(i+centro)*w*4 + (j+centro)*4+1] = 0;
            resultado[(i+centro)*w*4 + (j+centro)*4+2] = 0;
        }else{
            resultado[i*w*4 + j*4] = 255;
            resultado[i*w*4 + j*4+1] = 255;
            resultado[i*w*4 + j*4+2] = 255;
        }

    }
    
};

limpiarcanvas2 = function(){
    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
    /*canvas2.width = "250px";
    canvas2.height = "250px";
    imageCa2.style.setProperty("width", ""+canvas2.width+"px");
    imageCa2.style.setProperty("height", ""+canvas2.height+"pxh");
    img2 = 0;*/
}

limpiarcanvas3 = function(){
    ctx3.clearRect(0, 0, canvas1_result.width, canvas1_result.height);
    //canvas1_result.width = "250px";
}
desplazar = function (id_nav){
    //console.log(id_nav);
    var nav = document.getElementById(id_nav);
    //console.log(nav.style.color);
    
    if(nav.style.display == "block"){
        nav.style.display="none";
    }else{
        nav.style.display="block";
    }  
}

const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  modal_container.classList.add('show');  
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});

alerta_img = function(){
    let timerInterval
    swal.fire({
    title: 'Error',
    html: 'Necesitar cargar primero imagenes para aplicar el algoritmo',
    timer: 3000,
    timerProgressBar: true,
    didOpen: () => {
        Swal.showLoading()
        timerInterval = setInterval(() => {
        }, 500)
    },
    willClose: () => {
        clearInterval(timerInterval)
    }
    }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
    }
    })
}
