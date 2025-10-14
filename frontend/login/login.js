// Seleciona os botões e o container principal
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

// Adiciona um evento ao botão "Criar Conta". 
// Quando clicado, adiciona a classe 'right-panel-active' ao container.
signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

// Adiciona um evento ao botão "Fazer Login".
// Quando clicado, remove a classe 'right-panel-active' do container.
signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});