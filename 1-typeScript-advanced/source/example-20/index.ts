type Eat = (food: string) => void;
type AnimalList = string[];

interface IEat {
    (food: string): void;
}

interface IAnimalList {
    [index: number]: string;
}

const list: IAnimalList = ['test'];

list.filter((item) => {
    return item;
});