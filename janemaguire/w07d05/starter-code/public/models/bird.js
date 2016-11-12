angular.module('birdsApp')
  .factory('Bird', Bird);

Bird.$inject = ['$resource'];
function Bird($resource) {
  return new $resource('/birds/:id', { id: '@_id' }, {
    update: { method: 'PUT' }
  });
}
