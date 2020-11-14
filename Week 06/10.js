class Human {
    constructor(damages) {
        this.damages = []
        if (damages) {
            this.damages.push(damages);
        }
        if (this.damages && this.damages.length) {
            this.isInjured = true;;
        }
    }
    hurt(damage) {
        if (damage) {
            this.isInjured = true;
            this.damages.push(damage);
        }
        console.log(JSON.stringify(this.damages));
        return this.damages || [];
    }
}

const p = new Human()
p.hurt({
    what: 'bited by dog',
    when: "now",
    how: "sad"
})
p.hurt({
    what: 'bited by dog again',
    when: "now",
    how: "sad"
})
console.log(p);