// Put all the javascript code here, that you want to execute after page load.
// parse all urls in the page and check if they end in .nii.gz
// import {Niivue} from "https://niivue.github.io/niivue/features/niivue.umd.js";

const niivueURL = "https://korbinian90.github.io/niivue-vscode/?images=";
const links = document.getElementsByTagName('a');
for (let i = 0; i < links.length; i++) {
    const link = links[i];
    if (link.href.endsWith('.nii.gz')) {
        // link.style.color = 'red';
        // show small niivue icon next to link
        const img = document.createElement('img');
        // get extension icon in icons/niivue_icon.png
        const icon = 'icons/niivue_icon.png';
        img.src = browser.runtime.getURL(icon);
        img.width = 20;
        img.height = 20;
        link.appendChild(img);
        
        const niivueLink = niivueURL + link.href;
        // open niivueLink when clicking on the image
        img.addEventListener('click', (event) => {
            // prevent default
            event.preventDefault();
            event.stopPropagation();
            window.open(niivueLink);
        });


        // create a canvas element to display the image at the position of the link
        // const canvas = document.createElement('canvas');
        // canvas.id = 'gl';
        // canvas.width = 300;
        // canvas.height = 300;
        // canvas.style.position = 'absolute';
        // canvas.style.top = link.offsetTop + 'px';
        // canvas.style.left = link.offsetLeft + 'px';
        // canvas.style.zIndex = 1000;        
        // document.body.appendChild(canvas);
        // const volumeList = [{
        //     url: link.href
        // }];
        // const nv = new Niivue({ isResizeCanvas: false});
        // nv.attachTo("gl")
        // nv.loadVolumes(volumeList);
    }
}