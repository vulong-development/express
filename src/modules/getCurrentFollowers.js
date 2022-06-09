//Поле вывода текущего количества подписчиков
const followersNumberOutput = document.querySelector('#current-followers');

//Текущее количество подписчиков
 const getCurrentFollowers = () => {
    fetch('db/currentFollowers.json')
      .then((response) => response.json())
      .then((data) => {
        followersNumberOutput.value = data.currentFollowers.length;
      })  
      .catch((error) => {
        console.log(error);
       })   
}

export default getCurrentFollowers;