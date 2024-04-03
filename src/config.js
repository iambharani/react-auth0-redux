const isProduction = process.env.NODE_ENV === 'production';
console.log(isProduction);
const config = {
  homeUrl: isProduction
    ? 'https://autho-react-redux.bharani.online/'
    : 'http://localhost:3000',
};

export default config;


