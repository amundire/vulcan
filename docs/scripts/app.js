function switchmode(){
    let mode = localStorage.getItem('darkmode');
    if(mode == '0' || mode == undefined){
        toggledarkmode();
    } else {
        togglelightmode();
    }
}

function darkmode(){
    let darkmodeboolean = localStorage.getItem('darkmode');
    
    if(darkmodeboolean == '1'){
        toggledarkmode();
    } else {
        togglelightmode();
    }
};

function toggledarkmode(){
    let body = document.getElementsByTagName("BODY")[0];
    let h1s = document.querySelectorAll('h1');
    let navlabels = document.querySelectorAll('.nav-label');
    let registerbutton = document.querySelector('.button');
    let fieldset = document.querySelector('fieldset');

    localStorage.setItem('darkmode', '1')

    body.style.cssText = 'background-color: rgba(0, 0, 0, 0.9); color: white;'

    registerbutton.style.cssText = 'background: #171717; color: #fff;'
    fieldset.style.cssText = 'background: #41677e;'

    h1s.forEach( 
        function(darkmodeh1color, currentIndex) { 
            h1s[currentIndex].style.cssText = 'color: #b6b6b6';
        }
    );
    navlabels.forEach( 
        function(darkmodeh1color, currentIndex) { 
            navlabels[currentIndex].style.cssText = 'color: #b6b6b6';
        }
    );
}

function togglelightmode(){
    let body = document.getElementsByTagName("BODY")[0];
    let h1s = document.querySelectorAll('h1');
    let navlabels = document.querySelectorAll('.nav-label');
    let registerbutton = document.querySelector('.button');
    let fieldset = document.querySelector('fieldset');

    localStorage.setItem('darkmode', '0')

    body.style.cssText = 'background-color: (255, 255, 255, 0.5); color: black'

    registerbutton.style.cssText = 'background: white; color: black;'
    fieldset.style.cssText = 'background: #9fbbcc;'

    h1s.forEach( 
        function(lightmodeh1color, currentIndex) { 
            h1s[currentIndex].style.cssText = 'color: #363535';
        }
    );
    navlabels.forEach( 
        function(darkmodeh1color, currentIndex) { 
            navlabels[currentIndex].style.cssText = 'color: #363535';
        }
    );
}