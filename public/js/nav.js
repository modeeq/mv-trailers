var nav, active;


nav = document.querySelectorAll('.item');

active = function() {
    nav = document.querySelectorAll('.item');

    for (var i = 0; i < nav.length; i++)
        nav[i].classList.remove('active');
    	this.classList.add('active');
};

for (var i = 0; i < nav.length; i++) {
	
    nav[i].addEventListener('mousedown', active);
}
 