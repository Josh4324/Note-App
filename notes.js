const fs = require("fs");
const chalk = require("chalk");

const recordNote = (topic, title, body) => {
  saveNotes(topic, title, body);
  console.log(chalk.green("Note was created succesfully"));
};

const readNote = (topic, title) => {
  try {
    const note = fs.readFileSync(`${topic}/${title}.txt`);
    console.log(chalk.green("Reading Note"));
    console.log(note.toString());
  } catch (e) {
    console.log(chalk.red("topic is required"));
    console.log(chalk.red("title is required"));
    console.log(chalk.white("------------------------------"));
    console.log(chalk.red("Run node app.js --help to check usage"));
  }
};

const saveNotes = (topic, title, body) => {
  try {
    fs.access(`./${topic}`, (err) => {
      if (err) {
        fs.mkdirSync(topic);
        fs.writeFileSync(`${topic}/${title}.txt`, body);
      } else {
        fs.writeFileSync(`${topic}/${title}.txt`, body);
      }
    });
  } catch (e) {
    console.log(chalk.red("topic is required"));
    console.log(chalk.red("title is required"));
    console.log(chalk.red("body is required"));
    console.log(chalk.white("------------------------------"));
    console.log(chalk.red("Run node app.js --help to check usage"));
  }
};

module.exports = {
  recordNote,
  readNote,
};
