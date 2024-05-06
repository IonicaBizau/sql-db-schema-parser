## Documentation

You can see below the API reference of this module.

### `parse(input)`
SqlDbSchemaParser.parse
Parses the input into JSON output.

#### Params

- **String** `input`: The input string.

#### Return
- **Object** The parsed output using the following the structure:
   - `<table_name>`:
      - `<column_name>`
         - `column`
         - `type`
         - `max_length`
         - `precision`
         - `scale`
         - `is_nullable`

### `fromFile(filePath)`
SqlDbSchemaParser.fromFile
Parses the input from a file.

**Example**:

```js
const schema = await SqlDbSchemaParser.fromFile("schema.txt");
```

#### Params

- **String** `filePath`: The file path.

#### Return
- **Object** The parsed output.

