const message = 'hello heroku';

const getMessage = () => {
    console.log(message);
    return message;
};

// module.exports.getMessage = getMessage;
// or 

module.exports = {
    getMessage
}
