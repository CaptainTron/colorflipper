const changecolor = document.getElementById('changecolor')
const colortext = document.getElementById('colorcode')

changecolor.addEventListener('click',function(){
    let color = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    let hexcolor = '#'
    for(let x =0;x<6;x++){
        hexcolor+=color[Math.floor(Math.random() * color.length) ]
    }
    document.body.style.backgroundColor= hexcolor
    colortext.innerHTML= hexcolor
    colortext.style.color = hexcolor
})