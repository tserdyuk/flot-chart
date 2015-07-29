### Prerequisites
- Latest Node.js installed
- Latest gulp installed "npm install -g gulp"
- LiveReload browser plugin for development (optional)

### Commands
- "npm install" - setup project
- "gulp" - build project
- "gulp watch" - build project on changes continiously
- "gulp serve" - like "gulp watch" with local livereload server started
- "gulp clean" - remove build artifacts
- "Ctrl + C" - SIGINT, exit

### Build Options
- dist - build destination directory (default - dist)
- port - local serving server port (default - 8000)
- env - name of target environment (default - dev)

### Project Structure
- package.json - NPM project description
- assets directory - static assets, copied as is to the distribution directory
- src directory - directory for all source files
- js files - use CommonJS moduling, can be of arbitrary directory structure
- scss files - can be of arbitrary directory structure
- jade files - a list of pages translated to html
- src/env/{profile} - a place for different environment profiles (not used currently)
