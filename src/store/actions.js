import axios from 'axios';

export default {
  fetchProductList() {
    return axios.get('https://test-case-eeca77cfvq-ue.a.run.app/');
  },
};
