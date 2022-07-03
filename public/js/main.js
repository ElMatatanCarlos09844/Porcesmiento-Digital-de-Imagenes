
var image1 = new Image();
var image2 = new Image();
var image1_result = new Image();
var image2_result = new Image();

var canvas1 = document.getElementById('imagen1_space');
var canvas2 = document.getElementById('imagen2_space');
var canvas1_result = document.getElementById('imagen1_result');
var canvas2_result = document.getElementById('imagen2_result');

var ctx1= canvas1.getContext('2d');
var ctx2= canvas2.getContext('2d');
var ctx3= canvas1_result.getContext('2d');
var ctx4= canvas2_result.getContext('2d');

var imagen1 = document.getElementById('imagen1');
var imagen2 = document.getElementById('imagen2');
imagen1.addEventListener('change', updateImage1); 
imagen2.addEventListener('change', updateImage2);

var img1 = 0;
var img2 = 0;

function gris(){
    ConvertirGrises();
}

function rojo(){
    ConvertirRojo();
}

function verde(){
    ConvertirVerde();
}

function azul(){
    ConvertirAzul();
}

function negativo(){
    ConvertirNegaivo();
}

function bordesVG(c){
    BordesVrImgGrises(c);
}

function bordesHG(c){
    BordesHrImgGrises(c);
}

function bordesDG(c){
    BordesDgImgGrises(c);
}

function bordesTG(c){
    BordesTodosImgGrises(c);
}

function opAndOr(op){
    operadorAndOr(op);
}

function histogramaG(c){
    histogramaGrises(c);
}

function gradiente(){
    gradianteG();
}

function colorg(){
    colorearG();
}

function active(){
    activar();
}

function comb(){
    conbolusion();
}

function imgDespl(){
    desplazamineto();
}

var imageCa1 = document.getElementById('main');
var imageCa2 = document.getElementById('main1');
function updateImage1(){
    var curFile = imagen1.files;
    source = curFile[0].name;
    if(validFileType(curFile[0])){
        img1=1;
        source = curFile[0].name;
        image1.src = window.URL.createObjectURL(curFile[0]);
        image1.onload = function(){
            canvas1.width  = image1.width;
            canvas1.height = image1.height;
            ctx1.drawImage(image1, 0, 0);

            console.log("dimensiones: " + image1.width + " x " + image1.height);
            imageCa1.style.setProperty("width", ""+image1.width+"px");
            imageCa1.style.setProperty("height", ""+image1.height+"px");
            console.log("dimensiones: " + imageCa1.style.width + " x " + imageCa1.style.height);
        }
    }
}
function updateImage2(){
    var curFile = imagen2.files;
    source = curFile[0].name;
    if(validFileType(curFile[0])){
        img2=1;
        source = curFile[0].name;
        image2.src = window.URL.createObjectURL(curFile[0]);
        image2.onload = function(){
            canvas2.width =  image2.width;
            canvas2.height = image2.height;
            ctx2.drawImage(image2, 0, 0);

            console.log("dimensiones: " + image2.width + " x " + image2.height);
            imageCa2.style.setProperty("width", ""+image2.width+"px");
            imageCa2.style.setProperty("height", ""+image2.height+"px");
            console.log("dimensiones: " + imageCa2.style.width + " x " + imageCa2.style.height);
        }
    }
}

var fileTypes = [
    'image/jpeg',
    'image/pjpeg',
    'image/png'
]

function validFileType(file){
    for(var i = 0; i < fileTypes.length; i++){
        if(file.type === fileTypes[i]) 
            return true;
    }
}
//----------------------------------- ESCALA DE GRISES -------------------------------------------------------------
ConvertirGrises = function (){
    if(img1==1){
        limpiarcanvas2();
        limpiarcanvas4();
        image1_result = ctx1.getImageData(0, 0, canvas1.width, canvas1.height);
        pixels = image1_result.data;
        dimensionsImOriginal = image1_result.width * image1_result.height;

        for(var i = 0; i < dimensionsImOriginal; i++){
            var gris = ( pixels[i*4] + pixels[i*4+1] + pixels[i*4+2] ) / 3;
            pixels[i*4] = gris;
            pixels[i*4+1] = gris;
            pixels[i*4+2] = gris;
        }
        canvas1_result.width = image1_result.width;
        canvas1_result.height = image1_result.height;
        ctx3.putImageData(image1_result,0,0);
        activar();
    }else{
        alerta_img();
    }
};

//------------------------------------- EXTRACCION DE COLORES RGB ----------------------------------------------------
ConvertirRojo = function(){
    if(img1==1){
        limpiarcanvas2();
        limpiarcanvas4();
        image1_result = ctx1.getImageData(0,0,canvas1.width,canvas1.height);
        pixels = image1_result.data;
        dimensionsImOriginal = image1_result.width * image1_result.height;

        for(var i=0;i < dimensionsImOriginal;i++){
            pixels[i*4+1] = 0;
            pixels[i*4+2] = 0;
        }

        canvas1_result.width = image1_result.width;
        canvas1_result.height = image1_result.height;
        ctx3.putImageData(image1_result,0,0);
        activar();

    }else{
        alerta_img();
    }
    
};

ConvertirVerde = function(){
    if(img1==1){
        limpiarcanvas2();
        limpiarcanvas4();
        image1_result = ctx1.getImageData(0,0,canvas1.width,canvas1.height);
        pixels = image1_result.data;
        dimensionsImOriginal = image1_result.width * image1_result.height;

        for(var i=0;i < dimensionsImOriginal;i++){
            pixels[i*4] = 0;
            pixels[i*4+2] = 0;
        }

        canvas1_result.width = image1_result.width;
        canvas1_result.height = image1_result.height;
        ctx3.putImageData(image1_result,0,0);
        activar();

    }else{
        alerta_img();
    }
    
};

ConvertirAzul = function(){
    if(img1==1){
        limpiarcanvas2();
        limpiarcanvas4();
        image1_result = ctx1.getImageData(0,0,canvas1.width,canvas1.height);
        pixels = image1_result.data;
        dimensionsImOriginal = image1_result.width * image1_result.height;

        for(var i=0;i < dimensionsImOriginal;i++){
            pixels[i*4] = 0;
            pixels[i*4+1] = 0;
        }

        canvas1_result.width = image1_result.width;
        canvas1_result.height = image1_result.height;
        ctx3.putImageData(image1_result,0,0);
        activar();

    }else{
        alerta_img();
    }
    
};

//------------------------------ NEGATIVO ----------------------------------------------------------------------------

ConvertirNegaivo = function(){
    if(img1==1){
        limpiarcanvas2();
        limpiarcanvas4();
        image1_result = ctx1.getImageData(0,0,canvas1.width,canvas1.height);
        pixels = image1_result.data;
        dimensionsImOriginal = image1_result.width * image1_result.height;

        for(var i=0;i < dimensionsImOriginal ; i++){
            pixels[i*4] = 255-pixels[i*4];
            pixels[i*4+1] = 255-pixels[i*4+1];
            pixels[i*4+2] = 255-pixels[i*4+2];
        }
        canvas1_result.width = image1_result.width;
        canvas1_result.height = image1_result.height;
        ctx3.putImageData(image1_result,0,0);
        activar();
    }else{
        alerta_img();
    }
    
};

//-------------------------- BORDES VERTICAL, HORIZONTAL Y DIAGONAL EN GRISES-----------------------

