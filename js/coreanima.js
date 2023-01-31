let animation = bodymovin.loadAnimation({
    container: document.getElementById('shape-moves'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'json/idea.json'
})