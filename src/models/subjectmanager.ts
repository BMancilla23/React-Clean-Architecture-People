import { Subject } from 'rxjs';

// Definición de la clase SubjectManager parametrizada por un tipo genérico T
export class SubjectManager<T> {
    // Se crea una instancia de Subject para manejar los eventos
    private subject = new Subject<T>();

    // Método getter para obtener el subject como un Observable
    get getSubject() {
        return this.subject.asObservable();
    }

    // Método setter para establecer el valor del subject y emitirlo a los suscriptores
    set setSubject(value: T) {
        this.subject.next(value);
    }
}
