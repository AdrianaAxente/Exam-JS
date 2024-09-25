async function displayRandomUser() {
    const profileInfo = document.getElementById('profile-info');
    
    try {
        const response = await fetch('http://randomuser.me/api/');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        const user = data.results[0];
        const name = `${user.name.first} ${user.name.last}`;
        const email = user.email;
        const picture = user.picture.large;

        profileInfo.innerHTML = 
        `<img src="${picture}" alt="Profile Picture">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>`;
        
        } catch (error) {
            profileInfo.innerHTML = `<p>Error: ${error.message}</p>`;
        }
    }