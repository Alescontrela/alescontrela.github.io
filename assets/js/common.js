$(document).ready(function() {
    $('a.abstract').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
    });
    $('a.bibtex').click(function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    });
    $('.navbar-nav').find('a').removeClass('waves-effect waves-light');
});

const headings = document.querySelectorAll('h2[id],h3[id]'); // 1
const linkContent = '🔗'; // 2
for (const heading of headings) { // 3
    const linkIcon = document.createElement('a'); // 4
    linkIcon.setAttribute('href', `#${heading.id}`); // 5
    linkIcon.innerHTML = linkContent; // 6
    const linkSpace = document.createElement('p');
    linkSpace.style.display = 'inline';
    linkSpace.innerText = ' ';
    heading.appendChild(linkSpace);
    heading.appendChild(linkIcon); // 7
}

const url = '/assets/pdf/aescontrela_cv.pdf'; // Replace with your PDF path

const pdfjsLib = window['pdfjs-dist/build/pdf'];
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

const viewer = document.getElementById('pdf-viewer');

async function renderPDF(url) {
    // Load the PDF document
    const pdf = await pdfjsLib.getDocument(url).promise;

    // Get device pixel ratio
    const devicePixelRatio = window.devicePixelRatio || 1;

    // Iterate through all pages
    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
        const page = await pdf.getPage(pageNum);

        // Create a canvas for each page
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        viewer.appendChild(canvas);

        // Calculate scale to fit container width
        const viewport = page.getViewport({ scale: 1.03 });
        const scale = (viewer.clientWidth / viewport.width) * devicePixelRatio; // Scale for container width and DPI
        const scaledViewport = page.getViewport({ scale: scale });

        // Set the canvas size to match the scaled page
        canvas.width = scaledViewport.width;
        canvas.height = scaledViewport.height;

        // Render the page with the scaled resolution
        const renderContext = {
            canvasContext: context,
            viewport: scaledViewport,
        };

        await page.render(renderContext).promise;
    }
}



// Render the PDF
renderPDF(url);

document.addEventListener('DOMContentLoaded', function() {

    const video = document.getElementById('sf-downtown-timelapse');
    const videoSrc = "https://viperrl.com/sf_timelapse_stream/sf_downtown_timelapse_watermarked_16by9_1080p.m3u8";

    if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(videoSrc);
        hls.attachMedia(video);
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        // Fallback for Safari and other browsers with native HLS support
        video.src = videoSrc;
    } else {
        console.error('HLS is not supported in this browser.');
    }
});

document.addEventListener('DOMContentLoaded', function() {

    const video = document.getElementById('tsuchinshan-atlas');
    const videoSrc = "https://viperrl.com/tsuchinshan_atlas_stream/tsuchinshan_atlas_timelapse_1080p.m3u8";

    if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(videoSrc);
        hls.attachMedia(video);
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        // Fallback for Safari and other browsers with native HLS support
        video.src = videoSrc;
    } else {
        console.error('HLS is not supported in this browser.');
    }
});

document.addEventListener('DOMContentLoaded', function() {

    const video = document.getElementById('milky-way-point-arena');
    const videoSrc = "https://viperrl.com/gualala_milky_way_stream/gualala_milky_way_1080p.m3u8";

    if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(videoSrc);
        hls.attachMedia(video);
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        // Fallback for Safari and other browsers with native HLS support
        video.src = videoSrc;
    } else {
        console.error('HLS is not supported in this browser.');
    }
});
