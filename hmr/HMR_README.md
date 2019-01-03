# WordPress Editor Block Auto-Loading and Hot-Reloading Demo

This project demonstrates how we can use `require.context` to automatically detect and register WordPress editor blocks and block editor plugins while still supporting hot module replacement..

## Usage

After running `npm install`, these key commands will let you test the plugin locally:

- `npm start`: Run the Webpack development server. WordPress will automatically detect and load the script from the dev server based on the presence of the `asset-manifest.json` the dev server outputs into the build directory. Hot reloading is only provided while the dev server is running.
- `npm run build`: Build the application into the `build/` directory.

## License

This plugin is free software; you can redistribute it and/or modify it under the terms of either:

- the [GNU General Public License](LICENSE.md#gnu-general-public-license) as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version, or
- the [Artistic License 2.0](LICENSE.md#artistic-license-20)
