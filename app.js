// Função para alternar entre os temas
function toggleTheme() {
    const body = document.documentElement;
    const currentTheme = body.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        body.removeAttribute('data-theme');
    } else {
        body.setAttribute('data-theme', 'dark');
    }
}

// Verificar preferência do sistema
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Definir tema inicial baseado na preferência do sistema
if (prefersDarkScheme.matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
}

// Atualizar tema quando a preferência do sistema mudar
prefersDarkScheme.addListener((e) => {
    if (e.matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }
});
