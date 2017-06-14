module.exports = (users, prop, value) => {
    let filtered = users.filter((user) => {
        return user[prop] == value;
    });
    return filtered;
};