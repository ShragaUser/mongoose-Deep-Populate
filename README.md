# mongoose-Deep-Populate
POC for a util function to be used on Mongoose Schemas that allow for deep level population - on unknown amount of levels of subdocument referencing.

## Function Name
"DeepPopulateAllRefs" on index.js
expecting a connection, a schema, and a model name.

Creates a model with pre find hooks on all instances of that model.


