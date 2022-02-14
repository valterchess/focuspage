import React from "react";

function BtnComponent(props) {

    var tasks = []

    const [task, setTask] = useState(
        {
            nome: '',
            descricao: '',
            periodo: time | null
        })

    const onSubmit = () => {
        return tasks.push(task)
    }

    function updatedModel() {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastrar</Typography>
                <TextField value={task.nome} onChange={() => updatedModel(e)} id='nome' label='Nome da Task' variant='outlined' name='nome' margin='normal' fullWidth />
                <TextField value={task.descricao} onChange={() => updatedModel(e)} id='descricao' label='usuario' variant='outlined' name='descricao' margin='normal' fullWidth />

                <Box marginTop={2} textAlign='center'>
                        <Button variant='contained' color='secondary' className='btnCancelar' style={{ color: "#718093", backgroundColor: "#2c3e50" }}>
                            Cancelar
                        </Button>
                    <Button type='submit' variant='contained' color='primary' style={{ color: "#2c3e50", backgroundColor: "#718093" }}>
                        Inserir Task
                    </Button>
                </Box>
            </form>
        </div>
    );
}
export default BtnComponent;