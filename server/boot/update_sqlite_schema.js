module.exports = function(app) {
  const ds = app.dataSources.db;
  debugger;

  if(ds.connected) {
    ds.autoupdate();
  } else {
    ds.once('connected', function() {
      ds.isActual(function(err, actual) {
        if (!actual) {
          ds.autoupdate();
        }
      });
    });
  }
};
