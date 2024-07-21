// Services.js
import React from 'react';
import Card from '../components/Card';

const Services = () => {
    const images1 = [
        "https://tecdn.b-cdn.net/img/new/standard/city/062.jpg",
        "https://tecdn.b-cdn.net/img/new/standard/city/063.jpg",
        "https://tecdn.b-cdn.net/img/new/standard/city/064.jpg"
    ];

    const images2 = [
        "https://tecdn.b-cdn.net/img/new/standard/city/065.jpg",
        "https://tecdn.b-cdn.net/img/new/standard/city/066.jpg",
        "https://tecdn.b-cdn.net/img/new/standard/city/067.jpg"
    ];

    const images3 = [
        "https://tecdn.b-cdn.net/img/new/standard/city/068.jpg",
        "https://tecdn.b-cdn.net/img/new/standard/city/069.jpg",
        "https://tecdn.b-cdn.net/img/new/standard/city/070.jpg"
    ];

    const listItems = [
        "Cras justo odio",
        "Dapibus ac facilisis in",
        "Vestibulum at eros"
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 container mx-auto">
            <Card
                title="Card Title 1"
                description="Some quick example text to build on the card title and make up the bulk of the card's content."
                listItems={listItems}
                images={images1}
            />
            <Card
                title="Card Title 2"
                description="Some quick example text to build on the card title and make up the bulk of the card's content."
                listItems={listItems}
                images={images2}
            />
            <Card
                title="Card Title 3"
                description="Some quick example text to build on the card title and make up the bulk of the card's content."
                listItems={listItems}
                images={images3}
            />
        </div>
    );
}

export default Services;
