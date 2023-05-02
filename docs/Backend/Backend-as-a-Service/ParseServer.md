# Parse Server
## Introduction

[Parse server](https://parseplatform.org/) 是一個開源的後端框架，一種 [Baas (Backend as a service)](./Baas.md)，可以跑在任何可以執行 Node.js的環境。

## Feature as a Baas in Parse
- Builtin user management library.
    - Signup, Login, Session management, email verification, etc.
- Support of many SDKs and library.
    - Client side language: 
        - E.g. Swift, Flutter, Javascript
    - Server side language: 
        - E.g. Javascript(NodeJS), PHP
    - REST API, GraphQL
- Encapsulated Database Query
    - Support MongoDB and PostgreSQL
    - Use the same Parse Query to query data from MongoDB or PostgreSQL.
- Event handling
    - Parse LiveQuery can subscribe new event that change data using websocket.

## Run Parse server
[Getting started](https://github.com/parse-community/Parse-Server#getting-started)

## Query data in Frontend
