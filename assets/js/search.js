// src/assets/js/search.js

// Function to perform search based on user input
function performSearch() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = ''; // Clear previous results

    // Sample data for demonstration purposes
    const sampleData = [
        { name: 'YouTube', category: 'Entertainment', url: 'https://www.youtube.com' },
        { name: 'Amazon', category: 'Shopping', url: 'https://www.amazon.com' },
        { name: 'ChatGPT', category: 'AI Tools', url: 'https://www.openai.com/chatgpt' },
        { name: 'Khan Academy', category: 'Study', url: 'https://www.khanacademy.org' },
        { name: 'GitHub', category: 'Programming', url: 'https://www.github.com' },
    ];

    // Filter results based on search input
    const filteredResults = sampleData.filter(item => item.name.toLowerCase().includes(searchInput));

    // Display results
    if (filteredResults.length > 0) {
        filteredResults.forEach(item => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('result-item');
            resultItem.innerHTML = `<a href="${item.url}" target="_blank">${item.name}</a> - ${item.category}`;
            resultsContainer.appendChild(resultItem);
        });
    } else {
        resultsContainer.innerHTML = '<p>No results found.</p>';
    }
}

// Event listener for search input
document.getElementById('search-input').addEventListener('input', performSearch);