export { default as Dashboard } from './Dashboard'
export { default as Home } from './Home'
export { default as Feed } from './Feed'
export { default as Create } from '/Create'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.render(
    <GoogleOAuthProvider clientId="709088627736-12g1a9mvoa425l6nsqnqk7el7os9ii1b.apps.googleusercontent.com"> 
      <App />
    </GoogleOAuthProvider>,
    document.getElementById('root')
  );