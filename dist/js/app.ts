import { Negociacao } from "./models/negociacao.ts";

const negociacao = new Negociacao(new Date(), 10, 100);
console.log(negociacao.quantidade);
