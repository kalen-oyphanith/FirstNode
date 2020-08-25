const message = 'hello other file';

const getMessage = () => {
    console.log(message);
    return message;
};

// module.exports.getMessage = getMessage;
// or 

module.exports = {
    getMessage
}
