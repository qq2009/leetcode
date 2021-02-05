//
function myAtoi(s: string): number {
  const result = parseInt(s);
  if(isNaN(result)){
    return 0
  } else {

    if(result.toString().toLowerCase() === '-'){
      if(result > Math.pow(-2,31)){
        return result
      }
    }

    if(result < Math.pow(-2,31)){
      return Math.pow(-2,31)
    }

    if(result > (Math.pow(2,31) - 1)) {
      return Math.pow(2,31) - 1
    }
    return result
  }
}
