oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g airplane-seat-arrangement
$ arrange COMMAND
running command...
$ arrange (--version)
airplane-seat-arrangement/0.0.0 darwin-x64 node-v14.17.3
$ arrange --help [COMMAND]
USAGE
  $ arrange COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`arrange hello PERSON`](#arrange-hello-person)
* [`arrange hello world`](#arrange-hello-world)
* [`arrange help [COMMAND]`](#arrange-help-command)
* [`arrange plugins`](#arrange-plugins)
* [`arrange plugins:install PLUGIN...`](#arrange-pluginsinstall-plugin)
* [`arrange plugins:inspect PLUGIN...`](#arrange-pluginsinspect-plugin)
* [`arrange plugins:install PLUGIN...`](#arrange-pluginsinstall-plugin-1)
* [`arrange plugins:link PLUGIN`](#arrange-pluginslink-plugin)
* [`arrange plugins:uninstall PLUGIN...`](#arrange-pluginsuninstall-plugin)
* [`arrange plugins:uninstall PLUGIN...`](#arrange-pluginsuninstall-plugin-1)
* [`arrange plugins:uninstall PLUGIN...`](#arrange-pluginsuninstall-plugin-2)
* [`arrange plugins update`](#arrange-plugins-update)

## `arrange hello PERSON`

Say hello

```
USAGE
  $ arrange hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/Haileman11/airplane-seat-arrangement/blob/v0.0.0/dist/commands/hello/index.ts)_

## `arrange hello world`

Say hello world

```
USAGE
  $ arrange hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ arrange hello world
  hello world! (./src/commands/hello/world.ts)
```

## `arrange help [COMMAND]`

Display help for arrange.

```
USAGE
  $ arrange help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for arrange.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.19/src/commands/help.ts)_

## `arrange plugins`

List installed plugins.

```
USAGE
  $ arrange plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ arrange plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.7/src/commands/plugins/index.ts)_

## `arrange plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ arrange plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ arrange plugins add

EXAMPLES
  $ arrange plugins:install myplugin 

  $ arrange plugins:install https://github.com/someuser/someplugin

  $ arrange plugins:install someuser/someplugin
```

## `arrange plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ arrange plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ arrange plugins:inspect myplugin
```

## `arrange plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ arrange plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ arrange plugins add

EXAMPLES
  $ arrange plugins:install myplugin 

  $ arrange plugins:install https://github.com/someuser/someplugin

  $ arrange plugins:install someuser/someplugin
```

## `arrange plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ arrange plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ arrange plugins:link myplugin
```

## `arrange plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ arrange plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ arrange plugins unlink
  $ arrange plugins remove
```

## `arrange plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ arrange plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ arrange plugins unlink
  $ arrange plugins remove
```

## `arrange plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ arrange plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ arrange plugins unlink
  $ arrange plugins remove
```

## `arrange plugins update`

Update installed plugins.

```
USAGE
  $ arrange plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
