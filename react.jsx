Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {
  // This code is executed on the client only
  Meteor.subscribe("tasks");

  Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
  });

  Meteor.startup(function() {
    // Use Meteor.startup to render the component after the page is ready
    React.render(<App /> ,
     document.getElementById("render-target"));
  });
}

if (Meteor.isServer) {
  Meteor.startup(function() {
    Meteor.publish("tasks", function(){
      return Tasks.find({
        $or: [
          {private: {$ne: true}},
          {owner: this.userId}
        ]
      });
    });
    // code to run on server at startup
  });
}

Meteor.methods({
  addTask(text) {
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-autorized");
    }
    Tasks.insert({
      text: text,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username
    });
  },

  removeTask(taskId){
    const task = Tasks.findOne(taskId);
    if(task.private && task.owner !== Meteor.userId()) {
      throw new Meteor.Error("not-autorized");
    }
    Tasks.remove(taskId);
  },

  setChecked(taskId, setChecked) {
    const task = Tasks.findOne(taskId);
    if(task.private && task.owner !== Meteor.userId()) {
      throw new Meteor.Error("not-autorized");
    }
    Tasks.update(taskId, { $set: { checked: setChecked} });
  },

  setPrivate(taskId, setToPrivate){
    const task = Tasks.findOne(taskId);

    if(task.owner !== Meteor.userId()){
      throw new Meteor.Error("not-autorized");
    }
    Tasks.update(taskId, {$set: { private: setToPrivate}});
  }
});
