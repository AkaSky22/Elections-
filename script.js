let votes = { 1: 0, 2: 0 }; // Add more keys for more candidates

function vote(candidateId) {
    votes[candidateId]++;
    showEmoji();
    setTimeout(showResults, 2000); // Show results after 2 seconds
}

function showEmoji() {
    const emojis = ['😊', '👍', '🎉', '✨', '😁'];
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    const popup = document.getElementById('emoji-popup');
    popup.textContent = emoji;
    popup.style.display = 'block';
    setTimeout(() => { popup.style.display = 'none'; }, 1000);
}

function showResults() {
    document.getElementById('vote-container').style.display = 'none';
    const results = document.getElementById('results');
    results.style.display = 'block';
    
    Object.keys(votes).forEach(id => {
        document.querySelector(`#result-${id} .votes`).textContent = votes[id];
    });
    
    const winnerId = Object.keys(votes).reduce((a, b) => votes[a] > votes[b] ? a : b);
    document.getElementById(`result-${winnerId}`).classList.add('winner');
                                               }
