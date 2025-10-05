import { Realm } from "realm";

export class Asha extends Realm.Object {
  static schema = {
    name: "Asha",
    properties: {
      _id: "objectId",
      name: "string",
      email: "string",
      password: "string",
      synced: { type: "bool", default: false },
    },
    primaryKey: "_id",
  };
}