BordesVrImgGrises = function(canales){
    if(img1==1){
        limpiarcanvas2();
        limpiarcanvas4();
        if(canales == 1){
            ConvertirGrises();
            
            image1_result = ctx3.getImageData(0,0,canvas1.width,canvas1.height);
            image2_result = ctx3.getImageData(0,0,canvas1.width,canvas1.height);
        }else{
            limpiarcanvas2();
            console.log(canales);
            image1_result = ctx1.getImageData(0,0,canvas1.width,canvas1.height);
            image2_result = ctx1.getImageData(0,0,canvas1.width,canvas1.height);
        }    
        
        pixels = image1_result.data;
        Resultado = image2_result.data;
        dimensionsImOriginal = image1_result.width*image1_result.height;
        for(var i=0;i < dimensionsImOriginal-1 ; i++){
            Resultado[i*4] = Math.abs(pixels[(i+1)*4] - pixels[i*4] );
            Resultado[i*4+2] = Resultado[i*4+1] = Resultado[i*4];
        }
    
        canvas2_result.width = image1_result.width;
        canvas2_result.height = image1_result.height;
        ctx4.putImageData(image2_result,0,0);
        activar();

    }else{
        alerta_img();
    }

    
};

BordesHrImgGrises = function(canales){
    if(img1==1){
        limpiarcanvas2();
        limpiarcanvas4();
        if(canales == 1){
            
            ConvertirGrises();
            image1_result = ctx3.getImageData(0,0,canvas1.width,canvas1.height);
            image2_result = ctx3.getImageData(0,0,canvas1.width,canvas1.height);
        }else{
            limpiarcanvas2();
            console.log(canales);
            image1_result = ctx1.getImageData(0,0,canvas1.width,canvas1.height);
            image2_result = ctx1.getImageData(0,0,canvas1.width,canvas1.height);
        }
        
        pixels = image1_result.data;
        Resultado = image2_result.data;
    
        for (var i = 0; i < image2_result.height -1 ; i++){
            for (var j = 0; j < image2_result.width; j++){
                var datoR = Math.abs(pixels[(i+1)*image2_result.width*4 + j*4] - pixels[i*image2_result.width*4 + j*4]); 
                var datoG = Math.abs(pixels[(i+1)*image2_result.width*4 + j*4+1] - pixels[i*image2_result.width*4 + j*4+1]); 
                var datoB = Math.abs(pixels[(i+1)*image2_result.width*4 + j*4+2] - pixels[i*image2_result.width*4 + j*4+2]); 
                Resultado[i*image2_result.width*4 + j*4] = datoR;
                Resultado[i*image2_result.width*4 + j*4+1] = datoG;
                Resultado[i*image2_result.width*4 + j*4+2] = datoB;
            }
        }
    
        canvas2_result.width = image2_result.width;
        canvas2_result.height = image2_result.height;
        ctx4.putImageData(image2_result,0,0);
        activar();

    }else{
        alerta_img();
    }

    
};

BordesDgImgGrises = function (canales){
    if(img1==1){
        limpiarcanvas2();
        limpiarcanvas4();
        if(canales == 1){
            
            ConvertirGrises();
            image1_result = ctx3.getImageData(0,0,canvas1.width,canvas1.height);
            image2_result = ctx3.getImageData(0,0,canvas1.width,canvas1.height);
        }else{
            console.log(canales);
            image1_result = ctx1.getImageData(0,0,canvas1.width,canvas1.height);
            image2_result = ctx1.getImageData(0,0,canvas1.width,canvas1.height);
        }
        
        pixels = image1_result.data;
        Resultado = image2_result.data;
    
        for (var i = 0; i < image2_result.height -1 ; i++){
            for (var j = 0; j < image2_result.width - 1; j++){
                var datoR = Math.abs(pixels[(i+1)*image2_result.width*4 + j*4] - pixels[i*image2_result.width*4 + (j*4+4)]); 
                var datoG = Math.abs(pixels[(i+1)*image2_result.width*4 + (j*4+1)] - pixels[i*image2_result.width*4 + (j*4+5)]); 
                var datoB = Math.abs(pixels[(i+1)*image2_result.width*4 + (j*4+2)] - pixels[i*image2_result.width*4 + (j*4+6)]); 
                Resultado[i*image2_result.width*4 + j*4] = datoR;
                Resultado[i*image2_result.width*4 + j*4+1] = datoG;
                Resultado[i*image2_result.width*4 + j*4+2] = datoB;
            }
        }
    
        canvas2_result.width = image2_result.width;
        canvas2_result.height = image2_result.height;
        ctx4.putImageData(image2_result,0,0);
        activar();

    }else{
        alerta_img();
    }
};

BordesTodosImgGrises = function (canales){
    if(img1==1){
        limpiarcanvas2();
        limpiarcanvas4();
        if(canales == 1){
            ConvertirGrises();
            image1_result = ctx3.getImageData(0,0,canvas1.width,canvas1.height);
            image2_result = ctx3.getImageData(0,0,canvas1.width,canvas1.height);
        }else{
            console.log(canales);
            image1_result = ctx1.getImageData(0,0,canvas1.width,canvas1.height);
            image2_result = ctx1.getImageData(0,0,canvas1.width,canvas1.height);
        }
        
        pixels = image1_result.data;
        Resultado = image2_result.data;
    
        for (var i = 0; i < image2_result.height -1 ; i++){
            for (var j = 0; j < image2_result.width - 1; j++){
                var datoRV = Math.abs(pixels[i*image2_result.width*4 + j*4] - pixels[i*image2_result.width*4 + j*4+4]); 
                var datoGV = Math.abs(pixels[i*image2_result.width*4 + j*4+1] - pixels[i*image2_result.width*4 + j*4+5]); 
                var datoBV = Math.abs(pixels[i*image2_result.width*4 + j*4+2] - pixels[i*image2_result.width*4 + j*4+6]);
    
                var datoRH = Math.abs(pixels[(i+1)*image2_result.width*4 + j*4] - pixels[i*image2_result.width*4 + j*4]); 
                var datoGH = Math.abs(pixels[(i+1)*image2_result.width*4 + j*4+1] - pixels[i*image2_result.width*4 + j*4+1]); 
                var datoBH = Math.abs(pixels[(i+1)*image2_result.width*4 + j*4+2] - pixels[i*image2_result.width*4 + j*4+2]); 
    
                var datoRD = Math.abs(pixels[(i+1)*image2_result.width*4 + j*4] - pixels[i*image2_result.width*4 + (j*4+4)]); 
                var datoGD = Math.abs(pixels[(i+1)*image2_result.width*4 + (j*4+1)] - pixels[i*image2_result.width*4 + (j*4+5)]); 
                var datoBD = Math.abs(pixels[(i+1)*image2_result.width*4 + (j*4+2)] - pixels[i*image2_result.width*4 + (j*4+6)]); 
                
                Resultado[i*image2_result.width*4 + j*4] = Math.max(datoRV,Math.max(datoRH,datoRD));
                Resultado[i*image2_result.width*4 + j*4+1] = Math.max(datoGV,Math.max(datoGH,datoGD));
                Resultado[i*image2_result.width*4 + j*4+2] = Math.max(datoBV,Math.max(datoBH,datoBD));
            }
        }
    
        canvas2_result.width = image2_result.width;
        canvas2_result.height = image2_result.height;
        ctx4.putImageData(image2_result,0,0);
        activar();
    }else{
        alerta_img();
    }

    
};

