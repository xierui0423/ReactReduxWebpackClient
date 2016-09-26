/**
 * Created by ray.xie on 9/26/2016.
 */

export default store => next => (action) => {
  console.log('in middleware', action);

  return next(action);
};
