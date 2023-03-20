const sdk = require('api')('df71f4e0-bcea-11ed-b6d6-b793d956f74f');

sdk.auth('Bearer 78e2e885bd17ae4d59c848983df346c3511ff647');
sdk.createAVirtualAccount({
  name: 'string',
  primary_contact: 'string',
  contact_type: 'Customer',
  email_id: 'string',
  mobile_number: 'string'
})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));