var conversas = [
    { 
    grupo: 'Grupo da família',
    mensagens: [
        {
        usuario: 'joao03', //conversas[[0].mensagens[0].usuario]
        texto: 'Tudo bem?'
        },
        {
        usuario: 'victor23',
        texto: 'Tudo Tranqs'
        },
        {
        usuario: 'Erisson Nunes',
        texto: 'Que bom'
        },
    ]
    },
    { 
    grupo:'Churrascão no domingão',
    mensagens: [
        {
        usuario: 'maria2000',
        texto: 'Na paz?'
        },
        {
        usuario: 'victor23',
        texto: 'Show'
        },
        {
        usuario: 'maria2000',
        texto: 'Que bom'
        },
    ]
    },
    { 
    grupo: 'Só topzera',
    mensagens: [
        {
        usuario: 'victor23',
        texto: 'Bom?'
        },
        {
        usuario: 'robson_alves',
        texto: 'Bom'
        },
        {
        usuario: 'victor03',
        texto: 'Que bom'
        },
    ]
    },

]

function getId(elemento) {
    console.log(elemento.id)  
    carregarMensagens(elemento.id);
};



function carregarNomeGrupos(){
    for (let i of conversas){

        let li = document.createElement('li');
        let img = document.createElement('img');
        img.src = 'img/person-1824147_640.png';
        let a = document.createElement('a');
        let aTexto = document.createTextNode(i.grupo);
        let lista = document.querySelector('.conteudo--listadeamigos--lista');


        img.classList.add("conteudo--listadeamigos--lista--itemlista--img");
        a.classList.add("conteudo--listadeamigos--lista--itemlista--nomegrupo");
        li.classList.add("conteudo--listadeamigos--lista--itemlista");

        a.appendChild(aTexto);
        li.appendChild(img);
        li.appendChild(a);

        li.setAttribute("id", i.grupo);
        li.onclick = function() {
            getId(this);
        };

        lista.appendChild(li);

    }
}


carregarNomeGrupos();


function carregarTituloSuperior(){

}

function novoGrupo(){

}

function carregarMensagens(nome){

    let mensagemconteudo = document.querySelector('.mensagens--conteudo');

    mensagemconteudo.innerHTML = " ";

    for (let i in conversas){

        if(conversas[i].grupo == nome) {
        
            for (let j of conversas[i].mensagens){

                if (j.usuario == "victor23"){                             // isso aqui não é assim
                    
                   

                    let mensagemuser = document.createElement('div');
                    mensagemuser.classList.add("mensagens--mensagemuser");    

                    let user = document.createElement('div');
                    let userTexto = document.createTextNode(j.usuario);
                    user.classList.add("mensagens--mensagemuser--usuario")
                    user.appendChild(userTexto);
                    console.log(user);

                    let mensagem = document.createElement('div');
                    let textomensagem = document.createTextNode(j.texto);
                    mensagem.classList.add("mensagens--mensagemuser--conteudo")
                    mensagem.appendChild(textomensagem);

                    mensagemuser.appendChild(mensagem);
                    mensagemuser.appendChild(user);
                    mensagemconteudo.appendChild(mensagemuser);

                    console.log("1");
                }

                else{
                    


                    let mensagemfriend = document.createElement('div');
                    mensagemfriend.classList.add("mensagens--mensagemfriend"); 

                    let user = document.createElement('div');
                    let userTexto = document.createTextNode(j.usuario);
                    user.classList.add("mensagens--mensagemfriend--usuario")
                    user.appendChild(userTexto);

                    let mensagem = document.createElement('div');
                    let textomensagem = document.createTextNode(j.texto);
                    mensagem.classList.add("mensagens--mensagemfriend--conteudo")
                    mensagem.appendChild(textomensagem);

                    mensagemfriend.appendChild(mensagem);
                    mensagemfriend.appendChild(user);
                    mensagemconteudo.appendChild(mensagemfriend);

                    console.log("2");
                }
                

            }
        }

    }

}

carregarMensagens();



function enviarMensagens(){

}


