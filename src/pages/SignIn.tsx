import { Authenticator } from '@aws-amplify/ui-react';

const SignIn = () => (
  <Authenticator>
    {({ signOut }) => <button onClick={signOut}>Sign out</button>}
  </Authenticator>
);

export default SignIn;
