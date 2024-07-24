declare module "redux-persist/es/persistReducer" {
  import { PersistReducer } from "redux-persist";
  export default PersistReducer;
}

declare module "redux-persist/lib/storage" {
  const storage: any;
  export default storage;
}
