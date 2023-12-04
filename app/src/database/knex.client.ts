// import Knex from "knex";
import config from "./knex.config";
const knexClient = require("knex")(config.development);

export default knexClient;
