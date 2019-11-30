class Gerador {
    listaDeCompras = []
    gerarHtml = () => {
      return document.createElement("div")
    } 
    addLista = (listaDeCompras) => {
      this.listaDeCompras = listaDeCompras
    }
  }
  class GeradorLista extends Gerador {
    gerarHtml = () => {
      const lista = document.createElement("ol")
      let resultado = ''
      this.listaDeCompras.forEach(compra => {
        resultado = resultado.concat(`  <li>${compra}</li>
        `)
      })
      lista.innerHTML = resultado
      return lista
    }
  }
  var gerador = new GeradorLista()
  var listaCompras = ["shampoo", "frutas", "arroz"]  
  gerador.addLista(listaCompras)
  var lista = gerador.gerarHtml()
  document.getElementById("body").append(lista)