function greetings() {
    let username = 'Canelo';
    function displayGreeting() {
        return `Hello ${username}!`;
    }
    return displayGreeting();
}

const sayingHi = greetings();
