import { Config } from '@stencil/core';
import { reactOutputTarget as react } from '@stencil/react-output-target';

export const config: Config = {
  taskQueue: 'async',
  namespace: 'ui-library',
  outputTargets: [
    react({
      componentCorePackage: 'ui-library',
      proxiesFile: '../ui-library-react/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      copy: [
        {
          src: '**/*.{png,jpeg,jpg,svg}',
          dest: 'dist/assets/images',
          warn: true,
        },
      ],
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      // prerenderConfig: './prerender.config.ts',
      // baseUrl: 'https://github.com/AliceMenzie/stenciljs-fm-rating-component',
    },
  ],
};
