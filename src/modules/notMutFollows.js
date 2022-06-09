// Поиск аккаунтов без взаимной подписки
const notMutFollowsSearch = () => {
    // let notMutFollows = [];
    // follows.forEach( function (element) {
    //     if ( !~followersCurrent.indexOf(element) ) notMutFollows.push(element)
    // });
    
    // console.log('Без взаимной подписки: ' + notMutFollows.length + ' аккаунты: ' + notMutFollows);
    fetch('db/follows.json')
      .then((response) => response.json())
      .then((data) => {
         console.log()
      })  
}

export default notMutFollowsSearch;