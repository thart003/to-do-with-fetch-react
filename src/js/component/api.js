export async function getTodos() {
    const response = await fetch('https://assets.breatheco.de/apis/fake/todos/user/thart003')
    
    if (response.status === 200) {
        const payload = await response.json()
        
        return payload
    }

    return null
}
export async function getTodos() {
    const response = await fetch('https://assets.breatheco.de/apis/fake/todos/user/thart003')
    
    if (response.status === 200) {
        const payload = await response.json()
        
        return payload
    }

    return null
}

export async function createTodos() {
    await fetch('https://assets.breatheco.de/apis/fake/todos/user/thart003',{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify([]) 
    })
    
}

export async function updateTodos(todos) {
    await fetch('https://assets.breatheco.de/apis/fake/todos/user/thart003',{
        method:'PUT',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(todos) 
    })}

export async function deleteTodos() {
    await fetch('https://assets.breatheco.de/apis/fake/todos/user/thart003',{
        method:'DELETE',
    })}
    