var userMethods = require('./1-user-module/userMethods');
var bulletinMethods = require('./2-bulletin-module/bulletinMethods');
var todoMethods = require('./3-todo-module/todoMethods');
//var resourceMethods = require('./4-resource-module/resourceMethods');

userMethods.userPost();
userMethods.userGet();
//userMethods.userPut();

bulletinMethods.bulletinPost();
//bulletinMethods.bulletinPut();
bulletinMethods.bulletinGet();

todoMethods.todoPost();
todoMethods.todoPut();
todoMethods.todoGet();

//resourceMethods.resourcePost();
//resourceMethods.resourcePut();
//resourceMethods.resourceGet();
