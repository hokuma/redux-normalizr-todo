# redux-normalizr-todo
Redux todoapp using normalizr(https://github.com/gaearon/normalizr).

# Usage
```
npm install
npm start
```

# Resource
```/todos.json
{
  "todos":[
    {
      "todo":{
        "id":1,
        "body":"ticket #1",
        "status":1,
        "userId": 1,
        "user":{
          "id":1,
          "name":"john"
        }
      }
    }
  ]
}
```

```/users.json
{
  "users":[
    {
      "user":{
        "id":1,
        "name":"john",
        "status":1
      }
    }
  ]
}
```

`/todos.json` has a nested object which represents a assigned user itself.

# normalizr
Convert `/todos.json` to the flat structure which consists of `result` and `entities`.

```
{
  result: [{todo: "todo:1"}],
  entities: {
    todos: {
      "todo:1": {
        "id": 1,
        "body":"ticket #1",
        "status":1,
        "userId": 1,
        "user":"user:1"
      }
    },
    users: {
      "user:1": {
        id: 1,
        name: 'john'
      }
    }
  }
}
```

Entity represents a data itself, like a database record.

Result represents api result, but it has entity id only.

# Reducer
## entities
Reduceres for entities does insert, update, delete entities.

## result
reducers not for entities are result reducers. In most cases, it updates entities list such as append(prepend), sort, remove. 

# Container(Smart Component)
Container receives results as props and take entities from entities state.

