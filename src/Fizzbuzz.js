const fizzbuzz = (number) => {
    if (number === 0) {
        return '0';
    }
    if (number % 15 === 0) {
      return('fizzbuzz')
    }
    else if (number % 3 === 0) {
      return('fizz')
    }
    else if (number % 5 === 0) {
      return('buzz')
    }
    else{
      return( number)
    }
  }

export default fizzbuzz;