//------------------------------------------- SUMA Y RESTA------------------------------------------------------------
operadorsumaRes = function(op){ // 1 and y 2 or
    if(img1==1 && img2==1){
        limpiarcanvas3();
        limpiarcanvas4();
        image1 = ctx1.getImageData(0,0,canvas1.width,canvas1.height);
        image2 = ctx2.getImageData(0,0,canvas2.width,canvas2.height);
        image1_result = ctx1.getImageData(0,0,canvas1.width,canvas1.height);

        pixelsImg1 = image1.data;
        pixelsImg2 = image2.data;
        pixelsImgR = image1_result.data;
        var s=0;
        dimensionsImOriginal = image1.width*image1.height;
        for(var i=0; i < dimensionsImOriginal ; i++ ){
            if(op == 1){
                pixelsImgR[i*4] = pixelsImg1[i*4] + pixelsImg2[i*4] > 255 ? 255 : pixelsImg1[i*4] + pixelsImg2[i*4]
                pixelsImgR[i*4+1] = pixelsImg1[i*4+1] + pixelsImg2[i*4+1] > 255 ? 255 : pixelsImg1[i*4+1] + pixelsImg2[i*4+1]
                pixelsImgR[i*4+2] = pixelsImg1[i*4+2] + pixelsImg2[i*4+2] > 255 ? 255 : pixelsImg1[i*4+2] + pixelsImg2[i*4+2]
            }else{
                pixelsImgR[i*4] = pixelsImg1[i*4] - pixelsImg2[i*4] < 0 ? 0 : pixelsImg1[i*4] - pixelsImg2[i*4]
                pixelsImgR[i*4+1] = pixelsImg1[i*4+1] - pixelsImg2[i*4+1] < 0 ? 0 : pixelsImg1[i*4+1] - pixelsImg2[i*4+1]
                pixelsImgR[i*4+2] = pixelsImg1[i*4+2] - pixelsImg2[i*4+2] < 0 ? 0 : pixelsImg1[i*4+2] - pixelsImg2[i*4+2]
            }   
        }
        canvas1_result.width = image1_result.width;
        canvas1_result.height = image1_result.height;
        ctx3.putImageData(image1_result,0,0);
        activar();

    }else{
        alerta_img();
    }
};

//----------------------------------- OPERADORES LOGICOS -----------------------------------------------------------------------

operadorAndOr = function(op){ // 1 and y 2 or
    if(img1==1){
        limpiarcanvas3();
        limpiarcanvas4();
        image1 = ctx1.getImageData(0,0,canvas1.width,canvas1.height);
        image2 = ctx2.getImageData(0,0,canvas2.width,canvas2.height);
        image1_result = ctx1.getImageData(0,0,canvas1.width,canvas1.height);

        pixelsImg1 = image1.data;
        pixelsImg2 = image2.data;
        pixelsImgR = image1_result.data;

        dimensionsImOriginal = image1.width*image1.height;
        for(var i=0; i < dimensionsImOriginal ; i++ ){
            if(op == 1){
                pixelsImgR[i*4] = pixelsImg1[i*4] & pixelsImg2[i*4];
                pixelsImgR[i*4+1] = pixelsImg1[i*4+1] & pixelsImg2[i*4+1];
                pixelsImgR[i*4+2] = pixelsImg1[i*4+2] & pixelsImg2[i*4+2];
            }else{
                pixelsImgR[i*4] = pixelsImg1[i*4] | pixelsImg2[i*4];
                pixelsImgR[i*4+1] = pixelsImg1[i*4+1] | pixelsImg2[i*4+1];
                pixelsImgR[i*4+2] = pixelsImg1[i*4+2] | pixelsImg2[i*4+2];
            }   
        }
        canvas1_result.width = image1_result.width;
        canvas1_result.height = image1_result.height;
        ctx3.putImageData(image1_result,0,0);
        activar();

    }else{
        alerta_img();
    }
};

//------------------------------------------------------------------------------------------------------------------------------
//------------------------------ HISTOGRAMA DE ESCALA DE GRISES Y COLOR --------------------------------------------------------
histogramaGrises = function(canales){
    if(img1==1){
        limpiarcanvas2();
        limpiarcanvas4();
        if(canales  == 1){
            ConvertirGrises();
            image1_result = ctx3.getImageData(0,0,canvas1.width,canvas1.height);
        }else{
            limpiarcanvas3();
            image1_result = ctx1.getImageData(0,0,canvas1.width,canvas1.height);
        }
        canvas2_result.width = 1100;
        canvas2_result.height = 800;   
        ctx4.width = 1100;
        ctx4.height = 800;
        ctx4.fillStyle = '#CCCCCC';
        ctx4.fillRect(0,0,1100,800);
        
    
        image2_result = ctx4.getImageData(0,0,1100,800);
        
        pixels = image1_result.data;
        Resultado = image2_result.data;    
    
        dimensionsImOriginal = image1_result.width*image1_result.height;
        dim = image2_result.width*image2_result.height;
    
        var intensidades = Array(256);
        var intensidadesG = Array(256);
        var intensidadesB = Array(256);
        
        for(var i=0; i<256 ; i++){
            intensidades[i] = 0;
            if(canales == 3){
                intensidadesG[i] = 0;
                intensidadesB[i] = 0; 
            }
        }
    
        for(var i=0; i < dimensionsImOriginal; i++){
            intensidades[pixels[i*4]]++;
            intensidadesG[pixels[i*4+1]]++;
            intensidadesB[pixels[i*4+2]]++;
        }
    
        var maximun = 0, max=0, maxG=0, maxB = 0,suma=0;
        for(var i=0; i < 256 ; i++){
            if(max < intensidades[i]){
                max = intensidades[i];
            }
            if(maxG < intensidadesG[i]){
                maxG = intensidadesG[i];
            }
            if(maxB < intensidadesB[i]){
                maxB = intensidadesB[i];
            }
            suma+=intensidades[i];
        }
        //console.log(intensidades);
        maximun = Math.max(max,Math.max(maxG,maxB));
        //console.log("dimension",suma);
        var scala = Math.trunc(maximun/image2_result.height)+1;
        //console.log("Scala: ", scala);
        //console.log("MaximoR: ", max ,"MaximoG: ",maxG,"MaximoB:",maxB,"MaximoTodos: ", maximun);
    
        canvas2_result.width = image2_result.width;
        canvas2_result.height = image2_result.height;
        //console.log("with:",image2_result.width, "height: ", image2_result.height);
        ctx4.putImageData(image2_result,0,0);
        
        for(var i=0,x=0; i < 256; i++){
            //console.log(x, image2_result.height - Math.trunc(intensidades[i]/scala), 1, Math.trunc(intensidades[i]));
            if(canales == 1){
                ctx4.fillRect(x, image2_result.height - Math.trunc(intensidades[i]/scala), 1, Math.trunc(intensidades[i]/scala)+1);
                x+=2;
            }else{
                ctx4.fillStyle = '#FF0000';
                ctx4.fillRect(x, image2_result.height - Math.trunc(intensidades[i]/scala), 1, Math.trunc(intensidades[i]/scala)+1);
                ctx4.fillStyle = '#00FF00';
                ctx4.fillRect(x+2, image2_result.height - Math.trunc(intensidadesG[i]/scala), 1, Math.trunc(intensidadesG[i]/scala)+1);
                ctx4.fillStyle = '#0000FF';
                ctx4.fillRect(x+3, image2_result.height - Math.trunc(intensidadesB[i]/scala), 1, Math.trunc(intensidadesB[i]/scala)+1);
                x+=4;
            }
        }    
        activar();
    }else{
        alerta_img();
    }

    
};

//---------------------------------PINTAR UNA IMAGEN SELECCIONANDO UNA REGION DEL HISTOGRAMA EN GRISES--------------------------------------------------------------
regImg = function(){
    if(img1==1){
        limpiarcanvas2();
        histogramaG(1);
        image1_result = ctx3.getImageData(0,0,image1_result.width,image1_result.height);
        pixels = image1_result.data;

        dimensionsImOriginal = image1_result.width * image1_result.height;

        for(var i=0; i < dimensionsImOriginal; i++){
            if(pixels[i*4] >= a && pixels[i*4] <= b){
                pixels[i*4] = 255;
                pixels[i*4+1] = 0;
                pixels[i*4+2] = 0;
            }
        }
        canvas1_result.width = image1_result.width;
        canvas1_result.height = image1_result.height;
        ctx3.putImageData(image1_result,0,0);
        activar();
    }else{
        alerta_img();
    }
};
//------------------------- PINTAR IMAGEN EN BLANCO Y NEGRO ----------------------------------------

