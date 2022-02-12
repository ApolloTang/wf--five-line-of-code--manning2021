namespace chicken_inheritance {

  interface Bird {
    hasBeak(): boolean;
    canFly(): boolean;
  }

  class CommonBird implements Bird {
    hasBeak = () => true
    canFly = () => true
  }

  class Chicken_inheritance extends CommonBird {
    canFly = () => false // override to make it a chiken
  }

  const chicken = new Chicken_inheritance()

  if (chicken.canFly()) {
    console.log('Error: this chicken can fly')
  } else {
    console.log('chicken cannot fly')
  }

}
