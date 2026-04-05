### Prova técnica QA Engineer - Winover

> Os testes vão falhar no github actions porque não tem aplicação rodando, isso é esperado.
> O que importa aqui é a estrutura do projeto e aorganização e os scripts.  

Esse repositório faz parte da minha entrega para a vaga de QA Engineer na Winover.  
os URL e os endpoints são ficticios, definidos com base nos cenários BDD 
que eu escrevi durante a prova. A ideia é mostrar como eu organizaria o projeto 
na pratica, seguindo a mesma estrutura que usaria num sistema real.

### Estrutura dos códigos e scripts
cypress/e2e/ - Os testes em si, um arquivo por funcionalidade   
cypress/pages/ - seletores e ações de cada tela  
cypress/fixtures/ - usuario.json para login e parcelas.json para mocks  
cypress/support/commands.js -  cy.login()  
.github/workflows/ - Workflow configurado para rodar no GitHub Actions a cada push

### Configurar as dependencias
```
npm 
npm init -y
npm install cypress --save-dev

````
### Como rodar
```
npx cypress open
code . (se usar visual studio code)
```

