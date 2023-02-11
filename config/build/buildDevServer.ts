import { BuildOptions } from "./types/config";
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'


export default function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    open: true, 
    // allows to proxy requests through a specific index page, we nned to restart server after changes in config
    historyApiFallback: true,
  }
}
