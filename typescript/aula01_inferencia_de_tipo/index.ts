const spaceeship = {
    name: 'X-Wing',
    speed: 0
}

function acceelerate(spaceship: { name: string; speed: number }, speed: number) {
    spaceship.speed = speed
}

// accelerate(spaceeship, 50)