"use strict";

// Dependencies
const fs = require("fs").promises

class SqlDbSchemaParser {

    /**
     * SqlDbSchemaParser.parse
     * Parses the input into JSON output.
     *
     * @name parse
     * @function
     * @param {String} input The input string.
     * @return {Object} The parsed output using the following the structure:
     *
     *    - `<table_name>`:
     *       - `<column_name>`
     *          - `column`
     *          - `type`
     *          - `max_length`
     *          - `precision`
     *          - `scale`
     *          - `is_nullable`
     */
    static parse(input) {
        return input.split("\n").slice(2).map(c => c.split(" ").filter(Boolean)).reduce((acc, c) => {
            const cTableName = c[0]
            const tableMeta = acc[cTableName] = acc[cTableName] || {};
            tableMeta[c[1]] = {
                column: c[1],
                type: c[2],
                max_length: c[3],
                precision: c[4],
                scale: c[5],
                is_nullable: c[6]
            }
            return acc;
        }, {});
    }

    /**
     * SqlDbSchemaParser.fromFile
     * Parses the input from a file.
     *
     * **Example**:
     *
     * ```js
     * const schema = await SqlDbSchemaParser.fromFile("schema.txt");
     * ```
     *
     * @name fromFile
     * @function
     * @param {String} filePath The file path.
     * @return {Object} The parsed output.
     */
    static async fromFile(filePath) {
        const content = await fs.readFile(filePath, "utf-8")
        return SqlDbSchemaParser.parse(content)
    }
}

module.exports = SqlDbSchemaParser;
