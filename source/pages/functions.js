// resume 

// project image slideshows

// path to images
var image_path = './images/';
// create array of all images
var imgs1 = new Array();
var imgs2 = new Array();
var imgs3 = new Array();
var imgs4 = new Array();
var imgs5 = new Array();
var imgs6 = new Array();

// project 1: Data Analysis / kaggle (5)
imgs1 = ['1hist', '1heat', '1corr', '1bar', '1code'];

// project 2: Video Game / itchio and github (7)
imgs2 = ['2title', '2chargif', '2enemygif', '2levelonea', '2leveltwob', '3levelthreeb', '2code'];

// project 3: Website / github pages (4)
imgs3 = ['3home', '3login', '3contact', '3code'];

// project 4: discord bot / logo and code (3)
imgs4 = ['4discord', '4logos', '4code']

// project 5: console games / github (3)
imgs5 = ['5game', '5games', '5code'] 

// project 6: personal website (3)
imgs6 = ['6home', '6scroll', '6code']


var arr_length = image_array.length;
var current_idx =  0;
var slideInterval;

function initSlideshow() {	
    setImage(0);
    slideInterval = setInterval(function(){
        nextImage();
    },3000);
}


function nextImage() {
    if(arr_length == current_idx + 1){
        current_idx = 0;
    } 
    else {
        current_idx++;
    }
    setImage(current_idx);
    setCaption(current_idx);
}


function setImage(idx) {
    document.slideshow.src = image_path+image_array[idx];
}