const readlineSync = require('readline-sync');

const askName = () => {
    const name = readlineSync.question("May I have you name? ");
    console.log("Hello,", name);
    console.log('Welcome to the Brain Games!');
};
export default askName;