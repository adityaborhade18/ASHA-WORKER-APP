import { createRealmContext } from "@realm/react";
import { Asha } from "./ashaSchema";


export const { RealmProvider, useRealm, useQuery } = createRealmContext({
  schema: [Asha],
});
