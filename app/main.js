let friends = document.getElementById('friends');
let suggests = document.getElementById('suggests');
let totalFriends = document.getElementById('totalFriends');

friends.style.display = "block";
suggests.style.display = "none";

// main logic starts here
const name = ["hkm007", "Deepraj", "Giridhar", "Dipanshu", "Kushagra", "Tanay", "Adarsh", "Anuj", "Rajhans", "Harshit"];

var network = [ [0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
                [1, 0, 0, 1, 1, 1, 0, 0, 0, 0],
                [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
                [0, 1, 1, 0, 0, 0, 0, 0, 0, 1],
                [0, 1, 0, 0, 0, 0, 1, 1, 1, 0],
                [1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 1, 0, 0, 1, 1, 1],
                [1, 0, 1, 0, 1, 0, 1, 0, 0, 0],
                [0, 0, 1, 0, 1, 0, 1, 0, 0, 1],
                [0, 0, 0, 1, 0, 1, 1, 0, 1, 0] ];


// badges
let f = 0;
for (var i = 1; i < 10; i++) {
    if (network[0][i] == 1) {
        f++;
    } 
}
totalFriends.innerHTML = `Friends <span class="badge badge-light">${f}</span>`;

var mutualFriends = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for(var i = 1; i < network.length; i++) {
    let m = 0;
    if(network[0][i] == 1) {
        for(var j = 0; j < 10; j++) {
            if(network[0][j] == 1 && network[i][j] == 1) {
                m++;
            }
        }
        mutualFriends[i] = m;
    } 
}

// connections
function con() {
    friends.innerHTML = `<h3>Your Connections</h3><hr>`;
    for (var i = 1; i < 10; i++) {
        if (network[0][i] == 1) {
            friends.innerHTML += `<div class="card mb-3" style="max-width: 100%">
                                    <div class="row no-gutters">
                                    <div class="col-md-3">
                                        <img src="images/p.jpg" class="card-img" alt="..." style="border-radius: 50%; max-width: 200px">
                                    </div>
                                    <div class="col-md-9">
                                        <div class="card-body">
                                        <h5 class="card-title">${name[i]}</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p class="card-text"><small class="text-muted">Mutual Friends: ${mutualFriends[i]}</small></p>
                                        </div>
                                    </div>
                                    </div>
                                </div>`
        }
    }

    friends.style.display = "block";
    suggests.style.display = "none";
}

var frnd = new Array(10);
var mutual = [0,0,0,0,0,0,0,0,0,0];

// suggestions
function sug() {
    suggests.innerHTML = `<h3>Friend Suggestions</h3><hr>`;

    for(var i = 0; i < 10; i++) {
        if(network[0][i] == 1) {
            frnd[i] = 1;
        } else {
            frnd[i] = 0;
        }
    }

    for(var i = 0; i < 10; i++) {
        if(frnd[i] == 1) {
            for(var j = 0; j < 10; j++) {
                if((network[i][j] == 1) && (network[0][j] == 0) && (mutual[j] == 0) && (j != i) && (j != 0)) {
                    mutual[j] = 1;
                }
            }
        }
    }

    for(var i = 0; i < 10; i++) {
        console.log(mutual[i]);
    }
    
    for(var i = 0; i < 10; i++) {
        if(mutual[i] == 1) {
            suggests.innerHTML += `<div class="card mb-3" style="max-width: 100%">
                                    <div class="row no-gutters">
                                    <div class="col-md-3">
                                        <img src="images/p.jpg" class="card-img" alt="..." style="border-radius: 50%; max-width: 200px">
                                    </div>
                                    <div class="col-md-9">
                                        <div class="card-body">
                                        <h5 class="card-title">${name[i]}</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p class="card-text"><small class="text-muted">Mutual Friends: 1</small></p>
                                        </div>
                                    </div>
                                    </div>
                                </div>`
        }
    }

    friends.style.display = "none";
    suggests.style.display = "block";
}