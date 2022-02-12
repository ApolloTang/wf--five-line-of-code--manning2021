

Listing 2.4  (1a-chicken-inheritance.ts)

```typescript
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

```



Listing 2.5 (1b-chicken-composition.ts)

```typescript
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
```



Listing 2.4 with Panguin  (2a-penguin-inheritance.ts)

```typescript
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
```



Listing 2.5 with Panguin  (2b-penguin-composition.ts)

```typescript
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
    // canSwim = () => true   // <-- we forgot this
  }

  const penguin = new Penguin_composition()

  if (penguin.canSwim()) {
           // `````````
           // TYPE ERROR
           // cannot call canSwim() on penguin
    console.log('this penguin can swim')
  } else {
    console.log('BUG: this penguin cannot swim')
  }
```

