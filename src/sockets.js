export default (io) => {
    io.on("connection", (socket) => {
        socket.on('newMessage', (message) =>{
            let newMessage = {
                id: socket.id,
                text: message
            };
            socket.broadcast.emit('responseMessage', newMessage)
        });
        socket.on('disconnect', () => {
            console.log('🔥: A user disconnected');
        });
    });
}