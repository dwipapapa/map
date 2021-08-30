namespace map {
    
    //% block
    //% img.shadow=screen_image_picker
    export function createmap(img:Image) {
        let map = sprites.create(img, SpriteKind.Food)
        map.bottom = 115
        map.left = 5
        map.z = 10
        return map
    }
    //% block
    //% img.shadow=screen_image_picker
    export function updatemap(s:Sprite, img: Image) {
        s.bottom = 115
        s.left = 5
        s.setImage(img)
    }
}