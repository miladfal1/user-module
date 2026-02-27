# User Module

Internal Plug & Play User Domain

---

## Required Dependencies (Mother Repo)

This module expects:

- Mongo Connection initialized
- Express App instance
- Global Error Middleware
- Authentication middleware (optional)

---

## Installation

```js
const userModule = require('user-module');

userModule.initUserModule(app);