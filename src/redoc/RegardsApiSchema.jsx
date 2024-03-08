// import ApiSchema from '@theme/ApiSchema';
// Rewrite of ApiSchema

import React, { useEffect } from 'react';
import clsx from 'clsx';
import { ThemeProvider } from 'styled-components';
import './schema/global';
import { SchemaDefinition } from 'redoc';
import { useSpec } from './schema/useSpec';
import useSpecData from '@theme/useSpecData';
// load style from official component

const RegardsApiSchema = ({ id, showExample, pointer, spec, ...rest }) => {
  const { store } = useSpec({ spec });
  useEffect(() => {
    /**
     * @see https://github.com/Redocly/redoc/blob/823be24b313c3a2445df7e0801a0cc79c20bacd1/src/services/MenuStore.ts#L273-L276
     */
    store.menu.dispose();
  }, [store]);
  return (<ThemeProvider theme={store.options.theme}>
    <div className={clsx([
      'redocusaurus',
      'redocusaurus-schema',
      showExample ? null : 'hide-example',
    ])}>
      <SchemaDefinition parser={store.spec.parser} options={store.options} schemaRef={pointer} showExample={showExample} {...rest} />
    </div>
  </ThemeProvider>);
};
RegardsApiSchema.defaultProps = {
  showExample: false,
};
export default RegardsApiSchema;
