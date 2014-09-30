module.exports = {
  development: {
    db: {
      url: "mongodb://localhost/db-migrations"
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
