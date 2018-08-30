import * as firebase from 'firebase';

let config = {
	apiKey: "AIzaSyA9UflaxEJKyX0cSNys4IUjlPGaH9AryQ8",
	authDomain: "igneous-equinox-526.firebaseapp.com",
	databaseURL: "https://igneous-equinox-526.firebaseio.com",
	projectId: "igneous-equinox-526",
	storageBucket: "igneous-equinox-526.appspot.com",
	messagingSenderId: "397083265288"
};

let appSet = !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
let db = appSet.database();

// create a database references
const Employers = db.ref('employer/');
//-const pagesRef = db.ref('pages');
//-const postsRef = db.ref('posts');
//-const usersRef = db.ref('users');
//-const mediaRef = db.ref('media');

export { Employers };
