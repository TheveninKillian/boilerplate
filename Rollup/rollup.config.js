import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import { eslint } from 'rollup-plugin-eslint';
import scss from 'rollup-plugin-scss';

const autoprefixer = require('autoprefixer');
const postcss = require('postcss');

export default {
  input: './assets/js/index.js',
  output: [
    {
      format: 'esm',
      file: 'dist/bundle.esm.js',
    },
    {
      format: 'iife',
      file: 'dist/bundle.iife.js',
    },
  ],
  external: ['smartcrop'],
  plugins: [
    eslint({
      fix: true,
    }),
    scss({
      processor: (css) =>
        postcss([autoprefixer({ overrideBrowserslist: 'Edge 18' })]),
      outputStyle: 'compressed',
      output: 'dist/bundle.css',
    }),
    commonjs(),
    resolve(),
    babel({
      exclude: 'node_modules/**',
    }),
    terser(),
  ],
  inlineDynamicImports: true,
};
