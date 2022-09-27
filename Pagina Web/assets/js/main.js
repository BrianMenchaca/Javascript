
/* Consideraciones:
Las lineas de codigo totales OK.
Las lineas de codigo comentadas, cuentan solo comentarios simples.
Complejidad ciclomatica, cuenta la cantidad de IF, ELSE, FOR, WHILE, && y || que aparecen en el codigo.
Los operadores se pueden agregar o eliminar a gusto.
Para Halstead Longitud y Volumen ver: https://en.wikipedia.org/wiki/Halstead_complexity_measures
*/
// document.getElementById("operadores").value="+, -, /, *, int, double, float, ;, :, public, static, void, &&, ||, <=, >=, <, >"
function mostrarMetricas(codigoRaw)
{
	// if(document.getElementById("operadores").value.length == 0) {alert("Los operadores no pueden quedar vacios"); return}

	// var codigoRaw = document.getElementById("codigo").value;
	if(codigoRaw.length == 0) {alert("Ingrese un codigo por favor"); return}

	codigoRaw = codigoRaw.toLowerCase();
	var lineas_del_archivo = codigoRaw.split('\n').length - 1;
	var lineas_comentarios_simples = codigoRaw.split('//').length - 1;
	var lineas_de_codigo = parseInt(lineas_del_archivo - lineas_comentarios_simples);
	var porcentaje_lineas_comentadas = (parseFloat((parseInt(lineas_comentarios_simples)/parseInt(lineas_del_archivo))*100).toFixed(2))+"%";
	if(!isNaN(porcentaje_lineas_comentadas)) porcentaje_lineas_comentadas = 0+"%";
	var complejidad_ciclomatica = complejidadCiclomatica(codigoRaw);
	var halstead= halsteadMetodo(codigoRaw);
	var longitudHalstead = halstead[0];
	var volumenHalstead = halstead[1];

	document.getElementById("lineastotales").textContent = lineas_del_archivo+1;
	document.getElementById("lineascodigo").textContent = lineas_de_codigo+1;
	document.getElementById("lineascomentadas").textContent = lineas_comentarios_simples+1;
	document.getElementById("lineasporcentaje").textContent = porcentaje_lineas_comentadas;
	document.getElementById("complejidad").textContent = complejidad_ciclomatica;
	document.getElementById("longitud").textContent = longitudHalstead;
	// document.getElementById("volumen").value = volumenHalstead;
	if(complejidad_ciclomatica<11) alert("No es necesario modularizar el codigo");
	else alert("Se recomienda modularizar el programa");
}

function complejidadCiclomatica(texto)
{
	var c = 0;
	c+=texto.split('if').length - 1;
	c+=texto.split('else').length - 1;
	c+=texto.split('for').length - 1;
	c+=texto.split('while').length - 1;
	c+=texto.split('||').length - 1;
	c+=texto.split('&&').length - 1;
	return c+1;
}

function halsteadMetodo(texto)
{
	//Operadores + - = * ; int double float return
	var textosSinComentarios = texto.replace(/(\/\*([\s\S]*?)\*\/)|(\/\/(.*)$)/gm, '');
	var cantidadOperadoresTotales = 0;
	var cantidadOperandosTotales = 0;
	var cantidadOperadoresUnicos = 0;
	var cantidadOperandosUnicos = 0;
	var operadores = ["+", "-", "/", "*", "int", "double", "float", ";", ":", "public", "static", "void", "&&", "||", "<=", ">=", "<", ">"];
	// var operadores = document.getElementById("operadores").value.split(',');
	var operandosUnicos = [];
	var i;
	//OPERADORES UNICOS Y TOTALES.
	for (i = 0; i < operadores.length; i++) 
	{
		if(textosSinComentarios.indexOf(operadores[i]) !=-1)
			cantidadOperadoresUnicos++;
		cantidadOperadoresTotales += texto.split(operadores[i]).length-1;
	}

	//OPERADORES TOTALES

	//OPERANDOS UNICOS Y TOTALES.
	var aAnalizar = textosSinComentarios.split(' ');
	var hasta = textosSinComentarios.split(' ').length;
	for (j = 0; j < hasta; j++) 
	{
		//Si no es un operador y todavia no esta en el array de operandos unicos.
		if(operadores.indexOf(aAnalizar[j]) == -1 && operandosUnicos.indexOf(aAnalizar[j]) == -1)
		{
			operandosUnicos.push(aAnalizar[j]);
			cantidadOperandosUnicos++;
		}
		//Si no es un operador.
		if(operadores.indexOf(aAnalizar[j]) == -1)
			cantidadOperandosTotales++;
	}
	var longitudHalstead = parseInt(cantidadOperadoresUnicos*Math.log2(cantidadOperadoresUnicos)+cantidadOperandosUnicos*Math.log2(cantidadOperandosUnicos));
	var volumenHalstead  = parseFloat((cantidadOperadoresTotales+cantidadOperandosTotales)*Math.log2(cantidadOperadoresUnicos+cantidadOperandosUnicos)).toFixed(2);
	return [longitudHalstead, volumenHalstead];
}