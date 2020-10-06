export default {
  API_KEY: process.env.REACT_APP_API_KEY,
  API_ENDPOINT:
    process.env.REACT_APP_API_ENDPOINT ||
    "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses",
  CONTACT_API_ENDPOINT:
    "https://cors-anywhere.herokuapp.com/https://44aezfcyxk.execute-api.us-west-2.amazonaws.com/prod/email/send",
};
