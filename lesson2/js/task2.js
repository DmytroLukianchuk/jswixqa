var site = {
    pages: [
        {
            id: 1,
            name: 'Home Page',
            url: '/'
        },
        {
            id: 2,
            name: 'Contact Page',
            url: '/contact'
        },
        {
            id: 3,
            name: 'About Page',
            url: '/about'
        },
        {
            id: 4,
            name: 'Photo Page',
            url: '/catalog',
            photos: [
                {
                    name: 'holidays',
                    url: '/photos/holiday.jpg'
                },
                {
                    name: 'Egupt',
                    url: '/photos/egupt.jpg'
                },
                {
                    name: 'Germany',
                    url: '/photos/germany.jpg'
                }
            ]
        }
    ]
}

console.log(site.pages[3].photos[2].name);

//Необходимо вывести в консоль название последней фотографии из страницы "Photos" из данного объекта, т.е. 'Germany', построив правильный запрос к нужному свойству.