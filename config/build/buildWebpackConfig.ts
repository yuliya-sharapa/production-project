import webpack from "webpack";
import buildPlugins from "./buildPlugins";
import buildLoaders from "./buildLoaders";
import buildResolvers from "./buildResolvers";
import { BuildOptions } from "./types/config";
import buildDevServer from "./buildDevServer";

export default function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { paths, mode, isDev } = options;
  return {
    mode,
    entry: paths.entry,
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(),
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options) ,
    // we need sourse map to be able to see where exactly error happened in which file
    devtool: isDev ? 'inline-source-map': undefined,
    // a devserver helps dinamically show changes without need to build webpack again
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
