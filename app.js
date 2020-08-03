const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes");

// Record a new note
yargs.command({
  command: "record",
  describe:
    "Record a new note : usage - node app.js --topic='topic' --title='title' --body='body' ",
  builder: {
    topic: {
      describe: "Topic",
      type: "string",
      demandOption: true,
    },
    title: {
      describe: "Note title",
      type: "string",
      demandOption: true,
    },
    body: {
      describe: "Note Body",
      type: "string",
      demandOption: true,
    },
  },
  handler: function (argv) {
    notes.recordNote(argv.topic, argv.title, argv.body);
  },
});

// display Note
yargs.command({
  command: "read",
  describe:
    "Read a note  : usage - node app.js --topic='topic' --title='title' ",
  handler: function (argv) {
    notes.readNote(argv.topic, argv.title);
  },
});

yargs.parse();
