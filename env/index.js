const { env } = process;
const envVars = require(`./${process.env.NODE_ENV || 'development'}.js`);
export default {
  ...env,
  ...envVars
}