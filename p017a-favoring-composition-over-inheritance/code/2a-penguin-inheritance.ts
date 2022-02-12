namespace penguin_inheritance {

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

  class Penguin_inheritance extends CommonBird {
    canFly = () => false
    // canSwim = () => true   // <-- we forgot this
  }

  const penguin = new Penguin_inheritance()

  if (penguin.canSwim()) { // <--- false
    console.log('this penguin can swim')
  } else {
    // !!! no type error but there is a bug
    console.log('BUG: this penguin cannot swim')
  }
}
