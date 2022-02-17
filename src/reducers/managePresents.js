export function managePresents(state = {managePresents: 0}, action) {

    switch(action.type) {
        case "INCREASE":
            return Object.assign({}, state, {
                numberOfPresents: state.numberOfPresents + 1
              });
        default:
            return state
    }
}



// function managePresents(state = {numberOfPresents: 0}, action) {
//   switch(action.type) {
//       case "INCREASE":
//         return {count: state.count + 1};
//       default:
//         return state;
//   }
// }
