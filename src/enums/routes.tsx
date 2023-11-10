export enum AppRoutes {
  main = '/',
  signIn = '/login',
  myList = '/mylist',
  film = '/films/:id/:info',
  addReview = '/films/:id/review',
  player = '/player/:id',
  genre = ':genre',
  notFound = '*'
}

export enum FilmsRoutes {
  overview = 'overview',
  details = 'details',
  reviews = 'reviews'
}
