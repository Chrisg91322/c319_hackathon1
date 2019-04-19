class Frogs{
    constructor(){
        this.frogArray = [{
            
            'frog': 'brown',
            'img': "c319_hackathon1/images/brown_frog1.png"
        }, {
            
            'frog': 'red',
            'img': "images/red_frog.jpg"
        }, {
           
            'frog': 'yellow',
            'img': "images/yellow_frog.jpg"
        }, {
           
            'frog': 'blue',
            'img': "c319_hackathon1/images/blue_frog1.png"
        }];

        var gameTile = frogArray.concat(frogArray).sort(function (){
            return 0.5 - Math.random();
        })
        
        this.domElement = null;

        var tile = document.createElement('section');
        tile.setAttribute('class', 'tile');
        game.appendChild(tile);
        
        gameTile.forEach(function (item) {
          var name = item.name,
              img = item.img;
    })

}}
var totalFrogs = 24;