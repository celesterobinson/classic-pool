let sprites = {};
let assetsStillLoading = 0;

function loadAssets(callback){
    function loadSprite(fileName){
        assetsStillLoading++;

        let spriteImage = new Image();
        spriteImage.src = "./assets/sprits/" + fileName;

        spriteImage.onLoad = function() {
            assetsStillLoading--;
        }

        return spriteImage; 
    }
    sprites.background = loadSprite('spr_background4.png');
}