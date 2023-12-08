export function QuotedStr1(pStr:string):string{
    
    return "'"+pStr+"'";
}

export function QuotedStr2(pStr:string):string{
    return '"'+pStr+'"';
}

export function EmptyNull(value:string):string {
 
    if (!value) 
      return 'null';  
    
    return value;
 }
