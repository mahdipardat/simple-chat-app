let users = [];

const addUser = ({id, name, room}) => {
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    const exitingUser = users.find(user => user.name === name && user.room === room);

    if(exitingUser) {
        return { error : 'user already in room'}
    }

    const user = {id : id, name : name , room : room}

    users.push(user);

    return { user }
}

const removeUser = (id) => {
    const index = users.findIndex(user => user.id === id);

    if(index != -1) {
        
        return users.splice(index, 1)[0];
    }
}

const getUser = (id) => users.filter(user => user.id == id);

const getUsersInRoom = (room) => users.filter(user => user.room == room)


module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}