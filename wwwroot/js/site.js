
const ApiUrl = "https://forkify-api.herokuapp.com/api/search";
const ApiKey = "c5aa772c-a3f6-4d2c-9a20-b89ee31014ef";

async function GetRecipies(RecipeName, isAllShow, id) {
    try {
        await showRecipes(RecipeName, id);
    } catch (error) {
        console.error('Error fetching recipes:', error);
    }
}

async function showRecipes(recipe, id) {
    try {
        let response = await fetch(`${ApiUrl}?q=${recipe}&key=${ApiKey}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        let data = await response.json();
        let htmlResult = data.recipes.map(r => `
            <div class="col-sm-3 col-md-3 col-lg-3 col-xl-3">
                <div class="shadow rounded">
                    <div class="card dishCard">
                        <img src="${r.image_url}" class="card-img-top h-75" />
                        <div class="card-body">
                            <p class="card-title">${r.title}</p>
                            <p class="card-text">${r.publisher}</p>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');

        document.getElementById(id).innerHTML = htmlResult;
    } catch (error) {
        console.error('Error displaying recipes:', error);
    }
}
