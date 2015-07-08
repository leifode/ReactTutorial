import React from 'react';
import Router from 'react-router';
import routes from './config/routes';

Router.run(routes, (Root, State) => {
  React.render(<Root {...State} />, document.getElementById('app'));
});
