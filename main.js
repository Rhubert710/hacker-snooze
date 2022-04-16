



const parent = document.querySelector('#parent');
var current = document.querySelector('#current');

$(".category").click(function(){get_results(this.dataset.value, this.innerText)})

//<a href="#" class="btn btn-primary">Go somewhere</a>

// function get_results(category,name)
// {

//     current.innerText = name;
//     parent.innerHTML = '';

//     fetch(`https://hacker-news.firebaseio.com/v0/${category}.json`)
//     .then(async function (httpResponse){
//         return await httpResponse.json();
//     })
//     .then(async function (data){
//         // console.log(data)
//         for (let i = 0; i<10; i++)
//         {
//             await fetch(`https://hacker-news.firebaseio.com/v0/item/${data[i]}.json`)
//             .then(function (httpResponse){
//                 return httpResponse.json();
//             })
//             .then(function (data){
//                 let article = document.createElement('div');
                
//                 article.classList.add("card", "article", "shadow");


//                 article.innerHTML = 
//                 `<p class="card-img-top article_rank">#${i+1}</p>
//                 <div class="card-body">
//                 <h5 class="card-title">${data.title}</h5>
//                 <p class="card-text">by ${data.by}</p>
//                 <div class="bottom_of_card">
//                     <p class="card-text score">score: ${data.score}</p>
//                     <p class="card-text">Comments: ${data.kids ? data.kids.length : '0'}</p>
//                 </div>

                
//                 </div>`;

//                 article.addEventListener("click", function(){window.open(`${data.url}`, '_blank');});
//                 parent.appendChild(article);
//                 console.log(data);
//                 console.log(category);
//             })
//         }
//     })
// }

async function get_results(category,name)
{
    current.innerText = name;
    parent.innerHTML = '';

    let httpResponse = await fetch(`https://hacker-news.firebaseio.com/v0/${category}.json`);
    let article_array = await httpResponse.json();

    for (let i = 0; i<100; i++)
    {
        let httpResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${article_array[i]}.json`)
        let data = await httpResponse.json();
        
        let article = document.createElement('div');
        article.classList.add("card", "article", "shadow");

        article.innerHTML = 
        `<p class="card-img-top article_rank">#${i+1}</p>
        <div class="card-body">
            <h5 class="card-title">${data.title}</h5>
            <p class="card-text">by ${data.by}</p>
            <div class="bottom_of_card">
                <p class="card-text score">score: ${data.score}</p>
                <p class="card-text">Comments: ${data.kids ? data.kids.length : '0'}</p>
            </div>        
        </div>`;

        article.addEventListener("click", function(){window.open(`${data.url}`, '_blank');});//make articles clickable
        parent.appendChild(article);
        console.log(data);
        console.log(category);
    }
}

get_results('topstories', 'Top Stories');//so the page is loaded with 'top stories' instead of blankness