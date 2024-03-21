$(document).ready(function(){
    // 막대그래프
    (function( $ ) {
        "use strict";
        $(function() {
            function animated_contents() {
                $(".zt-skill-bar > div ").each(function (i) {
                    var $this  = $(this),
                        skills = $this.data('width');

                    $this.css({'width' : skills + '%'});

                });
            }
            
            if(jQuery().appear) {
                $('.zt-skill-bar').appear().on('appear', function() {
                    animated_contents();
                });
            } else {
                animated_contents();
            }
        });
    }(jQuery));
})

window.onload = function() {
    // 스크롤이동
    function scrollToElement(elementSelector, instance = 0) {
        // Select all elements that match the given selector
        const elements = document.querySelectorAll(elementSelector);
        // Check if there are elements matching the selector and if the requested instance exists
        if (elements.length > instance) {
            // Scroll to the specified instance of the element
            elements[instance].scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    const link1 = document.getElementById("link1");
    const link2 = document.getElementById("link2");
    const link3 = document.getElementById("link3");
    const link4 = document.getElementById("link4");
    
    link1.addEventListener('click', () => {
        scrollToElement('.#header');
    });
    
    link2.addEventListener('click', () => {
        // Scroll to the second element with "header" class
        scrollToElement('.skills');
    });
    
    link3.addEventListener('click', () => {
        scrollToElement('.project');
    });

    link4.addEventListener('click', () => {
        scrollToElement('.contact');
    });

    // 다크모드
    document.addEventListener('DOMContentLoaded', function() {
        const body = document.querySelector('body');
        const button = document.createElement('button');
        button.textContent = 'Toggle Dark Mode';

        button.addEventListener('click', function() {
            body.classList.toggle('dark-mode');
        });

        document.getElementById('header').appendChild(button);
    });

    AOS.init();


}
