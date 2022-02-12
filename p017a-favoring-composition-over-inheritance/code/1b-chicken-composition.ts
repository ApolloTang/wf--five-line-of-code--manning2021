namespace chicken_inheritance {

  interface Bird {
    hasBeak(): boolean;
    canFly(): boolean;
  }

  class CommonBird implements Bird {
    hasBeak = () => true
    canFly = () => true
  }

  class Chicken_composition implements Bird {
    private bird = new CommonBird()
    hasBeak = () => this.bird.hasBeak()
    canFly = () => false // override to make it a chiken
  }

  const chicken = new Chicken_composition()

  if (chicken.canFly()) {
    console.log('BUG: this chicken can fly')
  } else {
    console.log('chicken cannot fly')
  }
}
