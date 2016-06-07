import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './Layouts/MainLayout.jsx';
import ResolutionsWrapper from './Resolutions/ResolutionsWrapper.jsx';
import About from './About.jsx';
import ResolutionDetail from './Resolutions/ResolutionDetail.jsx';

console.log('working');
FlowRouter.route('/', {
  action() {
    mount(MainLayout, {
      content: (<ResolutionsWrapper />)
    });
  }
});

FlowRouter.route('/about', {
  action() {
    mount(MainLayout, {
      content: (<About />)
    });
  }
});

FlowRouter.route('/resolutions/:id', {
  action(params) {
    mount(MainLayout, {
      content: (<ResolutionDetail id={params.id} />)
    });
  }
});
