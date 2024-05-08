/**
 * Obtener el valor de la carta
 * @param {String} carta Ejemplo: 2K, 4H
 * @returns {Number} Retorna el valor de la carta Ejemplo : 10 o 4
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}