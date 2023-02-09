input.onButtonPressed(Button.A, function () {
    serpiente[2].turn(Direction.Left, 90)
})
input.onButtonPressed(Button.B, function () {
    serpiente[2].turn(Direction.Right, 90)
})
let siguiente: game.LedSprite = null
let serpiente: game.LedSprite[] = []
serpiente = [game.createSprite(0, 2), game.createSprite(1, 2), game.createSprite(2, 2)]
let comida = game.createSprite(randint(0, 4), randint(0, 4))
let pausa = 1000
let paso = 75
let minPausa = 250
game.setScore(0)
basic.forever(function () {
    for (let index = 0; index <= 2; index++) {
        serpiente[index].move(1)
    }
    if (serpiente[2].isTouching(comida)) {
        game.addScore(1)
        comida.delete()
        comida = game.createSprite(randint(0, 4), randint(0, 4))
        if (pausa > minPausa) {
            pausa = pausa - paso
        }
    }
    if (serpiente[2].isTouching(serpiente[1])) {
        basic.showNumber(game.score())
        game.gameOver()
    }
    for (let index = 0; index <= 1; index++) {
        siguiente = serpiente[index + 1]
        serpiente[index].set(LedSpriteProperty.Direction, siguiente.get(LedSpriteProperty.Direction))
    }
    basic.pause(pausa)
})
