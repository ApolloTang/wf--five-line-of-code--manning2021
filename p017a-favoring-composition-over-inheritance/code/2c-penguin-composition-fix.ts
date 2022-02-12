namespace penguin_composition {

  interface Bird {
    hasBeak(): boolean;
    canFly(): boolean;
  }

  class CommonBird implements Bird {
    hasBeak = () => true
    canFly = () => true
    canSwim = () => false // <-- add this to take into
                          //     account some bird can't swim
  }

  // In above, CommonBird has taken care of bird that can't swim
  // We can go ahead to create Panguin class; however,
  // we forgot to overide canSwim() to return true
  // for Panguin

  class Penguin_composition implements Bird {
    private bird = new CommonBird()
    hasBeak = () => this.bird.hasBeak()
    canFly = () => false
    canSwim = () => true
  }

  const penguin = new Penguin_composition()

  if (penguin.canSwim()) {
    console.log('this penguin can swim')
  } else {
    console.log('BUG: this penguin cannot swim')
  }
}
