class autoCompleteTree {
    constructor(val) {
        this.value = val
        this.children = {}
        this.endOfWord = false

    }
    addWord(word){
        this._addWord(word.toLowerCase())
    }
    _addWord(word) {
        if (word[0]) {
            if (this.children[word[0]]) {
                return this.children[word[0]].addWord(word.slice(1))
            } else {
                this.children[word[0]] = new autoCompleteTree(word[0])
                return this.children[word[0]].addWord(word.slice(1))
            }
        } else {
            return this.endOfWord = true
        }
    }
    findWord(word) {
        if (word[0]) {
            if (this.children[word[0]]) {
                return this.children[word[0]].findWord(word.slice(1))
            } else {
                return false
            }
        } else {
            return true
        }
    }
    nodeFind(wor) {
        if (wor[1]) {
            return this.children[wor[0]].nodeFind(wor.slice(1))
        } else {
            return this.children[wor[0]]
        }
    }
    wordsFind(wor, allWords = []) {
        if (this.endOfWord) {
            allWords.push(wor)
        }
        for (let child in this.children) {
            this.children[child].wordsFind(wor + child, allWords)
        }
        return allWords
    }
    predictWord(wor) {
        let param = this.nodeFind(wor)
        if(param){
            let allWords = param.wordsFind(wor)
            return allWords
        } else{
            return 
        }
    }
}
let words = `Adult
Aeroplane
Air
Aircraft Carrier
Airforce
Airport
Album
Alphabet
Apple
Arm
Army
Baby
Baby
Backpack
Balloon
Banana
Bank
Barbecue
Bathroom
Bathtub
Bed
Bed
Bee
Bible
Bible
Bird
Bomb
Book
Boss
Bottle
Bowl
Box
Boy
Brain
Bridge
Butterfly
Button
Cappuccino
Car
Car-race
Carpet
Carrot
Cave
Chair
Chess Board
Chief
Child
Chisel
Chocolates
Church
Church
Circle
Circus
Circus
Clock
Clown
Coffee
Coffee-shop
Comet
Compact Disc
Compass
Computer
Crystal
Cup
Cycle
Data Base
Desk
Diamond
Dress
Drill
Drink
Drum
Dung
Ears
Earth
Egg
Electricity
Elephant
Eraser
Explosive
Eyes
Family
Fan
Feather
Festival
Film
Finger
Fire
Floodlight
Flower
Foot
Fork
Freeway
Fruit
Fungus
Game
Garden
Gas
Gate
Gemstone
Girl
Gloves
God
Grapes
Guitar
Hammer
Hat
Hieroglyph
Highway
Horoscope
Horse
Hose
Ice
Ice-cream
Insect
Jet fighter
Junk
Kaleidoscope
Kitchen
Knife
Leather jacket
Leg
Library
Liquid
Magnet
Man
Map
Maze
Meat
Meteor
Microscope
Milk
Milkshake
Mist
Money $$$$
Monster
Mosquito
Mouth
Nail
Navy
Necklace
Needle
Onion
PaintBrush
Pants
Parachute
Passport
Pebble
Pendulum
Pepper
Perfume
Pillow
Plane
Planet
Pocket
Post-office
Potato
Printer
Prison
Pyramid
Radar
Rainbow
Record
Restaurant
Rifle
Ring
Robot
Rock
Rocket
Roof
Room
Rope
Saddle
Salt
Sandpaper
Sandwich
Satellite
School
Sex
Ship
Shoes
Shop
Shower
Signature
Skeleton
Slave
Snail
Software
Solid
Space Shuttle
Spectrum
Sphere
Spice
Spiral
Spoon
Sports-car
Spot Light
Square
Staircase
Star
Stomach
Sun
Sunglasses
Surveyor
Swimming Pool
Sword
Table
Tapestry
Teeth
Telescope
Television
Tennis racquet
Thermometer
Tiger
Toilet
Tongue
Torch
Torpedo
Train
Treadmill
Triangle
Tunnel
Typewriter
Umbrella
Vacuum
Vampire
Videotape
Vulture
Water
Weapon
Web
Wheelchair
Window
Woman
Worm
X-ray`
let tree = new autoCompleteTree(`root`)
words.split(`\n`).forEach(word=>tree.addWord(word))
