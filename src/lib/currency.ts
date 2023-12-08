export function localStringToNumber( s:string ):number {
  let var1 = Number( String( s ).replace( /[$]+/g, "" ) )
  let var2 = Number( String( var1).replace( /[^0-9.-]+/g, "" ) )
  return var2;
}

export  function onGenericoFocus( e:any ) {
    var value = e.target.value;
    e.target.value = value ? localStringToNumber( value ) : ''
}

export function arredondarNumero(numero:number, casasDecimais:number):number {
  const fatorDeMultiplicacao = 10 ** casasDecimais;
  return Math.round(numero * fatorDeMultiplicacao) / fatorDeMultiplicacao;
}

export function onGenericoBlur( e:any ):void {
  var value = e.target.value
  var options = {
    maximumFractionDigits: 2,
  }
  e.target.value = ( value || value === 0 ) ?
  localStringToNumber( value ).toLocaleString( 'pt-BR', options ) :    '0.00'
}



