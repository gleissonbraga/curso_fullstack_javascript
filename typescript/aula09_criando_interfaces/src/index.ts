

interface CelestialBody {
    name: string
    mass: number
}

interface Star extends CelestialBody {
    age: number
    planets: Planet[]
}

interface Planet extends CelestialBody {
    population: number
    createSatellite: (name: string) => void
}

let sun: Star

sun.name = "Sol"
sun.mass = 1.989 * (10 ** 30)
sun.age = 4.603 * (10 ** 9)
sun.planets = []

class MilkWayPlanet implements Planet {
    name: string
    mass: number
    population: number

    constructor(name, mass, population){
        this.name = name
        this.mass = mass
        this.population = population
    }

    createSatellite: (name: string) => void
}