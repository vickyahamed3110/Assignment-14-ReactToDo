const Url = "https://66b70ebd7f7b1c6d8f1aca6c.mockapi.io/todo/Todo";

const getallData =async () => {
    const response = await fetch(Url)
    return await response.json()
}

const deleteData = async(id) => {
    const response = await fetch(`${Url}/${id}`, {
        method:"DELETE",
    })
    return await response.json()
}

const postData = async(userData) => {
    const response = await fetch(Url, {
        method:"POST",
        body:JSON.stringify(userData),
        headers:{"Content-Type":"application/json; charset=utf-8"}
    })
    return await response.json()
}

const editData = async(userData, id) =>{
    const response = await fetch (`${Url}/${id}`,{
    method:"PUT",
    body:JSON.stringify(userData),
    headers:{"Content-Type":"application/json; charset=utf-8"}
    })
    return await response.json()
}



export {getallData, deleteData, editData, postData}