import withLayout from './withLayout';
import withCache from './withCache';

const compose = (...fns) =>
  fns.reverse().reduce((prevFn, nextFn) =>
    value => nextFn(prevFn(value)),
    value => value
  );

export default compose(
    withCache,
    withLayout
);
