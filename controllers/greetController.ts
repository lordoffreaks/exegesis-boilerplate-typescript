/**
 * Here a simple function is exported.
 *
 * If you wanted a class with its own state and functions you will need something like:
 *
 * class GreetController {
 *
 * }
 * export default GreetController;
 */

import { ExegesisContext } from 'exegesis'

//Export the getGreeting function to be used by the API.
//All controllers will be imported meaning this exported function will be put into scope.
export const getGreeting = (context: ExegesisContext) => {
  const name = context.params.query.name
  return { message: `Hello ${name}`, id: 23 }
}
