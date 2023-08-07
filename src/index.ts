import type * as postcss from 'postcss';

const postCssInverseLogicalProperties: postcss.PluginCreator<undefined> = () => ({
  postcssPlugin: 'postcss-inverse-logical-properties',
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Declaration(decl): void {
    if (decl.prop === 'left') {
      decl.replaceWith(decl.clone({ prop: 'inset-inline-start' }));
    }

    if (decl.prop === 'right') {
      decl.replaceWith(decl.clone({ prop: 'inset-inline-end' }));
    }
  },
  postcss: true,
});

postCssInverseLogicalProperties.postcss = true;

export default postCssInverseLogicalProperties;
