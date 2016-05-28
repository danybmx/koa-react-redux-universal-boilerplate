import React from 'react';

import Error from '../components/Error';

const Error401 = () => (
  <Error code={401} reason="Must be logged in" />
);

export default Error401;
