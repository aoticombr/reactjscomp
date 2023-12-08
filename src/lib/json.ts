

export function getDescJson(list:any, value:any):any {
    return list.find((f:any) => {return f.id === value}).label;
}
export function getDescJson2(list:any, value:any):any {
  return list.find((f:any) => {return String(f.key) === String(value)}).label;
}

export function parseISODate(isoDateString:any):any {
  if (!isoDateString) {
      return null;
  }

  return new Date(isoDateString);
}

export function getMinDate(list:any[], dateField:string):any {
  const filteredList = list.filter(item => item['row_status'] !== 'del');
 
  if (!filteredList || filteredList.length === 0) {
      return null;
  }
  
  let minDate = parseISODate(filteredList[0][dateField]);
  for (let i = 1; i < filteredList.length; i++) {

      const currentDate = parseISODate(filteredList[i][dateField]);
      console.log("currentDate:",currentDate)
      if (currentDate < minDate) {
          minDate = currentDate;
      }
  }
  console.log("getMinDate....b",minDate.toISOString())
  return minDate.toISOString();
}

// Fun��o para encontrar a maior data em uma lista de objetos
export function getMaxDate(list:any[], dateField:string):any {
  const filteredList = list.filter(item => item['row_status'] !== 'del');
  if (!filteredList || filteredList.length === 0) {
      return null;
  }

  let maxDate = parseISODate(filteredList[0][dateField]);

  for (let i = 1; i < filteredList.length; i++) {

      const currentDate = parseISODate(filteredList[i][dateField]);
      if (currentDate > maxDate) {
          maxDate = currentDate;
      }
    
  }

  return maxDate.toISOString();
}

export function getTotal(list:any, field:string):number {
  //  console.log('total........1'); 
    let total = 0;
    let x = 0; 
    if (list === undefined) {
        return total;
    }
    for (x = 0; x < list.length; x++) {
      if (list[x]['row_status'] !== 'del') {
        total += Number(list[x][field]); 
      } 
    }
    return total;
}

export function setValueJson(list:any[], row:any, modo:string):void {

    if ((modo === 'edit') ||  (modo === 'delete')) {
        let a = 0;
        for (a = 0; a < list.length; a++) { 
          if (list[a]['id'] === row['id']) {
            list[a] = row;
          }
        }
    } else {
        list.push(row);
    }
}



