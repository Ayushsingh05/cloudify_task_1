const form = document.getElementById('trelloForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('dueDate').value;
    const startDate = document.getElementById('startDate').value;
    createTrelloCard(name, description, dueDate, startDate);
});

function createTrelloCard(name, description, dueDate, startDate) {
    const API_KEY = 'a22b7c618d76d72a7209af9fc066c5b3';
    const TOKEN = 'ATTAae01c3357bc27f6d6d7187af639f23f5f746bdd02de83319efcb316e91fff1b6D8DED6A0';
    const BOARD_ID = '647aeb652c2235704a0fa346';

   
    const url = `https://api.trello.com/1/cards?key=${API_KEY}&token=${TOKEN}&idList=${BOARD_ID}`;
    fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          desc: description,
          due: dueDate,
          startDate: startDate
        })
      })
        .then(response => {
          if (response.ok) {
            console.log('Card created successfully.');
          } else {
            console.error('Failed to create card.');
          }
        })
        .catch(err => {
          console.error('Error:', err);
        });

}