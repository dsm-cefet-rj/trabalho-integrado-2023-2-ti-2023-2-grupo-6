export function formatarData(dataStr) {
  const data = new Date(dataStr);
  if (isNaN(data)) {
    return "";
  }

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  const formatter = new Intl.DateTimeFormat("pt-BR", options);
  return formatter.format(data);
}
