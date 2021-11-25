export const logger = (store) => (next) => (action) => {
    console.group('New Action: ')
    console.log('Action is: ', action);
    const val = next(action);
    console.log('New state is: ', store.getState());
    console.groupEnd();
    return val;
}