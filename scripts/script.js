// Disable Right Click and Hotkeys

document.addEventListener('contextmenu', event => event.preventDefault());
window.onbeforeunload = function (e) {
    e.preventDefault();
    e.returnValue = '';
};

document.onkeydown = function (e) {
	e.preventDefault();		
}