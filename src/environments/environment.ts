// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  // resovendo problema e versionamento no angularfire...
  // https://stackoverflow.com/questions/47949311/cannot-find-module-firebase-app-types-private-firebase-throws-error/47949323#47949323
  firebaseConfig: {
    apiKey: 'AIzaSyBO0bBltFKt4R8enEkLkj-x1G7xfjzBaZU',
    authDomain: 'matheusr-101.firebaseapp.com',
    databaseURL: 'https://matheusr-101.firebaseio.com',
    projectId: 'matheusr-101',
    storageBucket: 'matheusr-101.appspot.com',
    messagingSenderId: '535072267596',
    languageCode: 'pt-BR'
  }
};
