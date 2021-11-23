document.getElementById("btnDarkMode").onclick = toggleDarkMode;

function toggleDarkMode(){
    let root = document.querySelector(':root');
    let current = getComputedStyle(root);
    let icon = document.querySelectorAll('.menu button span')[0];
    let socialButtons = document.querySelectorAll(".socialButtons a svg path");

    if(current.getPropertyValue('--brand-color') == " #F43F5E"){
        root.style.setProperty('--main-bg-color', ' #1E293B');
        root.style.setProperty('--brand-color', ' #1C1F24');
        root.style.setProperty('--mid-color', ' #FAFAFA');
        root.style.setProperty('--dark-color', ' #F43F5E');
        icon.innerHTML = `<svg width="27" height="27" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.6634 36.6667H18.3301V31.6667H21.6634V36.6667ZM30.6034 32.9633L27.0684 29.4283L29.4251 27.0717L32.9617 30.6083L30.6067 32.9633H30.6034ZM9.39008 32.9633L7.03175 30.6067L10.5651 27.07L12.9234 29.4267L9.39008 32.9617V32.9633ZM19.9967 28.345C15.3884 28.3432 11.6539 24.6062 11.6551 19.9978C11.6563 15.3894 15.3928 11.6544 20.0012 11.655C24.6096 11.6556 28.3451 15.3916 28.3451 20C28.3405 24.6082 24.605 28.3422 19.9967 28.345ZM19.9967 14.9883C17.2293 14.9902 14.9872 17.2348 14.9884 20.0022C14.9896 22.7696 17.2338 25.0123 20.0012 25.0117C22.7686 25.011 25.0117 22.7674 25.0117 20C25.009 17.232 22.7648 14.9892 19.9967 14.9883ZM36.6634 21.6667H31.6634V18.3333H36.6634V21.6667ZM8.33008 21.6667H3.33008V18.3333H8.33008V21.6667ZM29.4234 12.93L27.0684 10.5717L30.6034 7.035L32.9617 9.39333L29.4251 12.9283L29.4234 12.93ZM10.5684 12.93L7.03508 9.395L9.39341 7.03833L12.9267 10.575L10.5701 12.9283L10.5684 12.93ZM21.6634 8.33333H18.3301V3.33333H21.6634V8.33333Z" fill="#F43F5E"/>
        </svg>`;
        socialButtons.forEach(element => {
            element.setAttribute("fill","#F43F5E");
        });
    }
    else{
        root.style.setProperty('--main-bg-color', ' #FAFAFA');
        root.style.setProperty('--brand-color', ' #F43F5E');
        root.style.setProperty('--mid-color', ' #475569');
        root.style.setProperty('--dark-color', ' #1E293B');
        icon.innerHTML = `<svg width="27" height="27" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M30.4133 28.3287C30.2758 28.3318 30.138 28.3333 29.9999 28.3333C19.8747 28.3333 11.6666 20.1252 11.6666 9.99998C11.6666 9.86182 11.6681 9.724 11.6712 9.58653C8.62011 12.0309 6.66659 15.789 6.66659 19.9999C6.66659 27.3637 12.6361 33.3333 19.9999 33.3333C24.2109 33.3333 27.969 31.3798 30.4133 28.3287ZM32.4434 24.802C31.6482 24.9322 30.832 25 29.9999 25C21.7156 25 14.9999 18.2843 14.9999 9.99998C14.9999 9.1679 15.0677 8.35164 15.198 7.55643C15.4182 6.21241 15.817 4.9285 16.3693 3.72986C14.9337 4.04879 13.5678 4.55288 12.298 5.21577C6.97017 7.99702 3.33325 13.5738 3.33325 19.9999C3.33325 29.2047 10.7952 36.6666 19.9999 36.6666C26.4261 36.6666 32.0028 33.0297 34.7841 27.702C35.4469 26.4321 35.951 25.0662 36.27 23.6307C35.0713 24.1829 33.7874 24.5818 32.4434 24.802Z" fill="#1E293B"/>
        </svg>`;
        socialButtons.forEach(element => {
            element.setAttribute("fill","#475569");
        });
    }
}