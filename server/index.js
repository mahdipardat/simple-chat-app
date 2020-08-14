const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const cors = require('cors');
const app = express();
const {
	addUser,
	removeUser,
	getUser,
	getUsersInRoom,
} = require("./user");
const PORT = process.env.PORT || 5000;

const router = require("./router");

app.use(router);
app.use(cors());

const server = http.createServer(app);

const io = socketio(server);

io.on("connection", (socket) => {
	socket.on("join", ({ name, room }, callback) => {
        const { error, user } = addUser({id : socket.id, name , room});
        
        if(error) return callback(error);

        socket.emit('message' , {user : 'admin', text : `${user.name}, Welcome to ${user.room} room`});
        socket.broadcast.to(user.room).emit('message' , {user : 'admin', text : `${user.name} has Joined`});

        socket.join(user.room);

        callback();
    });
    
    socket.on("sendMessage" , (message, callback) => {
        const user = getUser(socket.id)[0];
        
        io.to(user.room).emit('message' , { user : user.name, text : message });

        callback();
    })

	socket.on("disconnect", () => {
        const user = removeUser(socket.id);
        io.to(user.room).emit('message' , { user : 'admin', text : `${user.name} has been left!`});
	});
});

server.listen(PORT, () =>
	console.log(`Server is running on port : ${PORT}`)
);
