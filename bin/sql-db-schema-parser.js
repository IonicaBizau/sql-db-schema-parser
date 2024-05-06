#!/usr/bin/env node
"use strict";

const Tilda = require("tilda")
    , sqlDbSchemaParser = require("..")
    ;

new Tilda(`${__dirname}/../package.json`, {
    options: [
        {
            name: "input"
          , opts: ["i", "input"]
          , desc: "The input file."
        }
    ],
    examples: [
        "sql-db-schema-parser --input schema.sql"
    ]
}).main(async action => {
    const result = sqlDbSchemaParser.fromFile(action.options.input.value)
    console.log(JSON.stringify(result, null, 4));
});