colorearG = function (){
    if(img1==1){
       
        activar();
    }else{
        alerta_img();
    }
}

//---------------------------------------CONBOLUSION--------------------------------------------------------------------
var a=new Array(3)
conbolusion = function(){
    if(img1==1){
        limpiarcanvas2();
        tam = val.value;
        a = [];
        for(var i=0 ; i<tam ; i++){         //primero se llena la matriz todo de 1nos, para también la dimensiono
            var x=[tam];
            for(var j=0 ; j<tam ; j++){
               x[j]=1;
            }
            a[i]=x;
        }
        //console.log("antes: ",a);
        for(var i=0; i<tam ; i++){          //segundo, se lee con los datos que hay en el html
            for(var j=0 ; j<tam ; j++){
                id=''+i+''+j;
                //console.log(id);
                elemt = document.getElementById(id);
                a[i][j]= parseFloat(elemt.value);
            }
        }
        //console.log(a);
        ConvertirGrises();
        image1_result = ctx3.getImageData(0,0,image1_result.width,image1_result.height);
        image2_result = ctx3.getImageData(0,0,image1_result.width,image1_result.height);
        Resultado = image2_result.data;
        pixels = image1_result.data;
        suma  = 0;
        frec = 0;
        console.log("tamaño: ",image1_result.width*image1_result.height);
        //console.log(pixels);
        //console.log(a);
        retro=Math.trunc(tam/2);
        console.log("para dividir y regresar: ",retro);
        for (var i = retro; i < image2_result.height - retro ; i++){
            for (var j =retro; j < image2_result.width - retro; j++){
                suma=0;
                frec = 0;
                //console.time('loop');
                for(var k=0 ; k< a.length ; k++){
                    for(var l=0; l< a[k].length ; l++){
                        suma += a[k][l] *pixels[(i-retro+k)*image2_result.width*4 + (j-retro+l)*4];
                        frec += a[k][l];
                    }
                }
                //console.timeEnd('loop');
                //console.log("suma:",suma);
                if(frec>1){
                    suma = Math.trunc(suma/frec);
                }
                if(suma>255){
                    suma=255;
                }
                if(suma < 0){
                    suma=0;
                }
                Resultado[i*image2_result.width*4 + j*4] = suma;
                Resultado[i*image2_result.width*4 + j*4+1] =  suma;
                Resultado[i*image2_result.width*4 + j*4+2] =  suma;
            }
        }
        //console.log(pixels);
        canvas2_result.width = image2_result.width;
        canvas2_result.height = image2_result.height;
        ctx4.putImageData(image2_result,0,0);
        activar();
    }else{
        alerta_img();
    }
}
// ------------------------------------- ESCALAR IMAGEN -------------------------------------------------------

const rangAumentar = document.getElementById("rangAumentar");
const rangDisminuir = document.getElementById("rangDisminuir");
const aumentar = document.getElementById('aumentar');
const disminuir = document.getElementById('disminuir');
var valueAumentar = rangAumentar.value;
var valueDisminuir = rangDisminuir.value;
rangAumentar.onchange = function(){
    valueAumentar = rangAumentar.value;
    aumentar.innerHTML = ""+valueAumentar;
    escalar();
};

rangDisminuir.onchange = function(){
    valueDisminuir = valueDisminuir.value;
    disminuir.innerHTML = ""+valueDisminuir;
};


escalar = function(){
    if(img1==1){
        image1 = ctx1.getImageData(0,0,canvas1.width,canvas1.height);
        pixels = image1.data;
        var newWidth = image1.width * valueAumentar;
        var newHeight = image1.height * valueAumentar;
        canvas1_result.width=newWidth;
        canvas1_result.height=newHeight;
        ctx3.width = newWidth;
        ctx3.height = newHeight;
        ctx3.fillStyle = '#555';
        ctx3.fillRect(0,0,newWidth,newHeight);
        image1_result = ctx3.getImageData(0,0,newWidth,newHeight);
        resultado = image1_result.data;

        dimensionsImOriginal = canvas1.width* canvas1.height;
        for(var i=0 ; i<image1.height ; i++){
            for(var j=0 ; j<image1.width ; j++){
                //los de adelante
                for(var k=0 ; k<valueAumentar ;k++){
                    for(var l=0 ; l<valueAumentar ; l++){
                        resultado[(i*valueAumentar+k)*newWidth*4 + (j*valueAumentar+l)*4] = pixels[i*image1.width*4 + j*4];
                        resultado[(i*valueAumentar+k)*newWidth*4 + (j*valueAumentar+l)*4+1] = pixels[i*image1.width*4 + j*4+1];
                        resultado[(i*valueAumentar+k)*newWidth*4 + (j*valueAumentar+l)*4+2] = pixels[i*image1.width*4 + j*4+2];
                    }
                }
                
            }
        }

        canvas1_result.width=newWidth;
        canvas1_result.height=newHeight;
        ctx3.putImageData(image1_result,0,0);
        activar();
    }else{
        alerta_img();
    }
}


//-------------------------------------- DESPLAZAMINETO Y ROTACION --------------------------------------------------------

desplazamineto = function (){
    if(img1==1){
        limpiarcanvas2();
        limpiarcanvas4();
        image1 = ctx1.getImageData(0,0,image1.width,image1.height);
        pixels = image1.data;

        canvas1_result.width = canvas1.width;
        canvas1_result.height = canvas1.height;
        ctx3.width = canvas1.width;
        ctx3.height = canvas1.height;
        ctx3.fillStyle = '#000';
        ctx3.fillRect(0,0,canvas1.width,image1.height);
        //console.log("dimesion: ",canvas1_result.width,"x",canvas1.height);
        image1_result = ctx3.getImageData(0,0,canvas1.width,canvas1.height);
        resultado = image1_result.data;

        var xNew=0;
        dimensionsImOriginal = image1_result.width * image1_result.height;
        //console.log("Desplazamiento en X: ", desplx,"Desplazamiento en Y: ",desply,"   Dimension: ", dimensionsImOriginal);

        for(var i=0; i<image1.height ; i++){
            for(var j=0 ; j<image1.width ; j++){
                //i*image2_result.width*4 + j*4
                xNew = (i+desply)*image1_result.width*4 + j*4+(desplx*4);
                if( j+desplx > 0 && j+desplx < image1_result.width && i+desply > 0 && i+desply < image1_result.height){
                    resultado[xNew] = pixels[i*image1_result.width*4 + j*4];
                    resultado[xNew+1] = pixels[i*image1_result.width*4 + j*4+1];
                    resultado[xNew+2] = pixels[i*image1_result.width*4 + j*4+2];
                }
            }
        }

        canvas1_result.width = image1.width;
        canvas1_result.height = image1.height;
        ctx3.putImageData(image1_result,0,0);

        activar();
    }else{
        alerta_img();
    }
}

//funcion para actualizar el campo de desplazamiento
var despx = document.getElementById("desplx");
var desplx = Number(despx.value);
var despy = document.getElementById("desply");
var desply = Number(despy.value);

despx.onchange = function () {
    desplx = Number(despx.value);
}

despy.onchange = function () {
    desply = Number(despy.value);
}

