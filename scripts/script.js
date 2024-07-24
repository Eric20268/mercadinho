const produtosTecnologia = [
  {
    categoria: 'Computadores',
    itens: [
      {
        nome: 'Notebook Dell',
        preco: 4999.99,
        imagem:
          'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQe53azeN9lEmoK0shDvY0pfpmRJpPShp91pKGcMQec8vtvJtBRq1lSjYoW8pXFRpJCmcmdjEKSjbn6xHV3F-4SFZu3XDh3axXV7bBx8mou2f9F6fzODQWor504y43m7bA-oM4mQQ&usqp=CAc',
        descricao:
          'Notebook Dell com processador Intel Core i7, 16GB de RAM e 512GB SSD.'
      },
      {
        nome: 'MacBook Pro',
        preco: 9999.99,
        imagem:
          'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSvDeYnGIZC11VPoTSN31MWQhbzEf4NBGfim_pVVS2B3m5Wtc0fQR8xUmr2fVuEIgWDtbVoUgJDdTqfmdowoyfjwOEtlKMizhY5IHagq2XiSES12_6cZpY8w7x6QuahUNTGLzl9LCHt50A&usqp=CAc',
        descricao:
          'MacBook Pro com tela Retina, processador M1, 16GB de RAM e 1TB SSD.'
      },
      {
        nome: 'PC Gamer',
        preco: 7999.99,
        imagem:
          'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQQPiIF4TsQf59sYkmmPaIB3dooDmUBezBBbUS3YV_mGxDFyHW6PSfVkIid6CI7rIv0zT6iD8UCMWHk6A8N6cYGeJP-duuRolChtizkAWeQwd3lLqRHhCEImz6VFb9FigjqHIR34F72fQ&usqp=CAc',
        descricao:
          'PC Gamer com placa de vídeo RTX 3080, 32GB de RAM e 1TB SSD.'
      },
      {
        nome: 'Chromebook',
        preco: 2999.99,
        imagem:
          'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSKABDs3gx1UqmTxqw6bd_m0a8vStFVlEzq8l6zAFIc6dFCaJw2gB7zg6zU09bJ-LvRYZ8bX-80uRO4l3KICVahJPH1jr17RdZYeg7pUaIDyWxBCFNcRRQ3PRuYR2wDeVlUOU5dBXNhRw&usqp=CAc',
        descricao:
          'Chromebook leve e portátil com processador Intel Celeron, 4GB de RAM e 64GB de armazenamento.'
      }
    ]
  },
  {
    categoria: 'Smartphones',
    itens: [
      {
        nome: 'iPhone 12',
        preco: 6999.99,
        imagem:
          'https://microimport.com.br/wp-content/uploads/iphone-12-de-128-gb.webp',
        descricao:
          'iPhone 12 com tela Super Retina XDR, câmera dupla de 12MP e 256GB de armazenamento.'
      },
      {
        nome: 'Samsung Galaxy S21',
        preco: 5999.99,
        imagem:
          'https://samsungbrshop.vtexassets.com/arquivos/ids/222466/image-147812a827ce414cbeecb5bb91eecb25-1-.jpg?v=638315272752900000',
        descricao:
          'Samsung Galaxy S21 com tela AMOLED de 120Hz, câmera tripla de 64MP e 128GB de armazenamento.'
      },
      {
        nome: 'Google Pixel 6',
        preco: 4999.99,
        imagem:
          'https://dcdn.mitiendanube.com/stores/003/772/365/products/b0b88745dfe688a1d195a64c7b55ed5fawsaccesskeyidakiatclmsgfx4j7tu445expires1731878282signaturecu4guy6fh3s9aigvkrdtcu2bzyv03d-366f4e3d6a995a69ac17003422890900-1024-1024.jpg',
        descricao:
          'Google Pixel 6 com processador Google Tensor, câmera dupla de 50MP e 128GB de armazenamento.'
      },
      {
        nome: 'OnePlus 9',
        preco: 4599.99,
        imagem:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvysj3SqzywQ8lXLDOozYgebhB18SPRgTWFQ&s',
        descricao:
          'OnePlus 9 com tela Fluid AMOLED de 120Hz, câmera tripla de 48MP e 256GB de armazenamento.'
      }
    ]
  },
  {
    categoria: 'Acessórios',
    itens: [
      {
        nome: 'Mouse Logitech',
        preco: 249.99,
        imagem:
          'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS4nCoCTretWYU4Uk6zuIGbgQ-qtNTtaHStkEs2KGmnTOm_5gEA6Zp_xCdgMNoCNOmG0H2RqqRV95gs_Dy4tvakV0UdKFvnckLHoHWy5U0LSehe_Ac7lZtwXtOj9BJAKjz8y1Mze4s&usqp=CAc',
        descricao:
          'Mouse Logitech sem fio com design ergonômico e alta precisão.'
      },
      {
        nome: 'Teclado Mecânico',
        preco: 499.99,
        imagem:
          'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcREQQXgGMjKn9QRFtAyg_iVlgKMbHeCz4DhwUwfcT5SyR46dS_Gcv5Ga1kSdmb6IA-fy4CXUH-9vOMcZpvpNjh6zv6ZpCR_b8dQYIOHILixuEnmR1f2zEpf5vb8bDTYgarSDGdbJRI&usqp=CAc',
        descricao: 'Teclado mecânico com switches Cherry MX e iluminação RGB.'
      },
      {
        nome: 'Fone de Ouvido Bluetooth',
        preco: 299.99,
        imagem:
          'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRxWwVvkBIYrC3im09busGpyporxPu9APeIyMMlXHMcUmh2QkfYGvBPsitLJACwRCzMZP_gawPaM_ZLU3VVV_bF_s-slCgchXYzkqWNqs8BqM40ahu4yGXbl4axrT5ncTP_rb31a0pvKNM&usqp=CAc',
        descricao:
          'Fone de ouvido Bluetooth com cancelamento de ruído e bateria de longa duração.'
      },
      {
        nome: 'Webcam HD',
        preco: 199.99,
        imagem:
          'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS2_bVCq35Ilr3WE64WlIBhcNHBUA91sa6HUoSX0Zud4v4Dw_T-IIwFXvshlDfTV1G1KC7o2ZDAC4N2t09IdibqXoE-Xq3j3VloIz4JLOs8uxa6m9ehZEuskzZNWQiT2QO-ce8Qig4&usqp=CAc',
        descricao:
          'Webcam HD com microfone embutido e qualidade de vídeo 1080p.'
      }
    ]
  },
  {
    categoria: 'Consoles de Jogos',
    itens: [
      {
        nome: 'PlayStation 5',
        preco: 4999.99,
        imagem:
          'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTsfOnQdPkjJeHOYIapDxfwwesOfhwNhOTkOgHyCHZ6PvpSM_MvMnaUk52hZgxqvnxyqAVec-s6WWks2yK_AGjt43KqYRKzIQfJ88ynbbxOB3tumAYIWsix_GjObX-k5nv_v9myiQ&usqp=CAc',
        descricao:
          'PlayStation 5 com suporte a jogos em 4K, SSD ultra-rápido e controle DualSense.'
      },
      {
        nome: 'Xbox Series X',
        preco: 4799.99,
        imagem:
          'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRMLvxQ8WXckgMrFxPv8vJAD65CHt7b8X6j_OoyEkCsmR_xkae15ef0qCKp7Y3TLHu-95HxR91L9pIWlMfrwVZW_aMoAO_aTx1soE58y5KjIAI2XiWtJ0-yciT4MbBTLy6fRF159JY&usqp=CAc',
        descricao:
          'Xbox Series X com desempenho de última geração, suporte a 4K e Game Pass.'
      },
      {
        nome: 'Nintendo Switch',
        preco: 2999.99,
        imagem:
          'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTUpFxZBlG6WeaSdxwnxRkl6-3GLgs1CcHZQYJLKk8nYKI0kMowmcHIQ1XjsHCgkvcvw9CkQd3A6lj33oMLZiK1RYRYzjjzNcdl8zYpL0E3zXo4NHC4bZPzIKBII7GtIFVjJYrDwaPPxg&usqp=CAc',
        descricao:
          'Nintendo Switch com modo portátil e dock para jogar na TV, com ampla biblioteca de jogos.'
      },
      {
        nome: 'Steam Deck',
        preco: 3999.99,
        imagem:
          'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQa2K5EAzVksKrIvLsREHrNqX8xVc1uQFyTczP66j8Jz_uTV_p4FP42N34zws7_qOuOLUIlXUdizLvSl9mk_uFbuVqa1xqRnhj14LwxO9IZeaYUfwLn6Gi9FLmPzTwqgVV7GhAEYtnXHA&usqp=CAc',
        descricao:
          'Steam Deck com desempenho de PC gamer em formato portátil, compatível com biblioteca Steam.'
      }
    ]
  },
  {
    categoria: 'Periféricos',
    itens: [
      {
        nome: 'Monitor 4K',
        preco: 1999.99,
        imagem:
          'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSTakCnVluXrshHsYMyAiRSObDXq1bWnFJd2iDaCk0Uvd26Em8QyeCjBCgKwROd-VFO3TxdXbS7DUFDhJ_IvyY3J4PYmGEmJY7P3uKsTzRxnflCeHjtj_ts9hE-rmVrbbj8ljOiSZAGF5k&usqp=CAc',
        descricao:
          'Monitor 4K de alta definição com cores vivas e tecnologia anti-reflexo.'
      },
      {
        nome: 'Impressora Multifuncional',
        preco: 799.99,
        imagem:
          'https://m.media-amazon.com/images/I/51qBTen1fmL._AC_SL1000_.jpg',
        descricao:
          'Impressora multifuncional com recursos de impressão, cópia, digitalização e fax.'
      },
      {
        nome: 'SSD 1TB',
        preco: 499.99,
        imagem:
          'https://m.media-amazon.com/images/I/61P39LA75pL._AC_SX679_.jpg',
        descricao:
          'SSD de 1TB com velocidades de leitura e gravação ultra-rápidas.'
      },
      {
        nome: 'HD Externo 2TB',
        preco: 399.99,
        imagem:
          'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR7PYZJ_CxQE65qCNoAGT8MqxXuYti-eb-T-ilZ_95-yNBOLIGrK66btbv8CQvI-TwXHGrYKApU3uxRuuvvGkMUTNF-euH6yoI4wCRPnjH_Zp2Tjq-ScLsnPv19znlSTabGo8r0yHmf4A&usqp=CAc',
        descricao:
          'HD externo de 2TB com alta capacidade de armazenamento e design robusto.'
      }
    ]
  }
]

