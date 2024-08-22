class JugoDeLimon {
  constructor(volumen, dulzor, temperatura) {
      this.volumen = volumen;
      this.dulzor = dulzor;
      this.temperatura = temperatura;
  }

  exprimir() {
      let message = `Exprimiendo limones para hacer ${this.volumen} litros de jugo.`;
      output(message);
  }

  enfriar() {
      let message = `Enfriando el jugo a ${this.temperatura} grados Celsius.`;
      output(message);
  }

  ajustarDulzor() {
      let message = `Ajustando la acidez del jugo a nivel ${this.dulzor}.`;
      output(message);
  }
}

class DibujoALapiz {
  constructor(tema, tamanio, estilo) {
      this.tema = tema;
      this.tamanio = tamanio;
      this.estilo = estilo;
  }

  bocetar() {
      let message = `Bocetando un ${this.tema} en papel de tamaño ${this.tamanio}.`;
      output(message);
  }

  sombrear() {
      let message = `Sombreando el dibujo de ${this.tema} en estilo ${this.estilo}.`;
      output(message);
  }

  enmarcar() {
      let message = `Enmarcando el dibujo de ${this.tema} de tamaño ${this.tamanio}.`;
      output(message);
  }
}

class SillaDeMadera {
  constructor(tipo, color, material) {
      this.tipo = tipo;
      this.color = color;
      this.material = material;
  }

  construir() {
      let message = `Construyendo una silla ${this.tipo} de ${this.material}.`;
      output(message);
  }

  pintar() {
      let message = `Pintando la silla de color ${this.color}.`;
      output(message);
  }

  barnizar() {
      let message = `Barnizando la silla ${this.tipo} de ${this.material}.`;
      output(message);
  }
}

function output(message) {
  const outputElement = document.getElementById('output');
  outputElement.textContent += message + '\n';
}

function ejecutarCodigo() {
  let jugo1 = new JugoDeLimon(250, "alta", 5);
  jugo1.exprimir();
  jugo1.enfriar();
  jugo1.ajustarDulzor();

  let jugo2 = new JugoDeLimon(500, "media", 10);
  jugo2.exprimir();
  jugo2.enfriar();

  let dibujo1 = new DibujoALapiz("paisaje", "A4", "realista");
  dibujo1.bocetar();
  dibujo1.sombrear();
  dibujo1.enmarcar();

  let dibujo2 = new DibujoALapiz("retrato", "A3", "abstracto");
  dibujo2.bocetar();
  dibujo2.sombrear();

  let silla1 = new SillaDeMadera("mecedora", "marrón", "roble");
  silla1.construir();
  silla1.pintar();
  silla1.barnizar();

  let silla2 = new SillaDeMadera("plegable", "blanco", "pino");
  silla2.construir();
  silla2.pintar();
}
