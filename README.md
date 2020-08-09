# Let's make a Deno environment, (not for production)

We can use Denon to restart our program based on file changes, just like Nodemon with Node based projects.

## Usage

use `docker-compose` to boot up our container. Once inside, execute `start.sh`, which for now:

-   installs Denon
-   adds .deno/bin to our PATH
-   runs our main.js with Denon
