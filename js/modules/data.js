import { Dog } from './Pet.js';
import { Cat } from './Pet.js';
import { SmallAnimal } from './Pet.js';
import { Bird } from './Pet.js';
import { Owner } from './Owner.js';

export const pets = [
    new Dog(
        'Max',
        'Dog (Jack Russell Terrier)',
        5,
        'images/max.jpeg',
        'Red rubber ball',
        new Owner(
            'Katie',
            'images/max-owner.jpeg',
            'Katie and Max love going for long walks in Central Park every morning.'
        ),
    ),

    new Dog(
        'Duke',
        'Dog (Newfoundland Mix)',
        6,
        'images/duke.jpeg',
        'Chew rope',
        new Owner(
            'Chuck',
            'images/duke-owner.png',
            'Chuck rescued Duke from the pound and they now live on a big farm together.'
        ),
    ),

    new Dog(
        'Gidget',
        'Dog (Pomeranian)',
        3,
        'images/gidget.jpeg',
        'Stuffed squirrel',
        new Owner(
            'Emily',
            'images/gidget-owner.png',
            'Emily spoils Gidget with homemade treats and cozy sweaters.'
        ),
    ),

    new Dog(
        'Mel',
        'Dog (Pug)',
        4,
        'images/mel.jpeg',
        'Squeaky donut',
        new Owner(
            'Dave',
            'images/mel-owner.png',
            'Dave and Mel spend their weekends binge-watching cartoons on the couch.'
        ),
    ),

    new Dog(
        'Buddy',
        'Dog (Dachshund)',
        4,
        'images/buddy.jpeg',
        'Tennis ball',
        new Owner(
            'Laura',
            'images/buddy-owner.png',
            'Laura and Buddy love playing fetch and going on road trips.'
        ),
    ),

    new Dog(
        'Pops',
        'Dog (Basset Hound)',
        10,
        'images/pops.jpeg',
        'Plish bone',
        new Owner(
            'Mr. Jenkins',
            'images/pops-owner.png',
            'Mr. Jenkins, a retired teacher, and Pops enjoy reading books together at home.'
        ),
    ),

    new Cat(
        'Chloe',
        'Cat (Tabby)',
        6,
        'images/chloe.jpeg',
        'Laser pointer',
        new Owner(
            'Susan',
            'images/chloe-owner.png',
            'Susan and Chloe enjoy lazy afternoons and Chloe’s famous cat naps.'
        ),
    ),

    new SmallAnimal(
        'Snowball',
        'Rabbit',
        2,
        'images/snowball.jpeg',
        'Carrot chew toy',
        new Owner(
            'Lily',
            'images/snowball-owner.png',
            'Lily is a young animal lover who takes Snowball to school for show-and-tell.'
        ),
    ),

    new SmallAnimal(
        'Norman',
        'Guinea Pig',
        1,
        'images/norman.jpeg',
        'Cardboard tube',
        new Owner(
            'Alex',
            'images/norman-owner.png',
            'Alex built Norman a custom maze, and they play hide-and-seek daily.'
        ),
    ),

    new Bird(
        'Tiberus',
        'Hawk',
        7,
        'images/tiberus.jpeg',
        'Feathered ball',
        new Owner(
            'Clara',
            'images/tiberus-owner.png',
            'Clara rehabilitated Tiberius after he was injured and now they bond over birdwatching.'
        ),
    ),

    new Bird(
        'Sweetpea',
        'Parakeet',
        3,
        'images/sweetpea.jpeg',
        'Mini swing',
        new Owner(
            'Ava',
            'images/sweetpea-owner.png',
            'Ava loves teaching Sweetpea new tricks and taking them on fun indoor flights.'
        ),
    ),

    new Cat(
        'Ozone',
        'Sphynx',
        5,
        'images/ozone.png',
        'Catnip mouse',
        new Owner(
            'Mark',
            'images/ozone-owner.png',
            'Mark and Ozone share a love for late-night stargazing sessions on their rooftop.'
        ),
    ),
]
