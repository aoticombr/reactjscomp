import  dateFormat from 'dateformat';

export function DtaHrToTextBr(pdata:Date):String {
  let vdata = (new Date(pdata));
  const dia = String(vdata.getDate()).padStart(2, '0');
  const mes = String(vdata.getMonth() + 1).padStart(2, '0');
  const ano = vdata.getFullYear();
  const hora = String(vdata.getHours()).padStart(2, '0');
  const minuto = String(vdata.getMinutes()).padStart(2, '0');
  const segundo = String(vdata.getSeconds()).padStart(2, '0');
  const dataFormatada = `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;
  return dataFormatada
}
export function DtaToTextBr(pdata:Date):string {
    let vdata = (new Date(pdata));
    return vdata.toLocaleDateString('pt-BR', {timeZone: 'UTC'})
}
export function DtaToTextEn2(pdata:Date) { 
  if (!pdata) 
    return '';    
  return  dateFormat(pdata, "dd/mm/yyyy");
}

export function IncDay(pdata:Date, qtde:number):Date{
  let tomorrow = (new Date(pdata));
  tomorrow.setDate(tomorrow.getDate() + qtde);
  return tomorrow;
}

export function DtaToTextEn(pdata:Date):string { 
   if (!pdata) 
     return '';     
   return  dateFormat(pdata, "yyyy-mm-dd");
}

export function DtaHrToTextEn(pdata:Date):string { 
  if (!pdata) 
    return '';    
  return  dateFormat(pdata, "yyyy-mm-ddThh:mm");
}

export function RecortDate(pdata:Date):string { 
  if (!pdata) 
    return '';  
  let createdAt1 = pdata;
  let createdAt2 = createdAt1.toISOString();
  let d = createdAt2.substr(0, 10);    
  return  d;
}

