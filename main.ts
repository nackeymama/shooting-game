sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 100)
    sprite.destroy()
    info.changeScoreBy(1)
    music.playMelody("A G F - - - - - ", 500)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bullet = sprites.createProjectileFromSprite(img`
. . . . . . 
. . 3 3 . . 
. . 3 3 . . 
. . 3 3 . . 
. . 3 3 . . 
. . . . . . 
`, spacePlane, 0, -200)
    music.pewPew.play()
    bullet.setFlag(SpriteFlag.AutoDestroy, true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.say("><", 500)
    music.jumpDown.play()
})
let teki: Sprite = null
let bullet: Sprite = null
let spacePlane: Sprite = null
spacePlane = sprites.create(img`
. . . . . . . c d . . . . . . . 
. . . . . . . c d . . . . . . . 
. . . . . . . c d . . . . . . . 
. . . . . . . c b . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . c 4 . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . e 4 . . . . . . . 
. . . . . . e e 5 2 . . . . . . 
. . . . . . e 4 5 2 . . . . . . 
. . . . . c c c 2 2 2 . . . . . 
. . . . e e 4 4 4 5 2 2 . . . . 
. . e f f f c c 2 2 f f 2 2 . . 
. e e e e 2 2 4 4 4 4 5 4 2 2 . 
e e e e e e 2 2 4 4 4 5 4 4 2 2 
e e e e e e 2 2 4 4 4 4 5 4 2 2 
`, SpriteKind.Player)
spacePlane.setFlag(SpriteFlag.StayInScreen, true)
controller.moveSprite(spacePlane, 100, 0)
spacePlane.setPosition(81, 110)
info.setScore(0)
game.onUpdateInterval(500, function () {
    teki = sprites.create(img`
. . f f f . . . . . . . . . . . 
f f f c c . . . . . . . . f f f 
f f c c c . c c . . . f c b b c 
f f c 3 c c 3 c c f f b b b c . 
f f c 3 b c 3 b c f b b c c c . 
f c b b b b b b c f b c b c c . 
c c 1 b b b 1 b c b b c b b c . 
c b b b b b b b b b c c c b c . 
c b 1 f f 1 c b b c c c c c . . 
c f 1 f f 1 f b b b b f c . . . 
f f f f f f f b b b b f c . . . 
f f 2 2 2 2 f b b b b f c c . . 
. f 2 2 2 2 2 b b b c f . . . . 
. . f 2 2 2 b b b c f . . . . . 
. . . f f f f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    teki.setVelocity(0, 50)
    teki.setPosition(Math.randomRange(8, 152), 0)
    teki.setFlag(SpriteFlag.AutoDestroy, true)
})
