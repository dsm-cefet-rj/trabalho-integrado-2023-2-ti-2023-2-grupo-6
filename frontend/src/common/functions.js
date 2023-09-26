export function formatarData(dataStr) {
  const dataObj = new Date(dataStr);

  if (isNaN(dataObj)) {
    return "";
  }

  const dia = String(dataObj.getDate()).padStart(2, "0");
  const mes = obterNomeDoMes(dataObj.getMonth());
  const ano = dataObj.getFullYear();
  const horas = String(dataObj.getHours()).padStart(2, "0");
  const minutos = String(dataObj.getMinutes()).padStart(2, "0");

  return `${dia} de ${mes} de ${ano} às ${horas}:${minutos}`;
}

function obterNomeDoMes(indice) {
  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  return meses[indice];
}
