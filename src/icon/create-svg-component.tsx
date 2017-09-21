import * as React from 'react';

export default svgString => () => (
    <span dangerouslySetInnerHTML={{ __html: svgString }} />
);

