import { uploadPhoto, createUser} from './utils';
export default function handleProfileSignup() {
  /*Promise .all takes iterable of promisses as 
  input and returns a single promise*/
  return Promise.all([uploadPhoto(), createUser()])
  .then((values) => {
    console.log(`${values[0].body} ${values[1].firstName} ${values[1].lastName}`);
  });
}
