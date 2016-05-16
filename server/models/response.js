module.exports = function(Response) {
  Response.beforeRemote(`create`, (context, user, callback) => {
    // Get the request from the server context
    const request = context.req;

    // Get current user id
    const userId = request.accessToken.userId;

    request.body.data.relationships = request.body.data.relationships || {};
    request.body.data.relationships['end-user'] = request.body.data.relationships['end-user'] || {};

    // Set relationship data for user
    request.body.data.relationships['end-user'].data = {
      id: userId,
    };

    // Continue creating the recipe
    callback();
  });
};
