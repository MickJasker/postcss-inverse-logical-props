import type * as postcss from 'postcss';

const postCssInverseLogicalProperties: postcss.PluginCreator<undefined> = () => ({
  postcssPlugin: 'postcss-inverse-logical-properties',
  Declaration(decl, { result }): void {
    if (decl.prop === 'left') {
      result.warn(`The "${decl.prop}" property is deprecated. Use "inset-inline-start" instead.`, {
        node: decl,
      });

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
