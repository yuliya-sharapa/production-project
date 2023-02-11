import {ResolveOptions} from "webpack";

export default function buildPlugins(): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
  }
}

