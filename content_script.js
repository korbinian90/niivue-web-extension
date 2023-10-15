// Put all the javascript code here, that you want to execute after page load.
// parse all urls in the page and check if they end in .nii.gz
var links = document.getElementsByTagName('a');
for (var i = 0; i < links.length; i++) {
    var link = links[i];
    if (link.href.endsWith('.nii.gz')) {
        link.style.color = 'red';
    }
}