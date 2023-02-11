import path from 'path';
import webpack from 'webpack';
import buildWebpackConfig from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';

// to be able to use env in scripts we export function (which recieve env params) not just config
export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, "public", "index.html"),
  }
  const PORT = env.port || 3000
  const mode = env.mode || 'development';
  // if mode is dev then isDev is true
  const isDev = mode ==='development'
  
  // we separated all the webpack configuration logic in separate file
  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT
  })

  return config
};