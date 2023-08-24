export class Negociacao {
    // atributos privados de uma classe podem ser declarados assim:
    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number 
    ) {}

    get volume(): number {
        return this.valor * this.quantidade;
    }

    get data(): Date {
        // programação defensiva XD
        const data = new Date(this._data.getTime())
        return data;
    }
}