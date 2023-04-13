export function menu(path: string) {
  switch (path) {
    case '/':
      return 'On the main page, try clicking on the logo';
    case '/about':
      return 'About page';
    case '/forms':
      return 'New cats are born on the form page';
    default:
      return 'The page 404 is very sad';
  }
}