//Obtenemos en valor de los grados para aplicar el algoritmo de rotacion
var rot = document.getElementById("rotation");
var grades = rot.value;
//Aplicamos el nuevo valor de los grados si es que se cambia el valor el la interfaz
rot.onchange = function (){
    grades = Number(rot.value);
}

rotation = function (){
    if(img1==1){
        limpiarcanvas2();
        limpiarcanvas4();
        image1 = ctx1.getImageData(0,0,image1.width,image1.height);
        pixels = image1.data;
        //Debemmos calcular la nueva dimension de la imagen
        //necesitamos hacer una operacion de 
        var s = Math.sin(grades * Math.PI/180), c = Math.cos(grades * Math.PI/180);
        var nDheight = Math.trunc((image1.height*Math.abs(c)) + (image1.width*Math.abs(s)));
        var nDwidth = Math.trunc((image1.height*Math.abs(s)) + (image1.width*Math.abs(c)));

        console.log("grados: ",grades)
        console.log("Dimension: ",image1.height,"x",image1.width);
        console.log("Nueva dimension: ",nDheight,"x",nDwidth);

        canvas1_result.width = nDwidth;
        canvas1_result.height = nDheight;
        ctx3.width = nDwidth;
        ctx3.height = nDheight;
        ctx3.fillStyle = '#555';
        ctx3.fillRect(0,0,nDwidth,nDheight);
        image1_result = ctx3.getImageData(0,0,nDwidth,nDheight);
        resultado = image1_result.data;
        //Una vez calculado la nueva dimension Se tiene que sacar las referencias de los centros
        //tanto de la imagen original como de la imagen rotada

        var refX = nDwidth/2 , refY = nDheight/2;
        var xOffset = refX - image1.width/2, yOffset = refY - image1.height/2;
        var xNew=0, yNew=0, primeX = 0, primeY = 0;
        for(var i = 0 ; i < image1.height ; i++){
            for(var j = 0 ; j < image1.width ; j++){
                xNew = j -refX + xOffset;
                yNew = i -refY + yOffset;
                //console.log("xNew: " + xNew + " yNew: " + yNew);
                primeX = Math.trunc(refX + (xNew*c - yNew*s));
                primeY = Math.trunc(refY + (xNew*s + yNew*c));
                //console.log("Xprima: ",primeX, "Yprima: ",primeY);
                if(primeX >=0 && primeX <=nDwidth && primeY >=0 && primeY <=nDheight){
                    resultado[primeY*nDwidth*4 + primeX*4] = pixels[i*image1.width*4 + j*4];
                    resultado[(primeY*nDwidth*4 + primeX*4)+1] = pixels[(i*image1.width*4 + j*4)+1];
                    resultado[(primeY*nDwidth*4 + primeX*4)+2] = pixels[(i*image1.width*4 + j*4)+2];
                }
            }
        }

        ctx3.putImageData(image1_result,0,0);
        activar();
    }else{
        alerta_img();
    }
};
//------------------------- S E G M E N T A C I Ó N--------------------------------------------------------
const segmenatacion_range = document.getElementById('input_segmentation_range');
var prrf_segmen_value = document.getElementById('prrf_segmen_value');
var valor_umbral = segmenatacion_range.value;

segmenatacion_range.onchange = function(){
    valor_umbral = segmenatacion_range.value;
    prrf_segmen_value.innerHTML = "Tolerancia: "+valor_umbral;
}

const color_segmentacion = document.getElementById('c3');
var color_segmentacion_value = color_segmentacion.value;
var Red_s=255, Green_s=255, Blue_s=255;

color_segmentacion.onchange = function() {
    //convertir el color de la segmentacion de HEXA a DECIMAL
    color_segmentacion_value = color_segmentacion.value;

    Red_s = ((16*hexaToDecimal(color_segmentacion_value[1]))+(hexaToDecimal(color_segmentacion_value[2])));
    Green_s = ((16*hexaToDecimal(color_segmentacion_value[3]))+(hexaToDecimal(color_segmentacion_value[4])));
    Blue_s = ((16*hexaToDecimal(color_segmentacion_value[5]))+(hexaToDecimal(color_segmentacion_value[6])));
    console.log("Color de la segmentacion: ",color_segmentacion_value+"="+Red_s+Green_s+Blue_s);
}
var op=1;

operacion = function(o){
    op = o;
    console.log("operacion de segmentacion: ",op);
}
//si op es 1 normal
//si op es 2 distancia cuadratica
segmentacion = function(o){
    operacion(o);
    if(img1==1){
        image1 = ctx1.getImageData(0,0,canvas1.width,canvas1.height);
        pixels = image1.data;
        image1_result = ctx1.getImageData(0,0,canvas1.width,canvas1.height);
        resultado = image1_result.data;

        dimensionsImOriginal = image1_result.width * image1_result.height;
        var d = 0;
        for(var i=0;i < dimensionsImOriginal; i++){
            if(op == 1)
                d = (pixels[i*4] - Red_s) + (pixels[i*4+1] - Green_s) + (pixels[i*4+2] - Blue_s)
            else if(op == 2)
                d = Math.sqrt( Math.pow(pixels[i*4] - Red_s , 2) + Math.pow(pixels[i*4+1] - Green_s , 2) + Math.pow(pixels[i*4+2] - Blue_s , 2) );

            if( d >= valor_umbral ){
                resultado[i*4] = resultado[i*4+1] = resultado[i*4+2] = 200;
            }else{
                resultado[i*4] = Red_s;
                resultado[i*4+1] = Green_s;
                resultado[i*4+2] = Blue_s;
            }
        }
        
        canvas1_result.width = canvas1.width;
        canvas1_result.height = canvas1.height;
        ctx3.putImageData(image1_result,0,0);
        activar();
    }else{
        alerta_img();
    }

};

// -------------------------------------------- OPERADORES MORFOLOGICOS --------------------------------------------------------------

//Estas instrucciones son para recuperar datos necesarios para aplicar el algoritmos de operadores morfologicos
const rangoInput_OpMorfo = document.getElementById('rangoInput_OpMorfo');
var var_range_OpMorfo = document.getElementById('var_range_OpMorfo');
var rangoInput_OpMorfo_value = rangoInput_OpMorfo.value;
console.log("Valor del rango para operadores morfológicos: ",rangoInput_OpMorfo_value);

rangoInput_OpMorfo.onchange = function(){
    rangoInput_OpMorfo_value = rangoInput_OpMorfo.value;
    console.log("Valor del rango para operadores morfológicos: ",rangoInput_OpMorfo_value);

    var_range_OpMorfo.innerHTML = rangoInput_OpMorfo_value+" x "+rangoInput_OpMorfo_value;

    var nave = document.getElementById('menu-nav');
    if(rangoInput_OpMorfo_value > 7){
        nave.style.width="70%";
    }else{
        nave.style.width="40%";
    }

    dad = document.getElementById('mat1_OpMorfo');
    erase = document.getElementById('borrar_OpMorfo');

    dad.removeChild(erase);
    c = document.createElement('center');
    c.id = "borrar_OpMorfo";
    dad.appendChild(c);
    for(var i=0; i < rangoInput_OpMorfo_value ; i++){
        for(var j=0; j < rangoInput_OpMorfo_value; j++){
            var input=document.createElement('input');
            input.pattern="([0-9])";
            input.type="text";
            input.id=''+i+''+j;
            input.size='1';
            input.value="1";
            
            (c).appendChild(input);
        }
        c.appendChild(document.createElement('br'));
    }
};


