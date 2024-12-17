const apiUrl = "http://localhost:5000/api";


async function fetchCountries() {
    const container = document.getElementById('data-container');
    const searchInput = document.getElementById('search-bar').value.toLowerCase();

    try {
        const response = await fetch(`${apiUrl}/countries`);
        if (!response.ok) throw new Error("Failed to fetch countries");

        const countries = await response.json();
        const filteredCountries = countries.filter(country =>
            country.name.toLowerCase().includes(searchInput)
        );


        container.innerHTML = "";
        if (filteredCountries.length === 0) {
            container.innerHTML = "<p>No countries found matching your search.</p>";
            return;
        }


        const activitiesResponse = await fetch(`${apiUrl}/activities`);
        const sportsResponse = await fetch(`${apiUrl}/national-sports`);
        const activities = await activitiesResponse.json();
        const sports = await sportsResponse.json();

        filteredCountries.forEach(country => {
            // Find matching activities and sport
            const countryActivities = activities.filter(activity => 
                country.activity_ids.includes(activity._id)
            ).map(activity => activity.name).join(", ");

            const countrySport = sports.find(sport => sport.country_id === country._id);

            container.innerHTML += `
                <div class="card">
                    <h2>${country.name}</h2>
                    <p><strong>Healthcare:</strong> ${country.healthcare_structure}</p>
                    <p><strong>Obesity Rate:</strong> ${country.obesity_rating}%</p>
                    <p><strong>Healthcare Description:</strong> ${country.healthcare_description}</p>
                    <p><strong>Popular Activities:</strong> ${countryActivities || "Not available"}</p>
                    <p><strong>National Sport:</strong> ${countrySport ? countrySport.sport_name : "Not available"}</p>
                </div>
            `;
        });
    } catch (error) {
        console.error("Error fetching data:", error);
        document.getElementById('data-container').innerHTML = "<p>Failed to load data. Please try again later.</p>";
    }
}

document.addEventListener("DOMContentLoaded", fetchCountries);
