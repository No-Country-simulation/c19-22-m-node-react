import { EntitySchema } from "typeorm";

export const User = new EntitySchema({
  name: "User",
  tableName: "users",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    name: {
        type: "varchar",
      },
    lastname: {
        type: "varchar",
      },
    mail: {
        type: "varchar",
    },
    username: {
        type: "varchar",
    },
    password: {
        type: "varchar",
    },
      
  },
});