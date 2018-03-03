import React from 'react';
import { createResource as createFetcher } from 'simple-cache-provider';

import withCache from '../../hocs/withCache';

const getNewsComponent = createFetcher(() =>
    import(/* webpackChunkName: nws */ "./News").then(module => module.default)
);

const NewsLoader = withCache(props => {
    const News = getNewsComponent(props.cache);
    return <News {...props} />;
});

export default NewsLoader;