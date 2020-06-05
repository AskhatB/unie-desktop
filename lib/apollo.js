import { withData } from 'next-apollo';
import { HttpLink } from 'apollo-link-http';

const config = {
  link: new HttpLink({
    uri: 'https://apig.2step.me/v1', // Server URL (must be absolute) https://dev-apig.2step.me/v1
    opts: {
      credentials: 'same-origin' // Additional fetch() options like `credentials` or `headers`
    }
  }),
}

export default withData(config);