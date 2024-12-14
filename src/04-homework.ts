(() => {
  type AllowedColors = 'red' | 'yellow' | 'purple';
  type FruitsByColor = {
    [key in AllowedColors]: {
      fruits: string[];
      color: string;
    };
  };

  const RED_FRUITS: string[] = ['manzana', 'cereza', 'ciruela'];
  const FRUITS_BY_COLOR: FruitsByColor = {
    red: { fruits: ['manzana', 'fresa'], color: 'red' },
    yellow: { fruits: ['piña', 'banana'], color: 'yellow' },
    purple: { fruits: ['moras', 'uvas'], color: 'purple' },
  };

  function isRedFruit(fruit: string): boolean {
    return RED_FRUITS.includes(fruit);
  }


  function getFruitsByColor(userColor: AllowedColors): string[] {
    const selectedColor = FRUITS_BY_COLOR[userColor]?.color;
    const selectedFruits = FRUITS_BY_COLOR[userColor]?.fruits;

    if (!selectedColor) throw Error('The color must be: red, yellow or purple');

    return selectedFruits;
  }

  // Simplificar esta función
  let isFirstStepWorking = true;
  let isSecondStepWorking = true;
  let isThirdStepWorking = true;
  let isFourthStepWorking = true;

  function workingSteps() {

    if(!isFirstStepWorking) return 'First Step broken.';
    if(!isSecondStepWorking) return 'Second step broken.';
    if(!isThirdStepWorking) return 'Third Step broken.';
    if(!isFourthStepWorking) return 'Fourth Step broken';

    return 'Working properly!';

  }

  // isRedFruit
  console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
  console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

  //getFruitsByColor
  console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
  console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
  console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
//   console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

  // workingSteps
  console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados
})();
