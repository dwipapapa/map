// Add your code here
namespace map {
    
    //% block
    //% img.shadow=screen_image_picker
    export function createmap(img:Image) {
        const map = sprites.create(img, SpriteKind.Food)
        map.bottom = 115
        map.left = 5
        map.z = 10
    }
    //% block
    //% img.shadow=screen_image_picker
    export function updatemap(m:Sprite, img:Image) {
        m.bottom = 110
        m.left = 10
        m.setImage(img)
    }
}