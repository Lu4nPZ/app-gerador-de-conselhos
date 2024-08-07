const idDoConselho = document.querySelector('.titulo')
const conselho = document.querySelector('.conselho')

const botao = document.querySelector('.botao').addEventListener('click', ()=>{
    async function trocarDeConselho() {
        try {
            const api = await fetch('https://api.adviceslip.com/advice')

            if(!api.ok){
                throw new Error("Erro ao tentar buscar os dados da api");
            }
            
            const dados = await api.json()
            idDoConselho.innerText = `ADVICE #${dados.slip.id}`
            conselho.innerText = dados.slip.advice
        } catch (error) {
            alert(new Error('Erro ao solicitar a API'))
        }
    }
    trocarDeConselho()
})