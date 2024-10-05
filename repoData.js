const repoData = [
      {
          "id": 824541781,
          "name": "api-data-fetch",
          "html_url": "https://github.com/Hamid6426/api-data-fetch",
          "description": "An assignment from MyTokri on internshala where the objective is to fetch data from the specified API endpoint and display it on the client-side.",
          "language": "JavaScript",
          "created_at": "2024-07-05T10:57:35Z",
          "updated_at": "2024-07-05T18:05:44Z",
          "stargazers_count": 0,
          "forks_count": 0,
          "visibility": "public"
      }
      // Add other repository details here if available
  ];

  function displayRepos() {
      const repoList = document.getElementById('repo-list');

      // Loop through the repositories data and create elements to display each repo
      repoData.forEach(repo => {
          const repoDiv = document.createElement('div');
          repoDiv.classList.add('repo');

          // Create and append the repository link
          const repoLink = document.createElement('a');
          repoLink.href = repo.html_url;
          repoLink.textContent = repo.name;
          repoDiv.appendChild(repoLink);

          // Append the repository description
          if (repo.description) {
              const description = document.createElement('p');
              description.textContent = repo.description;
              repoDiv.appendChild(description);
          }

          // Append other repository details
          const language = document.createElement('p');
          language.textContent = `Language: ${repo.language}`;
          repoDiv.appendChild(language);

          const stars = document.createElement('p');
          stars.textContent = `Stars: ${repo.stargazers_count}`;
          repoDiv.appendChild(stars);

          const forks = document.createElement('p');
          forks.textContent = `Forks: ${repo.forks_count}`;
          repoDiv.appendChild(forks);

          const visibility = document.createElement('p');
          visibility.textContent = `Visibility: ${repo.visibility}`;
          repoDiv.appendChild(visibility);

          // Append the repository div to the main container
          repoList.appendChild(repoDiv);
      });
  }

  // Call the display function
  displayRepos();
