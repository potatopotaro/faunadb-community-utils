<h1 align="center">Welcome to faunadb-community-utils 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/potatopotaro/faunadb-community-utils#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/potatopotaro/faunadb-community-utils/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/potatopotaro/faunadb-community-utils/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/potatopotaro/faunadb-community-utils" />
  </a>
</p>

> Custom FQL and javascript to help you build in FaunaDB.

# Getting Started

### Install

```sh
npm install --save faunadb-community-utils
```

or

```sh
yarn add faunadb-community-utils
```

### Example Usage

```js
const faunadb = require("faunadb")
const { CreateNGramSearchIndex } = require("faunadb-community-tools")(faunadb.query)

client.query(CreateNGramSearchIndex({...}))
```

# Documentation

[Click here for more thorough documentation](https://github.com/potatopotaro/faunadb-community-utils/blob/master/DOCUMENTATION.md)

# API Glossary

[createPrefixSearchResources](DOCUMENTATION.md#createprefixsearchresources)

[BulkCreate](DOCUMENTATION.md#BulkCreate)

[SelectDeep](DOCUMENTATION.md#SelectDeep)

[CreateNGramSearchIndex](DOCUMENTATION.md#CreateNGramSearchIndex)

[CreatePrefixSearchIndex](DOCUMENTATION.md#CreatePrefixSearchIndex)

[MultiMatch](DOCUMENTATION.md#MultiMatch)

[Characters](DOCUMENTATION.md#Characters)

[NGramGenerator](DOCUMENTATION.md#NGramGenerator)

[StringIndexRange](DOCUMENTATION.md#StringIndexRange)

[StringPrefixGenerator](DOCUMENTATION.md#StringPrefixGenerator)

# Joining the FaunaDB Community

If you haven't already, I highly suggest joining the official FaunaDB Community Slack.

Slack: https://community-invite.fauna.com

# 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/potatopotaro/faunadb-community-utils/issues). You can also take a look at the [contributing guide](https://github.com/potatopotaro/faunadb-community-utils/blob/master/CONTRIBUTING.md).

# Show your support

Give a ⭐️ if this project helped you!

# 📝 License

Copyright © 2020 [Taro Woollett-Chiba](https://github.com/potatopotaro).<br />
This project is [MIT](https://github.com/potatopotaro/faunadb-community-utils/blob/master/LICENSE) licensed.
