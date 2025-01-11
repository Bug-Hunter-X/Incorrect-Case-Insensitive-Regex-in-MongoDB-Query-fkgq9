# Incorrect Case-Insensitive Regex in MongoDB Query
This example demonstrates an incorrect way to perform a case-insensitive regular expression search in MongoDB using Node.js driver. The issue arises from an improper combination of the `$regex` operator and the `$options` flag for case insensitivity.  The corrected version demonstrates the correct usage of these options for efficient and reliable case-insensitive queries.

## Bug
The original query attempts to use a case-insensitive regular expression by directly embedding the `/i` flag within the regular expression pattern which is not supported by MongoDB's `$regex` operator. Instead the `$options` parameter must be used to pass the flags.