//Aqui deben de ir todas las funciones para los operadores morfologicos
operadores_morfologicos = function(op,){
    if(img1 == 1){
        limpiarcanvas2();
        limpiarcanvas3();
        limpiarcanvas4();
        //primero debemos leer la matriz para obtener los resultados y poder aplicar el algoritmo
        var tam = rangoInput_OpMorfo_value;
        //console.log(tam);
        var b = [];
        for(var i=0 ; i<tam ; i++){         //primero se llena la matriz todo de 1nos, para también la dimensiono
            var x=[tam];
            for(var j=0 ; j<tam ; j++){
               x[j]=1;
            }
            b[i]=x;
        }
        //console.log(b);

        //Ahora cargamos todos los datos necesarios para aplicar
        image1 = ctx1.getImageData(0,0,canvas1.width,canvas1.height);
        original = image1.data;
        var retro = tam-1;
        var band_aux = true;
        
        ctx2.width = canvas1.width + retro*2;
        ctx2.height = canvas1.height; + retro*2;
        canvas2.width = canvas1.width + retro*2;
        canvas2.height = canvas1.height + retro*2;
        ctx2.fillStyle = '#FFFFFF';
        ctx2.fillRect(0,0,canvas2.width,canvas2.height);
        image2 = ctx2.getImageData(0,0,canvas2.width,canvas2.height);
        pixels = image2.data;

        var h = image2.height, w=image2.width;
        for(var i=retro; i < h-retro; i++){
            for(var j = retro; j < w-retro; j++){
                var gris = ( original[(i-retro)*(w-retro*2)*4 + (j-retro)*4] + original[(i-retro)*(w-retro*2)*4 + (j-retro)*4+1] + original[(i-retro)*(w-retro*2)*4 + (j-retro)*4+2] ) / 3;
                pixels[i*w*4 + j*4] = gris;
                pixels[i*w*4 + j*4+1] = gris;
                pixels[i*w*4 + j*4+2] = gris;
            }
        }

        canvas2.width = w;
        canvas2.height = h;
        ctx2.putImageData(image2,0,0);

        image1_result = ctx2.getImageData(0,0,w,h);
        resultado = image1_result.data;

        
        for(var i=0; i < h-retro; i++){
            for(var j = 0; j < w-retro; j++){
                resultado[i*w*4 + j*4+3] = 255;       //para quitarle la transparencia
                
                switch(op) {
                    case 1://---------------- D I L A T A C I O N -------------------------------------
                        dilatacion(band_aux,tam,i,j,w,pixels,resultado);
                    break;
                    case 2://----------------------E R O S I O N------------------------------------------
                        erosion(band_aux,tam,i,j,w,pixels,resultado);
                    break;
                    default:break;
                }
                

            }
        }

        canvas1_result.width = w;
        canvas1_result.height = h;
        ctx3.putImageData(image1_result,0,0);
        activar();
    }else{
        
        alerta_img();
    }
};

const app_num_esque = document.getElementById('app_num_esque');
var app_num_esque_value = app_num_esque.value;

app_num_esque.onchange = function(){
    app_num_esque_value = app_num_esque.value;
}

esqueletizacion = function(){
    operadores_morfologicos(2);//erosiono una vez;

    //ahora aplico la erosion cuantas veces mas sea necesario
    for(var k = 0 ; k < app_num_esque_value - 1 ; k++){
        console.log("holi");
        image1_result = ctx3.getImageData(0,0,canvas1_result.width,canvas1_result.height);
        pixels = image1_result.data;
        image2_result = ctx3.getImageData(0,0,canvas1_result.width,canvas1_result.height);
        resultado = image2_result.data;

        var tam = rangoInput_OpMorfo_value;
        var h = image2.height, w=image2.width;
        var retro = tam-1;
        var band_aux = true;
    

        for(var i=0; i < h-retro; i++){
            for(var j = 0; j < w-retro; j++){
                resultado[i*w*4 + j*4+3] = 255;       //para quitarle la transparencia
                erosion(band_aux,tam,i,j,w,pixels,resultado);
            }
        }

        canvas1_result.width = w;
        canvas1_result.height = h;
        ctx3.putImageData(image2_result,0,0);
    }
    activar();
}
;
perimetro = function(){
    operadores_morfologicos(2);//primero erosiono;
    //luego resto la imagen original con la erosionada
    image2 = ctx2.getImageData(0,0,canvas2.width,canvas2.height);   
    image1_result = ctx3.getImageData(0,0,canvas1_result.width,canvas1_result.height);
    image2_result = ctx3.getImageData(0,0,canvas1_result.width,canvas1_result.height);

    pixelsImg1 = image2.data;
    pixelsImg2 = image1_result.data;
    pixelsImgR = image2_result.data;

    var dim = image2.width * image2.height;
    for(var i = 0; i < dim ; i++){
        pixelsImgR[i*4] = Math.abs(pixelsImg1[i*4] - pixelsImg2[i*4]);
        pixelsImgR[i*4+1] = Math.abs(pixelsImg1[i*4+1] - pixelsImg2[i*4+1]);
        pixelsImgR[i*4+2] = Math.abs(pixelsImg1[i*4+2] - pixelsImg2[i*4+2]);
    }

    canvas2_result.width = image2.width;
    canvas2_result.height = image2.height;
    ctx4.putImageData(image2_result,0,0);
    activar();
};

limpieza =  function(){
    operadores_morfologicos(2);//primero se aplica la erosion.

    //ahora aplico la dilatacion
    image1_result = ctx3.getImageData(0,0,canvas1_result.width,canvas1_result.height);
    pixels = image1_result.data;
    image2_result = ctx3.getImageData(0,0,canvas1_result.width,canvas1_result.height);
    resultado = image2_result.data;

    var tam = rangoInput_OpMorfo_value;
    var h = image2.height, w=image2.width;
    var retro = tam-1;
    var band_aux = true;
   

    for(var i=0; i < h-retro; i++){
        for(var j = 0; j < w-retro; j++){
            resultado[i*w*4 + j*4+3] = 255;       //para quitarle la transparencia
            dilatacion(band_aux,tam,i,j,w,pixels,resultado);
        }
    }

    canvas2_result.width = w;
    canvas2_result.height = h;
    ctx4.putImageData(image2_result,0,0);
    activar();
}

cierre =  function(){
    operadores_morfologicos(1);//primero se aplica la dilatacion.

    //ahora aplico la erosion
    image1_result = ctx3.getImageData(0,0,canvas1_result.width,canvas1_result.height);
    pixels = image1_result.data;
    image2_result = ctx3.getImageData(0,0,canvas1_result.width,canvas1_result.height);
    resultado = image2_result.data;

    var tam = rangoInput_OpMorfo_value;
    var h = image2.height, w=image2.width;
    var retro = tam-1;
    var band_aux = true;
   

    for(var i=0; i < h-retro; i++){
        for(var j = 0; j < w-retro; j++){
            resultado[i*w*4 + j*4+3] = 255;       //para quitarle la transparencia
            erosion(band_aux,tam,i,j,w,pixels,resultado);
        }
    }

    canvas2_result.width = w;
    canvas2_result.height = h;
    ctx4.putImageData(image2_result,0,0);
    activar();
}

dilatacion = function(band_aux,tam,i,j,w,pixels,resultado){

    band_aux = true;
    var p = 0;
    var centro = Math.trunc(tam/2);
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

};

erosion = function(band_aux,tam,i,j,w,pixels,resultado){
    band_aux = true;
    var p = 0;
    var centro = Math.trunc(tam/2);
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
};

//---------------------------------------------------FUNCIONES PARA LOS COLORES--------------------------------------------------------
var clr1 = document.getElementById('c1');
var clr2 = document.getElementById('c2');
var color1 = clr1.value;
var color2 = clr2.value;
var R1=255,R2=0,G1=255,G2=0,B1=255,B2=0;