//Inserir items no HTML
const main = document.querySelector('.container-principal')

function mostrarItems (array) {
  main.innerHTML = ''

  array.forEach(item => {
    main.innerHTML += `
    <section>
    <div class="titulo-secao-box">
    <h2 class="titulo-secao" data-text="${item.categoria}">${item.categoria}</h2>
    </div>
    <div class="produtos">
    <div class="card escondido">
        <div class="card-top"><i class="bi bi-heart icon-favs"></i><i class="bi bi-cart icon-carro"></i></div>
        <img src="${item.itens[0].imagem}" class="imagem" alt="teste">
        <h3>${item.itens[0].nome}</h3>
        <div class="card-text">
            <p>${item.itens[0].descricao}</p>
        </div>
        <div class="card-stars">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star"></i>
        </div>
        <div class="card-preco">
            <h4>R$${item.itens[0].preco}</h4>
        </div>
        <div class="card-botao-compra">
            <button>Compre!</button>
        </div>
    </div>
    <div class="card escondido">
        <div class="card-top"><i class="bi bi-heart icon-favs"></i><i class="bi bi-cart icon-carro"></i></div>
        <img src="${item.itens[1].imagem}" class="imagem" alt="teste">
        <h3>${item.itens[1].nome}</h3>
        <div class="card-text">
            <p>${item.itens[1].descricao}</p>
        </div>
        <div class="card-stars">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star"></i>
        </div>
        <div class="card-preco">
            <h4>R$${item.itens[1].preco}</h4>
        </div>
        <div class="card-botao-compra">
            <button>Compre!</button>
        </div>
    </div>
    <div class="card escondido">
        <div class="card-top"><i class="bi bi-heart icon-favs"></i><i class="bi bi-cart icon-carro"></i></div>
        <img src="${item.itens[2].imagem}" class="imagem" alt="teste">
        <h3>${item.itens[2].nome}</h3>
        <div class="card-text">
            <p>${item.itens[2].descricao}</p>
        </div>
        <div class="card-stars">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star"></i>
        </div>
        <div class="card-preco">
            <h4>R$${item.itens[2].preco}</h4>
        </div>
        <div class="card-botao-compra">
            <button>Compre!</button>
        </div>
    </div>
    <div class="card escondido">
        <div class="card-top"><i class="bi bi-heart icon-favs"></i><i class="bi bi-cart icon-carro"></i></div>
        <img src="${item.itens[3].imagem}" class="imagem" alt="teste">
        <h3>${item.itens[3].nome}</h3>
        <div class="card-text">
            <p>${item.itens[3].descricao}</p>
        </div>
        <div class="card-stars">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star"></i>
        </div>
        <div class="card-preco">
            <h4>R$${item.itens[3].preco}</h4>
        </div>
        <div class="card-botao-compra">
            <button>Compre!</button>
        </div>
    </div>
    </div>
    </section>`
  })
}

