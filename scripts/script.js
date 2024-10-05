// Reference the container where repositories will be displayed
const repoContainer = document.getElementById('repo-container');

// Fetch the repository data from repos.json
fetch('repos.json') // Ensure this path is correct based on your project structure
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(repositories => {
        // Loop through each repository and create the necessary elements
        repositories.forEach(repo => {
            // Create a div for each repository item
            const repoItem = document.createElement('div');
            repoItem.classList.add('repo-item');  // Add a class for styling

            // Create a h2 element for the repository name
            const name = document.createElement('h2');
            name.classList.add('repo-name');  // Add a class for styling
            name.textContent = repo.name;  // Set the repository name text

            // Create a p element for the repository description
            const description = document.createElement('p');
            description.classList.add('repo-description');  // Add a class for styling
            description.textContent = repo.description;  // Set the repository description text

            // Append the name and description to the repoItem div
            repoItem.appendChild(name);
            repoItem.appendChild(description);

            // Append the repoItem to the main container
            repoContainer.appendChild(repoItem);
        });
    })
    .catch(error => {
        console.error('Error fetching repository data:', error);
    });