clr1.onchange = function() {
    //convertir el color de HEXA a DECIMAL
    color1 = clr1.value;
    R1 = ((16*hexaToDecimal(color1[1]))+(hexaToDecimal(color1[2])));
    G1 = ((16*hexaToDecimal(color1[3]))+(hexaToDecimal(color1[4])));
    B1 = ((16*hexaToDecimal(color1[5]))+(hexaToDecimal(color1[6])));
    console.log("Color 1: ",color1,"="+R1+G1+B1);
}

clr2.onchange = function() {
    //convertir el color de HEXA a DECIMAL
    color2 = clr2.value;
    console.log("Color 2: ",color2);
    R2 = (16*hexaToDecimal(color2[1]))+(hexaToDecimal(color2[2]));
    G2 = (16*hexaToDecimal(color2[3]))+(hexaToDecimal(color2[4]));
    B2 = (16*hexaToDecimal(color2[5]))+(hexaToDecimal(color2[6]));
    console.log(color2+"="+R2+G2+B2);
}

//esta funcion es para devolver el equivalente valor de hexadecimal a decimal
hexaToDecimal = function(value) {
    vR = 0;
    switch (value) {
        case '1': vR = 1; break;
        case '2': vR = 2; break;
        case '3': vR = 3; break;
        case '4': vR = 4; break;
        case '5': vR = 5; break;
        case '6': vR = 6; break;
        case '7': vR = 7; break;
        case '8': vR = 8; break;
        case '9': vR = 9; break;
        case 'A','a': vR = 10; break;
        case 'B','b': vR = 11; break;
        case 'C','c': vR = 12; break;
        case 'D','d': vR = 13; break;
        case 'E','e': vR = 14; break;
        case 'F','f': vR = 15; break;
    }
    return vR;
}
//Aqui pondré una funcion que cambie los valores del rango a - b para la funcion de seleccion de unaregion del historgrama del historgrama

var rang_a = document.getElementById("rage_a");
var rang_b = document.getElementById("rage_b");

var a = Number(rang_a.value);
var b = Number(rang_b.value);

rang_a.onchange = function () {
    a = Number(rang_a.value);
    console.log("a: " + a);
}

rang_b.onchange = function () {
    b = Number(rang_b.value);
    console.log("b: " + b);
}

//Esta funcion es necesaria para redimensionar la matriz de la combolusion segun de grande la quiera
//el usuario
var val=document.getElementById('rangoInput');
const var_range = document.getElementById('var_range');
console.log("Valor del rango: ",val.value);

//<input type="text" id="20" pattern="[0-9]" size="1" value="1">
val.onchange = function handleChange(e){
    tam = val.value;

    var_range.innerHTML = tam+" x "+tam;

    var nave = document.getElementById('menu-nav');
    if(tam>7){
        nave.style.width="80%";
    }else{
        nave.style.width="40%";
    }
    dad = document.getElementById('mat1');
    erase = document.getElementById('borrar');
    dad.removeChild(erase);
    c = document.createElement('center');
    c.id="borrar";
    dad.appendChild(c);
    for(var i=0; i<tam ; i++){
        for(var j=0; j<tam; j++){
            var input=document.createElement('input');
            input.pattern="([0-9])";
            input.type="text";
            input.id=''+i+''+j;
            input.size='1';
            input.value="1";
            
            (c).appendChild(input);
        }
        c.appendChild(document.createElement('br'));
    }
    console.log("Valor del rango: ",val.value);
};

//Esta funcion es para el desplazamineto del menu
$(document).ready(main);

var contador = 0;

function main(){
	$('.menu_bar').click(function(){
		$('nav').toggle(); 

		if(contador == 0){
			$('nav').animate({
				left: '0'
			});
			contador = 1;
		} else {
			contador = 0;
			$('nav').animate({
				left: '-100%'
			});
		}

	});
};



activar = function (){
   // console.log("se activó la funcion");
    $('nav').toggle();
	if(contador == 0){
		$('nav').animate({
			left: '0'
		});
		contador = 1;
	} else {
		contador = 0;
		$('nav').animate({
			left: '-100%'
		});
	}
};

var nav_count1=1;
desplazar = function (id_nav){
    var nav = document.getElementById(id_nav);
    //console.log(nav.style.color);
    
    if(nav.style.display == "block"){
        nav.style.display="none";
    }else{
        nav.style.display="block";
    }  
}


//esta funcion es para limpiar resultados anteriores cada vez que 
//se ejecuta otro algoritmo

limpiarcanvas2 = function(){
    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
    canvas2.width = "250px";
    canvas2.height = "250px";
    imageCa2.style.setProperty("width", ""+canvas2.width+"px");
    imageCa2.style.setProperty("height", ""+canvas2.height+"pxh");
    img2 = 0;
}

limpiarcanvas3 = function(){
    ctx3.clearRect(0, 0, canvas1_result.width, canvas1_result.height);
    canvas1_result.width = "250px";
}

limpiarcanvas4 = function(){
    ctx4.clearRect(0, 0, canvas2_result.width, canvas2_result.height);
    canvas2_result.width = "250px";
}

//Aqui estan las funciones para los letreros de ayuda de cada algortimo
cadena_carga_imagenes = "Este es el apartado para que carges tus imagenes, Podrás cargar hasta dos imagenes para aplicarle los algoritmos debajo de este apartado."
cadena_operaciones_logicas = "Para aplicar de manera correcta este algoritmo es necesario que carges dos imagenes de las mismas dimesiones en el apartado de cargar imagenes";
cadena_histogramas = "Aquí podrás generar los histogramas correspondientes a las intensidades de la imagen en escala de color o de grises. Podras pintar los pixeles de una imagen correspondientes en un rango a-b minimo de 0 y maximo de 255 y podrás ecualizar una imagen en color o en grises"
cadena_divisorC = "En este apartado podrás aplicar algoritmos de separacion de colores como grises, azul, rojo, verde y el negativo de una imagen. Para aplicar el coloreado de la imagen es necesario seleccionar un color de preferencia y para el gradiente es necesario seleccionar 2 colores, OJO! este algoritmo siempre se aplica sobre la primera imagen cargada."
cadena_bordes = "Los bordes se dividen en dos partes aplicados a imagenes a color y en escala de grises.Para cada parte se puede aplicar el calculo de los bordes en HORIZONTAL, VERTICAL, DIAGONAL Y TODOS LOS ANTERIORES. OJO! Este algoritmo se aplica a la primera imagen cargada."
cadena_operadores_algebraicos = "Estos algoritmos consisten en SUMAR (+) o RESTAR (-) dos imagenes, OJO! para que el algoritmo muestre resultados entendibles es necesario CARGAR DOS IMAGENES Y DEL MISMO TAMAÑO"  
                "OJO! el algoritmo se aplica a la primera imagen y hay dos colores seleccionados por defecto cambialos para notar cambios mas agradables."
cadena_convolucion = "¡Tienes de dos PE!. Le picas a ver todos los filtros o rellenas a mano la matriz de convolucion, !Asegurate que hayas puesto bien los datos en la matriz! Una vez rellenados los daots solo da click en aplicar a la matriz de convolusión. ";
cadena_escalar_rotar_desplazar = "Para el algoritmo de ROTAR LA IMAGEN es necesario espeficicar cuantos ángulos quieres que se rote la imagen."+
                                "Para el algoritmo de Desplazar es necesario espeficicar cuanto desplazar; A loos lados, un numero positivo quiere decir movimiento hacia la derecha y un numero negativo hacia la izquierda, de igual manera para los valores de arriba o hacia abajo, positivo y negativo respectivamente."+
                                "Para el algoritmo de Escalar usa las barras proporcionadas para agrandar o achicar la imagen.";