mostrarItems(produtosTecnologia)

//Pesquisa mobile
const btnPesquisaMobile = document.querySelector('.pesquisa-btn')
const barraPesquisaMobile = document.querySelector('.barra-pesquisa-mobile')

btnPesquisaMobile.addEventListener('click', () => {
  barraPesquisaMobile.classList.toggle('ativar-menu-mobile')
})

//Menu começa aqui
const botaoMenu = document.querySelector('.btn-hamburguer')
const menu = document.querySelector('.lista-menu')

botaoMenu.addEventListener('click', () => {
  botaoMenu.classList.toggle('ativar-menu')
  menu.classList.toggle('ativar-menu')
})

//Navegação mágica
const lista = document.querySelectorAll('.lista')

function ativarNavegacao () {
  lista.forEach(item => item.classList.remove('barra-ativada'))
  this.classList.add('barra-ativada')
}

lista.forEach(item => {
  item.addEventListener('click', ativarNavegacao)
})

//Barra pesquisa

//Icons e notificação
const iconCarrinho = document.querySelectorAll('.icon-carro')
const iconFavoritos = document.querySelectorAll('.icon-favs')

iconFavoritos.forEach(icon => {
  icon.addEventListener('click', () => {
    icon.classList.toggle('cor-icon-fav')
    if (icon.classList.contains('bi-heart')) {
      icon.classList.replace('bi-heart', 'bi-heart-fill')
    } else {
      icon.classList.replace('bi-heart-fill', 'bi-heart')
    }
  })
})

