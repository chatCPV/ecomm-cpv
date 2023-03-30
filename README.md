# Ecomm CPV

Final project for Alura LevelUp! at PagoNxt.

[![License MIT](https://img.shields.io/github/license/chatCPV/ecomm-cpv)](https://github.com/chatCPV/ecomm-cpv/blob/main/LICENSE.md)
[![CodeFactor](https://www.codefactor.io/repository/github/chatcpv/ecomm-cpv/badge/main)](https://www.codefactor.io/repository/github/chatcpv/ecomm-cpv/overview/main)

## Table of contents

- [Description](#description)
- [Stacks](#stacks)
- [Installation](#installation)

## Description 

This is an ecommerce with three microservices, accounts, anti-fraud and transactions.

- **Accounts** holds users data, including payment address and login info.
- **Transactions** holds all transaction flow and communicates with both accounts and anti-fraud during it's process.
- **Anti-fraud** is where a human verification happens when a transaction value is greater or equal to 50% of a user montly income.

## Stacks

![Node.js](https://img.shields.io/badge/Node.js-6DA55F?style=flat&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=flat&logo=mongodb&logoColor=white)
![Swagger](https://img.shields.io/badge/Swagger-%85ea2d.svg?style=flat&logo=swagger&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-%230db7ed.svg?style=flat&logo=docker&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=flat&logo=postman&logoColor=white)
![Git](https://img.shields.io/badge/Git-%23F05033.svg?style=flat&logo=git&logoColor=white)

## Installation

1. Clone the repository:

  ```bash
  git clone https://github.com/chatCPV/ecomm-cpv.git
  ```

2. Install dependencies in root to install eslint:

  ```npm
  npm i
  ```

3. Install dependencies on each repository:

  ```powershell
  # move into the repository:
  cd .\<repository>

  # then:
  npm i
  ```

4. Deploy the containers:

  ```docker
  docker-compose up --build
  ```
