import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  let body;
  let firstName;
  let lastName;

  return Promise
    .all([uploadPhoto(), createUser()])
    .then((res) => {
      body = res[0].body;
      firstName = res[1].firstName;
      lastName = res[1].lastName;
      console.log(`${body} ${firstName} ${lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
