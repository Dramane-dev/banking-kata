# BANKING KATA

<p align="center">
  <img 
        alt="NODEJS" 
        width="200" 
        height="200"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        style="margin-left: auto; margin-right: auto"
    />
  <img 
        alt="TYPESCRIPT" 
        width="200" 
        height="200"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
        style="margin-left: auto; margin-right: auto"
    />
</p>

## To start the project :

First we need to clone the repo :

```bash
git clone git@github.com:Dramane-dev/banking-kata.git
```

Move to banking-kata :

```bash
cd banking-kata && npm i && npm start:dev
```

## To start test series :

Move to banking-kata :

```bash
cd banking-kata && npm test
```

## User stories

### User story 1

In order to save money
As a bank client
I want to make a deposit in my account

### User story 2

In order to retrieve some or all of my savings
As a bank client
I want to make a withdrawal from my account

### User story 3

In order to check my operations
As a bank client
I want to see the history (operation, date, amount, balance) of my operations

## Datas representation

### Bank account

```ruby
ClientId        string
Date            string
OperationType   enum
Amount          number
Balance         number
OperationState  enum
```
