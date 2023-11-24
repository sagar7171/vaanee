import axios from 'axios';
export default axios.create({
	baseURL: `${process.env.NEXT_PUBLIC_REACT_APP_CREATE_PROJECT}`,
});
