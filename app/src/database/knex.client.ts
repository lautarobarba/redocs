import Knex from "knex";
import config from "./knex.config";

const knexClient = Knex(config);
export default knexClient;
