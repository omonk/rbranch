const git = require('simple-git');
const Radio = require('prompt-radio');

const path = '../sites/MobileWeb';

const choices = git(path).raw(
  [
    'for-each-ref',
    '--sort=-committerdate',
    '--count=10',
    "--format='%(refname:short)'",
    'refs/heads/',
  ],
  (err, result) => result.split('\n')
);

const radio = new Radio({
  name: 'choose branch',
  message: '123',
  choices,
});

radio.ask(answer => {
  console.log(answer);
});
