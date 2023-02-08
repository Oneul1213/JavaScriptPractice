fetch('/article/promise-chaining/user.json')
    .then(response => response.json())
    .then(user => console.log(user.name));