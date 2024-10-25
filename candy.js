function getCandy() {
    let trickOrTreatBag = [
        { name: 'Milky Way', image: 'https://www.kroger.com/product/images/large/front/0004000059639' },
        { name: 'Baby Ruth', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfsuD_PyZk1UzvIfZEof8M18obcjTGODUrAQ&s' },
        { name: '100 Grand', image: 'https://shopsweetiescandyaz.com/cdn/shop/files/IMG_2312_886911fa-08c4-45a8-a0d4-06e7d3ef34fc_1366x700.jpg?v=1709144488' },
        { name: 'Twix', image: 'https://upload.wikimedia.org/wikipedia/en/f/f9/Twix-Wrapper-Small.jpg' },
        { name: 'Twizzlers', image: 'https://media-photos.depop.com/b1/34869005/1383025918_1e8ce9badf664de492ee40a505e4efe5/P0.jpg' }
    ];

    if (trickOrTreatBag.length > 0) {
        let randomIndex = Math.floor(Math.random() * trickOrTreatBag.length);
        let chosenCandy = trickOrTreatBag[randomIndex];

        document.getElementById('candyImage').src = chosenCandy.image;

        trickOrTreatBag.splice(randomIndex, 1);

        if (trickOrTreatBag.length === 0) {
            document.getElementById('message').innerText = "No more candies! Happy Halloween!";
        }
    } else {
        document.getElementById('message').innerText = "No more candies! Happy Halloween!";
    }
}
