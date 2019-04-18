class Frogs{
    constructor(){
        this.frogArray = [{
            
            'frog': 'brown',
            'img': "images/brown_frog.jpg"
        }, {
            
            'frog': 'red',
            'img': "images/red_frog.jpg"
        }, {
           
            'frog': 'yellow',
            'img': "images/yellow_frog.jpg"
        }, {
           
            'frog': 'blue',
            'img': "images/blue_frog.jpg"
        }];

        var gameTile = frogArray.concat(frogArray).sort(function (){
            return 0.5 - Math.random();
        })
        var totalFrogs = 24;
        this.domElement = null;

        var tile = document.createElement('section');
        tile.setAttribute('class', 'tile');
        game.appendChild(tile);
        
        gameTile.forEach(function (item) {
          var name = item.name,
              img = item.img;
    })

}}
