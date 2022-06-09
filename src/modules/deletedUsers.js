const deletedOutput = document.querySelector('#deleted-accounts');

//Удалённые аккаунты
 const getDeletedUsers = () => {
    fetch('db/deleted.json')
      .then((response) => response.json())
      .then((data) => {
        deletedOutput.value = data.deleted.length;
      })  
      .catch((error) => {
        console.log(error);
       })   
}

export default getDeletedUsers;