cadena_exa_3er_parcial = "as";
ayuda1 = function(op){
    switch(op) {
        case 1: 
            swal.fire(
                'Carga de imagenes desde tu dispositivo',
                cadena_carga_imagenes,
                'question'
            );break;
        case 2: 
            swal.fire(
                'AND y OR',
                cadena_operaciones_logicas,
                'question'
            );break;
        case 3: 
            swal.fire(
                'Histogramas en escala de color y grises',
                cadena_histogramas,
                'question'
            );break;
        case 4: 
            swal.fire(
                'Colores',
                cadena_divisorC,
                'question'
            );break;
        case 5: 
            swal.fire(
                'Bordes!',
                cadena_bordes,
                'question'
            );break;
        case 6: 
            swal.fire(
                'Algebra!',
                cadena_operadores_algebraicos,
                'question'
            );break;
        case 7:
            swal.fire(
                'Convolusión!',
                cadena_convolucion,
                'question'
            );break;
        case 8:
            swal.fire(
                'Desplazar, Rotar o Escalar!',
                cadena_escalar_rotar_desplazar,
                'question'
            );break;
        case 9:
            swal.fire(
                'Examen 3er Parcial!',
                cadena_exa_3er_parcial,
                'question'
            );break;
    }
    
}
//----------------------------------------------------------------
const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  modal_container.classList.add('show');  
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});
//----------------------------------------------------------------
const open1 = document.getElementById('open1');
const modal_container1 = document.getElementById('modal_container1');
const close1 = document.getElementById('close1');

open1.addEventListener('click', () => {
  modal_container1.classList.add('show');  
});

close1.addEventListener('click', () => {
  modal_container1.classList.remove('show');
});
//----------------------------------------------------------------
const open2 = document.getElementById('open2');
const modal_container2 = document.getElementById('modal_container2');
const close2 = document.getElementById('close2');

open2.addEventListener('click', () => {
  modal_container2.classList.add('show');  
});

close2.addEventListener('click', () => {
  modal_container2.classList.remove('show');
});
//----------------------------------------------------------------
const open3 = document.getElementById('open3');
const modal_container3 = document.getElementById('modal_container3');
const close3 = document.getElementById('close3');

open3.addEventListener('click', () => {
  modal_container3.classList.add('show');  
});

close3.addEventListener('click', () => {
  modal_container3.classList.remove('show');
});
//----------------------------------------------------------------
const open4 = document.getElementById('open4');
const modal_container4 = document.getElementById('modal_container4');
const close4 = document.getElementById('close4');

open4.addEventListener('click', () => {
  modal_container4.classList.add('show');  
});

close4.addEventListener('click', () => {
  modal_container4.classList.remove('show');
});
//----------------------------------------------------------------
const open5 = document.getElementById('open5');
const modal_container5 = document.getElementById('modal_container5');
const close5 = document.getElementById('close5');

open5.addEventListener('click', () => {
  modal_container5.classList.add('show');  
});

close5.addEventListener('click', () => {
  modal_container5.classList.remove('show');
});
//----------------------------------------------------------------
const open6 = document.getElementById('open6');
const modal_container6 = document.getElementById('modal_container6');
const close6 = document.getElementById('close6');

open6.addEventListener('click', () => {
  modal_container6.classList.add('show');  
});

close6.addEventListener('click', () => {
  modal_container6.classList.remove('show');
});
//----------------------------------------------------------------
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

media = function(){
    console.log("media");
};

const pasa_altas1 = [[0,1,0],[1,2,1],[0,1,0]];
const pasa_altas2 = [[1,1,1],[1,1,1],[1,1,1]];
const pasa_altas3 = [[1,1,1],[1,2,1],[1,1,1]];

const pasa_bajas1 = [[0,-1,0],[-1,5,-1],[0,-1,0]];
const pasa_bajas2 = [[-1,-1,-1],[-1,9,-1],[-1,-1,-1]];
const pasa_bajas3 = [[1,-2,1],[-2,5,-2],[1,-2,1]];

const b_v = [[0,-1,0],[0,1,0],[0,0,0]];
const b_h = [[0,0,0],[-1,1,0],[0,0,0]];
const b_vh = [[0,-1,0],[-1,2,0],[0,0,0]];

const faler1 = [[-1,0,1],[-1,0,1],[-1,0,1]];
const faler2 = [[1,1,1],[0,0,0],[-1,-1,-1]];

const krish1 = [[5,5,5],[-3,0,-3],[-3,-3,-3]];

const prewitt1 = [[1,1,1],[1,-2,1],[-1,-1,-1]];

const gaus1 =   [[0,0,-1,-1,-1,0,0],
                [0,-2,-3,-3,-3,-2,0],
                [-1,-3,5,5,5,-3,-1],
                [-1,-3,5,16,5,-3,-1],
                [-1,-3,5,5,5,-3,-1],
                [0,-2,-3,-3,-3,-2,0],
                [0,0,-1,-1,-1,0,0]];
rellenar=function(op){

    switch(op){
        case 1://pasa altas
            val.value = 3;
            modal_container.classList.remove('show');
            relleno_general(pasa_altas1);
        break;
        case 2:
            val.value = 3;
            modal_container.classList.remove('show');
            relleno_general(pasa_altas2);
        break;
        case 3:
            val.value = 3;
            modal_container.classList.remove('show');
            relleno_general(pasa_altas3);
        break;
        case 4://pasa bajas
            val.value = 3;
            modal_container1.classList.remove('show');
            relleno_general(pasa_bajas1);
        break;
        case 5://pasa bajas
            val.value = 3;
            modal_container1.classList.remove('show');
            relleno_general(pasa_bajas2);
        break;
        case 6://pasa bajas
            val.value = 3;
            modal_container1.classList.remove('show');
            relleno_general(pasa_bajas3);
        break;
        case 7://bordes verticales
            val.value = 3;
            modal_container2.classList.remove('show');
            relleno_general(b_v);
        break;
        case 8://bordes horizontales
            val.value = 3;
            modal_container2.classList.remove('show');
            relleno_general(b_h);
        break;
        case 9://bordes v+h
            val.value = 3;
            modal_container2.classList.remove('show');
            relleno_general(b_vh);
        break;
        case 10://faler
            val.value = 3;
            modal_container3.classList.remove('show');
            relleno_general(faler1);
        break;
        case 11:
            val.value = 3;
            modal_container3.classList.remove('show');
            relleno_general(faler2);
        break;
        case 12://krish
            val.value = 3;
            modal_container4.classList.remove('show');
            relleno_general(krish1);
        break;
        case 13:
            val.value = 3;
            modal_container5.classList.remove('show');
            relleno_general(prewitt1);
        break;
        case 14:
            val.value = 7;
            modal_container6.classList.remove('show');
            relleno_general(gaus1);
        break;
    }
};

relleno_general = function(matriz){
    tam = val.value;
    console.log("Valor del rango: ",val.value);
    console.log(matriz);
    var nave = document.getElementById('menu-nav');
    if(tam>7){
        nave.style.width="80%";
    }else{
        nave.style.width="40%";
    }
    dad = document.getElementById('mat1');
    erase = document.getElementById('borrar');
    dad.removeChild(erase);
    c = document.createElement('center');
    c.id="borrar";
    dad.appendChild(c);
    for(var i=0; i<tam ; i++){
        for(var j=0; j<tam; j++){
            var input=document.createElement('input');
            input.pattern="([0-9])";
            input.type="text";
            input.id=''+i+''+j;
            input.size='1';
            input.value=""+matriz[i][j];
            
            (c).appendChild(input);
        }
        c.appendChild(document.createElement('br'));
    }
    
}