const notificacao = document.querySelector('.notificacoes')
const segundosNotificacoes = 3500

iconCarrinho.forEach(icon => {
  icon.addEventListener('click', () => {
    const notiCarrinho = document.querySelector('.alert-carrinho.retirado')

    if (notificacao.classList.contains('ativar-notificacao')) {
      return
    }

    setTimeout(() => {
      notificacao.classList.remove('ativar-notificacao')
    }, segundosNotificacoes)

    icon.classList.toggle('cor-icon-car')

    if (icon.classList.contains('bi-cart')) {
      icon.classList.replace('bi-cart', 'bi-cart-check-fill')
      notificacao.classList.add('ativar-notificacao')
      notiCarrinho.style.display = 'none'
    } else {
      icon.classList.replace('bi-cart-check-fill', 'bi-cart')
      notificacao.classList.add('ativar-notificacao')
      notiCarrinho.style.display = 'flex'
    }
  })
})

//animação scroll
const myObserver = new IntersectionObserver(entradas => {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('exposto')
    }
  })
})

const elementos = document.querySelectorAll('.escondido')

elementos.forEach(elemento => myObserver.observe(elemento))

//Carrinho

const botaoAtivarCarrinho = document.querySelector(".btn-ativar-carrinho")
const botaoFecharCarrinho = document.querySelector("#fechar-carrinho")
const carrinho = document.querySelector(".carrinho")

botaoAtivarCarrinho.addEventListener("click",()=>{
  carrinho.classList.toggle("ativar-carrinho")
})
botaoFecharCarrinho.addEventListener("click",()=>{
  carrinho.classList.remove("ativar-carrinho")
})