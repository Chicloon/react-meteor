import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import ResolutionsForm from './ResolutionsForm.jsx';
import ResolutionSingle from './ResolutionSingle.jsx';

Resolutions = new Mongo.Collection ("resolutions");

export default class ResolutionsWrapper extends TrackerReact(React.Component) {

  resolutions() {
    return Resolutions.find().fetch();
  }

  render() {
    let res = this.resolutions();
    console.log(res);

    if(res.length < 1) {
      return (<div>Loading</div>)
    }
    console.log(res);

    return (
      <div>
        <h1> My resolusions </h1>
        <ResolutionsForm />
        <ul>
          <ResolutionSingle resolution={res[0]} />
        </ul>
      </div>
    );
  }
}