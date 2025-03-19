Projeto SPA de Cidades - Angular

Este projeto foi desenvolvido como parte dos estudos sobre o framework Angular, seguindo orientações do próprio site oficial do Angular. O objetivo principal foi aprender e aplicar as melhores práticas para o desenvolvimento de aplicações Single Page Application (SPA).

📌 Sobre o Projeto

A aplicação consiste em uma SPA que permite aos usuários explorar cidades disponíveis na plataforma. Entre as funcionalidades principais, temos:

Página inicial: Exibe imagens das cidades disponíveis.

Busca por cidade: Um campo de busca que filtra dinamicamente as cidades cadastradas.

Navegação entre páginas: Sistema de rotas para acessar a página de cada cidade.

Formulário de aplicação: Permite que o usuário preencha seus dados (nome, sobrenome e e-mail) para aplicar a uma proposta de moradia na cidade escolhida.

Integração com API própria: Simula uma busca em um banco de dados para listar as cidades disponíveis.

🚀 Tecnologias Utilizadas

Angular 17

TypeScript

HTML & CSS

Angular Router (sistema de rotas)

Serviços e HTTPClient para comunicação com a API

JSON Server (simulação de banco de dados)

🛠 Como Executar o Projeto

1️⃣ Clonar o Repositório

git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

2️⃣ Instalar as Dependências

npm install

3️⃣ Iniciar a API Fake (JSON Server)

npx json-server --watch db.json --port 3000

4️⃣ Rodar a Aplicação Angular

ng serve

Acesse no navegador: http://localhost:4200/

📷 Demonstração

![Imagem do Projeto](https://private-user-images.githubusercontent.com/115483890/424684763-49f14754-7754-40c2-8388-0182079831c2.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDI0MTY4NzEsIm5iZiI6MTc0MjQxNjU3MSwicGF0aCI6Ii8xMTU0ODM4OTAvNDI0Njg0NzYzLTQ5ZjE0NzU0LTc3NTQtNDBjMi04Mzg4LTAxODIwNzk4MzFjMi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzE5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMxOVQyMDM2MTFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zN2RlNTg3MDgzNGU0NDNlYjNhMWMyNjdkMGUwNDIxNWViNzZmMDJmMDY3MzM1Mzk5NjFiZjRkNjA2ZDA3N2UzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.F3ZX6o0DJVlvnYVWJN0G-SKoGe20JeTpmAFm-Svj_qo)
![imagem-do-projeto](https://private-user-images.githubusercontent.com/115483890/424684329-12badfaf-a33b-4a1c-b937-88da7a214703.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDI0MTY5MzksIm5iZiI6MTc0MjQxNjYzOSwicGF0aCI6Ii8xMTU0ODM4OTAvNDI0Njg0MzI5LTEyYmFkZmFmLWEzM2ItNGExYy1iOTM3LTg4ZGE3YTIxNDcwMy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzE5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMxOVQyMDM3MTlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03MjNiZGRiNDdmYzE2ZjliOTdiZmQ0OWZmMzczNjE1MDI3MzBkMWZmNzI1NmE1ZDg4MjEwZDY4OWFhNWNhMjJiJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.uwuLE961aSIoubdILN5NxM03qc2UBriOVVIcPkYYndw)
