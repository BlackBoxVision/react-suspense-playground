import React from 'react';
import { createResource as createFetcher } from 'simple-cache-provider';

import withCache from '../../hocs/withCache';

const getNewsByIdComponent = createFetcher(() =>
    import(/* webpackChunkName: nws */ "./NewsById").then(module => module.default)
);

const NewsByIdLoader = withCache(props => {
    const NewsById = getNewsByIdComponent(props.cache);
    return <NewsById {...props} />;
});

export default NewsByIdLoader;