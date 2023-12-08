export function FieldTypes():any {
    return [
        {value:0, key:0, id:0, label:'Não Definido'},
        {value:1, key:1, id:1, label:'Data'},
        {value:2, key:2, id:2, label:'Hora'},
        {value:3, key:3, id:3, label:'Uuid'},
        {value:4, key:4, id:4, label:'Inteiro'},
        {value:5, key:5, id:5, label:'String'},
        {value:6, key:6, id:6, label:'Boolean'},
      ];
}

export function getLabel(carga:any,value:Number):string {   
    const r =  carga.find((f:any) => {return Number(f.id) === Number(value)});
    if (r){    
      return r.label;
    } else {
      return 'N�o Encontrado';
    }   
}
