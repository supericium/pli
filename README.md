# Supericium Project Layout Instance

The PLI (Project Layout Instance) is a javascript object model of the standard directory layout that all [Supericium](https://github.com/supericium/supericium/) modules use.  The standard layout enables users to instantly feel at home in any one of the [Supericium](https://github.com/supericium/supericium/) modules.

The PLI is inspired by the [Apache Maven Standard Directory Layout](https://maven.apache.org/guides/introduction/introduction-to-the-standard-directory-layout.html).

## Directory Descriptions

The following directories are modeled by the PLI.

### Source Directories

| Directory      | Summary                                                   |
|:---------------|:----------------------------------------------------------|
| src/main/css   | CSS module(s)                                             |
| src/main/js    | Javascript                                                |
| src/main/html  | HTML application, templates, prototypes, etc.             |
| src/main/images| Image development                                         |
| src/main/wc    | Web component development                                 |
| src/test/css   | CSS tests                                                 |
| src/test/js    | Javascript test                                           |
| src/test/html  | Html page based tests                                     |
| src/main/images| Image development                                         |
| src/main/wc    | Web component                                             |

### Target Directories

| Directory         | Summary                       |
|:------------------|:------------------------------|
| target/main/css   | Built CSS modules             |
| target/main/js    | Built javascript              |
| target/main/html  | Built html pages              |
| target/main/images| Image development             |
| target/main/wc    | Web component development     |
| target/test/css   | Built test CSS utilities      |
| target/test/js    | Built test Javascript         |
| target/test/html  | Built test html               |
| target/test/images| Compiled image tests          |
| target/test/wc    | Web component tests           |

## Extension

More directories can easily be added, and will naturally fit with the build methodology.  For example:

| Directory            | Summary        |
|:---------------------|:---------------|
| src/main/coffescript | Coffescript    |
| src/main/jade        | Jade templates |
