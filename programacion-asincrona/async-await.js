/* Con async-await el código queda legible, sin embargo aún es secuencial. 
    Es necesario hacer uso de los bloques try/catch */
async function requestHandler(req, res) {
    try {
        const user = await User.findById(req.userId);
        const tasks = await Tasks.findById(user.tasksId);
        tasks.completed = true;
        await tasks.save();

        res.send('Tarea completada');
    } 
    catch (err) {
        res.send(e);
    }
}
