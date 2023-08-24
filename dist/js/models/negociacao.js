export class Negociacao {
    // atributos privados de uma classe podem ser declarados assim:
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.valor * this.quantidade;
    }
    get data() {
        // programação defensiva XD
        const data = new Date(this._data.getTime());
        return data;
    }
}
