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

Entities represent data itself, like a database record.

Result represents api result, but it has the entity id only.

# Reducer
## entities
Insert, update, delete entities.

## result
Other reducers handles results. In most cases, it updates a list of entity ids, for example, appends(prepends) a new entity, remove a deleted entity. 

# Container(Smart Component)
Container receives a entity id or a list of entity ids as props and get entities from `Provider` provided by `redux-connect`(https://github.com/reactjs/react-redux).

