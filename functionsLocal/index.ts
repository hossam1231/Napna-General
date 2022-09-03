export function capitalizeFirstLetter(string: string) {
  string = String(string)
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const streamlineError = (error: string, type: string) => {
  // Firebase: Error (auth/email-already-in-use).

  let deleteArray: any[] = []

  if (type == 'firebase') {
    deleteArray = [
      'Firebase',
      '(',
      ')',
      'auth',
      '/',
      'Error',
      ':',
      '.'
    ]
  }

  error = error.replace(/-/g, ' ')
  // replace - globally
  for (let index = 0; index < deleteArray.length; index++) {
    // errString = error.replace(deleteArray[index], '');
    error = error.replace(deleteArray[index], '')
  }
  error = capitalizeFirstLetter(error)
  return error
}




