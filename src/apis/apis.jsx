import axios from "axios";

const appId = import.meta.env.REACT_APP_APP_KEY;
const apiKey = import.meta.env.REACT_APP_API_KEY;
  
const tflRequest = axios(
    {
        url: 'https://api.tfl.gov.uk/Line/Mode/tube/Status',
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'app_id': appId,
          'app_key': apiKey
        }
    }
);

export default tflRequest;
  