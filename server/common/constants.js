let collections = {};

const collectionsName = {
    ACCOUNT: 'ipvn_account',
    USER: 'ipvn_users'
};

const role = {
    ADMIN: 1,
    USER: 0,
}

const status = {
    NEW: 0,
    SECONDHAND: 1
}

collections.collectionsName = collectionsName;
collections.role = role;
collections.status = status;

module.exports = collections;

