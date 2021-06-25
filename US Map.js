class USMap {
    constructor() {
        this.image = loadImage("empty map.jpg")
        this.input = createInput("Enter")
        this.person1 = loadImage("person1")
        this.timer=20
        
    }

    display() {

        push()
        image(this.image, 0, 0, windowWidth,windowHeight)
        pop()

        if(frameCount%30 === 0) {
            this.timer=this.timer-1

        }

        if(this.timer < 1) {
            this.timer=20
        }
        textSize(20)
        text(this.timer + "s",1320,40)

        



    }

}