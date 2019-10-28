interface IDataService {
    getData(): any
}

let service: IDataService = {
    getData() {
        return 'some text';
    }
}

const response = service.getData();

response.indexOf(1);

if (typeof response === 'string') {
    console.log(response.toUpperCase());
}