interface Movie {
  title: string;
  description: string;
  rating: number;
  cast: string[];
}

(() => {
  function getMovieById(id: string) {
    console.log({ id });
  }

  function getActors(movieId: string) {
    console.log({ movieId });
  }

  //   function getCastById(id: string) {
  //     console.log({ movieId });
  //   }

  // funcion para obtener el bio del actor por el id
  function getActorBioById(id: string) {
    console.log({ id });
  }

  function createMovie({ title, description, rating, cast }: Movie) {
    console.log({ title, description, rating, cast });
  }

  function checkUserName(fullName: string) {
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (fullName === 'fernando') return false;

    return true;
  }

  function createActor(fullName: string, birthdate: Date): boolean {
    checkUserName(fullName);

    console.log('Crear actor');
    return true;
  }

  // continuar

  const getPayAmount = ({
    isDead = false,
    isSeparated = true,
    isRetired = false,
  }): number => {
    // let result;
    // if ( isDead ) {
    //     result = 1500;
    // } else {
    //     if ( isSeparated ) {
    //         result = 2500;
    //     } else {
    //         if ( isRetired ) {
    //             result = 3000;
    //         } else {
    //             result = 4000;
    //         }
    //     }
    // }

    // return result;
    if (isDead) return 1500;
    if (isSeparated) return 2500;
    if (isRetired) return 3000;

    return 4000;
  };
})();
