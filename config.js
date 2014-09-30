module.exports = {
  development: {
    db: {
      url: "mongodb://localhost/recipemanager"
    },
    migrations: {
      model: "",
      schema: ""
    }
  },
  production: {
    db: {
      url: ""
    },
    migrations: {
      model: "",
      schema: ""
    }
  }
};
