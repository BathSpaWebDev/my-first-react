export default function Link({url, linkText}){
    return (
        <a
          className="App-link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkText}
        </a>
    );
}

// export default Link;

/* Create a UserProfile component

This will consist of:
- a user inmage
- a biography (short bit of text)
- 3 social meida links

import the User profile compoent into App.js

If you can't use create-react-app, use the sandbox on the react docs - you can click 'fork' :
https://beta.reactjs.org/learn/your-first-component


*/