/*
Instalação e como usar: https://fakerjs.dev/guide/
    npm install @faker-js/faker --save-dev
    
    Exemplos:
        Dentro do arquivo de teste, função, onde será necessário utilizar o Faker, inserir:
        import { faker } from '@faker-js/faker';
        const randomName = faker.name.fullName(); // Rowan Nikolaus
        const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz

        const randomName = faker.name.fullName(); // Rowan Nikolaus
        const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz

        CommonJS
        const { faker } = require('@faker-js/faker');

        const randomName = faker.name.fullName(); // Rowan Nikolaus
        const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz

        Browser#
        <script type="module">
        import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';

        // Caitlyn Kerluke
        const randomName = faker.name.fullName();

        // Rusty@arne.info
        const randomEmail = faker.internet.email();
        </script>
*/