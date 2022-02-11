import { connect } from 'mongoose';

export default connect('mongodb://localhost:27017/users', (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log('database connected');
  }
});
